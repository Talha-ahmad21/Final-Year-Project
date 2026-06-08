import { useEffect, useMemo, useState } from 'react'
import { createRecord, loadValue, saveValue } from '../utils/storage'

export function useLocalCollection(key) {
  const [items, setItems] = useState(() => loadValue(key, []))

  useEffect(() => {
    saveValue(key, items)
  }, [items, key])

  const api = useMemo(
    () => ({
      add(payload) {
        setItems((current) => [createRecord(payload), ...current])
      },
      update(id, payload) {
        setItems((current) =>
          current.map((item) => (item.id === id ? { ...item, ...payload } : item)),
        )
      },
      remove(id) {
        setItems((current) => current.filter((item) => item.id !== id))
      },
      clear() {
        setItems([])
      },
    }),
    [],
  )

  return [items, api]
}
