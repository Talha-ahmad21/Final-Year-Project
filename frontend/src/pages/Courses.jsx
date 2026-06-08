import EntityManager from '../components/EntityManager'

export default function Courses() {
  return (
    <EntityManager
      config={{
        title: 'Courses',
        singular: 'Course',
        subtitle: 'Create and manage course records',
        storageKey: 'courses',
        addLabel: 'Add New Course',
        searchPlaceholder: 'Search course title',
        icon: 'C',
        tone: 'green',
        fields: [
          { name: 'title', label: 'Course Title', required: true },
          { name: 'courseCode', label: 'Course Code' },
          { name: 'instructor', label: 'Instructor' },
          { name: 'semester', label: 'Semester' },
          { name: 'status', label: 'Status', options: ['Published', 'Draft', 'Archived'] },
        ],
        columns: [
          { key: 'title', label: 'Course' },
          { key: 'courseCode', label: 'Code' },
          { key: 'instructor', label: 'Instructor' },
          { key: 'semester', label: 'Semester' },
          { key: 'status', label: 'Status' },
        ],
        stats: (items) => [
          { label: 'Total Courses', value: items.length, tone: 'green' },
          { label: 'Published', value: items.filter((item) => item.status === 'Published').length, tone: 'cyan' },
          { label: 'Drafts', value: items.filter((item) => item.status === 'Draft').length, tone: 'violet' },
        ],
      }}
    />
  )
}
