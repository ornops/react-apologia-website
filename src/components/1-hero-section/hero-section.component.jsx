import './hero-section.styles.css'

const HeroSection = () =>{

    return(
        <div className="section-container hero-section">
            <div className="hero-text-container">
                <p className='hero-text '>
                    “All flesh is like grass 
                </p>
                <p className='hero-text '>
                    and all its glory like the flower of grass.
                </p>
                <p className='hero-text'>
                    The grass withers,
                </p>
                <p className='hero-text '>
                    and the flower falls,
                </p>
                <p className='hero-text '>
                    but the word of the Lord remains forever.”
                </p>
                <p className='hero-text'>
                    And this word is the good news that was preached to you.
                </p>
            </div>
           

            
            <div className='buttons-container'>
            <button className='hero-button schedule-button'>Schedule</button>
            <button className='hero-button streaming-button' >Latest Sermon</button>
            </div>
            <div className='hero-bottom-paragraph'>
                <p>Apologia Gospel Church Welcomes You Brethren!</p>
            </div>
            
            

        </div>
    )
}

export default HeroSection;