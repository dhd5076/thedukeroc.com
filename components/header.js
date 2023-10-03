import Link from "next/link";

function Header() {
    return (
    <div>
    <div className="p-4 bg-gradient-to-b w-full from-black to-black flex justify-between z-50 fixed">
    <div className="text-white text-5xl ml-6 font-black font-serif font-punk  pb-4">
                The Duke
        </div>
        <nav className="z-50 flex justify-center mt-4 mr-6">
            <div className="">
                <ul className="hidden font-serif lg:flex z-50 text-xl text-white mx-auto divide-x-2 font-thin font-serif">
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
  