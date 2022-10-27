import React from "react"
import { useHistory } from 'react-router-dom'
import {  Button } from 'flowbite-react'

export default function Candidates() {

    // use history to reroute 
    const history = useHistory();

    // click function for reroute
    function onOpportunitiesClick() {
        history.push('/opportunities')
        }
        
    return (
        
        
<div id="candidates-container">
                  <div id="candidates-card">
                    

        <h1>EXCEL PERSONNEL</h1>
        <br /> 
        
        <h1>Level up your career <br /> We pride ourselves in getting to know you, giving you personalized attention, clear communication, and honest accountability. We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed</h1>
        <div id="candidates">
            <br /> 
       <Button id="form-button" onClick={onOpportunitiesClick}>Explore Job Opportunities</Button>
       </div>
       </div>
       </div>
    )
}




