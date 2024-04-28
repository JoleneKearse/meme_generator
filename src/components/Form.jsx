import { useState, useEffect } from "react";

import Instructions from "./Instructions";
import Button from "./Button";
import Input from "./Input";
import Meme from "./Meme";

import help from "../assets/help.svg"

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9ehk.jpg",
    altText: "Batman smacking Robin",
  });
  const [allMemes, setAllMemes] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  const handleHelpClick = () => {
    setShowInstructions(!showInstructions);
  }

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomNumber];
    const url = randomMeme.url;
    const alt = randomMeme.name;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
      altText: alt
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <div className="relative font-mono text-xl text-stone-200">
      <div className="grid">
        <button
          className="absolute mt-2 right-10 hover:scale-110"
          onClick={handleHelpClick}
        >
          <img
            src={help}
            alt="help button"
            className="w-8"
          />
        </button>
        {showInstructions && <Instructions />}
        <Input
          labelName={"Top Text"}
          placeholder={"Top Text"}
          id={"top"}
          htmlFor={"top"}
          name="topText"
          value={meme.topText}
          handleChange={handleChange}
        />
        <Input
          labelName={"Bottom Text"}
          placeholder={"Bottom Text"}
          id={"bottom"}
          htmlFor={"bottom"}
          name="bottomText"
          value={meme.bottomText}
          handleChange={handleChange}
        />
      </div>
      <Button getMemeImage={getMemeImage} text="Get a new Meme image" />
      <Meme meme={meme} />
    </div>
  )
}

export default Form;