import React, { useState } from "react";
import tovar from "../../utils/tovarData";
import {
  BiObjectsVerticalBottom,
  BiSolidObjectsVerticalBottom,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToWishList } from "../../redux/WishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { setToCtravleniya } from "../../redux/Ctravleniya";
import { addToCart } from "../../redux/CardSlice";

const TovarList = ({ startIndex }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayedTovar = tovar.slice(startIndex, startIndex + 3);
  if (displayedTovar.length < 3) {
    displayedTovar.push(...tovar.slice(0, 3 - displayedTovar.length));
  }

  const likeList = useSelector((state) => state.like.data);
  const stravList = useSelector((state) => state.strav.data);

  const handleWishListToggle = (product) => {
    dispatch(setToWishList(product));
  };

  const handleStravListToggle = (product) => {
    dispatch(setToCtravleniya(product));
  };

  const handleAddToCart = (product) => {
    let totalPrice = 1 * product.price;
    const tempProduct = {
      ...product,
      quantity: 1,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
  };

  return (
    <div className="mr-8 mt-9 ">
      <div className="flex gap-4">
        {displayedTovar.map((tovar, index) => (
          <div key={index} className="border rounded-xl w-[315px] relative">
            {tovar.label && (
              <span
                className={`absolute top-4 left-4 px-2 py-1 rounded-full text-white text-xs ${tovar.labelClass}`}
              >
                {tovar.label}
              </span>
            )}
            <button
              className="absolute top-4 right-3 cursor-pointer"
              onClick={() => handleWishListToggle(tovar)}
            >
              {likeList.some((wishItem) => wishItem.id === tovar.id) ? (
                <FaHeart size={20} className="text-[#088269]" />
              ) : (
                <FaRegHeart size={20} className="text-[#088269]" />
              )}
            </button>
            <button
              className="absolute top-4 right-10 cursor-pointer"
              onClick={() => handleStravListToggle(tovar)}
            >
              {stravList.some((stravItem) => stravItem.id === tovar.id) ? (
                <BiSolidObjectsVerticalBottom
                  size={20}
                  className="text-[#088269]"
                />
              ) : (
                <BiObjectsVerticalBottom size={20} className="text-[#088269]" />
              )}
            </button>

            <img
              src={tovar.image}
              alt={tovar.alt}
              className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
              onClick={() => navigate(`/katalog/labaratoriya/${tovar.id}`)}
            />
            <div className="p-4">
              <h3 className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020]">
                {tovar.title}
              </h3>
              <div className="py-4">
                <span className="block text-[#7A7687] text-[14px] font-normal">
                  {tovar.desc}
                </span>
                <p className="text-[16px] font-normal text-[#7A7687]">
                  {tovar.position}
                </p>
              </div>
              <p className="text-[16px] font-medium text-[#202020]">
                {tovar.price}
              </p>
            </div>
            <div className="p-4">
              <button
                onClick={() => handleAddToCart(tovar)}
                className="w-[100%] transition duration-300 flex justify-center items-center px-4 py-[8px] rounded-full font-semibold text-[16px] text-[#088269] border border-[#D5D1E1] hover:bg-[#088269] hover:text-white"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TovarList;
