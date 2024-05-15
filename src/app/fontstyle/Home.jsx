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
    const num1 = "font_"+name+num;
    if(!localStorage.getItem(num1,name)){
      localStorage.setItem(num1,name);
      alert(`${name} Successfully Saved`)
    }
    else{
      alert("This Font is Already Saved!");
    }
  };

  const [selectOption, setSelectOption] = useState("A");
  const handleOptionChange = (e) => {
    e.preventDefault();
    setSelectOption(e.target.value);
  };
  const hello = fontNames[selectOption];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-5 pt-24">
        <div className="border w-[93%] md:w-[85%] bg-gray-100 p-2 md:p-2 rounded-md shadow-sm shadow-gray-600 fixed top-1 z-50 flex justify-between items-center">
          <label className="flex justify-center text-sm sm:text-xl  items-center gap-3 p-1 sm:p-2 rounded-md">
            <p>Select: </p>
            <select
              value={selectOption}
              className="sm:p-2"
              onChange={handleOptionChange}
            >
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
          {hello === undefined ? (
            <p>No Font Available!</p>
          ) : (
            Object.keys(hello).map((key, index) => (
              <div
                key={key}
                className={`${hello[key].className} cursor-pointer  text-2xl border py-4 px-2 sm:p-4 rounded-md shadow-sm shadow-gray-600 md:hover:scale-105 transition-all hover:text-blue-700 flex justify-between items-center md:w-[80%] w-[100%]`}
              >
                <div className="flex gap-8 text-sm sm:text-3xl">
                  <p
                    className="w-10"
                    onClick={() => {
                      handleSave(index, key);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full"
                    >
                      <path
                        fill="#F44336"
                        d="M92,8c15.324,0,27.813,12.375,27.996,27.656c-0.055,0.422-0.098,0.844-0.109,1.281l-0.051,3.172
	c-2.652,24.742-37.203,60.523-55.84,77.273c-18.5-16.617-52.695-52-55.773-76.742l-0.109-3.703C8.102,36.523,8.063,36.109,8,35.656
	C8.188,20.375,20.676,8,36,8c8.422,0,16.352,3.875,21.754,10.625L64,26.43l6.246-7.805C75.648,11.875,83.578,8,92,8 M92,0
	C80.621,0,70.598,5.383,64,13.625C57.402,5.383,47.379,0,36,0C16.117,0,0,16.117,0,36c0,0.398,0.105,0.773,0.117,1.172H0
	C0,74.078,64,128,64,128s64-53.922,64-90.828h-0.117C127.895,36.773,128,36.398,128,36C128,16.117,111.883,0,92,0L92,0z"
                      />
                    </svg>
                  </p>
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
                  className={`w-12 hover:scale-105`}
                >
                  <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full" >
<path class="stone_een" 
fill="gray"
  d="M10,6c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1V3c0-0.552-0.448-1-1-1h-2.184
	C18.403,0.837,17.304,0,16,0s-2.403,0.837-2.816,2H11c-0.552,0-1,0.448-1,1V6z M28,6v23c0,1.657-1.343,3-3,3H7c-1.657,0-3-1.343-3-3
	V6c0-1.657,1.343-3,3-3h2v2H7C6.448,5,6,5.448,6,6v23c0,0.552,0.448,1,1,1h18c0.552,0,1-0.448,1-1V6c0-0.552-0.448-1-1-1h-2V3h2
	C26.657,3,28,4.343,28,6z M23,6c0,1.103-0.897,2-2,2H11C9.897,8,9,7.103,9,6H7v23h18V6H23z M19.5,19h-7c-0.276,0-0.5-0.224-0.5-0.5
	c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,18.776,19.776,19,19.5,19z M19.5,17h-7c-0.276,0-0.5-0.224-0.5-0.5
	c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,16.776,19.776,17,19.5,17z M19.5,15h-7c-0.276,0-0.5-0.224-0.5-0.5
	c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,14.776,19.776,15,19.5,15z"/>
</svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
