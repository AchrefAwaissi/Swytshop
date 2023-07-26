import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useState,useContext } from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'

const signin = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const {  email, password } = userData
const[state,dispatch]=useContext(DataContext)
  

const handleChangeInput = e => {
      const {name, value} = e.target
      setUserData({...userData, [name]:value})
  dispatch({type: 'NOTIFY', payload: {}})  
  }


  const handleSubmit = async e => {
      e.preventDefault()
    /*   const errMsg = valid( email, password)
      if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })
   */
      dispatch({ type: 'NOTIFY', payload: {loading: true} })
  
      const res = await postData('auth/register', userData)
      console.log(res)
      if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

      return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
     /*  if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
  
      return dispatch({ type: 'NOTIFY', payload: {success: res.msg} }) */
    }
  return (
    <div>
        <Head>
            <title>
                Sign in Page
            </title>
        </Head>
        <form className='mx-auto my-4' style={{maxWidth:"500px"}} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name='email' value={email}onChange={handleChangeInput}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password'value={password} onChange={handleSubmit}/>
  </div>
  <button type="submit" className="btn btn-dark w-100">Login</button>
   <p className='my-2'>you dont have an account?<Link href='/register' legacyBehavior><a style={{color:"crimson"}}>Register</a></Link></p>
</form>
</div>
  )
}

export default signin