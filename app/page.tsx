import Collections from '@/components/Collections'
import Explore from '@/components/Explore'
import Foryou from '@/components/Foryou'
import Hero from '@/components/Hero'
import NewIn from '@/components/NewIn'
import WhyUs from '@/components/WhyUs'

const Home = () => {
  return (
    <main className='min-h-screen w-full'>
      <Hero />
      <Collections />
      <Explore />
      <Foryou />
      <NewIn />
      <WhyUs />
    </main>
  )
}

export default Home
