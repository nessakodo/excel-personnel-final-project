import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown } from 'flowbite-react'
import icon from "../assets/as-icon.png"
import defaultpic from '../assets/profile-pic.webp'


function NavBar({setJobsComp, profPhoto, loggedIn, setCurrentCandidate, currentCandidate, setLoggedIn, setVisible,  setProfileCard,} ) {

    const history = useHistory()

      
    function toLogin() {
        history.push('/login')
        setVisible(true)
    }


    function handleProfDropClick(e) {
        const click = e.target.textContent
        if (click === "Account") {
            setProfileCard(true)
            setJobsComp(false)
        }
        else if (click === "My Jobs") {
            setProfileCard(false)
            setJobsComp(true)
        } else  {
            setProfileCard(false)
            setJobsComp(false)
        }
        history.push('./profile')

    }

    function onSignOut() {
        fetch('/logout', { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    setCurrentCandidate(null)
                    setLoggedIn(false)
                    history.push('./')
                }
            })
    }


    return (
        <div>
            <Navbar 
                fluid={true}
                rounded={true}
                class="mb-5 mt-5"
            >
                <Navbar.Brand href="/">
                    <img
                        src={icon}
                        className="ml-10 mr-5 h-6 sm:h-9"
                        alt="Excel Personnel"
                    />
                    <span className=" self-center whitespace-nowrap text-xl font-semibold dark:text-gray ">
                        Excel Personnel
                    </span>
                </Navbar.Brand>
            
                {loggedIn ?
                    (<div className="flex md:order-2 ">
                        <Dropdown
                            inline={true}
                            label={currentCandidate ? <img class='object-cover w-12 h-12 rounded-full border-2 border-gray-100' src={profPhoto.image_url} alt='' /> :
                            null}
                        >
                            <Dropdown.Header >
                                <span className="block text-sm">
                                    Signed in as:
                                </span>
                                <span className="block truncate text-sm font-bold">
                                    {currentCandidate.name}
                                </span>
                                </Dropdown.Header>
                               
                                <Dropdown.Item onClick={handleProfDropClick}>
                                    Account
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleProfDropClick}>
                                    My Jobs
                                </Dropdown.Item>
                            

                            <Dropdown.Item onClick={(onSignOut)} >
                            <strong>Sign out</strong>
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                    :
                    (<div className="mr-10 flex md:order-2 ">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<img class='object-cover w-12 h-12' src={defaultpic} alt='' />}
                        >
                            <Dropdown.Header>
                                <span className="block text-md font-bold ">
                                Excel Personnel Portal
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={toLogin}>
                                Login
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                }

                <Navbar.Collapse >
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="./about">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="./candidates"
                    >
                        Candidates
                    </Navbar.Link>
                    <Navbar.Link href="./clients">
                        Clients
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div class='flex flex-col items-center '> 
                <div className='absolute pt-20 text-gray-900'>
            </div>
        </div>
    </div >

    )
}

export default NavBar