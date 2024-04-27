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

  return (
    <div className='font-mono text-xl text-stone-200'>
      <div className="grid ">
        <Input
          labelName={"Top Text"}
          placeholder={"Top Text"}
          id={"top"}
          htmlFor={"top"}
        />
        <Input
          labelName={"Bottom Text"}
          placeholder={"Bottom Text"}
          id={"bottom"}
          htmlFor={"bottom"}
        />
      </div>
      <Button getMemeImage={getMemeImage} />
      <Meme meme={meme.randomImage} />
    </div>
  )
}

export default Form;