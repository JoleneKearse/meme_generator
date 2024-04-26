import LOL from "/lol.svg";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between w-full gap-2 py-8 font-mono px-11 bg-zinc-900">
      <div className="flex items-center gap-4">
        <img src={LOL} alt="LOL" className="w-8" />
        <h1 className="text-3xl font-semibold text-stone-200">Meme Generator</h1>
      </div>
      <div>
        <h2 className="text-base text-stone-200">React Course - Project 3</h2>
      </div>
    </header>
  )
}

export default Header;