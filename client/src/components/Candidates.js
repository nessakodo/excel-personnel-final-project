import React from "react"
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'flowbite-react'


export default function Candidates() {

    // use history to reroute 
    const history = useHistory();

    // click function for reroute
    function onOpportunitiesClick() {
        history.push('/opportunities')
        }
        
    return (
        <>

        <div class="flex justify-center items-center p-20 text-7xl text-black font-thin"><h1>Excel Personnel Job Opportunities</h1></div>

        <div class="grid-container20">
        <div class="grid-child20">
                    <Card class="bg-gray-200 ml-0 h-80 align-center object-center">
                            <h5 className="text-2xl font-bold tracking-tight ">
                            Level Up your Career
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-800">
                                We pride ourselves in getting to know you, giving you personalized attention, clear communication, and honest accountability. We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed
                            </p>
                            <Button type="button" onClick={onOpportunitiesClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-64">
                                        Explore Job Opportunities
                                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    </Button>
                        
                        </Card>
                </div>
            </div>
        </>
    )
}




