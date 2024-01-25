const Form = () => {
  return (
    <form className='font-mono text-stone-200 text-xl'>
      <div className="grid grid-cols-2 grid-rows-3">
        <div className="py-10">
          <label
            htmlFor="top"
            className="text-stone-200 block pb-3"
          >
            Top Text
          </label>
          <input
            type="text"
            name="top"
            id="topText"
            className="rounded-md border-slate-950 bg-zinc-400 border-2 text-stone-100 text-lg w-5/6 p-2"
          />
        </div>
        
        <div className="py-10">
          <label
            htmlFor="top"
            className="text-stone-200 block pb-3"
          >
            Bottom Text
          </label>
          <input
            type="text"
            name="top"
            id="topText"
            className="rounded-md border-slate-950 bg-zinc-400 border-2 text-stone-100 text-lg w-5/6 p-2"
          />
        </div>
      </div>
    </form>
  )
}

export default Form