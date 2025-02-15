import { useState } from "react";

export default function Modal({}) {
  
  const [bookData, setBookData] = useState({
    name: "",
    pages: "",
    year: "",
    isbn: "",
  });

  const [submittedBooks, setSubmittedBooks] = useState([]);

  const world = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const btnsum = () => {
    if (bookData.name.trim()) {
      setSubmittedBooks([...submittedBooks, bookData]);
      setBookData({ name: "", pages: "", year: "", isbn: "" });
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30">
      <div className="px-4 py-8 rounded-2xl w-sm font-[Mulish] bg-white flex flex-col gap-4">
        <h3 className="text-center font-[Mulish] font-[700] text-2xl">Book Name</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter book name"
          value={bookData.name}
          onChange={world}
          className="p-3 rounded-lg outline-none w-full border border-[#6200EE]"
        />
        <input
          type="text"
          name="pages"
          placeholder="Enter number of pages"
          value={bookData.pages}
          onChange={world}
          className="p-3 rounded-lg outline-none w-full border border-[#6200EE]"
        />
        <input
          type="text"
          name="year"
          placeholder="Enter published year"
          value={bookData.year}
          onChange={world}
          className="p-3 rounded-lg outline-none w-full border border-[#6200EE]"
        />
        <input
          type="text"
          name="isbn"
          placeholder="Enter ISBN"
          value={bookData.isbn}
          onChange={world}
          className="p-3 rounded-lg outline-none w-full border border-[#6200EE]"
        />
        <div className="flex justify-between items-center gap-2 flex-wrap">
          <button
            onClick={btnsum}
            className="bg-[#6200EE] text-white rounded p-[10px] grow cursor-pointer"
          >
            Submit
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-[#2E3030] rounded p-[10px] grow border cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
