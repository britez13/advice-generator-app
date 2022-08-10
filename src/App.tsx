import { useEffect, useState } from 'react'
import image from './assets/icon-dice.svg'
import image1 from './assets/pattern-divider-mobile.svg'

function App() {
  
  const [data, setData] = useState<any>(null);

  const fetchAdvice = async() => {
    const url = 'https://api.adviceslip.com/advice';
    const res = await fetch(url);
    const newData = await res.json();
    setData(newData);
  }


  useEffect(() => {
    fetchAdvice()
  }, [])
  
  const handleClick = () => {
    fetchAdvice()
  }

  return (
    <main id='main' className='relative w-[90%] max-w-[550px] h-auto flex flex-col items-center gap-5 mx-auto py-8 px-6 bg-darkGrayishBlue rounded-lg shadow-lg '>
      <p className='text-neonGreen text-center text-[14px] tracking-widest uppercase font-bold mt-3 '>Advice #{data && data.slip.id}</p>
      <h1 className='text-lightCyan text-center leading-8 text-[28px] font-manrope font-bold break-words'>&ldquo;{data && data.slip.advice}&rdquo;</h1>
      <div id='divider' className='relative flex justify-center w-full mb-7'>
        <img src={image1} alt='Divider image' />
      </div>
      <div id='circle' onClick={handleClick}>
        <img id='circle__image' src={image} alt="Icon dice" />
      </div>
    </main>
  )
}

export default App





