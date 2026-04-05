import { useState, useEffect } from "react"
import data from "../../data.json"
import Page from './Page'
import Cart from "./Cart"
import Modal from "./Modal"

function Together(){

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  const [openModal, setOpenModal] = useState(false);


  const deleteItem = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
};

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const increase = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decrease = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

   const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  return(
    <div className="flex flex-col md:flex-row w-[90%] my-10 mx-auto items-start gap-5">

      <div className="flex flex-col mx-auto mt-4">
        <h1 className="text-4xl font-bold text-left">Desserts</h1>

        <div className="flex flex-col items-center gap-5 my-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {data.map((result) => (
            <Page 
              key={result.id}
              result={result}
              cart={cart}
              addToCart={addToCart}
              increase={increase}
              decrease={decrease}
            />
          ))}
        </div>
      </div>

      <Cart cart={cart} 
      setCart={setCart}
      setOpenModal={setOpenModal}
        deleteItem={deleteItem}
      />

      {openModal && (
          <Modal
            cart={cart}
            setCart={setCart}
            setOpenModal={setOpenModal}
            total={total}
          />
        )}

    </div>
  )
}

export default Together