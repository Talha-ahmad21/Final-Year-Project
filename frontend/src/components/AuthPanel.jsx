import { useState } from 'react'
import Button from './Button'
import FormField from './FormField'

export default function AuthPanel({ mode, onModeChange, onAuth }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: 'Student', password: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()
    onAuth(form)
  }

  const isSignup = mode === 'signup'

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand">
          <img src="/learnify-logo-transparent.png?v=20260606-new" alt="Learnify LMS Logo" className="auth-logo"/>
        </div>
        <form className="auth-form" onSubmit={submit}>
          <div className="auth-tabs">
            <button type="button" className={!isSignup ? 'active' : ''} onClick={() => onModeChange('login')}>
              LOG IN
            </button>
            <button type="button" className={isSignup ? 'active' : ''} onClick={() => onModeChange('signup')}>
              SIGN UP
            </button>
          </div>
          <h2>{isSignup ? 'Create Account' : 'Welcome Back!'}</h2>
          <p>{isSignup ? 'Join Learnify LMS to start learning' : 'Login to continue your learning journey'}</p>
          {isSignup ? (
            <>
              <FormField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
              <FormField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
            </>
          ) : null}
          <FormField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
          <FormField label="Role" name="role" value={form.role} onChange={handleChange} options={['Admin', 'Teacher', 'Student']} />
          <FormField label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
          <Button className="wide" type="submit">
            {isSignup ? 'SIGN UP' : 'LOG IN'}
          </Button>
        </form>
      </section>
    </main>
  )
} 
