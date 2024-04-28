import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Meme from "./Meme";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9ehk.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
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