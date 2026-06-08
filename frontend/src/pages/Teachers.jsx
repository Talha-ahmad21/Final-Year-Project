import { useState } from 'react'
import EntityManager from '../components/EntityManager'

export default function Teachers() {
  const [view, setView] = useState('List')

  return (
    <>
      <div className="view-switch">
        <button className={view === 'Grid' ? 'active' : ''} type="button" onClick={() => setView('Grid')}>
          Grid
        </button>
        <button className={view === 'List' ? 'active' : ''} type="button" onClick={() => setView('List')}>
          List
        </button>
      </div>
      <EntityManager
        config={{
          title: 'Teacher',
          singular: 'Teacher',
          subtitle: `Manage teachers and departments (${view} view selected)`,
          storageKey: 'teachers',
          addLabel: 'Add New Teacher',
          searchPlaceholder: 'Search teacher by name, department',
          icon: 'T',
          tone: 'blue',
          fields: [
            { name: 'name', label: 'Teacher Name', required: true },
            { name: 'contact', label: 'Contact' },
            { name: 'department', label: 'Department' },
            { name: 'courses', label: 'Courses' },
            { name: 'students', label: 'Students' },
            { name: 'rating', label: 'Rating' },
            { name: 'status', label: 'Status', options: ['Active', 'Retire', 'On Leave'] },
          ],
          columns: [
            { key: 'name', label: 'Teacher' },
            { key: 'contact', label: 'Contact' },
            { key: 'department', label: 'Department' },
            { key: 'courses', label: 'Courses' },
            { key: 'students', label: 'Students' },
            { key: 'rating', label: 'Rating' },
            { key: 'status', label: 'Status' },
          ],
          stats: (items) => [
            { label: 'Computer Science', value: items.filter((item) => item.department === 'Computer Science').length, tone: 'blue' },
            { label: 'Mathematics', value: items.filter((item) => item.department === 'Mathematics').length, tone: 'violet' },
            { label: 'Physics', value: items.filter((item) => item.department === 'Physics').length, tone: 'green' },
            { label: 'Chemistry', value: items.filter((item) => item.department === 'Chemistry').length, tone: 'orange' },
          ],
        }}
      />
    </>
  )
}
