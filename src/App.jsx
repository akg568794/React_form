import './App.css';
import React,{useState} from 'react'

export default function App() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    username:"",
    email:" ",
    password:"",
    phoneNo:"",
    country:"India",
    city:"",
    panNo:"",
    aadharNo:""

  })
  function changeHandler(event){
    const {name,value,checked, type}=event.target;
    setFormData((prev)=>({...prev,[name]:type==="checkbox"? checked:value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className='w-full md:max-w-[50%] mx-auto shadow p-8 '>
      <form className="space-y-2" onSubmit={submitHandler}>
      <label className="text-gray-900 leading-6 text-sm font-medium"  htmlFor='firstName'>First Name </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400  placeholder:font-normal"  onChange={changeHandler} type='text' name='firstName' id="firstName" placeholder="first name" value={formData.firstName}></input><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='lastName'>Last Name </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='lastName' id="lastName" placeholder="last name" value={formData.lastName}></input><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='email'>Username </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='username' id="username" placeholder="akg56" value={formData.username}></input><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='email'>Email</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='email' name='email' id="email" placeholder="abc@gmail.com" value={formData.email}></input><br/>
      
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='password'>Password</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='password' name='password' id="password" placeholder="" value={formData.password}></input><br/>
      
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='phoneNo'>PhoneNo</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='tel' name='phoneNo' id="phoneNo" placeholder="+91-8799xxxxxx" value={formData.phoneNo}></input><br/>
      

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='country'>Country</label><br/>
      <select onChange={changeHandler} className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" value={formData.country} name='country' id='country'>
      <option value='india'>India</option>
        <option value='usa'>USA</option>
        <option value='canada'>Canada</option>
        <option value='australia'>Australia</option>
        <option value='uk'>UK</option>
      </select><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='panNo'>Pan-No</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='number' name='panNO' id="panNO" placeholder="ABCTY1234D" value={formData.panNo}></input><br/>
      
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='aadharNo'>Aadhar-No</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='number' name='aadharNo' id="aadharNo" placeholder="2653 8564 4663" value={formData.aadharNo}></input><br/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          
      </form>
    </div>
  )
}


