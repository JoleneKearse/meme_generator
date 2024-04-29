import { useRef } from "react";
import Draggable from "react-draggable";

import html2canvas from "html2canvas";

const Meme = ({ meme }) => {
  const memeRef = useRef(null);

  // make finished meme downloadable
  const capture = () => {
    const memeArea = memeRef.current;
    html2canvas(memeArea, {
      useCORS: true,
      backgroundColor: null,
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
      className="relative flex flex-col items-center justify-center inline-block min-w-full border-none focus-visible:ring-4 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      onDoubleClick={capture}
      title="Double click to download meme"
      ref={memeRef}
    >
      <img
        src={meme.randomImage}
        alt={meme.altText}
        className="my-20"
      />
      <Draggable bounds="parent">
        <h3
          className="absolute z-10 text-3xl tracking-wide text-center font-rubik drop-shadow text-shadow-heavy top-24"
        >
          {meme.topText}
        </h3>
      </Draggable>
      <Draggable bounds="parent">
        <h3
          className="absolute z-10 text-3xl tracking-wide text-center font-rubik drop-shadow text-shadow-heavy bottom-24"
        >
          {meme.bottomText}
        </h3>
      </Draggable>
    </button>
  )
}

export default Meme;