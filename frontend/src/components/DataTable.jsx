import Button from './Button'
import EmptyState from './EmptyState'

export default function DataTable({ columns, rows, onEdit, onDelete, onView }) {
  if (!rows.length) {
    return <EmptyState />
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key] || '-'}</td>
              ))}
              <td>
                <div className="row-actions">
                  <Button variant="link" onClick={() => onView(row)}>
                    View
                  </Button>
                  <Button variant="link" onClick={() => onEdit(row)}>
                    Edit
                  </Button>
                  <Button variant="danger-link" onClick={() => onDelete(row.id)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
