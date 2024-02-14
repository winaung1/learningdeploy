import React from 'react'
import { UsersCard } from './components/UsersCard';
import { PostsCard } from './components/PostsCard';

export const Home = () => {
    const arrayOfObjects = [
        { id: 1, live: false, name: 'John Doe', location: 'New York, USA', pic: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600', post: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600'},
        { id: 2, live: true, name: 'Alice Johnson', location: 'Paris, France', pic: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600', post: 'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600'},
        { id: 3, live: false, name: 'Bob Smith', location: 'London, UK', pic:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600', post: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600'},
        { id: 4, live: true, name: 'Emily Brown', location: 'Sydney, Australia', pic:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600', post: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600'},
        { id: 5, live: false, name: 'Michael Kim', location: 'Tokyo, Japan', pic:'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600', post: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600'}
      ];
      
      
  return (
    <>
    <div className='flex space-x-4 justify-center py-10'>
        {arrayOfObjects.map(user => (
            <UsersCard live={user.live} name={user.name} pic={user.pic}/>
            ))}
    </div>
    <hr className='h-2'/>
    <div className=''>

        {arrayOfObjects.map(user => (
            <PostsCard name={user.name} pic={user.pic} post={user.post} location={user.location}/>
       ))}
    </div>
    </>
  )
}
