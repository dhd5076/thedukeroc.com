export default function Home() {
    return (
      <div className="relative h-screen items-center bg-center bg-cover bg-fixed" style={{ backgroundImage: 'url(/img/hero.webp)' }}>
        <div className="h-1/3">

        </div>
        <div className="bg-opacity-100 font-extrabold mx-auto flex inline">
            <div className="bg-black/75 w-1/3 font-serif space-y-8 h-full items-center px-16 py-16 text-center mx-auto">
            <h6 className="text-3xl text-white">Your </h6>
            <h1 className="text-white text-5xl"> Wedding </h1>
            <h6 className="text-3xl text-white">Venue </h6>
            </div>
        </div>
        <div className="h-1/3 bottom-0 absolute w-full flex">
        </div>
      </div>
    );
  }
  