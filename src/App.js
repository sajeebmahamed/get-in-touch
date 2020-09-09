import React from 'react';
import TopMenu from './component/TopMenu/TopMenu';
import FrontPage from './component/FrontPage/FrontPage';
import { useState } from 'react';


function App() {
  const [instagram, setInstagram] = useState([])
  const [twitter, setTwitter] = useState([])

  console.log(instagram.length);
  console.log(twitter.length);

  const handleInstagram = (insta) => {
    setInstagram(insta)
  }

  const handleTwitter = (tweet) => {
    setTwitter(tweet)
  }
  return (
    <div>
      <TopMenu instagram={instagram} twitter={twitter}></TopMenu>
      <FrontPage handleInstagram={handleInstagram} handleTwitter={handleTwitter}></FrontPage>
    </div>
  );
}

export default App;
