import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Meme from "./Meme";

import memesData from "../memesData";

const Form = () => {
  const [memeImage, setMemeImage] = useState("");
  // const [topText, setTopText] = useState("");
  // const [bottomText, setBottomText] = useState("");

  const handleClick = () => {
    const memesArr = memesData.data.memes;
    const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)].url;
    setMemeImage(randomMeme);
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
      <Button handleClick={handleClick} />
      <Meme memeImage={memeImage} />
    </div>
  )
}

export default Form;