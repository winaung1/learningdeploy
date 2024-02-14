import React from 'react'

export const UsersCard = ({pic, name, live}) => {
  return (
    <div className='w-fit'>
        <div className='relative border-2 border-red-500 w-fit rounded-full p-1'>
            <img className='w-20 h-20 rounded-full object-cover' src={pic} alt="" />
            {live &&
            <div className='absolute -bottom-2 left-4 w-fit  p-1 px-3 py-0 rounded-lg bg-red-500 text-white border-2 border-white'>
                <p>LIVE</p>
            </div>
            }
        </div>
        <p className='text-center pt-1'>{name}</p>
    </div>
  )
}
