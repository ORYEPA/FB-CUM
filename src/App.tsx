import React, { useState } from 'react'
import './index.css'
import FloatingHearts from './components/FloatingHearts'
import FloatingPhotos from './components/FloatingPhotos'
import ASCIICake from './components/ASCIICake'

const ALL_PHRASES: string[] = [
  "Feliz cumpleaños, Fernando. Eres el `git commit` que más cuido en mi historial — no te borro por nada del mundo.",
  "Si el universo fuera un repo, tú serías la rama principal. Todo lo que importa vive ahí. Feliz cumple.",
  "Eres el personaje al que siempre vuelvo, sin importar cuántas vidas tenga. Feliz cumpleaños.",
  "Tu presencia compila todo lo que estaba roto en mí. Sin errores, sin warnings. Solo tú.",
  "Eres mi save point favorito — donde quiero volver cada vez que el mundo se pone difícil.",
  "No necesito RNG de mi lado si te tengo a ti. Eres el loot legendario que ya encontré. Feliz cumple.",
  "Eres el único cuyo `merge` en mi vida no dejó conflictos — solo cosas mejores. Feliz cumpleaños, Fernando.",
  "Si tuviera que elegir a alguien para el co-op de la vida, te elegiría a ti en cada playthrough.",
  "Eres mi variable más importante. Si te elimino, todo el sistema falla. Feliz cumpleaños.",
  "Cada momento contigo es como un nivel desbloqueado que no sabía que necesitaba. Feliz cumple.",
  "Eres el NPC que resultó ser el personaje más importante de la historia. Y no me arrepiento de seguirte.",
  "Tu amor no tiene cooldown. Siempre está disponible, siempre al 100%. Feliz cumpleaños, Fernando.",
  "Eres la función que hace que todo tenga sentido. Sin ti, el programa no corre igual.",
  "Feliz cumple. En todas las líneas de tiempo del multiverso, siempre te estaría buscando a ti.",
  "Eres mi dependencia favorita — la única que no quiero actualizar ni reemplazar nunca.",
  "Si la vida fuera un videojuego, tú serías la razón por la que sigo jugando. Feliz cumpleaños.",
  "Eres el único deploy que hice a producción sin miedo. Sabía que ibas a funcionar perfecto.",
  "Mi corazón te tiene como proceso prioritario. Siempre corriendo en primer plano. Feliz cumple.",
  "Eres el pull request que acepté sin dudar y que cambió todo el proyecto para bien. Para siempre.",
  "No importa cuántos bugs tenga el mundo — contigo al lado siempre encuentro el fix. Feliz cumpleaños.",
  "Eres el achievement que más me costó ganar y el que más valoro. Feliz cumple, Fernando.",
  "Si pudieras ver mis logs internos, encontrarías tu nombre en cada línea importante. Te quiero mucho.",
  "Eres la razón por la que este servidor sigue online. Mi uptime emocional depende de ti. Feliz cumpleaños.",
  "En mi árbol de decisiones, todos los caminos llevan a elegirte a ti. Siempre. Feliz cumple.",
  "Eres la única quest que completo con gusto una y otra vez, sin importar cuántas veces la repita.",
  "Mi stack favorito eres tú: confiable, poderoso y sin dependencias innecesarias. Feliz cumpleaños.",
  "Eres el código que nunca refactorizaría — perfecto tal como estás. Feliz cumple, Fernando.",
  "Eres el único bug que no quiero arreglar.",
  "Si fueras código, definitivamente te dejaría en producción.",
  "Contigo hasta mis pensamientos hacen overclock.",
  "No sé si es química o compatibilidad de versiones, pero funcionamos demasiado bien.",
  "Eres como un deploy exitoso un viernes… raro, pero perfecto.",
  "Mi sistema nervioso compila diferente cuando apareces.",
  "Tú eres el motivo por el que mi batería social dura más.",
  "No eres Google, pero tienes todo lo que busco.",
  "Si fueras variable, serías constante.",
  "Eres más adictivo que abrir una terminal 'solo cinco minutos'.",
  "Mi red flag es pensar demasiado en ti mientras debería estar trabajando.",
  "Tienes más impacto en mí que un `rm -rf /`.",
  "Eres el tipo de persona que pondría fijada en mi barra de tareas.",
  "No sé si esto es amor o dependencia de paquetes.",
  "Hasta mis algoritmos fallan cuando me sonríes.",
  "Tú eres el easter egg favorito de mi vida.",
  "Contigo hasta el lag emocional desaparece.",
  "Eres como el modo oscuro: desde que llegaste, todo se ve mejor.",
  "No necesito IA para saber que me encantas.",
  "Mi corazón contigo anda en modo turbo sin ventilación.",
  "Eres el único commit que jamás haría rollback.",
  "Si fueras un pull request, te aprobaría sin revisar.",
  "No eres Wi-Fi, pero siento la conexión.",
  "Tú y yo tenemos más química que un stack mal documentado.",
  "Ojalá fueras parte de mi startup emocional… invertiría todo.",
  "Tu voz tiene más efecto en mí que una notificación de deploy exitoso.",
  "Si fueras NPC, definitivamente tendrías quest romántica.",
  "Mi cerebro dice 'concéntrate', pero tú corres en segundo plano.",
  "Eres como Linux: al principio no te entendía y ahora no quiero otra cosa.",
  "No eres un juego online, pero me tienes farmeando atención todo el día.",
  "Eres como mi salud mental: claramente no debería depender tanto de ti.",
  "Lo nuestro va tan rápido que parece startup financiada por humo.",
  "Si fueras error, serías de esos que aparecen en producción y nadie sabe arreglar.",
  "Me gustas más de lo que me gusta cancelar reuniones.",
  "Eres como dormir 8 horas… sé que existes, pero nunca te tengo.",
  "Mi estabilidad emocional tiene menos uptime que un servidor en oferta.",
  "Tú me miras bonito y yo ya olvidé todas mis red flags.",
  "Contigo sí aceptaría términos y condiciones sin leer.",
  "No sé si quiero una relación o solo atención premium tuya.",
  "Eres como el código legacy: tóxico, confuso… pero nadie quiere borrarte.",
  "Me enamoré tan rápido que ni mi ansiedad alcanzó a generar escenarios.",
  "Si fueras deploy, definitivamente serías un viernes a las 6 pm.",
  "Tienes el mismo efecto en mí que ver 'saldo insuficiente'.",
  "No eres terapia, pero igual aquí me tienes.",
  "Lo nuestro tiene más fallas que mi horario de sueño.",
  "Eres esa mala decisión que tomaría completamente consciente.",
  "Mi tipo de hombre: emocionalmente disponible… o al menos que responda mensajes.",
  "Tú y yo duraríamos más que mi motivación del gimnasio.",
  "No sé qué somos, pero claramente Recursos Humanos tendría preguntas.",
  "Eres como mis proyectos personales: pienso en ti mucho más de lo que avanzo.",
  "Si fueras malware, igual te abriría.",
  "Mi corazón contigo hace más excepciones que mi código.",
  "No eres problema mío… pero mira cómo te adopté.",
  "Qué bonito gustarte mientras ignoro activamente mis mecanismos de defensa.",
  "Tú eres el motivo por el que mi productividad cayó misteriosamente.",
  "Eres como mis decisiones a las 3 a.m.: sé que acabarán mal y aun así voy.",
  "No sé si me gustas o si mi cerebro ya desarrolló un bug irreversible.",
  "Tú me das la misma paz que cerrar 37 pestañas del navegador.",
  "Me haces sentir cosas… y honestamente ya tenía demasiados problemas.",
  "Eres como el café: claramente abusar de ti no es saludable.",
  "Lo nuestro tiene potencial… potencial de dejarme traumado, pero potencial.",
  "Tienes una vibra tan peligrosa que mi sentido común ya renunció.",
  "Si fueras notificación, definitivamente arruinarías mi concentración.",
  "Me gustas tanto que hasta mis estándares empezaron a negociar.",
  "No eres mi evento canónico… eres el DLC emocional.",
  "Contigo practico algo muy bonito llamado ignorar señales de advertencia.",
  "Eres como el internet lento: me desesperas, pero no puedo dejarte.",
  "No eres tóxico, solo edición limitada de mis peores decisiones.",
  "Tú eres el motivo por el que mis amigos dicen 'otra vez no…'.",
  "Me haces sentir mariposas… o ansiedad, todavía no identifico cuál.",
  "Eres como un archivo sin backup: demasiado importante para perderte.",
  "No sé si quiero besarte o demandarte por alterar mi estabilidad.",
  "Contigo aprendí que la responsabilidad afectiva claramente era opcional.",
  "Eres tan mi tipo que debería preocuparme seriamente.",
  "Si fueras examen, definitivamente reprobaría por distraerme viéndote.",
  "No eres una red flag, eres directamente el tutorial de supervivencia.",
  "Tú me hablas bonito y yo ya desinstalando el amor propio.",
  "Qué peligro tienes… haces que quiera contestar rápido.",
  "No sé qué somos, pero seguro mi terapeuta lo anotaría.",
  "Eres como actualizar en producción sin pruebas: mala idea… emocionante.",
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const PHRASES = shuffle(ALL_PHRASES)

function randomPhrase(current: string): string {
  const pool = PHRASES.filter(p => p !== current)
  return pool[Math.floor(Math.random() * pool.length)]
}

function App(): React.ReactElement {
  const [phrase, setPhrase] = useState(() => PHRASES[Math.floor(Math.random() * PHRASES.length)])

  function nextPhrase() {
    setPhrase(p => randomPhrase(p))
  }

  return (
    <main className="page">
      <FloatingHearts />
      <FloatingPhotos />

      <section className="card">
        <h1>¡Feliz Cumpleaños!</h1>
        <span className="badge">Esclavo Rebelde</span>
        <h2>Fernando Baños</h2>
        <ASCIICake fps={4} />
        <p className="phrase">{phrase}</p>
        <button className="phrase-btn" onClick={nextPhrase}>
          ✨ Otra frase
        </button>
      </section>
    </main>
  )
}

export default App
