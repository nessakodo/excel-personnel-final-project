import React, {useEffect} from 'react';
import { Tabs, Timeline, HiCalendar } from 'flowbite-react'



export default function About() {
    
    // useEffect(() => {
    //     // 👇️ scroll to top on page load
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    //   }, []);

   

    return (

      
        
        <>
        <div class="bg-about bg-cover bg-no-repeat">
                <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"/>
                <div class="p-20 text-7xl text-black bg-white bg-opacity-25 font-thin">
                        About us <br /> 
                </div> 
        </div>


        <Timeline horizontal={true}>
            <div class="flex justify-start pt-20 pb-20">
                <Timeline.Item>
                    <Timeline.Point/>
                    <svg class="w-6 h-6 p-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <Timeline.Content>
                    <Timeline.Title class="text-black font-bold">
                        Established
                    </Timeline.Title>
                    <Timeline.Time>
                        1997
                    </Timeline.Time>
                    <Timeline.Body class="font-medium">
                        Excel Personnel established in San Diego, CA
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <svg class="w-6 h-6 p-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <Timeline.Content>
                    <Timeline.Title class="text-black font-bold">
                        Expanded
                    </Timeline.Title>
                    <Timeline.Time>
                        1992
                    </Timeline.Time>
                    <Timeline.Body class="font-medium">
                        Expanded to service the Denver market & the Front Range
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <svg class="w-6 h-6 p-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <Timeline.Content>
                    <Timeline.Title class="text-black font-bold">
                        Denver Headquaters
                    </Timeline.Title>
                    <Timeline.Time>
                        1992
                    </Timeline.Time>
                    <Timeline.Body class="font-medium">
                        Denver established as corporate headquarters
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <svg class="w-6 h-6 p-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <Timeline.Content>
                    <Timeline.Title class="text-black font-bold">
                        New Offices
                    </Timeline.Title>
                    <Timeline.Time>
                        2002
                    </Timeline.Time>
                    <Timeline.Body class="font-medium">
                        Five offices located in Denver area covering the entire Metro region
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <svg class="w-6 h-6 p-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <Timeline.Content>
                    <Timeline.Title class="text-black font-bold">
                        Denver Tech Center
                    </Timeline.Title>
                    <Timeline.Time>
                        2004
                    </Timeline.Time>
                    <Timeline.Body class="font-medium">
                        Relocated Corporate offices to the Denver Tech Center
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <svg class="w-6 h-6 p-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <Timeline.Content>
                    <Timeline.Title class="text-black font-bold">
                        Nominated
                    </Timeline.Title>
                    <Timeline.Time>
                        2007
                    </Timeline.Time>
                    <Timeline.Body class="font-medium">
                        Nominated "Best Companies to Work for in Colorado"
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <svg class="w-6 h-6 p-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <Timeline.Content>
                    <Timeline.Title class="text-black font-bold">
                        Three Decades
                    </Timeline.Title>
                    <Timeline.Time>
                        2022
                    </Timeline.Time>
                    <Timeline.Body class="font-medium">
                        Celebrated 30 years in Denver Metro region
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </div>
        </Timeline>

        <div class="flex justify-center items-center p-20 text-7xl text-black font-thin"><h1>Our Values</h1></div>

        <Tabs.Group
            aria-label="Pills"
            style="pills"
            class="flex justify-evenly">
            <Tabs.Item
                active={true}
                title="Focus"
            >
                <div class="flex items-center place-content-center w-64 p-8 h-72 rounded-xl border-x-2 border-y-2 border-double border-orange-500">
                We realize that strong search capabilities are what ensures the success of our clients, so that’s where we focus our resources and efforts.
                </div>
            </Tabs.Item>
            <Tabs.Item title="Quality">
                <div class="flex justify-center items-center w-36 rounded-xl border-x-2 border-y-2 border-double border-orange-500 p-12">
                Quality costs less – when you need to hire, don’t settle for anything less than the highest quality available.
                </div>
            </Tabs.Item>
            <Tabs.Item title="Relationships">
                <div class="flex justify-center items-center w-36 rounded-xl border-x-2 border-y-2 border-double border-orange-500 p-12">
                You need a staffing partner that focuses on solving problems rather than just filling orders. We take a strategic approach to solving your staffing challenges and improving your bottom line.
                </div>
            </Tabs.Item>
            <Tabs.Item title="Results">
                <div class="flex justify-center items-center w-36 rounded-xl border-x-2 border-y-2 border-double border-orange-500 p-12">
                In order to make sure of constant progress and improvement, you need to be able to measure your results and the parameters of success that have been agreed upon. We pride ourselves on achieving results that benefit you!
                </div>
            </Tabs.Item>
            <Tabs.Item
                title="Expertise"
            >
                <div class="flex justify-center items-center w-36 rounded-xl border-x-2 border-y-2 border-double border-orange-500 p-12">
                We have been providing exceptional, customized staffing fulfillment since 1992.
                </div>
            </Tabs.Item>
        </Tabs.Group>
        
        
        </>
    )

};

