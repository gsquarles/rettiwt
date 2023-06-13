import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { UsersContext } from "../RootLayout";
import { useForm } from "react-hook-form";

export function TweetForm() {
  const { myProfile, setShowTweetForm, setTweets } = useContext(UsersContext);

  const { register, handleSubmit } = useForm();

  const handleTextareaChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  function onSubmit(data) {
    const newTweet = {
      avatarSrc: myProfile.profilePic,
      username: myProfile.username,
      atName: myProfile.atName,
      description: data.description,
      replies: 0,
      retweets: 0,
      likes: 0,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
    setShowTweetForm(false);
  }

  return (
    <form
      className='flex flex-col w-[600px] bg-gray-100  border-2 border-gray-300 rounded-md shadow-sm'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className='p-4 w-full border-b-2 border-gray-300'
        onClick={() => setShowTweetForm(false)}
      >
        <HiX className='text-primary text-xl cursor-pointer' />
      </div>
      <div className='flex w-full gap-4 p-4 '>
        <div className='w-1/12 h-12'>
          <img
            src={myProfile.profilePic}
            alt='Profile Picture'
            className='w-full h-full'
          />
        </div>
        <div className=' w-11/12 flex flex-col'>
          <textarea
            {...register("description")}
            placeholder="What's happening?"
            className='w-full resize-none break-all overflow-hidden bg-gray-100 flex-grow focus:outline-none text-xl'
            style={{ overflowWrap: "break-word" }}
            onChange={handleTextareaChange}
          ></textarea>
          <div className='border-b-2 border-gray-300 w-full mt-2'></div>
        </div>
      </div>
      <div className='w-full flex justify-end mb-3 px-4'>
        <button className='py-2 px-8 bg-primary text-white font-semibold rounded-full'>
          Tweet
        </button>
      </div>
    </form>
  );
}
