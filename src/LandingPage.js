import React, { useState, useContext } from 'react';
import AppContext from './AppContext.js';
import MyCard from './Card.js';
import Banner from './Banner.js';
import CardLayout from './CardLayout.js';
import MyNavigation from './Navigation.js';
import logo from './logo.svg';
import './App.css';
import RedBlueButton from './RedBlueButton.js';
import CounterButton from './CounterButton.js';
import LoadButton from './LoadButton.js';
import MyNewsletterBanner from './NewsletterBanner.js';
import LoadFeedButton from './LoadFeedButton.js';
import FeedForm from './FeedForm.js';

const databaseCards = [
 {
  title: "Visit Romania",
  description:"Enjoy nature in one of Romania's wild sanctuar",
  button:"Check offers Romania",
  image: "https://images.unsplash.com/photo-1578762291008-623d4fc84e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
 },
 {
  title: "Visit Romania",
  description:"Enjoy nature in one of Romania's wild sanctuar",
  button:"Check offers Romania",
  image: "https://images.unsplash.com/photo-1578762291008-623d4fc84e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
 },
 {
  title: "Visit Romania",
  description:"Enjoy nature in one of Romania's wild sanctuar",
  button:"Check offers Romania",
  image: "https://images.unsplash.com/photo-1578762291008-623d4fc84e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
 },
]

const MyButton = () => {
  return(
    <button className="btn btn-primary"></button>
  )
}

/*      <div class="container">
      <div class="row row-cols-4">
      <div class="col"><MyCard title="Visit Romania" description="Enjoy nature in one of Romania's wild sanctuar" button="Check offers Romania" image="https://images.unsplash.com/photo-1578762291008-623d4fc84e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"/></div>
      <div class="col"><MyCard title="Visit Jordan" description="Loose yourself in the red desert where the skies meets the earth" button="Check offers Jordan"image="https://images.unsplash.com/photo-1579607575558-6e6932a1bebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/></div>
     <div class="col"><MyCard title="Visit Austria" description="Take a deep breath of fresh air with breathtaking views" button="Check offers Austria" image="https://images.unsplash.com/photo-1578763748270-d3b2ae8035c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80"/></div>
     <div class="col"><MyCard title="Visit UAE" description="Dive into the luxury and amazing experiences" button="Check offers UAE" image="https://images.unsplash.com/photo-1549944850-84e00be4203b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"/></div>
  </div> */

function LandingPage() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <div className="App">
    <MyNavigation>
    </MyNavigation>   
    <MyNewsletterBanner/>
    <LoadFeedButton/>    
    <CardLayout>
    <MyCard title="Visit Romania" description="Enjoy nature in one of Romania's wild sanctuar" button="Check offers Romania" image="https://images.unsplash.com/photo-1578762291008-623d4fc84e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"/>
    <MyCard title="Visit Jordan" description="Loose yourself in the red desert where the skies meets the earth" button="Check offers Jordan"image="https://images.unsplash.com/photo-1579607575558-6e6932a1bebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
    <MyCard title="Visit Austria" description="Take a deep breath of fresh air with breathtaking views" button="Check offers Austria" image="https://images.unsplash.com/photo-1578763748270-d3b2ae8035c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80"/>
    <MyCard title="Visit UAE" description="Dive into the luxury and amazing experiences" button="Check offers UAE" image="https://images.unsplash.com/photo-1549944850-84e00be4203b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"/>
    </CardLayout>
    <FeedForm/>
    
    {/* {globalState.loggedIn === true && <LoadFeedButton/>}
    {globalState.loggedIn === false && "You need to be logged in to load Feeds"} */}
  </div>
  );
}

export default LandingPage;
