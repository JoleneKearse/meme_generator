import img from "/image.svg"

const Button = () => {
  return (
    <button className="w-full col-span-2 rounded-md flex justify-center items-center gap-2 p-3 mt-5 bg-gradient-to-r from-blue-950 to-zinc-900 text-lg bg-gradient-[display] hover:bg-zinc-800 hover:text-cyan-500 md:text-xl">
      Get a new Meme image
      <img src={img} alt="meme canvas" className="w-8 hover:animate-spin" />
    </button>
  )
}

export default Button