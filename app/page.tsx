import Card from './components/Card'

export default function Home() {
  return (
    <div className='bg-black'>
      <h1 className='text-center text-3xl py-10 text-white'>Business Cards</h1>
      <div className="p-5 md:flex justify-around">
      <Card style='block' block='hidden'/>
      <Card style='hidden' block='block'/>
      </div>
    </div>
  )
}
