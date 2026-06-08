import { useState } from 'react'
import './App.css'
import AuthPanel from './components/AuthPanel'
import Layout from './components/Layout'
import Admissions from './pages/Admissions'
import CompleteExams from './pages/CompleteExams'
import Courses from './pages/Courses'
import Dashboard from './pages/Dashboard'
import Examination from './pages/Examination'
import NewsEvents from './pages/NewsEvents'
import PlaceholderPage from './pages/PlaceholderPage'
import QuizProgress from './pages/QuizProgress'
import SemesterList from './pages/SemesterList'
import SessionList from './pages/SessionList'
import Settings from './pages/Settings'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import { loadValue, saveValue } from './utils/storage'

function App() {
  const [user, setUser] = useState(() => loadValue('currentUser', null))
  const [authMode, setAuthMode] = useState('login')
  const [route, setRoute] = useState('Dashboard')

  function handleAuth(payload) {
    const nextUser = {
      name: payload.name || payload.email.split('@')[0],
      email: payload.email,
      role: payload.role || 'Student',
    }
    saveValue('currentUser', nextUser)
    setUser(nextUser)
    setRoute('Dashboard')
  }

  function logout() {
    saveValue('currentUser', null)
    setUser(null)
  }

  if (!user) {
    return <AuthPanel mode={authMode} onModeChange={setAuthMode} onAuth={handleAuth} />
  }

  return (
    <Layout route={route} setRoute={setRoute} user={user} onLogout={logout}>
      <Screen route={route} role={user.role} />
    </Layout>
  )
}

function Screen({ route, role }) {
  const screens = {
    Dashboard: <Dashboard role={role} />,
    Admission: <Admissions />,
    Admissions: <Admissions />,
    Courses: <Courses />,
    Teacher: <Teachers />,
    Teachers: <Teachers />,
    Students: <Students />,
    Examination: <Examination />,
    'News & Events': <NewsEvents />,
    'Quiz Progress': <QuizProgress />,
    'Complete Exams': <CompleteExams />,
    'Semester List': <SemesterList />,
    'Session List': <SessionList />,
    Settings: <Settings />,
  }

  return screens[route] || <PlaceholderPage title={route} />
}

export default App
