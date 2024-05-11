import './schedule-section.styles.css'

const ScheduleSection = () =>{

    return(
        <div className="section-container schedule-section">
            <h1 className='section-header-text'>Daily Schedule</h1>
            <table className='schedule-table'>
                <tr>
                    <th>Time</th>
                    <th>Session</th>
                    <th>Facilitator</th>
                </tr>
                <tr>
                    <td>Sunday - 2:00 PM</td>
                    <td>Sunday Fellowship</td>
                    <td>Elders</td>
                </tr>
                <tr>
                    <td>Sunday - 5:00 PM</td>
                    <td>Small Group Fellowship</td>
                    <td>Small Group Leaders</td>
                </tr>
                <tr>
                    <td>Wednesday - 7:00 PM</td>
                    <td>Prayer Meeting</td>
                    <td>Assigned Facilitator</td>
                </tr>
                <tr>
                    <td>Thursday - 7:00 PM</td>
                    <td>Bereans Bible Study</td>
                    <td>Bro. Kris</td>
                </tr>
            </table>
        </div>
    )
}

export default ScheduleSection;