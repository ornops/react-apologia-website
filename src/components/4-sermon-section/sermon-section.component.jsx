import './sermon-section.styles.css'
import YoutubeEmbed from "../YoutubeEmed/youtube-embed.component";

const SermonSection = () =>{

    return(
        <div className="section-container event-section" id='sermon-section-anchor'>
            {/* <h1>Latest Sermon</h1> */}
            <YoutubeEmbed embedId="cakDdpMIPuc" />
        </div>
    )
}

export default SermonSection;