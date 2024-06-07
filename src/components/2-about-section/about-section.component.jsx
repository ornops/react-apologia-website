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
                    Apologia Gospel Church was organized, as a means to reflect on what a biblically sound,
                    healthy, gospel-centered, Christ-exalting church should be.<br/>
                    Anything less is to fall short of what God requires of us as a church.
                </p>
                

            </div>
        </div>
    )
}

export default AboutSection;