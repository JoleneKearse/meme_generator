import Button from "./Button"
import Input from "./Input"

const Form = () => {
  return (
    <form className='font-mono text-stone-200 text-xl'>
      <div className="grid ">
        <Input labelName="Top Text" />
        <Input labelName="Bottom Text" />
      </div>
      <Button />
    </form >
  )
}

export default Form