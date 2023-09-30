function Header() {
    return (
    <>
    <div className="">

    </div>
        <nav className="fixed z-50 w-screen mt-16 flex justify-center bg-black/75">
            <div className="">
                <ul className="flex z-50 text-xl text-white mx-auto block">
                    <li><a href="/" className="block p-8 border-x-2 border-white/75">Home</a></li>
                    <li><a href="/about" className=" block p-8 border-r-2 border-white/75">About</a></li>
                    <li><a href="/gallery" className="block p-8 border-r-2 border-white/75">Gallery</a></li>
                    <li><a href="/events" className="block p-8 border-r-2 border-white/75">Events</a></li>
                    <li><a href="/contact" className=" block p-8 border-r-2 border-white/75">Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
    );
  }
  
  export default Header;
  