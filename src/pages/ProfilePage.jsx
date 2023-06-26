import { useContext } from "react";
import { UsersContext } from "../RootLayout";
import { FaEarlybirds, FaHome, FaSearch } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { TweetBtn } from "../components/TweetBtn";
import { ProfileHeader } from "../components/ProfileHeader";
import { useNavigate } from "react-router-dom";
import backgroundHeader from "../assets/backgroundImage.jpg";

export function ProfilePage() {
  const { myProfile, setShowTweetForm } = useContext(UsersContext);
  const navigate = useNavigate();

  if (!myProfile) {
    // Handle the case when myProfile is null (e.g., show a loading indicator)
    return <div>Loading...</div>;
  }
  console.log(myProfile);

  function handleSignedInTweetClick() {
    setShowTweetForm(true);
  }

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
        <main className='w-5/12 h-screen border-l-2 border-r-2 border-gray-300 overflow-auto'>
          <div className='sticky top-0 bg-white z-10 border-b-2'>
            <div className='flex items-center px-6 py-2'>
              <AiOutlineArrowLeft className='text-3xl text-primary' />
              <div className='ml-10'>
                <span className='text-2xl font-bold'>{myProfile.username}</span>
                <p className='text-lg'>{myProfile.myTweets.length} Tweets</p>
              </div>
            </div>
          </div>
          <div
            className='w-full h-[500px]  flex flex-col '
            style={{
              backgroundImage: `url(${backgroundHeader})`,
              backgroundSize: "100% 200px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className='h-[200px] w-full'></div>
            <div className='w-full flex justify-between px-4'>
              <div className='flex flex-col w-[70%]'>
                <div className='w-32 h-32 rounded-full border-4 border-white p-2 -mt-16'>
                  <div className='w-full h-full overflow-hidden rounded-full'>
                    <img
                      src={myProfile.profilePic}
                      alt='Profile Picture'
                      className='w-full h-full object-contain'
                    />
                  </div>
                </div>
                <div className=' px-3 py-1'>
                  <p className='text-xl font-bold'>{myProfile.username}</p>
                  <p className='text-lg'>@{myProfile.atName}</p>
                  <p className='w-full mb-6'>
                    Bio goes here! Bio goes here! Bio goes here! Bio goes here!
                    Bio goes here! Bio goes here! Bio goes here! Bio goes here!
                  </p>
                  <div className='flex justify-between w-[55%]'>
                    <span>
                      {" "}
                      <strong>201</strong> Following
                    </span>
                    <span>
                      {" "}
                      <strong>144</strong> Followers
                    </span>
                  </div>
                </div>
              </div>

              <button className='  py-2 px-4 font-medium rounded-full -mt-24 mr-3'>
                Edit Profile
              </button>
            </div>
            <div className='flex w-full  flex-grow items-end justify-evenly pb-5  border-b-2 border-gray-200'>
              <p className='text-xl '>Tweets</p>
              <p className='text-xl '>Replies</p>
              <p className='text-xl '>Media</p>
              <p className='text-xl '>Likes</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
