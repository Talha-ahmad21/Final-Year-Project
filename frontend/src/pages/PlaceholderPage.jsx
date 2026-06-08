import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'

export default function PlaceholderPage({ title }) {
  return (
    <>
      <PageHeader title={title} subtitle="Frontend screen ready for your custom fields" icon={title} tone="violet" />
      <EmptyState title={`${title} has no records yet`} />
    </>
  )
}
