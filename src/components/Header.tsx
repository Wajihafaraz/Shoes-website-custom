import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"

const Header = () => {
  return (
    <header className="header">

       <h1 className="logo">Shoes World</h1>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/shoes">Shoes</Link>
        <Link href="/contact">Contact</Link>

    </nav>
       <FaShoppingCart style={{color:'white' , fontSize:'20px'}}/>
    </header>
  )
}

export default Header
