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
    <button
      className="flex flex-col items-center justify-center"
      ref={sectionRef}
      onClick={capture}
      title="Click to download meme"
    >
      <img
        src={meme.randomImage}
        alt={meme.altText}
        className="block h-auto max-w-full mx-auto my-20"
      />
      <h3 className="absolute text-3xl tracking-wide text-center top-24 font-rubik drop-shadow text-shadow-heavy">{meme.topText}</h3>
      <h3 className="absolute text-3xl tracking-wide text-center bottom-24 font-rubik text-shadow-heavy">{meme.bottomText}</h3>
    </button>
  )
}

export default Meme;