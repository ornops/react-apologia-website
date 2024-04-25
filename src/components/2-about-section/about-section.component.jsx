import './about-section.styles.css'

const AboutSection = () =>{

    return(
        <div className="section-container about-section">
            <div className='left-side'>
                <h1 className='section-header-text about-header-text'>About Us</h1>
                <img src="../../assets/about-image.jpg" alt="church" />
            </div>
            <div className='right-side'>
                <p>
                    We are a Christ-centered church that proclaims and defends the gospel.
                    We are a community of believers that loves God and loves one another.
                </p>

            </div>
        </div>
    )
}

export default AboutSection;