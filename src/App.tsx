import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./db/db"
import { GuitarType } from "./types/guitar.types"


function App() {

    const [data, setData] = useState<GuitarType[]>([])
    const [cart , setCart] = useState<GuitarType[]>([])

    useEffect(() => {
        setData(db)
    }, [])

    console.log(cart)

  return (

    <>
    <Header />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {
            data.map(item => (
                <Guitar key={item.id} guitar={item} setCart={setCart}/>
            ))
          }
        </div>
    </main>
    <Footer />
    </>
  )
}

export default App
