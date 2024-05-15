"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Saves = () => {
  const router = useRouter();

  const handleView = (name) => {
    router.push(`/fontstyle/demo?font=${name}`);
  };
  const [fontItems, setFontItems] = useState([]);

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

  const handleSave = (key)=>{
    const local_key = "font_"+key
    if(localStorage.getItem(local_key)){
        localStorage.removeItem(local_key);
        alert("font removed!");
      }
      else{
        alert("Font is Already Removed! Please Refresh");
        window.location.reload();
      }
    
  }

  useEffect(() => {
    const items = Object.entries(localStorage)
      .filter(([key]) => key.startsWith("font_"))
      .map(([key, value]) => ({
        key: key.slice(5),
        value,
      }));

    setFontItems(items);
  }, []);

  return (
    <div className="p-3">
      <h2>Total Fonts Saved : {fontItems?.length}</h2>
      <div className="flex flex-col items-center gap-5 mt-4">
        {fontItems.map((item) => {
          return (
            <div
              key={item.key}
              className={`border flex justify-between w-full md:w-[80%] text-xl items-center gap-3 p-3 rounded-md hover:text-blue-600 cursor-pointer`}
            >
              <div className="flex gap-8 text-sm sm:text-3xl">
                <p
                  className="w-10 hover:scale-105"
                  onClick={() => {
                    handleSave(item.key);
                  }}
                >
                  <svg className="w-full" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill="#E04F5F" d="M14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L13.846,5 L13.1420511,14.1534404 C13.0618518,15.1954311 12.1930072,16 11.1479,16 L4.85206,16 C3.80698826,16 2.93809469,15.1953857 2.8579545,14.1533833 L2.154,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 L5,3 L5,2 C5,0.945642739 5.81588212,0.0818352903 6.85073825,0.00548576453 L7,0 L9,0 C10.0543573,0 10.9181647,0.815882118 10.9945142,1.85073825 L11,2 L11,3 L14,3 Z M11.84,5 L4.159,5 L4.85206449,14.0000111 L11.1479,14.0000111 L11.84,5 Z M9,2 L7,2 L7,3 L9,3 L9,2 Z"/>
</svg>
                </p>
                <p
                  className="hover:underline"
                  onClick={() => {
                    handleView(`${item.value}`);
                  }}
                >
                  {item.value}
                </p>
              </div>
              <button
                onClick={() => handleCopy(item.value)}
                className={`w-10 hover:scale-105`}
              >
                <svg
                  version="1.1"
                  id="Uploaded to svgrepo.com"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-full"
                >
                  <path
                    class="stone_een"
                    fill="gray"
                    d="M10,6c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1V3c0-0.552-0.448-1-1-1h-2.184
	C18.403,0.837,17.304,0,16,0s-2.403,0.837-2.816,2H11c-0.552,0-1,0.448-1,1V6z M28,6v23c0,1.657-1.343,3-3,3H7c-1.657,0-3-1.343-3-3
	V6c0-1.657,1.343-3,3-3h2v2H7C6.448,5,6,5.448,6,6v23c0,0.552,0.448,1,1,1h18c0.552,0,1-0.448,1-1V6c0-0.552-0.448-1-1-1h-2V3h2
	C26.657,3,28,4.343,28,6z M23,6c0,1.103-0.897,2-2,2H11C9.897,8,9,7.103,9,6H7v23h18V6H23z M19.5,19h-7c-0.276,0-0.5-0.224-0.5-0.5
	c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,18.776,19.776,19,19.5,19z M19.5,17h-7c-0.276,0-0.5-0.224-0.5-0.5
	c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,16.776,19.776,17,19.5,17z M19.5,15h-7c-0.276,0-0.5-0.224-0.5-0.5
	c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,14.776,19.776,15,19.5,15z"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Saves;
