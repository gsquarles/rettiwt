import { BsChat } from "react-icons/bs";
import { FaRetweet, FaRegHeart, FaLink } from "react-icons/fa";

export function TweetCard({
  avatarSrc,
  username,
  atName,
  description,
  replies,
  retweets,
  likes,
  timestamp,
}) {
  const tweetDate = timestamp.toDate();
  const currentDate = new Date();

  let formattedDate;
  if (
    tweetDate.getFullYear() === currentDate.getFullYear() &&
    tweetDate.getMonth() === currentDate.getMonth()
  ) {
    formattedDate = tweetDate.toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } else {
    formattedDate = tweetDate.toLocaleDateString();
  }

  return (
    <div className='flex px-3 py-3 gap-2 border-b-2 border-gray-300'>
      <div className='w-10 h-10 flex-shrink-0 '>
        <img src={avatarSrc} alt='Avatar' className='w-full h-full' />
      </div>

      <div className='flex flex-col justify-center flex-grow w-full'>
        <div>
          <span className='text-lg font-semibold'>{username} </span>
          <span className=' text-gray-500'>@{atName} </span>
          <span className=' text-gray-500'>{formattedDate}</span>
        </div>
        <p className='flex-shrink-0'>{description}</p>
        <div className='flex gap-28 items-center mt-4 '>
          <div className='flex justify-between w-14 p-1 hover:text-primary'>
            <BsChat className='text-xl cursor-pointer' />{" "}
            {replies !== 0 && <span>{replies}</span>}
          </div>
          <div className='flex justify-between w-14 p-1 hover:text-green-400'>
            <FaRetweet className='text-xl cursor-pointer' />
            {retweets !== 0 && <span>{retweets}</span>}
          </div>
          <div className='flex justify-between w-14 p-1 hover:text-red-400'>
            <FaRegHeart className='text-xl cursor-pointer' />
            {likes !== 0 && <span>{likes}</span>}
          </div>
          <div className='flex justify-between w-14 p-1 hover:text-primary'>
            <FaLink className='text-xl opacity-70 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}
