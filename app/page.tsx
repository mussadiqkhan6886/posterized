import Collections from '@/components/Collections'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <main className='min-h-screen w-full'>
      <Hero />
      <Collections />
      <Explore />
    </main>
  )
}

export default Home
