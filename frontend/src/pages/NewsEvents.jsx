import { useState } from 'react'
import EntityManager from '../components/EntityManager'

export default function NewsEvents() {
  const [tab, setTab] = useState('All')

  return (
    <>
      <div className="tabs">
        {['All', 'News', 'Events'].map((item) => (
          <button key={item} className={tab === item ? 'active' : ''} type="button" onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
      </div>
      <EntityManager
        config={{
          title: 'News & Events',
          singular: 'Post',
          subtitle: `${tab} posts and campus announcements`,
          storageKey: 'news',
          addLabel: 'Create Post',
          searchPlaceholder: 'Search posts',
          icon: 'N',
          tone: 'orange',
          fields: [
            { name: 'title', label: 'Title', required: true },
            { name: 'category', label: 'Category', options: ['News', 'Event', 'Announcement', 'Career', 'Academic'] },
            { name: 'date', label: 'Date', type: 'date' },
            { name: 'location', label: 'Location' },
            { name: 'description', label: 'Description' },
            { name: 'status', label: 'Status', options: ['New', 'Published', 'Draft'] },
          ],
          columns: [
            { key: 'title', label: 'Title' },
            { key: 'category', label: 'Category' },
            { key: 'date', label: 'Date' },
            { key: 'location', label: 'Location' },
            { key: 'description', label: 'Description' },
            { key: 'status', label: 'Status' },
          ],
          stats: (items) => [
            { label: 'Upcoming Events', value: items.filter((item) => item.category === 'Event').length, tone: 'blue' },
            { label: 'New Announcements', value: items.filter((item) => item.category === 'Announcement').length, tone: 'green' },
            { label: 'Latest News', value: items.filter((item) => item.category === 'News').length, tone: 'violet' },
          ],
        }}
      />
    </>
  )
}
