import LOL from "/lol.svg"

const Header = () => {
  return (
    <header className="w-full flex justify-between px-10 py-8 bg-zinc-900 font-mono">
      <div className="flex gap-4">
        <img src={LOL} alt="LOL" className="w-8" />
        <h1 className="text-3xl text-stone-200 font-semibold">Meme Generator</h1>
      </div>
      <div>
        <h2 className="text-1xl text-stone-200">React Course - Project 3</h2>
      </div>
    </header>
  )
}

export default Header