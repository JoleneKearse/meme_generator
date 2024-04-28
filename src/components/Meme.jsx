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
      <h3 className="absolute text-3xl tracking-wide text-center top-16 font-rubik drop-shadow text-shadow-heavy">{topText}</h3>
      <h3 className="absolute text-3xl tracking-wide text-center bottom-16 font-rubik text-shadow-heavy">{bottomText}</h3>
    </section>
  )
}

export default Meme;