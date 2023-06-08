import { FaEarlybirds } from "react-icons/fa";
import { SlMagnifier, SlSettings } from "react-icons/sl";
import { TweetBtn } from "../components/TweetBtn";
import { TweetCard } from "../components/TweetCard";
import flowerIcon from "../assets/flowerIcon.png";

const TWEETS = [
  {
    avatarSrc: flowerIcon,
    username: "Griffin",
    atName: "BobbyJones",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
];

export function Home() {
  return (
    <>
      <div className='flex'>
        <div className='w-3/12  h-screen fles flex-col px-8 py-4 justify-center items-center'>
          <div className='flex justify-center w-3/5 mb-5'>
            {" "}
            <FaEarlybirds
              style={{ color: "#1d9bf0" }}
              className='text-4xl hover:scale-105 cursor-pointer '
            />
          </div>
          <div className='flex justify-evenly items-center w-3/5 py-2 ml-16 mb-5 cursor-pointer hover:bg-slate-300 hover:rounded-full hover:py-2'>
            <SlMagnifier className='text-4xl ' />
            <span className='text-2xl font-medium '>Explore</span>
          </div>
          <div className='flex justify-center items-center'>
            <TweetBtn />
          </div>
        </div>
        <main className='w-5/12  h-screen  border-l-2 border-r-2 border-gray-300 overflow-auto '>
          <div className='sticky top-0 bg-white z-10'>
            <div className='flex items-center justify-between px-4 py-4'>
              <span className='text-2xl font-medium '>Explore</span>
              <SlSettings className='text-2xl' />
            </div>
          </div>
          <div className=' pb-4'>
            {TWEETS.map((tweet, idx) => {
              return (
                <TweetCard
                  key={idx}
                  avatarSrc={tweet.avatarSrc}
                  username={tweet.username}
                  atName={tweet.atName}
                  description={tweet.description}
                />
              );
            })}
          </div>
        </main>
        <div className='w-4/12  h-screen'></div>
      </div>
    </>
  );
}
