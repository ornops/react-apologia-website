import './schedule-section.styles.css'

const ScheduleSection = () =>{

    return(
        <div className="section-container schedule-section" id='schedule-section-anchor'>
            <h1 className='section-header-text'>Daily Schedule</h1>
            <table className='schedule-table'>
                <tr>
                    <th>Time</th>
                    <th>Session</th>
                    <th>Facilitator</th>
                </tr>
                <tr>
                    <td>Sunday - 2:00 PM</td>
                    <td className='session-bold'>Sunday Fellowship</td>
                    <td>Elders</td>
                </tr>
                <tr>
                    <td>Sunday - 5:00 PM</td>
                    <td className='session-bold'>Small Group Fellowship</td>
                    <td>Small Group Leaders</td>
                </tr>
                <tr>
                    <td>Wednesday - 7:00 PM</td>
                    <td className='session-bold'>Prayer Meeting</td>
                    <td>Assigned Facilitator</td>
                </tr>
                <tr>
                    <td>Thursday - 7:00 PM</td>
                    <td className='session-bold'>Bereans Bible Study</td>
                    <td>Bro. Kris</td>
                </tr>
            </table>
        </div>
    )
}

export default ScheduleSection;