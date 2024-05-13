"use client";
import { fontName } from "@/app/style/font_variable";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleView = (name) => {
    router.push(`/fontstyle/demo?font=${name}`);
  };

  const handleCopy = (key) => {
    try {
      navigator.clipboard
        .writeText(key)
        .then(() => {
          alert(`Copied: ${key}`);
        })
        .catch((err) => {
          alert("Failed to Copy!");
        });
    } catch (err) {
      alert("Failed to Copy!");
    }
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-5 pt-24">
        <div className="border w-[93%] md:w-[80%] bg-gray-100 p-5 rounded-md shadow-sm shadow-gray-600 fixed top-1 z-50 flex justify-between">
          <p className={`text-sm sm:text-xl md:underline text-left`}>Font Name</p>
          <p className={`text-sm sm:text-xl text-center`}>Weight:400</p>
          <p className={`text-sm sm:text-xl text-right`}>Copy Font Name</p>
        </div>
        <div className={`w-full flex justify-center gap-5 transition-all items-center flex-col`}>
          {Object.keys(fontName).map((key, index) => (
            <div
              key={key}
              className={`${fontName[key].className}  cursor-pointer  text-2xl border py-4 px-2 sm:p-4 rounded-md shadow-sm shadow-gray-600 md:hover:scale-105 transition-all flex justify-between items-center md:w-[80%] w-[100%]`}
            >
              <div
                className="flex gap-2 text-sm sm:text-3xl hover:underline"
                onClick={() => {
                  handleView(`${key}`);
                }}
              >
                <p>{key}</p>
              </div>
              <button
                onClick={() => handleCopy(key)}
                className={`border text-sm sm:text-lg md:text-xl border-gray-600 px-2 rounded-md bg-black text-white  text-center font-serif hover:scale-105`}
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
