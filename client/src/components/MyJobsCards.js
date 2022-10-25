import React, { useState } from 'react'
import { Button, Modal } from 'flowbite-react'


export default function MyJobsCards({ job, onRemove, setHideAlert }) {
    const [modal, setModal] = useState(false)
    // const [contact, setContact] = useState(false)

    // function showContacts(e) {
    //     if (e.target.textContent === "Contact") {
    //         setContact(true)
    //     } else {
    //         setContact(false)
    //     }
    // }

    function handleRemove(job) {
        onRemove(job)
        setModal(false)
        setHideAlert("")
        setTimeout(function () { setHideAlert("hidden") }, 5000)
    }

    return (
        <div class='flex flex-col items-center'>

            <div className='pt-4'>

                <p class="block p-6 max-w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className='flex flex-row justify-between border-b border-slate-500'>
                        <div>
                            <ul class="flex flex-wrap justify-start items-center mb-6 text-gray-900 dark:text-white">
                                <li>
                                    <span class="mr-4 hover:underline text-gray-900 dark:text-gray-400 hover:cursor-pointer md:mr-6">About</span>
                                </li>
                            </ul>
                        </div>

                        <React.Fragment>
                        <Button onClick={() => setModal(true)}>
                                Remove
                            </Button>
                            <Modal
                                show={modal}
                                size="md"
                                popup={true}
                                onClose={() => setModal(false)}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="text-center">
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            Are you sure you want to pass on applying for the position {job.name}?
                                        </h3>
                                        <div className="flex justify-center gap-4">
                                            <Button
                                                color="failure"
                                                onClick={() => handleRemove(job)}
                                            >
                                                Yes, I'm sure
                                            </Button>
                                            <Button
                                                color="gray"
                                                onClick={() => setModal(false)}
                                            >
                                                No, cancel
                                            </Button>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </React.Fragment>
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">{job.name}</h5>

                    {/* Data Info */}
                    <ul class="flex flex-wrap justify-start items-center mb-6 text-gray-900 dark:text-white text-sm">
                        <li>
                            <a href="#" class="mr-4 md:mr-6">{job.type_of_hire}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6 "><span class='text-black dark:text-gray-400'>Description: </span>{job.description}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6"><span class='text-black dark:text-gray-400'>Responsibilities: </span>{job.responsibilities}</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 md:mr-6"><span class='text-black dark:text-gray-400'>Qualifications: </span>{job.qualifications}</a>
                        </li>
                    </ul>

                </p>
            </div>
        </div>
    )
}

