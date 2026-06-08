export default function EmptyState({ title = 'No records yet', action }) {
  return (
    <div className="empty-state">
      <strong>{title}</strong>
      <p>Add your own data to show it here.</p>
      {action}
    </div>
  )
}
