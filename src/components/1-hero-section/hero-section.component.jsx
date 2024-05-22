import './hero-section.styles.css'

const HeroSection = () =>{

    return(
        <div className="section-container hero-section">
            
            <div className='buttons-container'>
                <a href="#schedule-section-anchor"><button className='hero-button schedule-button'>SCHEDULE</button></a>
                <a href='#sermon-section-anchor'><button className='hero-button sermon-button' >LATEST SERMON</button></a>
            
            </div>
        </div>
    )
}

export default HeroSection;