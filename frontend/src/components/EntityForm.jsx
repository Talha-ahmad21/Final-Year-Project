import { useState } from 'react'
import Button from './Button'
import FormField from './FormField'

export default function EntityForm({ fields, initial = {}, onSubmit, submitLabel = 'Save' }) {
  const [form, setForm] = useState(() =>
    Object.fromEntries(fields.map((field) => [field.name, initial[field.name] || ''])),
  )

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          value={form[field.name]}
          onChange={handleChange}
        />
      ))}
      <Button className="form-submit" type="submit">
        {submitLabel}
      </Button>
    </form>
  )
}
