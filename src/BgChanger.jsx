import {useState} from 'react'

const BgChanger = () => {
  let [color, setColor] = useState('blue')

  


  return (
  <div className="h-screen w-full duration-700" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-1 inset-x-0 ">
    <div className=" fixed flex flex-wrap justify-center bg-white border rounded-3xl px-4 py-2 bottom-12 gap-3 font-bold">
        <button onClick={()=>setColor('red')} className="bg-red-500  text-white w-28">Red</button>
        <button onClick={()=>setColor('yellow')} className="bg-yellow-500 text-white w-28">Blue</button>
        <button onClick={()=>setColor('green')} className="bg-green-500 text-white w-28">Green</button>
        <button onClick={()=>setColor('pink')} className="bg-pink-400 text-white w-28">Pink</button>
        <button onClick={()=>setColor('purple')} className="bg-purple-400 text-white w-28">Purple</button>
        <button onClick={()=>setColor('gray')} className="bg-gray-400 text-white w-28">Gray</button>
    </div>
    </div>
  </div>
  )
} 

export default BgChanger