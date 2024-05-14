"use client";
import * as fontNames from "@/app/style/font_variable";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const handleSave = (num, name) => {
    alert(`The Name is : ${name} and index is : ${num}`);
  };
  
  const [selectOption,setSelectOption] = useState('A');
  const handleOptionChange = (e)=>{
    e.preventDefault();
    setSelectOption(e.target.value);
  }
  const hello = fontNames[selectOption];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-5 pt-24">
        <div className="border w-[93%] md:w-[85%] bg-gray-100 p-2 md:p-5 rounded-md shadow-sm shadow-gray-600 fixed top-1 z-50 flex justify-between items-center">
          <label className="flex justify-center text-sm sm:text-xl  items-center gap-3 p-1 sm:p-3 rounded-md">
            <p>Select Alphabet : </p>
            <select value={selectOption} className="sm:p-2" onChange={handleOptionChange}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="N">N</option>
              <option value="O">O</option>
              <option value="P">P</option>
              <option value="Q">Q</option>
              <option value="R">R</option>
              <option value="S">S</option>
              <option value="T">T</option>
              <option value="U">U</option>
              <option value="V">V</option>
              <option value="W">W</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>
          </label>
          <p className={`text-sm sm:text-xl text-center`}>Weight:400</p>
          <p className={`text-sm sm:text-xl text-right`}>Copy Font Name</p>
        </div>
        <div
          className={`w-full flex justify-center gap-5 transition-all items-center flex-col`}
        >
        
          {hello === undefined? (
            <p>No Font Available!</p>
          ) : (
            Object.keys(hello).map((key, index) => (
              <div
                key={key}
                className={`${hello[key].className} cursor-pointer  text-2xl border py-4 px-2 sm:p-4 rounded-md shadow-sm shadow-gray-600 md:hover:scale-105 transition-all hover:text-blue-700 flex justify-between items-center md:w-[80%] w-[100%]`}
              >
                <div className="flex gap-8 text-sm sm:text-3xl">
                  <p
                    className="border w-10"
                    onClick={() => {
                      handleSave(index, key);
                    }}
                  ></p>
                  <p
                    className="hover:underline"
                    onClick={() => {
                      handleView(`${key}`);
                    }}
                  >
                    {key}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(key)}
                  className={`border text-sm sm:text-lg md:text-xl border-gray-600 px-2 py-1 rounded-md bg-black text-white  text-center font-serif hover:scale-105`}
                >
                  Copy
                </button>
              </div>
            )) 
          )}
        </div>
      </div>
    </>
  );
}