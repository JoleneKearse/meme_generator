import { useRef, useState } from "react";
import Draggable from "react-draggable";

import Copy from "../assets/copy.png";
import Download from "../assets/download.png";

import html2canvas from "html2canvas";

const Meme = ({ meme }) => {
  const memeRef = useRef(null);
  const [copy, setCopy] = useState(true);

  const handleCopyClick = () => {
    capture();
  }

  const handleDownloadClick = () => {
    setCopy(prevCopy => !prevCopy)
    capture();
  }

  // make finished meme downloadable
  const capture = () => {
    const memeArea = memeRef.current;
    html2canvas(memeArea, {
      useCORS: true,
      backgroundColor: null,
    })
      .then((canvas) => {
        if (!copy) {
          const image = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = image;
          link.download = "meme.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          canvas.toBlob((blob) => {
            if (navigator.clipboard && window.isSecureContext) {
              navigator.clipboard.write([
                new ClipboardItem({
                  "image/png": blob,
                })
              ])
            }
          })
        }
      })
  }

  return (
    <>
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
      <div className="flex items-center justify-between -m-10">
        <button title="Copy to clipboard" className="w-8" onClick={handleCopyClick}><img src={Copy} alt="copy" /></button>
        <button title="Download to device" className="w-8 h-8" onClick={handleDownloadClick}><img src={Download} alt="download" /></button>
      </div>
    </>
  )
}

export default Meme;