import btnIcon from '/public/assets/icon-add-to-cart.svg'
import plus from "/public/assets/icon-increment-quantity.svg"
import minus from "/public/assets/icon-decrement-quantity.svg"

function Page({ result, cart, addToCart, increase, decrease }) {
    const itemInCart = cart.find(item => item.id === result.id);
  return (
    <>
      <div className='flex flex-col'>
          <picture className='flex flex-col items-center mx-auto'>
            <source media="(min-width: 1024px)" srcSet={`${import.meta.env.BASE_URL}${result.image.desktop}`} />
            <source media="(min-width: 768px)" srcSet={`${import.meta.env.BASE_URL}${result.image.tablet}`} />
            <img src={`${import.meta.env.BASE_URL}${result.image.mobile}`} className="rounded-xl" alt={result.category} />
          </picture>
          <div className="relative bottom-6 w-[50%] md:w-[70%] mx-auto">

  {itemInCart ? (
    
    <div className="flex items-center justify-between bg-orange-700 text-white rounded-3xl px-4 py-2">
      
      <button 
        onClick={() => decrease(result.id)}
        className="border rounded-full px-2 py-3 hover:bg-white cursor-pointer "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
        <path className="hover:fill-orange-700" fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
      </button>

      <span className="font-semibold">
        {itemInCart.quantity}
      </span>

      <button 
        onClick={() => increase(result.id)}
         className="border rounded-full p-2 hover:bg-white cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path className="hover:fill-orange-700" fill="#ffffff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
      </button>

    </div>
  ) : (
   
    <button 
      onClick={() => addToCart(result)}
      className="w-full bg-white font-semibold border border-orange-700 rounded-3xl p-3 
      flex items-center justify-center gap-2 hover:text-orange-700 cursor-pointer"
    >
      <img src={btnIcon} alt="Add to cart" />
      Add to Cart
    </button>
  )}

</div>
          <div className="flex flex-col items-start gap-1">
          <h1 className="text-sm text-stone-400">{result.category}</h1>
          <h2 className="font-bold">{result.name}</h2>
        <p className="text-orange-700">${result.price}</p>
        </div>
      </div>
    </>
  )
}

export default Page