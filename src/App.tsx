import React, { useState } from 'react'
import './index.css'
import FloatingHearts from './components/FloatingHearts'
import ASCIICake from './components/ASCIICake'

const PHRASES: string[] = [
  "Feliz cumpleaños Fernando. Hoy haces `git commit -m 'otro año de epicidad'` y el repo acepta sin conflictos.",
  "Tu proceso lleva años corriendo sin crash. Eso es uptime de leyenda.",
  "Achievement unlocked: otro año siendo un absolute chad. GG Fernando.",
  "Eres el único dev cuyo código de vida compila a la primera y sin warnings.",
  "Feliz cumple. Tu stack de personalidad: humor.js, talento.py, cero dependencias de drama.",
  "Has subido de nivel. +1 año de sabiduría, +10 de leyenda. Feliz cumpleaños.",
  "Tu barra de vida lleva años al 100% porque eres demasiado épico para recibir daño.",
  "Feliz cumple. Que tus PRs sean mergeados, tus bugs sean de otros y tus cervezas estén frías.",
  "Eres el personaje principal. La historia siempre te favorece. Feliz cumpleaños.",
  "New game+ iniciado. Llevas varios playthroughs y cada uno es mejor que el anterior.",
  "Feliz cumpleaños. Que la fuerza te acompañe, los dados caigan a tu favor y el RNG sea contigo.",
  "Otro año en el multiverso y siempre eres la mejor versión de Fernando en todas las líneas de tiempo.",
  "Eres el NPC que en realidad es el jefe final. Respeto absoluto. Feliz cumple.",
  "Feliz cumpleaños Fernando. Eres el error 200 de mi lista de contactos: todo funciona cuando estás.",
  "Tu KDA en la vida real es inalcanzable. Stats de leyenda. Feliz cumpleaños.",
  "Llevas años siendo el personaje más overpowered del servidor. Feliz cumple.",
  "Si tu vida fuera un videojuego, ya estarías en el DLC exclusivo de los elegidos.",
  "Feliz cumple. Que este año la vida te dropee solo ítems épicos y nadie te killsteal la felicidad.",
  "Eres el único cuyo árbol de habilidades está completamente desbloqueado. Feliz cumpleaños.",
  "Feliz cumpleaños. Tu función principal retorna felicidad() sin excepciones desde hace años.",
  "Mereces un deploy a producción sin staging. Confianza total. Feliz cumple Fernando.",
  "Happy birthday. Tu poder de radiación carisma está en nivel legendario y no tiene cooldown.",
  "Eres el único ser humano que he conocido con estadísticas de speed run en la vida real.",
  "Feliz cumpleaños. Este año: más loot épico, más XP, y cero lag en la vida real.",
  "Tu arquitectura de personalidad es SOLID: sin acoplamiento innecesario y 100% escalable.",
  "Feliz cumple. Ojalá este año tus partidas sean largas, tus kills sean muchos y el lag brille por su ausencia.",
  "Eres el commit que siempre pasa el code review sin comentarios. Feliz cumpleaños.",
]

function randomNext(current: number, total: number): number {
  if (total <= 1) return 0
  let next: number
  do {
    next = Math.floor(Math.random() * total)
  } while (next === current)
  return next
}

function App(): React.ReactElement {
  const [phraseIdx, setPhraseIdx] = useState(() => Math.floor(Math.random() * PHRASES.length))

  function nextPhrase() {
    setPhraseIdx(i => randomNext(i, PHRASES.length))
  }

  return (
    <main className="page">
      <FloatingHearts />

      <section className="card">
        <h1>¡Feliz Cumpleaños!</h1>
        <span className="badge">Esclavo Rebelde</span>
        <h2>Fernando Banos</h2>
        <ASCIICake fps={4} />
        <p className="phrase">{PHRASES[phraseIdx]}</p>
        <button className="phrase-btn" onClick={nextPhrase}>
          ✨ Otra frase
        </button>
      </section>
    </main>
  )
}

export default App
