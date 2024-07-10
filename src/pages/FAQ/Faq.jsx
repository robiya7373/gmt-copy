import { Link, NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  MdAdd,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { faqData } from "../../utils/klentData";
import Map from "../../components/Footer/Maps/Maps";

const Faq = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 11;

  const filteredData = faqData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="flex items-center gap-2 pb-10 pt-5 text-lg font-normal">
          <NavLink to={"/"} className="text-[#7A7687]">
            Главная
          </NavLink>
          <RiArrowRightSLine className="text-2xl text-[#7A7687]" />
          <NavLink to={"/faq"} className="">
            FAQ
          </NavLink>
        </div>
        <div className="flex lg:flex-row gap-48 pb-20 pt-10">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-medium sm:mb-8">
              Часто задаваемые вопросы
            </h2>
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Поиск по вопросам"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full outline-none px-4 py-2 border rounded-l-full bg-[#F8F7F3]"
              />
              <button className="bg-[#D5D1E1] px-4 py-2 border rounded-r-full">
                <IoSearch className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 border-t-2 border-[#E1DFE7]">
            {currentData.map((item) => (
              <Accordion
                key={item.key}
                className="bg-transparent w-full"
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<MdAdd className="text-2xl" />}
                  aria-controls={`panel${item.key}-content`}
                  id={`panel${item.key}-header`}
                >
                  <span className="text-xl font-semibold">{item.title}</span>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="bg-transparent py-4 opacity-80 text-lg font-medium">
                    {item.content}
                  </div>
                  <button className="flex gap-2 items-center font-semibold text-sm py-2 mt-4">
                    Подробнее
                  </button>
                </AccordionDetails>
              </Accordion>
            ))}
            <div className="flex justify-center gap-2 mt-5">
              {[
                {
                  label: <MdOutlineKeyboardDoubleArrowLeft />,
                  page: currentPage - 1,
                  disabled: currentPage === 1,
                },
                ...Array(totalPages)
                  .fill()
                  .map((_, index) => ({ label: index + 1, page: index + 1 })),
                {
                  label: <MdOutlineKeyboardDoubleArrowRight />,
                  page: currentPage + 1,
                  disabled: currentPage === totalPages,
                },
              ].map(({ label, page, disabled }, index) => (
                <button
                  key={index}
                  className={`px-4 py-1 rounded-lg border ${
                    currentPage === page
                      ? "bg-[#088269] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handlePageChange(page)}
                  disabled={disabled}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Map/>
    </>
  );
};

export default Faq;
