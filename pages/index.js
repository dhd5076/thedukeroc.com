import TextFader from "@/components/textSwitcher";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  });

  return (
    <>
    <div className="">
      <div className="w-full h-screen mt-auto flex flex-col justify-center items-center">
        <div
          className={`w-full duration-1000 font-serif `}
        >
          <h6 className="transition-all duration-300 flex justify-center text-center text-white">
            <span className={`w-full inline-block opacity-${loaded ? '100' : '0'}`}>
              <TextFader></TextFader>
            </span>{" "}
          </h6>
        </div>
      </div>
    </div>
    <div className="h-[100vh] bg-black/90">

    </div>
    </>
  );
}
