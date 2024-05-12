import { fontName } from "@/app/style/font_variable";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-5 pt-24">
          <div className="border w-[93%] md:w-[78%] bg-gray-100 p-5 rounded-md shadow-sm shadow-gray-600 fixed top-1 z-50 flex justify-between">
            <p>Font Name</p>
            <p>Weight:400</p>
            <p>Copy The Font</p>
          </div>
          {Object.keys(fontName).map((key,index) => (
            <div
              key={key}
              className={`${fontName[key].className} text-2xl border p-5 rounded-md shadow-sm shadow-gray-600 hover:scale-105 transition-all flex justify-between md:w-[70%] w-[100%]`}>
              <div className="flex gap-2">
                <p>[ {index} ]</p>
              <p>{key}</p>
              </div>
              <button className={`border border-gray-600 px-2 rounded-md bg-black text-white  text-center font-serif`}>Copy</button>
            </div>
          ))}
      </div>
    </>
  );
}
