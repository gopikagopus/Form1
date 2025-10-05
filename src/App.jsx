import { useState } from 'react'
import './App.css'

function App() {
    const [values,setValues]= useState({
      name:'',
      email:'',
      contact:'',
      gender:'',
      subject:'',
      resume:'',
      about:''
    })
     
    const handleChanges = (e) => {
      setValues ({...values, [e.target.name]:[e.target.value]})
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(values);
      
    }

    const ResetFun = () => {
       setValues ({name:'', Email:'',contact:'',about:''})
    }

  return (
    <>
      <div className="container">
        <h1>STUDENT FORM</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="enter name" name="name" 
          onChange={(e) => handleChanges(e)} required value={values.name}/>

          <label htmlFor="Email">Email</label>
          <input type="text" placeholder="enter email" name="Email" 
          onChange={(e) => handleChanges(e)} required value={values.Email}  />

          <label htmlFor="contact">contact</label>
          <input type="text" placeholder="enter number" name="contact"
           onChange={(e) => handleChanges(e)} required value={values.contact} />

          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender"
           onChange={(e) => handleChanges(e)} />Male
          <input type="radio" name="gender"
           onChange={(e) => handleChanges(e)} />Female
          <input type="radio" name="gender"
           onChange={(e) => handleChanges(e)} />other

          <label htmlFor="subject">Your Best Subject</label>
          <select name="subject" id="subject"
           onChange={(e) => handleChanges(e)}>
            <option value="math">BSC.COMPUTER SCIENCE</option>
            <option value="hindi">BCA</option>
            <option value="eng">MCA</option>
            <option value="maL">MSC.COMPUTER SCIENCE</option>
            <option value="hiStory">BBA</option>
            <option value="che">MBA</option>
          </select>
          
          <label htmlFor="resume">Resume</label>
          <input type="file"placeholder="select Resume" name="resume"
           onChange={(e) => handleChanges(e)}/>

          <label htmlFor="about">About</label>
           <textarea name="about" id="about" cols="30" rows="10"
             onChange={(e) => handleChanges(e)} required value={values.about}  placeholder="Enter description"></textarea>

          <button type="button" onClick={ResetFun}>RESET</button>
          <button type="submit">SUBMIT</button>

        </form>
      </div>

    </>
  );
}

export default App
