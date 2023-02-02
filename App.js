import React ,{useState} from 'react'
import './App.css'
export default function App() {
  const [fName, setFName] = useState("")
  const[lName,setLName]=useState("")
  const [email, setEmail] = useState("")
  const[course, setCourse] = useState("")
  const [gender, setGender] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUsername] = useState("")
  const [fNameError, setFNameError] = useState("")
  const [lNameError, setLNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const[courseError,setCourseError]=useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [genderError, setGenderError] = useState("")
  const [emptyError,setEmptyError] = useState("")
  const resetErrorDefault =()=>{
    setFNameError("")
    setLNameError("")
    setPhoneNumberError("")
    setPasswordError("")
    setEmailError("")
    setCourseError("")
    setGenderError("")
    setEmptyError("")
  }
  const validate =()=>{
    if(
      fName === "" ||lName==="" || email === "" || course ===""||gender === "" || phoneNumber==="" ||password===""
    ){
         setEmptyError("*Please fill all the fields*")
         setUsername("")
         return false
     }
     if(!fName.match(/^[A-Za-z0-9- ]+$/)){
          setFNameError(" First name is not alphanumeric")
          setUsername("")
          return false
     }
     if(!lName.match(/^[A-Za-z0-9- ]+$/)){
      setLNameError("Last name is not alphanumeric")
     }
     if (!email.includes("@")){
      setEmailError("Email must contain @")
      setUsername("")
      return false;
     }
     if(!gender.match(/male|female|others|not to say/i)){
      setGenderError("Choose your gender")
      setUsername("")
      return false
     }
     if(!phoneNumber.match(/^[0-9]+$/)){
      setPhoneNumberError("Phone number must contain only numbers")
      setUsername("")
      return false;
     }
     if(password.length < 10){
      setPasswordError("Password must contain at least 6 letters")
      setUsername("")
      return false;
     }
  }
 const handleSubmit =(e)=>{
  e.preventDefault()
  resetErrorDefault()
  const isValid = validate()
  if (isValid){
    setFName("")
    setLName("")
    setEmail("")
    setCourse("")
    setGender("")
    setPhoneNumber("")
    setPassword("")
    resetErrorDefault()
    
  }
  setUsername(email.substr(0,email.indexOf("@")))
 }
  return (
    
    <div className='colors'>
    <div className='container mx-auto' style={{width:"500px"}}>
    <div className="card" style={{width: "540px",height:"800px"}}>
    <img src="https://t4.ftcdn.net/jpg/02/77/94/67/360_F_277946761_Zg047WwIdSHaXxeY8JTJ0I5QTIL4UYSt.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
    
    <form  className ="row mb-3"onSubmit={handleSubmit} style ={{textAlign:"center"}}>
    <h3> Registration Form</h3>
    <div className="col-mb-3">
     <label for ="FName">First Name:</label>
    <input type="text"placeholder='First Name' value={fName} onChange = {(e)=>{setFName(e.target.value)}}/> <br />
    <span>{fNameError}</span>
    </div>
    <br/>
    <div className="col-mb-3">
    <label for ="LName">Last Name:</label>
    <input type="text" placeholder=' Last Name' value={lName} onChange = {(e)=>{setLName(e.target.value)}}/> <br />
    <span> {lNameError}</span>
    </div>
    <br/>
    <div className="col-mb-3">
    <label for ="Email"> Your Email:</label>
    <input type="text" placeholder='Email' value={email} onChange = {(e)=>{setEmail(e.target.value)}}/><br/>
    <span>{emailError}</span>
    </div>
    <br/>
    <div className='col-mb-3'>
    <label for="Course">Course:</label>
    <select name="course" style={{width:'54%',margin:'1%'}}  value={course} onChange = {(e)=>{setCourse(e.target.value)}}>
    <option value="select course">Select your course</option>
      <optgroup label="Engineering">
        <option value="cse">CSE</option>
        <option value="electrical">Electrical</option>
        <option value="mechanical">Mechanical</option>
        <option value="aerospace">Aerospace</option>
        <option value="chemical">Chemical</option>
      </optgroup>
      <optgroup label="LLB">
        <option value="constitutional">ConstitutionalLaw</option>
        <option value="labour">Labour Law</option>
      <option value="family">Family Law</option>
      <option value="taxation"> Taxation Law</option>
      <option value="criminal"> Criminal Law</option>
      </optgroup>
    </select>  <br/>
    <span >{courseError}</span>
    </div>
    <br/>
    <div className='col-mb-3'>
    <label for ="Gender">Gender:</label>
    <select name="gender" style={{width:'54%',margin:'1%'}}  value={gender} onChange = {(e)=>{setGender(e.target.value)}}>
      <option value="select gender">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Others</option>
      <option value="nottosay">NotToSay</option>
    </select><br />
    <span>{genderError}</span>
    </div>
    <br/>
    <div className='col-mb-3'>
    <label for ="Phone">Phone No :</label>
    <input type="text" placeholder='Phone Number' value={phoneNumber} onChange = {(e)=>{setPhoneNumber(e.target.value)}}/><br/>
    <span>{phoneNumberError}</span>
    </div>
    <br/>
    <div className='col-mb-3'>
    <label for ="Password"> Password:</label>
    <input type="password" placeholder='Password' value={password} onChange = {(e)=>{setPassword(e.target.value)}}/><br/>
    <span>{passwordError}</span>
    <span>{emptyError}</span><br />
  </div>
  <br/>
  <br/>
    <div className='col-mb-3'>
    <button type="submit" class="btn btn-dark btn-sm">Submit</button>
<br />
    </div>
  </form>
    </div>
  </div>
  </div> 
    </div>
    
  )
}
