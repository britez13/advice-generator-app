import { useState } from 'react'
import image from './assets/icon-dice.svg'
import image1 from './assets/pattern-divider-mobile.svg'
import { useFetch } from './helper/useFetch'

function App() {
  const url = 'https://api.adviceslip.com/advice';
  // const newData = useFetch(url); 
  // console.log(newData);
  const defaultAdvice = {id: 5, advice: "If you have the chance, take it!"}
  
  const [data, setData] = useState(defaultAdvice);

  // console.log(data);
  
  const handleClick = () => {
    const newData: any = useFetch(url);
    newData && setData(newData);
  }

  return (
    <main id='main' className='container relative max-w-sm h-auto flex flex-col gap-5 py-8 px-6 bg-grayishBlue rounded-md shadow-lg '>
      <p className='text-neonGreen text-center text-xs tracking-widest uppercase font-bold '>Advice #{data.id}</p>
      <h1 className='text-lightCyan text-center text-2xl font-bold break-words'>"{data.advice}"</h1>
      <div id='divider' className='relative flex justify-center items-center mb-5'>
        <img src={image1} alt='Divider image' />
      </div>
      <div id='circle' onClick={handleClick}>
        <img id='circle__image' src={image} alt="Icon dice" />
      </div>
    </main>
  )
}

export default App





