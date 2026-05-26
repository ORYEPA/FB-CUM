import { useEffect, useState } from 'react'

const FRAMES: string[] = [
  String.raw`
            i   i   i
            |   |   |
            |   |   |
   _________|___|___|_________
  |                           |
  |   .----------------------.|
  |   |  Feliz               ||
  |   |  CUM                 ||
  |   '----------------------'|
  |___________________________|`,
  String.raw`
            '   *   '
            |   |   |
            |   |   |
   _________|___|___|_________
  |                           |
  |   .----------------------.|
  |   |  Feliz               ||
  |   |  CUM                 ||
  |   '----------------------'|
  |___________________________|`,
  String.raw`
            *   '   *
            |   |   |
            |   |   |
   _________|___|___|_________
  |                           |
  |   .----------------------.|
  |   |  Feliz               ||
  |   |  CUM                 ||
  |   '----------------------'|
  |___________________________|`,
]

export default function ASCIICake({ fps = 4 }: { fps?: number }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % FRAMES.length), Math.max(1000 / fps, 60))
    return () => clearInterval(id)
  }, [fps])

  return (
    <pre className="ascii" role="img" aria-label="Pastel ASCII animado con velitas parpadeando">
      {FRAMES[i]}
    </pre>
  )
}
