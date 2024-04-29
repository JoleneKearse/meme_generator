import img from "/image.svg";

const Button = ({ getMemeImage, text }) => {
  return (
    <button
      onClick={getMemeImage}
      className="w-full col-span-2 rounded-md flex justify-center items-center gap-2 p-3 mt-5 bg-gradient-to-r from-blue-950 to-zinc-900 text-lg bg-gradient-[display] hover:bg-zinc-800 hover:text-cyan-500 md:text-xl focus-visible:ring-4 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
    >
      {text}
      <img src={img} alt="meme canvas" className="w-8 hover:animate-spin" />
    </button>
  )
}

export default Button;