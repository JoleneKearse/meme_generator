const Input = (props) => (
  <div className="py-4 min-w-full flex flex-col">
    <label
      htmlFor={props.htmlFor}
      className="text-stone-200 block pb-3 text-lg md:text-center lg:text-left"
    >
      {props.labelName}
    </label>
    <input
      type="text"
      name="top"
      id={props.id}
      placeholder={props.placeholder}
      className="rounded-md border-slate-950 bg-zinc-400 border-2 text-stone-100 text-lg p-2" />
  </div>
)

export default Input