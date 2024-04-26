const Meme = ({ memeImage }) => {
  return (
    <section
    className="flex flex-col items-center justify-center"
    >
      <img 
        src={memeImage} 
        alt="randomly generated meme" 
        className="my-10"
      />
    </section>
  )
}

export default Meme;