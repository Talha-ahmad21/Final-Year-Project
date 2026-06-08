export default function IconBox({ label, tone = 'blue' }) {
  const text = String(label || 'L').slice(0, 2).toUpperCase()
  return <span className={`icon-box tone-${tone}`}>{text}</span>
}
