import Collections from '@/components/Collections'
import Explore from '@/components/Explore'
import Foryou from '@/components/Foryou'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <main className='min-h-screen w-full'>
      <Hero />
      <Collections />
      <Explore />
      <Foryou />
    </main>
  )
}

export default Home
