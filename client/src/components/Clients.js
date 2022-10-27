import React from "react"
import { Footer, Card, Button } from 'flowbite-react'
import map_footer from '../assets/map_footer.jpeg';
import clients2 from '../assets/clients2.jpg';


export default function Clients () {

    function onLawTrainingClick() {
        window.location.href='https://www.hallevans.com';
        }

    function onSafetyPartnershipClick() {
        window.location.href='https://www.ehscompliance.com/';
        }

    // function onComputerSupportClick() {
    //     window.location.href='http://www.supportstaffinc.net/';
    //     }

    return (
        <>
            
            <div class="bg-clients bg-cover bg-no-repeat bg-right">
            <header class="h-screen pt-20 pl-5 text-9xl text-black font-thin">Staffing Improved</header>
            </div>
            
            <div class="grid-container5">
            <div class="grid-child12">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                We know staffing. Use our 25 years of experience and continuous improvement to your benefit.
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                    We are devoutly committed to developing a strong understanding of our clients, by providing exceptional service and customizing our staffing fulfillment to each client individually. We have over 5,000 employees in our ever changing database.
                                 
                                    These are just a few of whom we’re especially proud. Find a fit with one of our talented employees? Contact us today at 303-427-4600!
                                </p>
                              
                            </Card>
                    </div>
                </div>

                <div class="flex justify-center items-center p-20 text-7xl text-black font-thin"><h1>Your relationship with Excel Personnel yields many benefits to your business.<br /><br />Our Partnership Services..</h1></div>


            <div class="grid-container6">
                <div class="grid-child7">
                            <Card class="bg-gray-200 ml-0 h-80 ">
                                    <h5 className="text-2xl font-bold tracking-tight ">
                                    Safety Partnership Training
                                    </h5>
                                    <Button type="button" onClick={onSafetyPartnershipClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">
                                    
                                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                    </Button>
                                    
                                    
                                
                                </Card>
                        </div>
                        

                <div class="grid-child8 ">
                        <Card class="bg-gray-100 mr-0 h-80">
                            <h5 className="text-2xl font-bold tracking-tight ">
                            Vendor on Premise Services
                            </h5>
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>
                        </Card>
                    </div>
                    <div class="grid-child9">
                        <Card class="bg-gray-200 mr-0 h-80">
                            <h5 className="text-2xl font-bold tracking-tight ">
                            Managed Services Agreements
                            </h5>
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                        </Card>
                    </div>
                    <div class="grid-child10">
                        <Card class="bg-gray-100 mr-0 h-80">
                            <h5 className="text-2xl font-bold tracking-tight ">
                            On-site Time Management Systems
                            </h5>
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                        </Card>
                    </div>
                    <div class="grid-child11">
                            <Card class="bg-gray-200 ml-0 h-80 ">
                                    <h5 className="text-2xl font-bold tracking-tight ">
                                    Employment Law Training Programs
                                    </h5>
                                    <Button type="button" onClick={onLawTrainingClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">
                                    
                                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                    </Button>
        
                                </Card>
                
                        </div>
                        <div class="grid-child11">
                            <Card class="bg-gray-200 ml-0 h-80 ">
                                    <h5 className="text-2xl font-bold tracking-tight ">
                                    Customized Reporting & Monitoring Systems
                                    </h5>
                                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                </Card>
                        </div>
            </div>
            
            <div className="valueAddedServices">
                <Card
                    horizontal={true}
                    imgSrc={clients2}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Value Added Services
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-200">
                        <div>Excel Personnel is pleased to offer the following services, bundled or unbundled, to fit your needs. These services will be billed at cost to our partners. <br /><br />Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.<br /><br /></div> 
                        <ul1><div>Drug Testing (oral Test – same day results)</div></ul1>
                        <ul2><div>Drug Testing (5 panel 48 hour results)</div></ul2>
                        <ul3><div>Colorado In-State Criminal Background Checks</div></ul3>
                        <ul4><div>Insight Pre-employment Integrity Testing</div></ul4>
                        <ul5><div>Employment Application Processing</div></ul5>
                        <ul6><div>Reference Checking</div></ul6>
                        <ul7><div>Prior Employment Verification</div></ul7>
                        <ul8><div>Education Verification</div></ul8>
                        <ul9><div>Social Security Number Verification</div></ul9>
                        <ul10><div>Credit Report</div></ul10>
                        <ul11><div>Skill Testing (Office, Technical, Industrial)</div></ul11>
                        <ul12><div>Payrolling Services</div></ul12>
                        <ul13><div>Employment Law Seminars</div></ul13>
                        <ul14><div>Safety and Site Inspections/Training</div></ul14>
                        <ul15><div>Single Source Provider Relationships</div></ul15>
                        <ul16><div>Excel On Premise Arrangements</div></ul16>
                        

                    </p>
                </Card>
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
