import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
// import { styles } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import img1 from "../../../public/assets/img1com.png";
import img2 from "../../../public/assets/img2com.png";

import CategoryList from "../../components/Detals/CategoryList";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const useStyles = styled({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  article: {
    // width: "80%",
    // margin: "10px 0",
    // padding: "10px",
    // border: "1px solid #ccc",
    // borderRadius: "8px",
    // display: "grid",
    // flexDirection: "row",
    // alignItems: "center",
    // display: "grid",
    // gridTemplateColumns: "repeat(2, minmax(0, 1fr))",

    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  image: {
    width: "150px",
    height: "100px",
    // objectFit: "cover",
    // marginRight: "20px",
    "@media (max-width: 600px)": {
      width: "100%",
      height: "auto",
      marginBottom: "10px",
    },
  },
  // content: {
  //   flex: 1,
  // },
  pagination: {
    marginTop: "90px",
  },
});

// Hardcoded data with more articles
const allArticles = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Что такое инфузомат (инфузионный насос)  `,
  date: "14.03.2023",
  description:
    "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.",
  image: img1,
  img2,
}));

const Articles = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedArticles = allArticles.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  const totalPages = Math.ceil(allArticles.length / pageSize);

  return (
    <div className=" max-w-[1440px] mx-auto px-5">
      <div className=" flex pt-[20px] gap-2 custom-text ">
        <NavLink to={"/"}>
          <span className="text-[#7A7687] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </NavLink>
        <NavLink>
          <span className="text-[#202020] font-medium cursor-pointer  flex items-center gap-2 ">
            Блог
          </span>
        </NavLink>
      </div>
      <h1 className=" text-[48px] font-semibold mt-28">Блог</h1>
      <div className="flex gap-8">
        <div>
          <CategoryList />
        </div>
        <div className={classes.root}>
          {paginatedArticles.map((article) => (
            //    <div className=" grid grid-cols-2">
            <div
              key={article.id}
              value={classes.article}
              className=" flex border border-slate-400 mt-10 rounded-lg w-full"
            >
              <div>
                {" "}
                <img
                  src={article.image}
                  alt={article.title}
                  className=" w-[800px] h-72"
                />
              </div>
              <div className=" pl-16">
                <h2 className=" text-[18px] font-semibold pt-4 ">
                  {article.title}
                </h2>
                <p className=" pb-6 custom-text text-[#7A7687]">
                  {article.date}
                </p>
                <p className="custom-text text-[#7A7687]">
                  {article.description}
                </p>
                <button className=" border border-[#D5D1E1] mt-12 px-4 py-2 items-center text-[#088269] rounded-full">
                  Подробнее
                </button>
              </div>
            </div>
            //    </div>
          ))}
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            className=" m-20 mb-36 "
          />
        </div>
      </div>
    </div>
  );
};

export default Articles;
