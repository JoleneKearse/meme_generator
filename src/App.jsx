import './main.css'
import Header from "./components/Header"
import Form from './components/Form'

function App() {

  return (
    <>
      <Header />
      <main className="bg-zinc-700 w-full h-screen flex place-content-center">
        <section className="px-7 w-5/6 md:max-w-prose">
          <Form />
        </section>
      </main>
    </>
  )
}

export default App
