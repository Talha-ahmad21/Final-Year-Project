import { useState } from 'react'
import Button from '../components/Button'
import FormField from '../components/FormField'
import PageHeader from '../components/PageHeader'

export default function Settings() {
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({ current: '', next: '', confirm: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()
    if (form.next !== form.confirm) {
      setMessage('New password and confirmation do not match.')
      return
    }
    setForm({ current: '', next: '', confirm: '' })
    setMessage('Password form submitted locally. Backend connection can be added later.')
  }

  return (
    <>
      <PageHeader title="Settings" subtitle="Account and security preferences" icon="ST" tone="blue" />
      <section className="settings-panel">
        <form className="form-grid" onSubmit={submit}>
          <FormField label="Current Password" name="current" type="password" value={form.current} onChange={handleChange} required />
          <FormField label="New Password" name="next" type="password" value={form.next} onChange={handleChange} required />
          <FormField label="Confirm New Password" name="confirm" type="password" value={form.confirm} onChange={handleChange} required />
          <Button type="submit">Update Password</Button>
        </form>
        {message ? <p className="notice">{message}</p> : null}
      </section>
      <section className="settings-list">
        {['Profile Settings', 'Notification Settings', 'Privacy Settings', 'Backup Data'].map((item) => (
          <button key={item} type="button" onClick={() => setMessage(`${item} panel opened locally.`)}>
            <span>{item}</span>
            <strong>›</strong>
          </button>
        ))}
      </section>
    </>
  )
}
