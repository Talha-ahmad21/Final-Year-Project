import EntityManager from '../components/EntityManager'

const fields = [
  { name: 'applicantName', label: 'Applicant Name', required: true },
  { name: 'contact', label: 'Contact' },
  { name: 'program', label: 'Program', required: true },
  { name: 'applicationDate', label: 'Application Date', type: 'date' },
  { name: 'gpa', label: 'GPA' },
  { name: 'testScore', label: 'Test Score' },
  { name: 'status', label: 'Status', options: ['Pending Review', 'Approved', 'Rejected', 'Wait List'] },
]

export default function Admissions() {
  return (
    <EntityManager
      config={{
        title: 'Admission',
        singular: 'Application',
        subtitle: 'Manage student admissions and applications',
        storageKey: 'admissions',
        addLabel: 'New Application',
        searchPlaceholder: 'Search applications',
        icon: 'A',
        tone: 'cyan',
        fields,
        columns: [
          { key: 'applicantName', label: 'Applicant Name' },
          { key: 'contact', label: 'Contact' },
          { key: 'program', label: 'Program' },
          { key: 'applicationDate', label: 'Application Date' },
          { key: 'gpa', label: 'GPA' },
          { key: 'testScore', label: 'Test Score' },
          { key: 'status', label: 'Status' },
        ],
        stats: (items) => [
          { label: 'Total Applications', value: items.length, tone: 'blue' },
          { label: 'Pending Review', value: items.filter((item) => item.status === 'Pending Review').length, tone: 'violet' },
          { label: 'Approved', value: items.filter((item) => item.status === 'Approved').length, tone: 'green' },
          { label: 'Rejected', value: items.filter((item) => item.status === 'Rejected').length, tone: 'orange' },
        ],
      }}
    />
  )
}
