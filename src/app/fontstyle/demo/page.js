"use client";
// Demo.js
import { useSearchParams } from "next/navigation";
import { fontName } from "@/app/style/font_variable";

export default function Demo() {
  const searchParams = useSearchParams();
  const font = searchParams.get("font");

  const fontDetails = fontName[font];
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
    <div className={`${fontDetails.className} py-5 flex flex-col gap-5`}>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl uppercase">UpperCase Alphabet</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-4xl w-screen">
          {alphabet.map((i) => (
            <span key={i} className="uppercase">{i}</span>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl lowercase">LowerCase Alphabet</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-4xl w-screen">
          {alphabet.map((i) => (
            <span key={i} className="lowercase">{i}</span>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl ">Numbers</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-4xl w-screen">
          {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-serif text-2xl">Examples</h1>
        <div className="py-3 px-5 flex flex-wrap gap-5 text-4xl w-screen">
          {sentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
