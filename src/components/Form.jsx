import Button from "./Button"
import { Input } from "./Input"

const Form = () => {
  return (
    <form className='font-mono text-stone-200 text-xl'>
      <div className="flex flex-col lg:flex-row lg:gap-8 lg:w-full lg:grow">
        <Input labelName="Top Text" />
        <Input labelName="Bottom Text" />
      </div>
      <Button />
    </form >
  )
}

export default Form