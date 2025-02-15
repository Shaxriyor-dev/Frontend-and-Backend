import { useState } from "react";
import icons from "../assets/icon/icons.png";
import BookCard from "./BookCard";

export default function BookForm() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
    handleClose();
  };

  return (
    <div className="p-4 space-y-4 bg-[#2E3030] grow">
      <div className="my-container">
        <div>
          <div className="flex justify-between items-center py-[20px]">
            <p className="text-[36px] text-[#FEFEFE] font-[700] font-[Mulish]">
              {!submittedBooks.length ? (
                "You do not have any book."
              ) : (
                <p>
                  You’ve got{" "}
                  <span className="text-[#6200EE]">
                    {submittedBooks.length > 1
                      ? submittedBooks.length + " books"
                      : submittedBooks.length + " book"}
                  </span>
                </p>
              )}
            </p>
            <button
              onClick={handleOpen}
              className=" flex justify-center items-center gap-2.5 h-[45px] w-[181px] font-[Mulish] text-white bg-[#6200EE] rounded"
            >
              {" "}
              <img src={icons} alt="plus icon" /> Create a book
            </button>
          </div>
          <p className="flex text-lg text-white font-[Mulish] capitalize">
            {submittedBooks.length
              ? " Your books today"
              : "there is no book yet."}
          </p>
        </div>

        {/* book card */}
        {submittedBooks.length > 0 && (
          <div className=" flex items-center flex-wrap mt-[30px] gap-6">
            {submittedBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        )}

        <div
          onClick={handleClose}
          className={`bg-black/70 absolute top-0 left-0 w-full h-full ${
            open ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`px-7 py-9 rounded-2xl w-sm font-[Mulish] bg-white flex flex-col gap-4 absolute top-1/2 left-1/2 -translate-1/2 duration-200 ${
            open ? "" : "scale-0"
          }`}
        >
          <h3 className="text-center font-[Mulish] font-[700] text-2xl">
            Book Name
          </h3>
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
              onClick={handleClose}
              className="text-[#2E3030] rounded p-[10px] grow border cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
