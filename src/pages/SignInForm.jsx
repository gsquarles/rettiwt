import { useForm } from "react-hook-form";
import { UsersContext } from "../RootLayout";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export function SignInForm() {
  const { setIsSignedIn, setMyProfile } = useContext(UsersContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit(data) {
    const user = {
      email: data.email,
      password: data.password,
    };

    try {
      const q = query(
        collection(db, "users"),
        where("email", "==", user.email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const foundUser = querySnapshot.docs[0].data();

        if (foundUser.password === user.password) {
          setIsSignedIn(true);
          setMyProfile(foundUser);
          navigate("/");
        } else {
          setError("password", {
            type: "manual",
            message: "Password is incorrect",
          });
        }
      } else {
        setError("email", { type: "manual", message: "Email is incorrect" });
      }
    } catch (error) {
      console.error("Error retrieving user data: ", error);
    }
  }

  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <h1 className='mt-2 text-2xl font-bold'>Sign in to your account</h1>
        <div className='w-1/2  flex justify-center '>
          <form
            className=' flex flex-col w-3/5  '
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor='email' className=' self-start'>
              Email
            </label>
            {isSubmitted && errors.email && (
              <span className='text-red-500'>{errors.email.message}</span>
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
              <span className='text-red-500'>{errors.password.message}</span>
            )}
            <div className='flex flex-col items-center mt-3'>
              {/* Make this p element into a link to the Sign-In page */}
              <Link to='/signup' className='text-lg underline text-blue-400'>
                Don&apos;t have an account? Sign up here!
              </Link>
              <p>This is all fake! It is for a portfolio so have fun!</p>
            </div>
            <button className='bg-primary py-3 px-4 text-lg font-bold rounded-full text-white mt-3'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
