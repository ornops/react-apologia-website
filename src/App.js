import './App.css';
import HeroSection from './components/1-hero-section/hero-section.component'
import AboutSection from './components/2-about-section/about-section.component';
import BeliefSection from './components/3-belief-section/belief-section.component';
import EventSection from './components/4-recent-event-section/event-section.component';
import ScheduleSection from './components/5-schedule-section/schedule-section.component';
import OutreachesSection from './components/6-outreaches-section/outreaches-section.component';
import ContactSection from './components/7-contact-section/contact-section.component';


const App = () => {
  return (
    <div className='App'>
      <HeroSection/>
      <AboutSection/>
      <BeliefSection/>
      <EventSection/>
      <ScheduleSection/>
      <OutreachesSection/>
      <ContactSection/>
    </div>
    
    
  );
}

export default App;
