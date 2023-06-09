export function SignUpForm() {
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <h1 className='mt-2 text-2xl font-bold'>Create your account</h1>
        <div className='w-1/2  flex justify-center '>
          <form className=' flex flex-col w-3/5  '>
            <label htmlFor='profilePic' className=' self-start '>
              Profile Picture
            </label>
            <input
              type='file'
              accept='image/*'
              id='profilePic'
              className='bg-gray-200 w-full py-4 border-b-2 border-gray-900 focus:border-primary focus:outline-none'
            />
            <label htmlFor='atName' className=' self-start'>
              At Name
            </label>
            <input
              type='text'
              id='atName'
              className='bg-gray-200 w-full py-4 px-3 text-xl  border-b-2 border-gray-900 vert  focus:border-primary focus:outline-none '
            />
            <label htmlFor='username' className=' self-start'>
              Username
            </label>
            <input
              type='text'
              id='username'
              className='bg-gray-200 w-full py-4 px-3 text-xl border-b-2 border-gray-900 focus:border-primary focus:outline-none'
            />
            <label htmlFor='email' className=' self-start'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-200 w-full py-4 px-3 text-xl border-b-2 border-gray-900 focus:border-primary focus:outline-none'
            />
            <label htmlFor='password' className=' self-start'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-200 w-full py-4 px-3 text-xl border-b-2 border-gray-900 focus:border-primary focus:outline-none'
            />
            <div className='flex flex-col items-center mt-3'>
              {/* Make this p element into a link to the Sign-In page */}
              <p className='text-lg underline text-blue-400'>
                Already have an account? Login here!
              </p>
              <p>This is all fake! It is for a portfolio so have fun!</p>
            </div>
            <button className='bg-primary py-3 px-4 text-lg font-bold rounded-full text-white mt-3'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
