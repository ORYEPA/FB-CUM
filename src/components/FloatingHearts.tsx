import { useMemo } from 'react'

const heartSymbols: string[] = ['<3', '♥', '♡', '❤', '❥']

export default function FloatingHearts() {
  const bgHearts = useMemo(() => Array.from({ length: 28 }, (_, idx) => ({
    id: idx,
    symbol: heartSymbols[idx % heartSymbols.length],
    left: (idx * 9) % 100,
    delay: (idx % 10) * 0.9,
    duration: 10 + (idx % 6) * 2,
    size: 20 + (idx % 5) * 8,
    isBlue: idx % 2 === 0,
  })), [])

  return (
    <div className="bg-hearts" aria-hidden="true">
      {bgHearts.map(item => (
        <span
          key={item.id}
          className="bg-heart"
          style={{
            left: item.left + '%',
            animationDelay: item.delay + 's',
            animationDuration: item.duration + 's',
            fontSize: item.size + 'px',
            color: item.isBlue ? 'rgba(74,158,255,0.35)' : 'rgba(155,89,182,0.35)',
            textShadow: item.isBlue ? '0 0 12px rgba(74,158,255,0.4)' : '0 0 12px rgba(155,89,182,0.4)',
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  )
}
