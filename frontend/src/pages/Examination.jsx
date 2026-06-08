import EntityManager from '../components/EntityManager'

export default function Examination() {
  return (
    <EntityManager
      config={{
        title: 'Examination',
        singular: 'Exam',
        subtitle: 'Manage exams, schedules, and results',
        storageKey: 'exams',
        addLabel: 'Schedule Exam',
        searchPlaceholder: 'Search exams',
        icon: 'E',
        tone: 'violet',
        fields: [
          { name: 'course', label: 'Course', required: true },
          { name: 'courseCode', label: 'Course Code' },
          { name: 'examDate', label: 'Exam Date', type: 'date' },
          { name: 'time', label: 'Time', type: 'time' },
          { name: 'duration', label: 'Duration' },
          { name: 'room', label: 'Room' },
          { name: 'type', label: 'Type', options: ['Final', 'Midterm', 'Quiz', 'Practical'] },
          { name: 'score', label: 'Score' },
          { name: 'grade', label: 'Grade' },
          { name: 'status', label: 'Status', options: ['Scheduled', 'Completed', 'Pending', 'Fail', 'Pass'] },
        ],
        columns: [
          { key: 'course', label: 'Course' },
          { key: 'courseCode', label: 'Code' },
          { key: 'examDate', label: 'Exam Date' },
          { key: 'time', label: 'Time' },
          { key: 'duration', label: 'Duration' },
          { key: 'room', label: 'Room' },
          { key: 'type', label: 'Type' },
          { key: 'score', label: 'Score' },
          { key: 'grade', label: 'Grade' },
          { key: 'status', label: 'Status' },
        ],
        stats: (items) => [
          { label: 'Scheduled Exams', value: items.filter((item) => item.status === 'Scheduled').length, tone: 'blue' },
          { label: 'Completed', value: items.filter((item) => item.status === 'Completed').length, tone: 'green' },
          { label: 'Total Students', value: 0, tone: 'violet' },
          { label: 'Pass Rate', value: `${items.length ? Math.round((items.filter((item) => item.status === 'Pass').length / items.length) * 100) : 0}%`, tone: 'orange' },
        ],
      }}
    />
  )
}
