import EntityManager from '../components/EntityManager'

export default function SemesterList() {
  return (
    <EntityManager
      config={{
        title: 'Semester List',
        singular: 'Semester',
        subtitle: 'Add and manage semester records',
        storageKey: 'semesters',
        addLabel: 'Add New Semester',
        searchPlaceholder: 'Search semesters',
        icon: 'SL',
        tone: 'orange',
        fields: [
          { name: 'semester', label: 'Semester', required: true },
          { name: 'session', label: 'Session' },
          { name: 'nextSemesterBegins', label: 'Next Semester Begins', type: 'date' },
          { name: 'status', label: 'Status', options: ['Current', 'Upcoming', 'Completed'] },
        ],
        columns: [
          { key: 'semester', label: 'Semester' },
          { key: 'session', label: 'Session' },
          { key: 'nextSemesterBegins', label: 'Next Semester Begins' },
          { key: 'status', label: 'Is Current Semester' },
        ],
        stats: (items) => [
          { label: 'Semesters', value: items.length, tone: 'orange' },
          { label: 'Current', value: items.filter((item) => item.status === 'Current').length, tone: 'green' },
        ],
      }}
    />
  )
}
