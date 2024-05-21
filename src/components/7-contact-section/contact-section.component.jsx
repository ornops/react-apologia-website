import './contact-section.styles.css'

const ContactSection = () =>{

    return(
        <div className="section-container contact-section">
            <div className="image-banner-section">

            </div>
            <div className="contact-info-section">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                </div>
                <div className="address-contact-container">
                    <div className="address-container">
                        <p>935 M Salinas Drive </p>
                        <p>Cebu City</p> 
                        <p>6000 Cebu</p>
                    </div>
                    <div className="contact-numbers-container">
                        <p>Telephone Number : (123) 456 - 7890 </p>
                        <p>Mobile Number : (123) 456 - 7890 </p> 
                        <p>Email : apologiagospelchurchcebu@gmail.com</p>
                    </div>
                    
                    
                    
                </div>
                <div className="social-media-links">

                </div>
            </div>
        </div>
    )
}

export default ContactSection;