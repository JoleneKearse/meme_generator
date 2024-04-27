const Meme = ({ meme, topText, bottomText }) => {
  return (
    <section
      className="relative flex flex-col items-center justify-center"
    >
      <img
        src={meme}
        alt="randomly generated meme"
        className="my-10"
      />
      <h3 className="absolute font-mono text-2xl top-16 font-rubik drop-shadow [text-shadow:1px_1px_2px_var(--tw-shadow-color)]">{topText}</h3>
      <h3 className="absolute font-mono bottom-16 font-rubik">{bottomText}</h3>
    </section>
  )
}

export default Meme;