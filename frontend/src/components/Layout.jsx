import Button from './Button'

const roleMenus = {
  Admin: ['Dashboard', 'Teachers', 'Admissions', 'Examination', 'Semester List', 'Session List', 'Quiz Progress', 'Complete Exams', 'Courses', 'Students', 'News & Events', 'Settings'],
  Teacher: ['Dashboard', 'Attendance', 'Manage Quiz', 'Session List', 'Manage Leaves', 'Complete Exams', 'Courses', 'My Accounts', 'News & Events', 'Settings'],
  Student: ['Dashboard', 'Examination', 'Session List', 'My Quiz', 'Complete Exams', 'Courses', 'Quiz Progress', 'News & Events', 'Settings'],
}

export default function Layout({ children, route, setRoute, user, onLogout }) {
  const menu = roleMenus[user.role] || roleMenus.Student

  return (
    <div className="shell">
      <aside className="sidebar">
        <button className="logo" type="button" onClick={() => setRoute('Dashboard')}>
          <img src="/learnify-logo-transparent.png?v=20260606-new" alt="Learnify LMS logo" />
          <span>Learnify LMS</span>
        </button>
        <nav>
          {menu.map((item) => (
            <button
              key={item}
              type="button"
              className={route === item ? 'active' : ''}
              onClick={() => setRoute(item)}
            >
              <span className="nav-dot" aria-hidden="true" />
              {item}
            </button>
          ))}
        </nav>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <input placeholder="Search all records" onChange={(event) => window.dispatchEvent(new CustomEvent('global-search', { detail: event.target.value }))} />
          <div className="profile">
            <strong>{user.role}</strong>
            <Button variant="ghost" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
