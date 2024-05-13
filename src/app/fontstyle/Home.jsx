"use client"
import { fontName } from "@/app/style/font_variable";
import { useRouter } from "next/navigation";
import Demo from "./demo/page";

export default function Home() {
  const router = useRouter();

  const handleView = (name)=>{
    router.push(`/fontstyle/demo?font=${name}`);
  }
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-5 pt-24">
        <div className="border w-[93%] md:w-[78%] bg-gray-100 p-5 rounded-md shadow-sm shadow-gray-600 fixed top-1 z-50 flex justify-between">
          <p>Font Name</p>
          <p>Weight:400</p>
          <p>Copy The Font</p>
        </div>
        {Object.keys(fontName).map((key, index) => (
          <div className={`w-full flex justify-center items-center flex-col`}>
            <div
              key={key}
              className={`${fontName[key].className} cursor-pointer  text-2xl border p-4 rounded-md shadow-sm shadow-gray-600 md:hover:scale-105 hover:underline transition-all flex justify-between items-center md:w-[70%] w-[100%]`}
            >
              <div className="flex gap-2">
                <p>{key}</p>
              </div>
              <div className="flex gap-2">
              <button
                className={`border border-gray-600 px-2 rounded-md bg-black text-white  text-center font-serif hover:scale-105`}
              >
                Copy
              </button>
              <button className="font-serif" onClick={()=>{handleView(`${key}`)}}>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
