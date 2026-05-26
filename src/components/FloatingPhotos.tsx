import { useMemo } from 'react'

const photoModules = import.meta.glob('../assets/photos/*', { eager: true })
const photos = Object.values(photoModules).map((m: unknown) => (m as { default: string }).default)

export default function FloatingPhotos() {
  const items = useMemo(() => {
    if (photos.length === 0) return []
    return Array.from({ length: 12 }, (_, idx) => ({
      id: idx,
      src: photos[idx % photos.length],
      left: (idx * 17 + 5) % 95,
      delay: idx * 1.3,
      duration: 14 + (idx % 5) * 3,
      size: 52 + (idx % 4) * 14,
    }))
  }, [])

  if (items.length === 0) return null

  return (
    <div className="bg-photos" aria-hidden="true">
      {items.map(item => (
        <img
          key={item.id}
          src={item.src}
          alt=""
          className="bg-photo"
          style={{
            left: item.left + '%',
            animationDelay: item.delay + 's',
            animationDuration: item.duration + 's',
            width: item.size + 'px',
            height: item.size + 'px',
          }}
        />
      ))}
    </div>
  )
}
