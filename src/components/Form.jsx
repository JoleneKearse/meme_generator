import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Meme from "./Meme";

import memesData from "../memesData";

const Form = () => {
  const [meme, setMeme] = useState("");
  // const [topText, setTopText] = useState("");
  // const [bottomText, setBottomText] = useState("");

  const handleClick = () => {
    console.log("clicked");
    const memesArr = memesData.data.memes;
    const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)];
    setMeme(randomMeme.url);
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
      <Meme meme={meme} />
    </div>
  )
}

export default Form;