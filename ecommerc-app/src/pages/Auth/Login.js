import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
   const navigate = useNavigate()
  const handleChange = (e) => {
    setValues({...values, [e.target.name] : [e.target.value]})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
    const response = await axios.post('https://localhost:3000/pages/Auth/login, values')
    if (response.status === 201) {
      navigate("/")

    }
  } catch(err) {
    console.log(err)
  }
  }
  return (
    
    <div className='flex justify-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-96'>
        <h2 className='text-lg font-bold mb-4'>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700'>Email</label>
          <input type='email' placeholder='Enter Email' className='focus:border-blue-500 w-full px-3 py-2 border'name="email" onChange={handleChange}/>
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700'>Password</label>
          <input type='password' placeholder='Enter Password' className='focus:border-blue-500 w-full px-3 py-2 border' name="password" onChange={handleChange}/>
        </div>
        <button className='w-full bg-green-600 text-white py-2'> Submit</button>
      </form>
      <div className='text-center'>
        <span>Already have an Account</span>
        <Link to='login' className='text-blue-400'>Login</Link>
      </div>
      </div> 
    </div>
  )
}

export default Login