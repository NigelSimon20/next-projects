import Image from 'next/image'
import Card from './components/Card'

export default function Home() {
  return (
    <div className='bg-black'>
      <h1 className='text-center text-3xl py-10 text-white'>Business Cards</h1>
      <div className="flex justify-evenly">
      <Card style='block' block='hidden'/>
      <Card style='hidden' block='block'/>
      </div>
    </div>
  )
}
