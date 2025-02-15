import React from "react";
import dalete from "../assets/icon/dalete.png";
import icong from "../assets/icon/icong.png";

function BookCard({ book }) {
  const { name, pages, isbn, year, status, author } = book;

  return (
    <div className="basis-[400px] p-6 rounded-lg bg-stone-200 font-[Mulish] flex flex-col gap-4 relative group">
      <p className="text-xl text-[#1515150] font-[Montserrat] font-bold">
        {name}
      </p>
      <div className="flex flex-col gap-1">
        <p>Pages: {pages}</p>
        <p>Published: {year}</p>
        <p>ISBN: {isbn}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[#000] text-[18px] font-[700] font-[Mulish]">{"Author"}</p>
        <select className="bg-red-500 outline-0 rounded-2xl px-2 py-1 text-white capitalize">
            <option value="new">new</option>
            <option value="reading">reading</option>
            <option value="finished">finished</option>
        </select>
      </div>
      <div className="absolute top-0 right-0 flex flex-col opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 duration-200">
          <button className="bg-[#FF4D4F] p-3 rounded-r-md cursor-pointer"><img src={dalete} alt="Dalete" /></button>
          <button className="bg-[#6200EE] p-3 rounded-r-md cursor-pointer"><img src={icong} alt="" /></button>
      </div>
    </div>
  );
}

export default BookCard;
