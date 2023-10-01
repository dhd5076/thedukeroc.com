import TextFader from "@/components/textSwitcher";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  });

  return (
    <>
    <div className="h-screen bg-black/75">
      <div className="w-full pt-48">
        <div
          className={`bg-blend-saturation overflow-hidden w-full duration-1000 font-serif h-full mr-auto transition-opacity`}
        >
          <h6 className="text-8xl transition-all duration-300 flex justify-center text-center text-white">
            <span className={`w-full inline-block opacity-${loaded ? '100' : '0'}`}>
              <TextFader></TextFader>
            </span>{" "}
          </h6>
        </div>
      </div>
    </div>
    <div className="h-[]">

    </div>
    </>
  );
}
