import EntityManager from '../components/EntityManager'

export default function SessionList() {
  return (
    <EntityManager
      config={{
        title: 'Session List',
        singular: 'Session',
        subtitle: 'View and manage learning sessions',
        storageKey: 'sessions',
        addLabel: 'Schedule Session',
        searchPlaceholder: 'Search sessions',
        icon: 'SS',
        tone: 'cyan',
        fields: [
          { name: 'title', label: 'Session Title', required: true },
          { name: 'course', label: 'Course' },
          { name: 'date', label: 'Date', type: 'date' },
          { name: 'time', label: 'Time', type: 'time' },
          { name: 'room', label: 'Room / Link' },
          { name: 'instructor', label: 'Instructor' },
          { name: 'status', label: 'Status', options: ['Scheduled', 'Live', 'Completed', 'Cancelled'] },
        ],
        columns: [
          { key: 'title', label: 'Title' },
          { key: 'course', label: 'Course' },
          { key: 'date', label: 'Date' },
          { key: 'time', label: 'Time' },
          { key: 'room', label: 'Room / Link' },
          { key: 'instructor', label: 'Instructor' },
          { key: 'status', label: 'Status' },
        ],
        stats: (items) => [
          { label: 'Sessions', value: items.length, tone: 'cyan' },
          { label: 'Scheduled', value: items.filter((item) => item.status === 'Scheduled').length, tone: 'blue' },
          { label: 'Live', value: items.filter((item) => item.status === 'Live').length, tone: 'green' },
          { label: 'Completed', value: items.filter((item) => item.status === 'Completed').length, tone: 'violet' },
        ],
      }}
    />
  )
}
