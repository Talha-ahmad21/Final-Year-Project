import PageHeader from '../components/PageHeader'
import StatGrid from '../components/StatGrid'
import { loadValue } from '../utils/storage'

export default function Dashboard({ role }) {
  const collections = {
    courses: loadValue('courses', []),
    teachers: loadValue('teachers', []),
    students: loadValue('students', []),
    admissions: loadValue('admissions', []),
    exams: loadValue('exams', []),
    quizzes: loadValue('quizzes', []),
  }

  const statsByRole = {
    Admin: [
      { label: 'Students', value: collections.students.length, tone: 'cyan' },
      { label: 'Lecturers', value: collections.teachers.length, tone: 'orange' },
      { label: 'Applications', value: collections.admissions.length, tone: 'pink' },
      { label: 'Courses', value: collections.courses.length, tone: 'violet' },
      { label: 'Exams', value: collections.exams.length, tone: 'pink' },
      { label: 'Quizzes', value: collections.quizzes.length, tone: 'violet' },
    ],
    Teacher: [
      { label: 'My Active Classes', value: collections.courses.length, tone: 'cyan' },
      { label: 'Pending Grading', value: collections.exams.filter((item) => item.status !== 'Completed').length, tone: 'orange' },
      { label: 'Active Quizzes', value: collections.quizzes.length, tone: 'pink' },
      { label: 'Students', value: collections.students.length, tone: 'violet' },
    ],
    Student: [
      { label: 'Active Courses', value: collections.courses.length, tone: 'cyan' },
      { label: 'Assigned Quizzes', value: collections.quizzes.length, tone: 'orange' },
      { label: 'Personal Notifications', value: loadValue('news', []).length, tone: 'pink' },
      { label: 'Upcoming Exams', value: collections.exams.length, tone: 'violet' },
    ],
  }

  return (
    <>
      <PageHeader title="Dashboard" subtitle={`${role} overview`} icon="D" tone="cyan" />
      <StatGrid stats={statsByRole[role] || statsByRole.Student} />
      <section className="panel-grid">
        <article className="panel">
          <h2>Recent Activities</h2>
          <p>No activity yet. Add records from the side menu to populate this area.</p>
        </article>
        <article className="panel">
          <h2>System Health</h2>
          <div className="meter"><span style={{ width: '0%' }} /></div>
          <p>Frontend only mode. Backend services are not connected yet.</p>
        </article>
      </section>
    </>
  )
}
