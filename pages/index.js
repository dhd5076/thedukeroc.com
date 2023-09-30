export default function Home() {
    return (
      <div className="relative h-screen items-center bg-center bg-cover bg-fixed" style={{ backgroundImage: 'url(/img/hero.webp)' }}>
        <div className="h-1/3">

        </div>
        <div className="bg-opacity-100 font-extrabold mx-auto h-1/3 flex items-center justify-center inline">
            <div className="bg-black/75 h-full items-center flex px-32 border-white/50 border-2">
            <h1 className="bg-clip-text stroke-white text-9xl bg-[url(/img/gold.jpg)] bg-cover text-transparent"> The Duke </h1>
            </div>
        </div>
        <div className="h-1/3 bottom-0 absolute w-full flex">
        </div>
      </div>
    );
  }
  