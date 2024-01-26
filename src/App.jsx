import './main.css'
import Header from "./components/Header"
import Form from './components/Form'

function App() {

  return (
    <>
      <Header />
      <div className="bg-zinc-700 w-full h-screen">
        <section className='px-7'>
          <Form />
        </section>
      </div>
    </>
  )
}

export default App
