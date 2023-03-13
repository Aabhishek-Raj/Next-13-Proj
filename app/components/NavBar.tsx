import Link from "next/link";

export default function NavBar() {
  return (
    <>
        <header>
           <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href='/' className="text-lg font-bold">Rihanna Arts</Link>
            <div>
              <Link href='/cart' className="p-2">cart</Link>
              <Link href='/login' className="p-2">Login</Link>
            </div>
           </nav>
        </header>
    </>
  )
}
