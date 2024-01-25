import img from "/image.svg"

const Button = () => {
  return (
    <button className="w-full col-span-2 rounded-md flex justify-center items-center gap-4 bg-zinc-900 hover:bg-zinc-800 hover:text-cyan-500">
      Get a new Meme image
      <img src={img} alt="meme canvas" className="w-8" />
    </button>
  )
}

export default Button