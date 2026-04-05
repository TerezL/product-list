import { useState, useEffect } from "react"



function Modal({ cart, total, setOpenModal, setCart }) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 10);
    }, []);

    const handleClose = () => {
        setVisible(false)
        setTimeout(() => {
            setOpenModal(false)
        }, 300)
    }

    const handleNewOrder = () => {
        setCart([])
        setOpenModal(false)
    }

useEffect(() =>{
    const handleEsc = (e) => {
        if (e.key === "Escape") {
            setOpenModal(false);
        }    };
    window.addEventListener("keydown", handleEsc);

    return () => {
        window.removeEventListener("keydown", handleEsc);
    };
})

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0.1"}`} onClick={() => setOpenModal(false)}>

      
      <div className={`bg-white rounded-xl p-6 w-[90%] max-w-md transform translation-all duration-300 ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0.1"}`} onClick={(e) => e.stopPropagation()}>

        
        <div className="flex flex-col gap-3 mb-4">

          <svg className="border border-emerald-500 rounded-full hover:bg-white cursor-pointer" width="48" height="48" viewBox="0 0 48 48">
            <path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575"/>
          </svg>

          <h1 className="text-2xl font-bold">Order Confirmed</h1>
          <p className="text-stone-400">We hope you enjoy your food!</p>
        </div>

        
        <div className="max-h-60 overflow-y-auto">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">

              <div className='flex flex-col gap-1'>
                <p className="font-semibold">{item.name}</p>

                <div className='flex items-center gap-2 text-sm'>
                  <span className="text-orange-700 font-bold">
                    {item.quantity}x
                  </span>
                  <span className="text-stone-400">
                    @ ${item.price}
                  </span>
                </div>
              </div>

              <p className="font-bold">
                ${item.quantity * item.price}
              </p>

            </div>
          ))}
        </div>

        
        <div className="flex justify-between mt-4">
          <span className="text-stone-400">Order Total</span>
          <span className="text-xl font-bold">${total}</span>
        </div>

        
        
        <button 
          onClick={handleNewOrder}
          className="w-full bg-orange-700 text-white rounded-3xl p-3 mt-5 hover:bg-orange-800"
        >
          Start New Order
        </button>

      </div>

    </div>
    
    
  )
}

export default Modal