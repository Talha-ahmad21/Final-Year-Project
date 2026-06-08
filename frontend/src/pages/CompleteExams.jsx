import EntityManager from '../components/EntityManager'

export default function CompleteExams() {
  return (
    <EntityManager
      config={{
        title: 'Complete Exams',
        singular: 'Completed Exam',
        subtitle: 'View completed participation and results',
        storageKey: 'completedExams',
        addLabel: 'Add Result',
        searchPlaceholder: 'Search completed exams',
        icon: 'CE',
        tone: 'green',
        fields: [
          { name: 'title', label: 'Exam Title', required: true },
          { name: 'course', label: 'Course' },
          { name: 'completedAt', label: 'Completed Date', type: 'date' },
          { name: 'score', label: 'Score' },
          { name: 'rank', label: 'Rank' },
          { name: 'duration', label: 'Duration' },
          { name: 'status', label: 'Status', options: ['Passed', 'Failed', 'Reviewed'] },
        ],
        columns: [
          { key: 'title', label: 'Exam' },
          { key: 'course', label: 'Course' },
          { key: 'completedAt', label: 'Completed Date' },
          { key: 'score', label: 'Score' },
          { key: 'rank', label: 'Rank' },
          { key: 'duration', label: 'Duration' },
          { key: 'status', label: 'Status' },
        ],
        stats: (items) => [
          { label: 'All Exams', value: items.length, tone: 'blue' },
          { label: 'Passed', value: items.filter((item) => item.status === 'Passed').length, tone: 'green' },
          { label: 'Failed', value: items.filter((item) => item.status === 'Failed').length, tone: 'orange' },
          { label: 'Overall Average', value: `${average(items, 'score')}%`, tone: 'violet' },
        ],
      }}
    />
  )
}

function average(items, key) {
  const values = items.map((item) => Number(item[key])).filter(Number.isFinite)
  return values.length ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) : 0
}
