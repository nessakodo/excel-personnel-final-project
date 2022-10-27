import React, { useEffect, useState } from 'react'

function JobCard({ job, loggedIn, onApply, setHideAlert }) {
    const [details, setDetails] = useState(false)
    const [toApply, setToApply] = useState(false)



    function viewDetails(e) {
        if (e.target.textContent === "View Details") {
            setDetails(true)
        } else {
            setDetails(false)
        }
    }

    function handleApply() {
        onApply(job)
        setToApply(!toApply)
        setHideAlert("")
        setTimeout(function () { setHideAlert("hidden") }, 5000)
    }


    return (
        <div className='h-80 p-10 mb-10'>
            <p class="h-72 mb-10 p-10 bg-white rounded-sm border border-gray-200 shadow-xl hover:bg-white-200 dark:bg-white-300 dark:border-gray-300 dark:hover:bg-gray-100">
                <div className=' justify-between border-b border-slate-300'>
                    <div>
                        <ul class=" justify-start items-center mb-2 text-gray-900 dark:text-gray">
                            <li>
                                <span onClick={viewDetails} class="mr-4 hover:underline text-gray-900 dark:text-black-400 hover:cursor-pointer md:mr-6">View Details</span>
                            </li>
                        </ul>
                    </div>

                    {loggedIn ?
                        <div className='flex flex-row hover:cursor-pointer ' onClick={handleApply}>
                            <h5 className='text-gray-900  dark:text-gray-900 pr-1 mb-4'>{toApply ? "Applied" : "Apply"}</h5>
                            {toApply ? <svg class="w-6 h-6 hover:text-gray-400 dark:hover:text-gray-900 dark:text-black" fill="#f97316" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                :
                                <svg class="w-6 h-6 hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            }
                        </div>
                        :
                        <></>
                    }
                </div>

                <h5 class="mb-2 text-2xl font-bold max-h-60 text-gray-900 dark:text-gray pt-5">{job.name}</h5>

                {/* Data Info */}
                <ul class="justify-start items-center mb-6 text-gray-400 dark:text-gray text-sm">

                    <li>
                        <a href="#" class="mr-4 md:mr-6"><span class='text-gray-100 dark:text-gray-900'>Job Type: </span>{job.type_of_hire}</a>
                    </li>
    
                    <li>
                        <a href="#" class="mr-4 md:mr-6"><span class='text-gray-100 dark:text-gray-900'>Description: </span>{job.name}</a>
                        {/* {job.description} */}
                    </li>
                </ul>

                {details ?

                    <ul class="flex flex-col items-start mb-6 text-gray-900 dark:text-white text-sm">
                        <li>
                            <a href="#" class="mr-4 md:mr-6 font-bold italic">{job.qualifications}</a>
                        </li>
                    </ul>

                    :
                    <></>
                }
            </p>
        </div>
    )
}

export default JobCard