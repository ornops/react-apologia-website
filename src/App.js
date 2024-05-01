import HeroSection from './components/1-hero-section/hero-section.component'
import AboutSection from './components/2-about-section/about-section.component';
import BeliefSection from './components/3-belief-section/belief-section.component';
import SermonSection from './components/4-sermon-section/sermon-section.component';
import ScheduleSection from './components/5-schedule-section/schedule-section.component';
import OutreachesSection from './components/6-outreaches-section/outreaches-section.component';
import ContactSection from './components/7-contact-section/contact-section.component';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <HeroSection/>
      <AboutSection/>
      <BeliefSection/>
      <SermonSection/>
      <ScheduleSection/>
      <OutreachesSection/>
      <ContactSection/>
    </div>
    
    
  );
}

export default App;
