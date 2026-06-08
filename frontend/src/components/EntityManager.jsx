import { useMemo, useState } from 'react'
import { useLocalCollection } from '../hooks/useLocalCollection'
import { downloadFile, toCsv } from '../utils/storage'
import Button from './Button'
import DataTable from './DataTable'
import EntityForm from './EntityForm'
import Modal from './Modal'
import PageHeader from './PageHeader'
import StatGrid from './StatGrid'

export default function EntityManager({ config }) {
  const [items, collection] = useLocalCollection(config.storageKey)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [modal, setModal] = useState(null)

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const haystack = Object.values(item).join(' ').toLowerCase()
      const matchesSearch = haystack.includes(query.toLowerCase())
      const matchesStatus = !status || item.status === status
      return matchesSearch && matchesStatus
    })
  }, [items, query, status])

  const statuses = [...new Set(items.map((item) => item.status).filter(Boolean))]
  const stats = config.stats(items)

  function exportCsv() {
    downloadFile(`${config.storageKey}.csv`, toCsv(filtered, config.columns))
  }

  function save(payload) {
    if (modal?.record) collection.update(modal.record.id, payload)
    else collection.add(payload)
    setModal(null)
  }

  return (
    <>
      <PageHeader
        title={config.title}
        subtitle={config.subtitle}
        icon={config.icon}
        tone={config.tone}
        actions={[
          { label: 'Export', variant: 'light', icon: '↓', onClick: exportCsv },
          { label: config.addLabel, icon: '+', onClick: () => setModal({ type: 'form' }) },
        ]}
      />
      <StatGrid stats={stats} />
      <section className="toolbar">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={config.searchPlaceholder}
        />
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="">All Status</option>
          {statuses.map((itemStatus) => (
            <option key={itemStatus} value={itemStatus}>
              {itemStatus}
            </option>
          ))}
        </select>
      </section>
      <DataTable
        columns={config.columns}
        rows={filtered}
        onEdit={(record) => setModal({ type: 'form', record })}
        onDelete={collection.remove}
        onView={(record) => setModal({ type: 'view', record })}
      />
      {modal?.type === 'form' ? (
        <Modal title={modal.record ? `Edit ${config.singular}` : config.addLabel} onClose={() => setModal(null)}>
          <EntityForm
            fields={config.fields}
            initial={modal.record}
            submitLabel={modal.record ? 'Update' : 'Create'}
            onSubmit={save}
          />
        </Modal>
      ) : null}
      {modal?.type === 'view' ? (
        <Modal title={`${config.singular} Details`} onClose={() => setModal(null)}>
          <div className="detail-grid">
            {config.columns.map((column) => (
              <div key={column.key}>
                <span>{column.label}</span>
                <strong>{modal.record[column.key] || '-'}</strong>
              </div>
            ))}
          </div>
          <Button variant="light" onClick={() => setModal({ type: 'form', record: modal.record })}>
            Edit Details
          </Button>
        </Modal>
      ) : null}
    </>
  )
}
