import React from 'react';
// import { useSelector } from 'react-redux';

const Sidebar = () => {
    // const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    // if(isMenuOpen) return null

  return (
    <div className="p-5  shadow-lg col-span-1">
       <h3>Home</h3>
       <h3>Shorts</h3>
       <h3>Subscription</h3>
       
       
       <h1 className="font-bold pt-4">Subscription</h1>
       <ul>
          <li> Music </li>
          <li> Sports </li>
          <li> Gaming </li>
          <li> Movies </li>
       </ul>

       <h1 className="font-bold pt-4">Explore</h1>
       <ul>
          <li> Trending </li>
          <li> Films </li>
          <li> Gaming </li>
          <li> News </li>
       </ul>
    </div>
  )
}

export default Sidebar