export default function Button({ children, variant = 'primary', icon, className = '', ...props }) {
  return (
    <button className={`btn btn-${variant} ${className}`} type="button" {...props}>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </button>
  )
}
