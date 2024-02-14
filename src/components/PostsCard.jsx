import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
export const PostsCard = ({name, pic, post, location}) => {
  return (
    <>
    <div className='pt-10 px-4 flex space-x-4 justify-between items-center'>
        <div className='flex space-x-2'>
            <img className='w-14 h-14 rounded-full object-cover' src={pic} alt="" />
            <div>
            <p>{name}</p>
            <p>{location}</p>
            </div>
        </div>
        <div>
            <p className='text-4xl'>...</p>
        </div>
    </div>
        <div className='py-4'>
            <img src={post} alt="" />
        </div>
        <div className='px-4 py-3 text-2xl flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <CiHeart/>
                <FaRegComment/>
                <BsSend/>
            </div>
            <CiBookmark/>
        </div>
        <div className='flex px-4 items-center space-x-2'>
            <img className='w-8 h-8 rounded-full' src={post} alt="" />
            <p>Liked by craig_love and 448,380,232 others </p>
        </div>
        <div className='px-4 py-2'>
            <p>joshua_i game in Japan was amazing and I want to share some photos.</p>
        </div>
    </>
  )
}
