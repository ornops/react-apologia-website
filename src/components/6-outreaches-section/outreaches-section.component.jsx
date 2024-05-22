import './outreaches-section.styles.css'
import OutReachImage1 from '../../assets/outreach1.jpg';
import OutReachImage2 from '../../assets/outreach2.jpg';
import OutReachImage3 from '../../assets/outreach3.jpg';
import OutReachImage4 from '../../assets/outreach4.jpg';

const OutreachesSection = () =>{

    return(
        <div className="section-container outreaches-section">
            <div className="outreach-container">
                <div className='header-container'>
                    <h1 className='section-header-text'>Outreaches</h1>
                </div>
                
                <div className="individual-outreach-container">
                    <div className="outreach-box-container">
                        <img src={OutReachImage1} className='outreach-image' alt="Inage 1" />
                        <div className="outreach-text-container">
                            <p>Consolacion</p>
                        </div>
                        
                    </div>
                    <div className="outreach-box-container">
                        <img src={OutReachImage2} className='outreach-image' alt="Inage 1" />
                        <div className="outreach-text-container">
                            <p>Pardo</p>
                        </div>
                    </div>
                    <div className="outreach-box-container">
                        <img src={OutReachImage3} className='outreach-image' alt="Inage 1" />
                        <div className="outreach-text-container">
                            <p>Banawa</p>
                        </div>
                    </div>
                    <div className="outreach-box-container">
                        <img src={OutReachImage4} className='outreach-image' alt="Inage 1" />
                        <div className="outreach-text-container">
                            <p>Lapu-lapu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutreachesSection;