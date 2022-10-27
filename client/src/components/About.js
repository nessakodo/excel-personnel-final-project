import React, {useEffect} from 'react';
import { Timeline, Footer, Card } from 'flowbite-react'
import map_footer from '../assets/map_footer.jpeg';



export default function About() {
    
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

   

    return (

      
        
        <>
        <div class="bg-about bg-cover bg-no-repeat bg-center">
                <header class="h-screen pt-10 pl-10 text-9xl text-black font-thin">About us</header>
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


        <div class="grid-container3">
            <div class="grid-child7">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Focus
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                We realize that strong search capabilities are what ensures the success of our clients, so that’s where we focus our resources and efforts.
                                </p>
                            </Card>
                    </div>
                    

            <div class="grid-child8 ">
                    <Card class="bg-gray-100 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Relationships
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                        You need a staffing partner that focuses on solving problems rather than just filling orders. We take a strategic approach to solving your staffing challenges and improving your bottom line.
                        </p>
                    </Card>
                </div>
                <div class="grid-child9">
                    <Card class="bg-gray-200 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Results
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                        In order to make sure of constant progress and improvement, you need to be able to measure your results and the parameters of success that have been agreed upon. We pride ourselves on achieving results that benefit you!
                        </p>
                    </Card>
                </div>
                <div class="grid-child10">
                    <Card class="bg-gray-100 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Expertise
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                        We have been providing exceptional, customized staffing fulfillment since 1992.
                        </p>
                    </Card>
                </div>
                <div class="grid-child11">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Quality
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                When you need to hire, do not settle for anything less than the highest quality available.
                                </p>
                            </Card>
                    </div>
        </div>

        <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                <img src={map_footer} class="mr-3 max-h-96 pr-16" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Conveniently located at I-25 and Thornton Pkwy, <br />our office is located just off of Grant St.</span>
                </div>
                    <div className="grid grid-cols-2 gap-x-24 max-w-full mr-24 mt-10">
                        <div>
                        <Footer.Title title="Denver / Thornton Office" />
                        <Footer.LinkGroup col={true}>
                            9351 Grant St.<br />Suite 570<br />Thornton, CO 80229<br />Phone: (303)-427-4600<br /> Fax: (303)427-4147
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Corporate / Payroll Office" />
                        <Footer.LinkGroup col={true}>
                            10111 Inverness Main St.<br />Englewood, CO 80112<br />Phone: (303)-805-2300<br /> Fax: (303)805-2400
                        </Footer.LinkGroup>
                        </div>
                  
                    </div>
                </div>
                <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Flowbite™"
                        year={2022}/>
        
                </div>
            </div>
        </Footer>


        </>
    )

};

