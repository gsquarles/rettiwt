import { useForm } from "react-hook-form";
import { UsersContext } from "../RootLayout";
import { useContext } from "react";
import defaultIcon from "../assets/flowerIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export function SignUpForm() {
  const { setUsers, setIsSignedIn, setMyProfile } = useContext(UsersContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const navigate = useNavigate();

  const validateAtName = (value) => {
    if (/\s/.test(value)) {
      return "Spaces are not allowed";
    }
    if (value.length < 3 || value.length > 15) {
      return "Must be between 3 and 12 characters";
    }

    return true;
  };

  const validateUsername = (value) => {
    if (value.length < 2 || value.length > 15) {
      return "Must be between 3 and 12 characters";
    }

    return true;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
    return true;
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(value)) {
      return "Password must contain at least one capital letter and one number";
    }
    return true;
  };

  function onSubmit(data) {
    const user = {
      profilePic: data.profilePic[0]
        ? URL.createObjectURL(data.profilePic[0])
        : defaultIcon,
      atName: data.atName,
      username: data.username,
      email: data.email,
      password: data.password,
      myTweets: [],
    };

    //Add user to the Firestore collection
    addDoc(collection(db, "users"), user)
      .then(() => {
        //Document added successfully
        setUsers((prevUsers) => [...prevUsers, user]);
        setIsSignedIn(true);
        setMyProfile(user);
        navigate("/");
      })
      .catch((error) => {
        //Error occured while adding the document
        console.error("Error adding document: ", error);
      });
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
                required: {
                  value: true,
                  message: "Required",
                },
                validate: validateAtName,
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
              <span className='text-red-500'>{errors.atName.message}</span>
            )}
            <label htmlFor='username' className=' self-start'>
              Username
            </label>

            <input
              {...register("username", {
                required: { value: true, message: "Required" },
                validate: validateUsername,
              })}
              type='text'
              id='username'
              className={`bg-gray-200 w-full py-4 px-3 text-xl  border-b-2   ${
                isSubmitted && errors.username
                  ? "border-red-500"
                  : "border-gray-900"
              } focus:border-primary focus:outline-none `}
            />

            {isSubmitted && errors.email && (
              <span className='text-red-500'>{errors.username.message}</span>
            )}
            <label htmlFor='email' className=' self-start'>
              Email
            </label>
            <input
              {...register("email", {
                required: { value: true, message: "Required" },
                validate: validateEmail,
              })}
              type='email'
              id='email'
              className={`bg-gray-200 w-full py-4 px-3 text-xl  border-b-2   ${
                isSubmitted && errors.email
                  ? "border-red-500"
                  : "border-gray-900"
              } focus:border-primary focus:outline-none `}
            />
            {isSubmitted && errors.username && (
              <span className='text-red-500'>{errors.email.message}</span>
            )}
            <label htmlFor='password' className=' self-start'>
              Password
            </label>

            <input
              {...register("password", {
                required: { value: true, message: "Required" },
                validate: validatePassword,
              })}
              type='password'
              id='password'
              className={`bg-gray-200 w-full py-4 px-3 text-xl  border-b-2   ${
                isSubmitted && errors.password
                  ? "border-red-500"
                  : "border-gray-900"
              } focus:border-primary focus:outline-none `}
            />
            {isSubmitted && errors.password && (
              <span className='text-red-500'>{errors.password.message}</span>
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
