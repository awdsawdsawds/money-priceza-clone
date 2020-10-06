import SearchSection from './components/SearchSection'
import ProminentSection from './components/ProminentSection'
import AdSection from './components/AdSection'
import DestinationSection from './components/DestinationSection'
import IntroProductSection from './components/IntroProductSection'
import PromotionSection from './components/PromotionSection'
import BlogSection from './components/BlogSection'
import AboutSection from './components/AboutSection'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles['home-contrainer']}>
      <SearchSection />
      <ProminentSection />
      <AdSection />
      <DestinationSection />
      <IntroProductSection />
      <PromotionSection />
      <BlogSection />
      <AboutSection />
    </div>
  )
}
