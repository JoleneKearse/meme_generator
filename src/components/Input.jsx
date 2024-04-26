const Input = ({ htmlFor, labelName, id, placeholder }) => (
  <div className="flex flex-col min-w-full py-4">
    <label
      htmlFor={htmlFor}
      className="block pb-3 text-lg text-stone-200 md:text-center lg:text-left"
    >
      {labelName}
    </label>
    <input
      type="text"
      name="top"
      id={id}
      placeholder={placeholder}
      className="p-2 text-lg border-2 rounded-md border-slate-950 bg-zinc-400 text-stone-100" />
  </div>
)

export default Input;