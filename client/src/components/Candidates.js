import React from "react"
import { useHistory } from 'react-router-dom'


export default function Candidates() {

    // use history to reroute 
    const history = useHistory();

    // click function for reroute
    function onOpportunitiesClick() {
        history.push('/opportunities')
        }
        
    return (
        <div>

        <h1>EXCEL PERSONNEL</h1>
        <br /> 
        <h1>Level up your career <br /> We pride ourselves in getting to know you, giving you personalized attention, clear communication, and honest accountability. We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed</h1>

<br/>
       <button onClick={onOpportunitiesClick}>Explore Job Opportunities</button>
       </div>
    )
}




