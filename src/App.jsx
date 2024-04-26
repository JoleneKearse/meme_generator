import './main.css';
import Header from "./components/Header";
import Form from "./components/Form";

function App() {

  return (
    <>
      <Header />
      <main className="flex w-full h-full bg-zinc-700 place-content-center">
        <section className="w-5/6 px-7 md:max-w-prose">
          <Form />
        </section>
      </main>
    </>
  )
}

export default App;
