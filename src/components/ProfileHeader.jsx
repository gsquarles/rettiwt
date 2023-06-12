import { useContext, useState } from "react";
import { UsersContext } from "../RootLayout";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function ProfileHeader() {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const { myProfile, setMyProfile, setIsSignedIn } = useContext(UsersContext);

  const navigate = useNavigate();

  function handleProfileHeaderClick() {
    setIsLogoutOpen(!isLogoutOpen);
  }

  function handleLogOutClick() {
    setMyProfile(null);
    setIsSignedIn(false);
    navigate("/signin");
  }

  return (
    <>
      <div
        className='flex justify-center items-center w-[70%] py-2 ml-12 mt-4 cursor-pointer hover:bg-slate-300 hover:rounded-full hover:py-2'
        onClick={handleProfileHeaderClick}
      >
        <div className='w-12 h-12 flex-shrink-0'>
          <img
            src={myProfile.profilePic}
            alt='Profile Picture'
            className='w-full h-full rounded-full'
          />
        </div>
        <div className='flex flex-col items-start ml-2'>
          <p className='text-lg font-semibold'>{myProfile.username}</p>
          <span>@{myProfile.atName}</span>
        </div>
        <BsThreeDots className='text-2xl ml-auto' />
      </div>

      {isLogoutOpen && (
        <div className='relative'>
          <div
            className='absolute top-[calc(100%)] w-[75%] text-center right-10 bg-white border border-gray-300 p-2 py-4 rounded'
            onClick={handleLogOutClick}
          >
            <span className='cursor-pointer font-semibold '>
              Log Out @{myProfile.atName}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
