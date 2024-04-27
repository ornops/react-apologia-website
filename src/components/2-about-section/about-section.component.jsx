import './about-section.styles.css'
import AboutImage from '../../assets/about-image.jpg';

const AboutSection = () =>{

    return(
        <div className="section-container about-section">
            <div className='left-side'>
                <h1 className='section-header-text about-header-text'>About Us</h1>
                <img src={AboutImage} alt="About" />
            </div>
            <div className='right-side'>
                <p>
                    We are a Christ-centered church that proclaims and defends the gospel.<br/>
                    We are a community of believers that loves God and loves one another.<br/>
                    We are a Christ-centered church that proclaims and defends the gospel.<br/>
                    


                </p>
                

            </div>
        </div>
    )
}

export default AboutSection;