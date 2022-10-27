import React, {useState, useEffect} from "react"
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';


// Page imports
import NavBar from "./components/NavBar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Clients from "./components/Clients"
import Candidates from "./components/Candidates"
import Interview from "./components/Interview"
import Resume from "./components/Resume"
import About from "./components/About"
import Opportunities from "./components/Opportunities"


export default function App() {

  // states declared
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentCandidate, setCurrentCandidate] = useState({})
  const [visible, setVisible] = useState(false)
  const [profileCard, setProfileCard] = useState(true)
  const [profPhoto, setProfPhoto] = useState([])
  const [jobsComp, setJobsComp] = useState(false)
  const [myJobs, setMyJobs] = useState([])
  const [jobs, setJobs] = useState([])
  const [myInterviews, setMyInterviews] = useState([])

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // log in fetch
  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          res.json()
            .then(
              candidate => {
                setCurrentCandidate(candidate)
                setMyJobs(candidate.jobs)
                fetchProfPhoto(candidate.id)
              }
            )
        }
      }
      )
  }, [loggedIn]);

  // fetching profile photo
  function fetchProfPhoto(id) {
    fetch(`/current_candidate_photos?id=${id}`)
      .then(r => r.json())
      .then(photosArr => {
        setProfPhoto(photosArr)
      })
  }

  useEffect(() => {
    fetch("/jobs")
      .then(r => r.json())
      .then(jobsArr => setJobs(jobsArr))
  }, [])

  function onApply(appliedJob) {
    const apply = {
      candidate_id: currentCandidate.id,
      job_id: appliedJob.id,
      applied: true
    }
    fetch('/applied_jobs', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(apply),
    })
      .then((res) => res.json())
      .then(setMyJobs([...myJobs, appliedJob]))

  }

 
  function onRemove(removedJob) {
    fetch(`/remove?job=${removedJob.id}&candidate=${currentCandidate.id}`, { 
      method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setMyJobs(myJobs.filter(job => job.id !== removedJob.id))
        }
        else {
          console.log("error")
        }

      })

  }

  // routes from app using browser router declared
  return (
  <BrowserRouter>
  <NavBar
      loggedIn={loggedIn}
      currentCandidate={currentCandidate}
      setLoggedIn={setLoggedIn}
      setCurrentCandidate={setCurrentCandidate}
      setProfileCard={setProfileCard}
      visible={visible}
      setVisible={setVisible}
      profPhoto={profPhoto}
      setJobsComp={setJobsComp}
        />
  <div className="app">
    <Switch>
      <Route exact path="/">
       <Home />
      </Route>
          
      <Route path="/about">
        <About />
      </Route>
  
      <Route path="/clients">
          <Clients />
      </Route>


      <Route exact path="/candidates">
            <Candidates/>
          </Route>
      <Route path="/Opportunities">
          <Opportunities 
          currentCandidate={currentCandidate}
          jobs={jobs}
          loggedIn={loggedIn}
          onApply={onApply}/>
      </Route>

      <Route path="/signup">
        <Signup
          setCurrentCandidate={setCurrentCandidate}
          setLoggedIn={setLoggedIn}
        />
      </Route>
      <Route exact path="/login">
            <Login
              setCurrentCandidate={setCurrentCandidate}
              setLoggedIn={setLoggedIn}
              visible={visible}
              setVisible={setVisible} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/interview">
            <Interview 
            currentCandidate={currentCandidate}
            loggedIn={loggedIn}
             />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          {currentCandidate &&
            <Route exact path="/profile">
              <Profile
                currentCandidate={currentCandidate}
                setCurrentCandidate={setCurrentCandidate}
                setProfileCard={setProfileCard}
                profPhoto={profPhoto}
                setJobsComp={setJobsComp}
                myJobs={myJobs}
                onRemove={onRemove}
                myInterviews={myInterviews}
             />
            </Route>
          }
    </Switch>
  </div>
</BrowserRouter>


);
}