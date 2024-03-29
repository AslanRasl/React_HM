import { Fragment } from "react"
import Hero from "./components/Hero"
import CardComponent from "./components/Cart"
import Products from "./components/Products"
import Footer from "./components/footer"
import Products2 from "./components/Products2"
import Timer from "./components/timer"
import Products3 from "./components/Products3"

function App() {
  return (
    <div>
      <Hero />
      <Products2/>
      <Products />
      <Timer/>
      <Products3/>
      <Footer/>
    </div>
  )
}

export default App
