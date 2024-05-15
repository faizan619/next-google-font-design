"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import * as fontNames from "@/app/style/font_variable";

export default function Page() {
  const searchParams = useSearchParams();
  const [font, setFont] = useState(null);
  const [fontDetails, setFontDetails] = useState(null);

  useEffect(()=>{
    const fontParam = searchParams.get('font');
    if(fontParam){
        setFont(fontParam);
        var word = fontParam;
        let first_letter = word.charAt(0);
        const dynamicKey = first_letter.toUpperCase(); 


        // const fontDetails = fontNames.P[fontParam];
        const fontDetails = fontNames[dynamicKey][fontParam];
        setFontDetails(fontDetails)
    }
  },[searchParams])


  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "React is a popular JavaScript library for building user interfaces.",
    "JavaScript is the standard programming language for web development.",
    "HTML is the standard markup language for documents designed to be displayed in a web browser.",
    "CSS is a style sheet language used for describing the look and formatting of a document written in HTML.",
  ];

  return (
    <div className={`${fontDetails?.className} py-5 flex px-3 flex-col gap-5 overflow-hidden`}>
      <div className="flex justify-center items-center text-sm sm:text-2xl md:text-3xl underline flex-col gap-3">
        This is a Example of the given font Style..
      </div>
      <hr/>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl uppercase">UpperCase Alphabet</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-sm sm:text-2xl md:text-4xl w-screen">
          {alphabet.map((i) => (
            <span key={i} className="uppercase">
              {i}
            </span>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl lowercase">LowerCase Alphabet</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-sm sm:text-2xl md:text-4xl w-screen">
          {alphabet.map((i) => (
            <span key={i} className="lowercase">
              {i}
            </span>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl ">Numbers</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-sm sm:text-2xl md:text-4xl w-screen">
          {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl">Examples</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-sm sm:text-2xl md:text-4xl w-screen">
          {sentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
