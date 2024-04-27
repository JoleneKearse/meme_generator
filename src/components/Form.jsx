import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Meme from "./Meme";

import memesData from "../memesData";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9ehk.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArr = allMemeImages.data.memes;
    const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: randomMeme,
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
    <div className='font-mono text-xl text-stone-200'>
      <div className="grid">
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
      <Button getMemeImage={getMemeImage} />
      <Meme meme={meme.randomImage} topText={meme.topText} bottomText={meme.bottomText} />
    </div>
  )
}

export default Form;