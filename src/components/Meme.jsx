const Meme = ({ meme }) => {
  return (
    <section
    className="flex flex-col items-center justify-center"
    >
      <img 
        src={meme} 
        alt="randomly generated meme" 
        className="my-10"
      />
    </section>
  )
}

export default Meme;