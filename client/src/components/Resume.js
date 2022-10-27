import React, {useState} from "react"
import { useHistory } from 'react-router-dom'
import { Radio, Select, Label, TextInput, FileInput, Button } from 'flowbite-react'


// import dayjs, { Dayjs } from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Resume( { onInterview, myInterviews, setMyInterviews}) {
   
  const history = useHistory()

  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      url: "",
  });


  const { name, email, phone, url } = formData;

  function handleChange(e) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  }

   
  function onInterviewSubmit(e) {
    e.preventDefault();
    fetch('/resumes', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
}).then((res) => {
  if (res.ok) {
      res.json().then((formData) => {
        (setMyInterviews([...myInterviews, formData.id]))
          // home page pushed after submit
          history.push('/')
      });
  } else {
      res.json().then((data) => {
          setErrors(data);
      });
  }
});
}




    return (
     
      <React.Fragment 
      >
                <div id="interview-container">
                  <div id="interview-card">
                <form id="interview-form">
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
                            <h3 className="text-xl font-medium dark:text-black">
                                Submit Your Resume
                            </h3>
                            {errors.length > 0 ?
                                <></>
                                :
                                <h6 className='text-sm text-red-600'>{errors.error}</h6>
                            }
                            <div >
                                <div >
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your name" 
                                    id="form-text-1"/>
                                </div>
                                </div>
                                <TextInput
                                    placeholder="Amazing Human"
                                    required={true}
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    id="form-input"
                                />
                                <br/>
                                <div >
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" 
                                    id="form-text-1"/>
                                </div>
                                <TextInput
                                    placeholder="name@email.com"
                                    required={true}
                                    name="email"
                                    value={email}
                                    onChange  ={handleChange}
                                    id="form-input"
                                />
                                </div>
                                <br/>
                                <div >
                                <div className="mb-2 block">
                                    <Label htmlFor="number" value="Your phone number" 
                                    id="form-text-1"/>
                                </div>
                                <TextInput
                                    placeholder="555-555-5555"
                                    required={true}
                                    name="phone"
                                    value={phone}
                                    onChange={handleChange}
                                    id="form-input"
                                />
                                </div>
                               
                            </div>
                          

                            <div id="fileUpload">
                              <div className="mb-2 block">
                                <Label
                                id="select-times"
                                  htmlFor="file"
                                  value={url}
                                />Link Your Resume Here
                              </div>
                              <FileInput
                                id="file"
                                helperText="If you would like to apply to jobs with one click, sign up for an account and attach a resume to your profile."
                              />
                            </div>
      
                              <br/>
                            <div className="w-full">
                                <Button type="submit" id="form-button" onSubmit={onInterviewSubmit}>Submit Resume</Button>
                            </div>
                        </div>
                    </form>
             </div>
             </div>
        
            </React.Fragment>
    )

}