import EntityManager from '../components/EntityManager'

export default function Students() {
  return (
    <EntityManager
      config={{
        title: 'Students',
        singular: 'Student',
        subtitle: 'Manage student profiles',
        storageKey: 'students',
        addLabel: 'Add New Student',
        searchPlaceholder: 'Search student',
        icon: 'S',
        tone: 'blue',
        fields: [
          { name: 'name', label: 'Student Name', required: true },
          { name: 'contact', label: 'Contact' },
          { name: 'program', label: 'Program' },
          { name: 'semester', label: 'Semester' },
          { name: 'status', label: 'Status', options: ['Active', 'Inactive', 'Graduated'] },
        ],
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'contact', label: 'Contact' },
          { key: 'program', label: 'Program' },
          { key: 'semester', label: 'Semester' },
          { key: 'status', label: 'Status' },
        ],
        stats: (items) => [
          { label: 'Total Students', value: items.length, tone: 'blue' },
          { label: 'Active', value: items.filter((item) => item.status === 'Active').length, tone: 'green' },
          { label: 'Graduated', value: items.filter((item) => item.status === 'Graduated').length, tone: 'violet' },
        ],
      }}
    />
  )
}
