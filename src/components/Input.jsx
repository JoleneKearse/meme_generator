const Input = ({ htmlFor, labelName, id, placeholder, name, value, handleChange }) => (
  <div className="flex flex-col min-w-full py-4">
    <label
      htmlFor={htmlFor}
      className="block pb-3 text-lg text-stone-200 md:text-center lg:text-left"
    >
      {labelName}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
      className="p-2 text-lg font-bold tracking-wide border-2 rounded-md border-slate-950 bg-zinc-400 text-stone-900" />
  </div>
)

export default Input;