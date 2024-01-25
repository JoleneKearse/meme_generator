import { Input } from "./Input"

// const labels = ["Top Text", "Bottom Text"];

const Form = () => {
  return (
    <form className='font-mono text-stone-200 text-xl'>
      <div className="grid grid-cols-2 grid-rows-3">
        <Input labelName="Top Text" />
        <Input labelName="Bottom Text"/>
      </div>
    </form >
  )
}

export default Form