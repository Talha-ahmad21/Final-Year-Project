import Button from './Button'
import IconBox from './IconBox'

export default function PageHeader({ title, subtitle, icon, tone, actions = [] }) {
  return (
    <header className="page-header">
      <div>
        <p className="breadcrumb">Home › {title}</p>
        <div className="title-row">
          <IconBox label={icon || title} tone={tone} />
          <div>
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        </div>
      </div>
      <div className="actions">
        {actions.map((action) => (
          <Button key={action.label} {...action}>
            {action.label}
          </Button>
        ))}
      </div>
    </header>
  )
}