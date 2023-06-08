import { BsChat } from "react-icons/bs";
import { FaRetweet, FaRegHeart, FaLink } from "react-icons/fa";

export function TweetCard({ avatarSrc, username, atName, description }) {
  return (
    <div className='flex px-3 py-3 gap-2 border-b-2 border-gray-300'>
      <div className='w-10 h-10 flex-shrink-0 '>
        <img src={avatarSrc} alt='Avatar' className='w-full h-full' />
      </div>

      <div className='flex flex-col justify-center flex-grow w-full'>
        <div>
          <span className='text-lg font-semibold'>{username} </span>
          <span className=' text-gray-500'>@{atName} </span>
          <span className=' text-gray-500'>Sat Jun 7 2023</span>
        </div>
        <p className='flex-shrink-0'>{description}</p>
        <div className='flex gap-28 items-center mt-4 '>
          <div className='flex justify-between w-14 p-1 hover:text-primary'>
            <BsChat className='text-xl cursor-pointer' />{" "}
            <span className=''>2</span>
          </div>
          <div className='flex justify-between w-14 p-1 hover:text-green-300'>
            <FaRetweet className='text-xl cursor-pointer' />
          </div>
          <div className='flex justify-between w-14 p-1 hover:text-red-400'>
            <FaRegHeart className='text-xl cursor-pointer' />
          </div>
          <div className='flex justify-between w-14 p-1 hover:text-primary'>
            <FaLink className='text-xl opacity-70 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}
