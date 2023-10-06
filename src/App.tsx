import './App.css'

function App() {

  return (
    <div>
     <nav className='min-h-[80px] bg-[#161616] fixed top-0 right-0 left-0 z-50 flex gap-2 items-center p-4 justify-between'>
      {[...Array(10)].map((_, i)=> (
        <div key={String(i)} className='text-white'>Ссылка {i + 1}</div>
      ))}
     </nav>
     <div className='flex h-screen text-white font-bold'>
      <div className='flex-1 h-full flex flex-col gap-6 justify-center items-center bg-[#535353]'>
        <div className='text-4xl'>Я фотограф</div>
        <div className='p-4 bg-[#161616] rounded-xl w-[200px] text-center'>Кнопка</div>
      </div>
      <div className='flex-1 h-full flex flex-col gap-6 justify-center items-center bg-[#858585]'>
        <div className='text-4xl'>А я кто?</div>
        <div className='p-4 bg-[#161616] rounded-xl w-[200px] text-center'>Хуепка</div>
      </div>
     </div>
     <div className='flex flex-col bg-[#c4c4c4] h-screen flex items-center justify-center gap-6'>
      <h1 className='text-2xl'>Кто такой фотограф мечты? (спойлер: это я)</h1>
      <div className='flex gap-4'>
      <div className='rounded-xl w-[600px] h-[500px] bg-black ml-[80px] text-white p-4 self-start'>
        <div>
        <div>Как и любой другой профессионал, фотограф мечты - это субъективное понятие, которое может различаться у каждого человека. Однако, можно выделить несколько качеств, которые обычно ассоциируются с идеальным фотографом:</div>
        <div>1. Талант - способность видеть красоту в привычных вещах и умение передать ее на фотографии.</div>
        <div>2. Профессионализм - знание техники и технологий, умение работать с оборудованием и программным обеспечением.</div>
        <div>3. Креативность - способность находить необычные ракурсы и композиции, экспериментировать с светом и цветом.</div>
        <div>4. Ответственность - уважение к клиенту, выполнение работы в срок, гарантия качества.</div>
        <div>5. Коммуникабельность - умение наладить контакт с моделями, клиентами, коллегами.</div>
        <div>6. Стиль - уникальный почерк, который отличает фотографа от других и позволяет создавать неповторимые работы.</div>
        <div>7. Стремление к развитию - желание улучшать свои навыки и изучать новые технологии, тренды и методы работы.</div>
        </div>
      </div>
      <img src='rita.jpg' alt='123' className='h-[500px] rounded-xl'/>
      </div>
     </div>
     <footer className='min-h-[120px] bg-[#161616] text-white flex justify-center items-center'>
      <div>Тут мои данные, вот номер мой: 8798798798 звони если ты огнев</div>
     </footer>
    </div>
  )
}

export default App
