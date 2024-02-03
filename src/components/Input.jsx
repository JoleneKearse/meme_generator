const Input = ({ labelName, placeholder }) => (
  <div className="py-4 min-w-full flex flex-col">
    <label
      htmlFor="top"
      className="text-stone-200 block pb-3 text-lg md:text-center lg:text-left"
    >
      {labelName}
    </label>
    <input
      type="text"
      name="top"
      id="topText"
      placeholder={placeholder}
      className="rounded-md border-slate-950 bg-zinc-400 border-2 text-stone-100 text-lg p-2" />
  </div>
)

export default Input