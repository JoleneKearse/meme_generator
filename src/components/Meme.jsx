import { useRef } from "react";

import html2canvas from "html2canvas";

const Meme = ({ meme }) => {
  const sectionRef = useRef(null);

  const capture = () => {
    const section = sectionRef.current;
    html2canvas(section, {
      useCORS: true,
    })
      .then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "meme.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
  }

  return (
    <section
      className="relative flex flex-col items-center justify-center"
      ref={sectionRef}
      onClick={capture}
    >
      <img
        src={meme.randomImage}
        alt={meme.altText}
        className="my-20"
      />
      <h3 className="absolute text-3xl tracking-wide text-center top-16 font-rubik drop-shadow text-shadow-heavy">{meme.topText}</h3>
      <h3 className="absolute text-3xl tracking-wide text-center bottom-16 font-rubik text-shadow-heavy">{meme.bottomText}</h3>
    </section>
  )
}

export default Meme;