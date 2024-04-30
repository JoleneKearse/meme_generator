import { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";

import Copy from "../assets/copy.png";
import Download from "../assets/download.png";

import html2canvas from "html2canvas";

const Meme = ({ meme }) => {
  const memeRef = useRef(null);
  const memeButtonRef = useRef(null);
  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });
  const [memeButtonSize, setMemeButtonSize] = useState({
    width: 0,
    height: 0,
  });
  const [positions, setPositions] = useState({
    top: { x: 0, y: 0 },
    bottom: { x: 0, y: 0 },
  });

  useEffect(() => {
    const updatePositions = () => {
      const buttonRect = memeButtonRef.current.getBoundingClientRect();
      setMemeButtonSize({
        width: buttonRect.width,
        height: buttonRect.height
      });
      const imageHeight = memeRef.current.clientHeight;
      const offsetY = (buttonRect.height - imageHeight) / 2;

      setPositions({
        top: { x: buttonRect.width * 0.1, y: offsetY + imageHeight * 0.1 },
        bottom: { x: buttonRect.width * 0.1, y: offsetY + imageHeight * 0.1 }
      });
    };

    window.addEventListener('resize', updatePositions);
    updatePositions();

    return () => {
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  const handleImageLoad = (e) => {
    const { width, height } = e.target;
    setImageSize({
      width,
      height,
    });
  }

  const handleCopyClick = () => {
    capture("copy");
    alert("Copied to clipboard");
  }

  const handleDownloadClick = () => {
    capture("download");
  }

  // make finished meme screenshot
  const capture = (action) => {
    const memeArea = memeButtonRef.current;
    html2canvas(memeArea, {
      useCORS: true,
      backgroundColor: null,
      onclone: (clonedDocument) => {
        const clonedTopText = clonedDocument.getElementById('top-text');
        const clonedBottomText = clonedDocument.getElementById('bottom-text');

        if (clonedTopText && clonedBottomText) {
          clonedTopText.style.top = `${parseInt(clonedTopText.style.top, 10) - 5}px`;
          clonedBottomText.style.bottom = `${parseInt(clonedBottomText.style.bottom, 10) - -10}px`;
        }
      }
    })
      .then((canvas) => {
        if (action === "download") {
          const image = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = image;
          link.download = "meme.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else if (action === "copy") {
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
        ref={memeButtonRef}

      >
        <img
          src={meme.randomImage}
          alt={meme.altText}
          className="max-h-fit"
          onLoad={handleImageLoad}
          ref={memeRef}
        />
        <Draggable bounds="parent" defaultPosition={positions.top}>
          <h3
            className="absolute z-10 text-xl tracking-wide text-center font-rubik drop-shadow text-shadow-heavy lg:text-3xl top-16"
            id="top-text"
            style={{ top: positions.top.y }}
          >
            {meme.topText}
          </h3>
        </Draggable>
        <Draggable bounds="parent" defaultPosition={positions.bottom}>
          <h3
            className="absolute z-10 text-xl tracking-wide text-center font-rubik drop-shadow text-shadow-heavy bottom-24 lg:text-3xl"
            id="bottom-text"
            style={{ bottom: positions.bottom.y }}
          >
            {meme.bottomText}
          </h3>
        </Draggable>
      </button>
      <div className="flex items-center justify-between m-10 mb-20">
        <button title="Copy to clipboard" className="w-8 hover:scale-110" onClick={handleCopyClick}><img src={Copy} alt="copy" /></button>
        <button title="Download to device" className="w-8 h-8 hover:scale-110" onClick={handleDownloadClick}><img src={Download} alt="download" /></button>
      </div>
    </>
  )
}

export default Meme;