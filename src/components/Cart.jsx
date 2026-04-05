import cartImg from '/public/assets/illustration-empty-cart.svg'


function Cart({ cart, deleteItem, setCart, setOpenModal }) {

    
     const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)


  return (
    <div className="bg-white rounded-lg flex flex-col p-5 w-[90%] mx-auto my-4 md:w-[60%]">

      <h1 className='text-xl text-orange-700 font-bold'>
        Your Cart ({cart.length})
      </h1>

      {cart.length === 0 ? (
        <>
          <img src={cartImg} alt="Empty cart" className='mx-auto w-[50%]' />
          <p className='text-stone-400 font-bold text-center'>
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">
              <div className='flex flex-col gap-2'>
                <p className="font-semibold">{item.name}</p>
                <div className='flex flex-row items-center gap-2'>
                <p className="text-sm font-bold text-orange-700 mr-2">
                  {item.quantity}x 
                </p>
                <p className='text-stone-400'>
                    @ ${item.price}
                </p>
                <p className="text-stone-500 font-bold">
                ${item.quantity * item.price}
              </p>
              </div>
              </div>
              
              <button className="border border-stone-400 rounded-full hover:border-stone-500 hover:border-2 cursor-pointer w-6 h-6 flex items-center justify-center" onClick={() => deleteItem(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#CAAFA7" width="10" height="10" viewBox="0 0 10 10">
                <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
              </button>
            </div>
          ))}

          <div className="flex justify-between mt-4 text-stone-400">
            <span>Order Total</span>
            <span className='text-2xl text-black font-bold'>${total}</span>
          </div>

          <div className='bg-stone-100 flex flex-row gap-2 justify-center my-5 p-3 rounded-lg text-stone-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/>
            <path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
            <p>This is a <span className='font-bold'>carbon-neutral</span> delivery</p>
          </div>

          <button onClick={() => setOpenModal(true)} className="bg-orange-700 text-white rounded-3xl p-3 mt-4 hover:bg-orange-800 cursor-pointer">
            Confirm Order
          </button>

          
        </>
      )}

    </div>
  )
}

export default Cart

