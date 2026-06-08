import EntityManager from '../components/EntityManager'

export default function QuizProgress() {
  return (
    <EntityManager
      config={{
        title: 'Quiz Progress',
        singular: 'Quiz',
        subtitle: 'Track quiz attempts and progress',
        storageKey: 'quizzes',
        addLabel: 'Add Quiz',
        searchPlaceholder: 'Search quizzes',
        icon: 'Q',
        tone: 'pink',
        fields: [
          { name: 'title', label: 'Quiz Title', required: true },
          { name: 'course', label: 'Course' },
          { name: 'dueDate', label: 'Due Date', type: 'date' },
          { name: 'maxScore', label: 'Max Score' },
          { name: 'score', label: 'Score' },
          { name: 'progress', label: 'Progress %' },
          { name: 'status', label: 'Status', options: ['Not Started', 'In Progress', 'Completed', 'Overdue'] },
        ],
        columns: [
          { key: 'title', label: 'Quiz' },
          { key: 'course', label: 'Course' },
          { key: 'dueDate', label: 'Due Date' },
          { key: 'maxScore', label: 'Max Score' },
          { key: 'score', label: 'Score' },
          { key: 'progress', label: 'Progress %' },
          { key: 'status', label: 'Status' },
        ],
        stats: (items) => [
          { label: 'Total Quizzes', value: items.length, tone: 'blue' },
          { label: 'Completed', value: items.filter((item) => item.status === 'Completed').length, tone: 'green' },
          { label: 'In Progress', value: items.filter((item) => item.status === 'In Progress').length, tone: 'orange' },
          { label: 'Average Score', value: `${average(items, 'score')}%`, tone: 'pink' },
        ],
      }}
    />
  )
}

function average(items, key) {
  const values = items.map((item) => Number(item[key])).filter(Number.isFinite)
  return values.length ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) : 0
}
