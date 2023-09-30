import Link from "next/link";

function Header() {
    return (
    <>
    <div className="flex justify-between">
        <nav className="fixed z-50 w-screen flex justify-between bg-black">
            <div className="text-white text-2xl font-black font-serif block p-8 w-1/3">
                The Duke
            </div>
            <div className="w-1/3">
                <ul className="flex z-50 text-xl text-white mx-auto block">
                    <li><Link href="/" className="block p-8">Home</Link></li>
                    <li><Link href="/about" className=" block p-8">About</Link></li>
                    <li><Link href="/gallery" className="block p-8">Gallery</Link></li>
                    <li><Link href="/events" className="block p-8">Events</Link></li>
                    <li><Link href="/contact" className=" block p-8">Contact</Link></li>
                </ul>
            </div>
            <div className="text-white text-xl block p-8 w-1/3">
                
            </div>
        </nav>
    </div>
    </>
    );
  }
  
  export default Header;
  