'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { cartContext } from '@/provider/cartContextProvider'
import { useWishlist } from '@/provider/wishlistContextProvider'

export default function Navbar() {
  const [open, setOpen] = useState(false)


  const session = useSession()
  console.log(session);

  function handleLogOut() {
    signOut({ redirect: true, callbackUrl: "/Login" })
  }
  let { numOfCartItem } = useContext(cartContext)
  const { wishlistCount } = useWishlist()

  React.useEffect(() => {
    console.log("[Navbar] numOfCartItem changed:", numOfCartItem);
  }, [numOfCartItem]);
  return (
    <nav className="bg-emerald-600 text-white">
      <div className="container w-full lg:w-[80%] mx-auto p-3">


        <div className="flex items-center justify-between">


          <div className="flex items-center gap-2 text-lg lg:text-2xl">
            <i className="fa-solid fa-cart-arrow-down"></i>
            <Link href="/">Fresh Cart</Link>
          </div>


          <ul className="hidden lg:flex gap-6 text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Cart" className="flex items-center gap-1 group">
              <div className="relative">
                <i className="fa-solid fa-cart-shopping text-xl group-hover:text-emerald-100 transition-colors"></i>
                <span className="absolute -top-3 -right-3 bg-white text-emerald-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-emerald-500 shadow-sm min-w-[20px] text-center">
                  {numOfCartItem}
                </span>
              </div>
              <span className="ml-1 group-hover:text-emerald-100 transition-colors">Cart</span>
            </Link></li>
            <li><Link href="/wishlist" className="flex items-center gap-1 group">
              <div className="relative">
                <i className="fa-regular fa-heart text-xl group-hover:text-emerald-100 transition-colors"></i>
                <span className="absolute -top-3 -right-3 bg-white text-emerald-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-emerald-500 shadow-sm min-w-[20px] text-center">
                  {wishlistCount}
                </span>
              </div>
              <span className="ml-1 group-hover:text-emerald-100 transition-colors">Wishlist</span>
            </Link></li>
            <li><Link href="/Product">Product</Link></li>
            <li><Link href="/Categories">Categories</Link></li>
            <li><Link href="/Brands">Brands</Link></li>
          </ul>


          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-3 text-lg">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            {session.data ? <span className="cursor-pointer"><Link href="/Signout" onClick={handleLogOut}>Signout</Link></span> : <> <span className="cursor-pointer"><Link href="/Login">Login</Link></span>
              <span className="cursor-pointer"><Link href="/Register">Register</Link></span> </>}


          </div>


          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>


        <div
          className={`
            lg:hidden
            bg-white text-emerald-700
            mt-4 rounded-2xl shadow-lg
            transition-all duration-300
            ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <ul className="flex flex-col gap-4 p-6 text-lg">

            <li><Link onClick={() => setOpen(false)} href="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/Cart" className="flex items-center gap-2">
              <span>Cart</span>
              <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-lg text-sm font-bold">
                {numOfCartItem}
              </span>
            </Link></li>
            <li><Link onClick={() => setOpen(false)} href="/wishlist" className="flex items-center gap-2">
              <span>Wishlist</span>
              <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-lg text-sm font-bold">
                {wishlistCount}
              </span>
            </Link></li>
            <li><Link onClick={() => setOpen(false)} href="/Product">Product</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/Categories">Categories</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/Brands">Brands</Link></li>

            <hr />

            <div className="flex gap-4 justify-center text-xl">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>

            <hr />



            <li className="text-center"><Link href="/Login">Login</Link></li>
            <li className="text-center"><Link href="/Register">Register</Link></li>
            <li className="text-center "><Link href="/Signout">Signout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
