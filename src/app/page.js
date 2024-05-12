import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-col items-center h-screen pt-8 bg-gray-200">
      <Link href="/fontstyle" className="border rounded-md p-3 fontName show h-28 w-64 cursor-pointer hover:scale-105 transition-all shadow-md hover:shadow-black">
        <p className="fixed top-28 show1 hidden w-56 text-center shadow-md shadow-black rounded-md bg-white px-5 mt-3">View All Nextjs Google Fonts</p>
      </Link>
    </div>
  );
}
