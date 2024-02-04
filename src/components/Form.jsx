import Button from "./Button"
import Input from "./Input"

const Form = () => {
  return (
    <form className='font-mono text-stone-200 text-xl'>
      <div className="grid ">
        <Input 
          labelName={"Top Text"}
          placeholder={"Top Text"}
          id={"top"}
          htmlFor={"top"}
                  />
        <Input 
          labelName={"Bottom Text"}
          placeholder={"Bottom Text"}
          id={"bottom"}
          htmlFor={"bottom"}
        />
      </div>
      <Button />
    </form >
  )
}

export default Form