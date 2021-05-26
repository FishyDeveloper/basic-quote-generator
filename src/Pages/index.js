import React, {useState} from "react";

import './main.scss'

import GithubLogo from '../Images/Github_Logo.png'
import TwitterLogo from '../Images/Twitter_Logo.png'

//Quote Generator

const Quotes = {
  Q1:{
    by:'Shannon L. Alder',
    content:'Life is not lived with intention, but action'
  },

  Q2:{
    by:'Booker T. Washington',
    content:'Success is not to be measured by the position someone has reached in life, but the obstacles he has overcome while trying to succeed'
  },

  Q3:{
    by:'Anton Rubaclini',
    content:'If you want to catch your dream, you have to drop the fears'
  },

  Q4: {
    by:'Desmond Tutu',
    content:'Hope is being able to see that there is light despite all of the darkness'
  },

  Q5:{
    by:'Henry S. Haskins',
    content:'The darkness around us might somewhat light up if we would first practice using the light we have in the place we are'
  }
}

const LogoLink = (props) => {
  console.log(props);
  return (
  <>
    <a href={props.link} target="_blank" rel="noreferrer">
      <img className="logo" src={props.logo} alt={props.name}/>
    </a>
    <p>FishyDeveloper</p>
  </>
  )
}

export default function App() {
  const [selectedQuote,setSelectedQuote] = useState({})

  const generateQuote = () => {
    let quotes = Object.values(Quotes)
    const selectedArr = Math.floor(Math.random() * quotes.length)
    setSelectedQuote(quotes[selectedArr])
  }

  return (
    <>
    <div id="quote">
      <h1>Quote by {selectedQuote.by}</h1>
      <p>{selectedQuote.content}</p>
      
    </div>
    <button onClick={generateQuote}>Generate a quote</button>
    <footer>
      <LogoLink link="https://github.com/FishyDeveloper" logo={GithubLogo} name="Github Logo"/>
      <LogoLink link="https://twitter.com/FishyDeveloper" logo={TwitterLogo} name="Twitter Logo"/>
    </footer>
    </>
  );
}