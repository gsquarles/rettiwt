import { useForm } from "react-hook-form";
import { UsersContext } from "../RootLayout";
import { useContext } from "react";
import defaultIcon from "../assets/flowerIcon.png";
import { Link, useNavigate } from "react-router-dom";

export function SignUpForm() {
  const { setUsers, setIsSignedIn, setMyProfile } = useContext(UsersContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    const user = {
      profilePic: data.profilePic[0]
        ? URL.createObjectURL(data.profilePic[0])
        : defaultIcon,
      atName: data.atName,
      username: data.username,
      email: data.email,
      password: data.password,
    };

    setUsers((prevUsers) => [...prevUsers, user]);
    setIsSignedIn(true);
    setMyProfile(user);

    navigate("/");
  }

  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <h1 className='mt-2 text-2xl font-bold'>Create your account</h1>
        <div className='w-1/2  flex justify-center '>
          <form
            className=' flex flex-col w-3/5  '
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor='profilePic' className=' self-start '>
              Profile Picture
            </label>
            <input
              {...register("profilePic")}
              type='file'
              accept='image/*'
              id='profilePic'
              className='bg-gray-200 w-full py-4 border-b-2 border-gray-900 focus:border-primary focus:outline-none'
            />
            <label htmlFor='atName' className=' self-start'>
              At Name
            </label>

            <input
              {...register("atName", {
                required: { value: true, message: "Required" },
              })}
              type='text'
              id='atName'
              className={`bg-gray-200 w-full py-4 px-3 text-xl  border-b-2   ${
                isSubmitted && errors.atName
                  ? "border-red-500"
                  : "border-gray-900"
              } focus:border-primary focus:outline-none `}
            />
            {isSubmitted && errors.atName && (
              <span className='text-red-500'>Required</span>
            )}
            <label htmlFor='username' className=' self-start'>
              Username
            </label>

            <input
              {...register("username", {
                required: { value: true, message: "Required" },
              })}
              type='text'
              id='username'
              className={`bg-gray-200 w-full py-4 px-3 text-xl  border-b-2   ${
                isSubmitted && errors.atName
                  ? "border-red-500"
                  : "border-gray-900"
              } focus:border-primary focus:outline-none `}
            />
            <label htmlFor='email' className=' self-start'>
              Email
            </label>
            {isSubmitted && errors.email && (
              <span className='text-red-500'>Required</span>
            )}
            <input
              {...register("email", {
                required: { value: true, message: "Required" },
              })}
              type='email'
              id='email'
              className={`bg-gray-200 w-full py-4 px-3 text-xl  border-b-2   ${
                isSubmitted && errors.atName
                  ? "border-red-500"
                  : "border-gray-900"
              } focus:border-primary focus:outline-none `}
            />
            {isSubmitted && errors.username && (
              <span className='text-red-500'>Required</span>
            )}
            <label htmlFor='password' className=' self-start'>
              Password
            </label>

            <input
              {...register("password", {
                required: { value: true, message: "Required" },
              })}
              type='password'
              id='password'
              className={`bg-gray-200 w-full py-4 px-3 text-xl  border-b-2   ${
                isSubmitted && errors.atName
                  ? "border-red-500"
                  : "border-gray-900"
              } focus:border-primary focus:outline-none `}
            />
            {isSubmitted && errors.password && (
              <span className='text-red-500'>Required</span>
            )}
            <div className='flex flex-col items-center mt-3'>
              {/* Make this p element into a link to the Sign-In page */}
              <Link to='/signin' className='text-lg underline text-blue-400'>
                Already have an account? Login here!
              </Link>
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
