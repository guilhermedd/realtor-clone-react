import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import OAuth from '../components/OAuth';

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <div>
        <section className='text-3xl text-center mt-6 font-bold'>
          <h1>Forgot Password</h1>
        </section>
      </div>
      <div className='flex justify-center flex-wrap
        items-center px-6 py-12 max-w-12xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:md-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="Key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20 bg-bl'>
          <form >
            <div className='realative mb-6'>
              <input type="email"
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none md:my-5 lg:my-10 my-10'
                id='email'
                value={email}
                onChange={onChange}
                placeholder='Email address'
              />
              <div className='flex justify-between whitespace-nowrap text-sm sm:tex-lg'>
                <p>Don't have an account?
                  <Link to='/SignUp' className='text-red-500 hover:text-red-700
                  trasition duration-200 ease-in-out m-1'> Register</Link>
                </p>
                <p>
                  <Link to='/SignIn' className='text-blue-500 hover:text-blue-700
                  trasition duration-200 ease-in-out m-1'>Sign In</Link>
                </p>
              </div>
            </div>
            <Button className='w-full text-sm'>Send Reset Password</Button>
          </form>
          <div className='my-4 before:border-t flex before:flex-1 items-center
          before:border-gray-300 after:border-t after:flex-1
          after:border-gray-300'>
            <p className='text-center my-2 mx-4 font-semibold'>OR</p>
          </div>
          <OAuth />
        </div>
      </div>
    </>
  );
}
