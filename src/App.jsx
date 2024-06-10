import './App.css';
import React,{useEffect, useState} from 'react'
import {countries} from "./Data";

export default function App() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    phoneNo:"",
    country:"Select Country",
    state:"",
    city:"",
    panNo:"",
    aadharNo:""

  })
  // const initialValues={username:"",email:"",password:""}
  // const [formValues,setFormValues]=useState(initialValues);

  const [states,setStates]=useState([]);
  const [cities,setCities]=useState([]);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  function changeHandler(event){
    const {name,value,checked, type}=event.target;
    setFormData((prev)=>({...prev,[name]:type==="checkbox"? checked:value}))
  }

  function changeCountry(event){
    setStates(countries.find(country => country.name===event.target.value).states);
    setFormData((prev)=>({...prev,country:event.target.value}));

  }

  function changeState(event){
    setCities(states.find(state=>state.name===event.target.value).cities);
    setFormData((prev)=>({...prev,state:event.target.value}));
  }
  function changeCity(event){
    setFormData((prev)=>({...prev,city:event.target.value}));
  }

  function submitHandler(event){
    event.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
    // console.log(formData);
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      alert("Form submitted");
    }
  },[formErrors]);


  const validate=(values)=>{
    const errors={};
    const regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if(!values.username){
      errors.username="Username is required";
    }
    if(!values.email){
      errors.email="Email is required";
    }else if(!regex.test(values.email)){
      errors.email="Please enter a valid email address"
    }
    
    if(!values.password){
      errors.password="Password is required";
    }else if(values.password.length<4){
      errors.password="Password must be more than 4 characters ";
    }else if(values.password.length>10){
      errors.password="Password must be less than 10 characters ";
    }
    return errors;
  }
  return (
    <div className='w-full md:max-w-[50%] mx-auto shadow p-8 '>
      <h1 className='text-center font-bold text-blue-500 text-2xl py-2  '>Registration form</h1>
      <form className="space-y-2" onSubmit={submitHandler}>
      <label className="text-gray-900 leading-6 text-sm font-medium"  htmlFor='firstName'>First Name </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400  placeholder:font-normal"  onChange={changeHandler} type='text' name='firstName' id="firstName" placeholder="first name" value={formData.firstName}></input><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='lastName'>Last Name </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='lastName' id="lastName" placeholder="last name" value={formData.lastName}></input><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='email'>Username </label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='username' id="username" placeholder="akg56" value={formData.username}></input><br/>
      <p className='text-red-500'>{formErrors.username}</p>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='email'>Email</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='email' name='email' id="email" placeholder="abc@gmail.com" value={formData.email}></input><br/>
      <p className='text-red-500'>{formErrors.email}</p>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='password'>Password</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='password' name='password' id="password" placeholder="" value={formData.password}></input><br/>
      <p className='text-red-500'>{formErrors.password}</p>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='phoneNo'>PhoneNo</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='tel' name='phoneNo' id="phoneNo" placeholder="+91-8799xxxxxx" value={formData.phoneNo}></input><br/>
      

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='country'>Country</label><br/>
      <select onChange={changeCountry} className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" value={formData.country} name='country' id='country'>
        <option>--Select Country--</option>
        {
          countries.map((country)=>{
            return <option key={country.id} value={country.name}>{country.name}</option>
          })
        }
      </select><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='state'>State</label><br/>
      <select onChange={changeState} className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" value={formData.state} name='state' id='state'>
        {states.map((state)=>{
          return <option key={state.id} value={state.name}>{state.name}</option>
        })}
      </select><br/>


      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='city'>City</label><br/>
      <select onChange={changeCity} className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" value={formData.city} name='city' id='city'>
        {
          cities.map((city)=>{
            return <option key={city.id} value={city.name}>{city.name}</option>
          })
        }
      </select><br/>

      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='panNo'>Pan-No</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='text' name='panNo' id="panNo" placeholder="ABCTY1234D" value={formData.panNo}></input><br/>
      
      <label className="text-gray-900 leading-6 text-sm font-medium" htmlFor='aadharNo'>Aadhar-No</label><br/>
      <input className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal" onChange={changeHandler} type='number' name='aadharNo' id="aadharNo" placeholder="2653 8564 4663" value={formData.aadharNo}></input><br/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          {Object.keys(formErrors).length===0 && isSubmit ? (<div>Signed in sucessfully!</div>):("")}
      </form>
    </div>
  )
}


