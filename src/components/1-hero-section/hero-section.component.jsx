import './hero-section.styles.css'

const HeroSection = () =>{

    return(
        <div className="section-container hero-section">
            <h1 className='hero-text'>Apologia Gospel Church</h1>
            <div className='buttons-container'>
            <button className='hero-button schedule-button'>SCHEDULES</button>
            <button className='hero-button streaming-button' >LATEST SERMON</button>
            </div>
            <div className='hero-bottom-paragraph'>
                <p>Apologia Gospel Church Welcomes You Brethren!</p>
            </div>
            
            

        </div>
    )
}

export default HeroSection;