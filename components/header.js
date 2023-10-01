import Link from "next/link";

function Header() {
    return (
    <div>
    <div className="p-4 pt-12 bg-gradient-to-b pr-4 from-black to-black/50 justify-center w-full justify-between z-50 fixed">
    <div className="text-white text-right lg:text-center text-5xl font-black font-serif block w-full mx-auto text-center font-vibes pb-4">
                The Duke
        </div>
        <nav className="z-50 flex justify-between w-1/3 w-screen">
            <div className="">
                <ul className="hidden lg:flex z-50 text-xl text-white mx-auto divide-x-2 font-thin font-serif">
                    <li><Link href="/" className="block px-8">Home</Link></li>
                    <li><Link href="/about" className=" block px-8">About</Link></li>
                    <li><Link href="/gallery" className="block px-8">Gallery</Link></li>
                    <li><Link href="/events" className="block px-8">Events</Link></li>
                    <li><Link href="/contact" className=" block px-8">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </div>
    </div>
    );
  }
  
  export default Header;
  