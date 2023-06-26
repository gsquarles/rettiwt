import { FaEarlybirds, FaSearch, FaHome } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { TweetBtn } from "../components/TweetBtn";
import { TweetCard } from "../components/TweetCard";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../RootLayout";
import { ProfileHeader } from "../components/ProfileHeader";
import { TweetForm } from "../components/TweetForm";
import { db } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

export function Home() {
  const { isSignedIn, showTweetForm, setShowTweetForm } =
    useContext(UsersContext);
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tweetsCollectionRef = collection(db, "tweets");
    const q = query(tweetsCollectionRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedTweets = [];
      snapshot.forEach((doc) => {
        updatedTweets.push(doc.data());
      });
      setTweets(updatedTweets.reverse());
    });
    return () => unsubscribe();
  }, []);

  function handleNotSignedInTweetClick() {
    navigate("/signin");
  }

  function handleSignedInTweetClick() {
    setShowTweetForm(true);
  }

  return (
    <>
      {isSignedIn ? (
        <div className='flex'>
          <div className='w-3/12  h-screen fles flex-col px-8 py-4 justify-center items-center'>
            <div className='flex justify-center w-3/5 mb-5'>
              {" "}
              <FaEarlybirds
                style={{ color: "#1d9bf0" }}
                className='text-4xl hover:scale-105 cursor-pointer '
              />
            </div>
            <div className='flex justify-evenly items-center w-3/5 py-2 ml-14 mb-5 cursor-pointer hover:bg-slate-300 hover:rounded-full hover:py-2'>
              <FaHome className='text-3xl ' />
              <span className='text-2xl font-medium '>Home</span>
            </div>
            <div className='flex justify-evenly items-center w-3/5 py-2 ml-16 mb-5 cursor-pointer hover:bg-slate-300 hover:rounded-full hover:py-2'>
              <FaSearch className='text-3xl ' />
              <span className='text-2xl font-medium '>Explore</span>
            </div>
            <div
              className='flex justify-evenly items-center w-3/5 py-2 ml-16 mb-5 cursor-pointer hover:bg-slate-300 hover:rounded-full hover:py-2'
              onClick={() => navigate("/profile")}
            >
              <IoMdPerson className='text-3xl ' />
              <span className='text-2xl font-medium '>Profile</span>
            </div>
            <div
              className='flex justify-center items-center'
              onClick={handleSignedInTweetClick}
            >
              <TweetBtn />
            </div>
            <ProfileHeader />
          </div>
          <main className='w-5/12  h-screen  border-l-2 border-r-2 border-gray-300 overflow-auto '>
            <div className='sticky top-0 bg-white z-10'>
              <div className='flex items-center justify-between px-4 py-4'>
                <span className='text-2xl font-medium '>Explore</span>
                <SlSettings className='text-2xl' />
              </div>
            </div>
            <div className=' pb-4'>
              {tweets.map((tweet, idx) => {
                return <TweetCard key={idx} {...tweet} />;
              })}
            </div>
          </main>
          <div className='w-4/12  h-screen py-4 px-8'>
            <input
              type='search'
              id='searchBar'
              placeholder='Search Site'
              className='bg-gray-200 py-3 px-4 w-4/5 rounded-full mb-5'
            />
            <div className='w-4/5 p-4 border-2 border-gray-300 rounded-lg'>
              <h2 className='text-2xl font-semibold mb-1'>
                What&apos;s Happening
              </h2>

              <div className='w-full'>{/* Add some articles */}</div>
            </div>
          </div>
          {isSignedIn && showTweetForm && (
            <div className='flex items-start justify-start fixed top-20 left-[450px]'>
              <TweetForm />
            </div>
          )}
        </div>
      ) : (
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
              <FaSearch className='text-3xl ' />
              <span className='text-2xl font-medium '>Explore</span>
            </div>
            <div
              className='flex justify-center items-center'
              onClick={handleNotSignedInTweetClick}
            >
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
              {tweets.map((tweet, idx) => {
                return <TweetCard key={idx} {...tweet} />;
              })}
            </div>
          </main>
          <div className='w-4/12  h-screen py-4 px-8'>
            <input
              type='search'
              id='searchBar'
              placeholder='Search Site'
              className='bg-gray-200 py-3 px-4 w-4/5 rounded-full mb-5'
            />
            <div className='w-4/5 p-4 border-2 border-gray-300 rounded-lg'>
              <h2 className='text-2xl font-semibold mb-1'>New to Rettiwt?</h2>
              <h3 className='text-lg mb-2'>
                Sign up now to get your own personalized timeline!
              </h3>
              {/* Make Button a Link to SignUpForm Page in router */}
              <div className='w-full'>
                {" "}
                <Link
                  to='/signup'
                  className=' flex justify-center items-center py-3 w-full bg-primary rounded-full text-white font-semibold hover:bg-sky-600 cursor-pointer'
                >
                  {" "}
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
