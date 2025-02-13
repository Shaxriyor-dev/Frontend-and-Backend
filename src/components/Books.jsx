import { useState } from "react";
import icons from "../assets/icon/icons.png";

export default function BookForm() {
  const [showInput, setShowInput] = useState(false);
  const [bookData, setBookData] = useState({
    name: "",
    pages: "",
    year: "",
    isbn: "",
  });
  const [submittedBooks, setSubmittedBooks] = useState([]);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (bookData.name.trim()) {
      setSubmittedBooks([...submittedBooks, bookData]);
      setBookData({ name: "", pages: "", year: "", isbn: "" });
    }
  };

  return (
    <div className="p-4 space-y-4">
      <section>
        <div>
          <div className="flex justify-between items-center px-[75px] py-[20px]">
            <p className="text-[36px] text-[#FEFEFE] font-[700] font-[Mulish]">
              You’ve got <span className="text-[#6200EE]">7 book</span>
            </p>
            <div>
              <button
                onClick={() => setShowInput(true)}
                className=" flex justify-center items-center gap-2.5 h-[45px] w-[181px] font-[Mulish] text-white bg-[#6200EE] rounded"
              >
                {" "}
                <img src={icons} alt="" /> Create a book
              </button>
            </div>
          </div>
          <p className="flex text-[20px] text-[#FEFEFE] font-[Mulish] px-[75px] ">
            Your books today
          </p>
        </div>
      </section>
      {showInput && (
        <div className="fixed inset-0 ">
        <div className="relative flex justify-center items-center h-screen bg-gray-100">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2E3030] clip-diagonal"></div>
        <div className="relative z-10 bg-white p-8 rounded-2xl h-[538px] shadow-xl w-[490px]">
            <h1 className="text-[28px] text-center font-[Mulish] font-[700] mt-[20px]">Book Name</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter book name"
              value={bookData.name}
              onChange={handleChange}
              className="p-4 rounded-[10px] outline-none w-full mt-[15px] border-1 border-solid border-[#6200EE]"
            />
            <input
              type="text"
              name="pages"
              placeholder="Enter number of pages"
              value={bookData.pages}
              onChange={handleChange}
              className="p-4 rounded-[10px] outline-none w-full mt-[15px] border-1 border-solid border-[#6200EE]"
            />
            <input
              type="text"
              name="year"
              placeholder="Enter published year"
              value={bookData.year}
              onChange={handleChange}
              className="p-4 rounded-[10px] outline-none w-full mt-[15px] border-1 border-solid border-[#6200EE]"
            />
            <input
              type="text"
              name="isbn"
              placeholder="Enter ISBN"
              value={bookData.isbn}
              onChange={handleChange}
              className="p-4 rounded-[10px] outline-none w-full mt-[15px] border-1 border-solid border-[#6200EE]"
            />
            <div className="flex justify-center items-center mt-[40px]">
            <button
              onClick={handleSubmit}
              className=" h-[55px] w-[260px] bg-gradient-to-r from-blue-500 to-[#6200ee] font-[Mulish] text-white rounded"
            >
              Submit
            </button>
            <button
              onClick={() => setShowInput(false)}
              className="h-[55px] w-[260px]  bg-gradient-to-r from-green-500 to-lime-500  font-[Mulish] text-white rounded ml-2"
            >
              Close
            </button>
            </div>
            
          </div>
        </div>
        </div>
      )}
      {submittedBooks.length > 0 && (
        <div className=" flex items-center ml-[75px] mt-[30px] gap-9">
          {submittedBooks.map((book, index) => (
            <div key={index} className="w-[400px] h-[224px] p-4  rounded-[15px] bg-[#fff] space-y-3">
              <p className="text-[20px] text-[#1515150] font-[Mulish] font-[900]">
                <strong></strong> {book.name}
              </p>
              <p className="font-[Mulish] text-[16px]">
                <strong>Pages:</strong> {book.pages}
              </p>
              <p className="font-[Mulish] text-[16px]">
                <strong>Published:</strong> {book.year}
              </p>
              <p className="font-[Mulish] text-[16px]">
                <strong>ISBN:</strong> {book.isbn}
              </p>
               <div className="flex items-center justify-between mt-5">
                  <p className="text-[#333333] text-[17px] font-[Mulish]">Eben Upton / 2012</p>
                  <button className="h-[24px] w-[88px] bg-[#00FF29] font-bold font-[Mulish] rounded-2xl">New</button>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
