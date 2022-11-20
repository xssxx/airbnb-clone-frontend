import Navbar from "./components/Navbar"
import SecondNavbar from "./components/SecondNavbar"
import Footer from "./components/Footer"
import Content from "./components/Content"

function App() {

  return (
    <div className="main">
      <Navbar />
      <section className="sticky top-0 z-10 bg-white">
      <SecondNavbar />
      </section>
      <Content />
      <Footer />
    </div>
  )
}

export default App
