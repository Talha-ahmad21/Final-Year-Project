import IconBox from './IconBox'

export default function StatGrid({ stats }) {
  return (
    <section className="stat-grid">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <IconBox label={stat.icon || stat.label} tone={stat.tone} />
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  )
}
