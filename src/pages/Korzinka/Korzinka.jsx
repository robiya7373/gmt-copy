import React from "react";
import {
  BiObjectsVerticalBottom,
  BiSolidObjectsVerticalBottom,
} from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { removeItem, updateQuantity } from "../../redux/CardSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Korzinka = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const totalAmounts = useSelector((state) => state.cart.totalAmounts);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };
  const likeList = useSelector(SelectCtravleniya);

  const handleStravListToggle = (product) => {
    dispatch(setToCtravleniya(product));
  };

  const handleWishListToggle = (product) => {
    dispatch(setToWishList(product));
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5 flex pt-[20px] gap-2 custom-text mb-[80px]">
        <NavLink to="/">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </NavLink>
        <NavLink>
          <span className="text-[#202020] font-medium cursor-pointer flex items-center gap-2">
            Корзина ({totalItems})
          </span>
        </NavLink>
      </div>
      <div className="flex justify-between max-w-[1440px] mx-auto px-5">
        <div className="grid grid-cols-1 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="border rounded-lg shadow-sm flex">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-[250px] h-[250px] object-cover border-r shadow-l-sm rounded-l-lg"
                />
                <span
                  className={`absolute top-2 left-2 px-2 py-1 text-white rounded-full ${product.labelClass}`}
                >
                  {product.label}
                </span>
              </div>
              <div className="flex">
                <div className="m-10">
                  <h3 className="text-[24px] font-semibold mb-6">
                    {product.title}
                  </h3>
                  <p className="text-gray-500">{product.desc}</p>
                  <p className="text-gray-500">{product.position}</p>
                </div>
                <div className="m-10">
                  <span className="text-xl font-semibold">{product.price}</span>
                  <div className="flex p-2 w-24 gap-4 pl-5 border border-[#456789] rounded-full mt-8">
                    <button
                      onClick={() => decreaseQty(product.id, product.quantity)}
                      className=""
                    >
                      -
                    </button>
                    <span className="">{product.quantity}</span>
                    <button
                      onClick={() => increaseQty(product.id, product.quantity)}
                      className=""
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex mt-10">
                <button
                  className="cursor-pointer w-8 h-8"
                  onClick={() => handleStravListToggle(tovar)}
                >
                  {stravList.some((stravItem) => stravItem.id === tovar.id) ? (
                    <BiSolidObjectsVerticalBottom
                      size={20}
                      className="text-[#088269] "
                    />
                  ) : (
                    <BiObjectsVerticalBottom size={20} className="" />
                  )}
                </button>{" "}
                <button
                  className="cursor-pointer mt-1 mx-3 w-6 h-7"
                  onClick={() => handleWishListToggle(tovar)}
                >
                  {likeList.some((wishItem) => wishItem.id === tovar.id) ? (
                    <FaRegHeart size={20} className="text-[#088269]" />
                  ) : (
                    <FaHeart size={20} className="text-[#088269]" />
                  )}
                </button>
                <button onClick={() => handleRemoveItem(product.id)}>
                  <IoCloseOutline className="cursor-pointer mb-[190px] w-10 h-10" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[320px] h-[250px] bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex justify-between mb-3">
              <span className="text-lg font-semibold">Итого</span>
              <span className="text-lg font-semibold">{totalAmounts} руб.</span>
            </div>
            <hr />
            <div className="text-gray-500 mt-3">
              <div className="flex justify-between">
                <span>Товары ({totalItems} шт)</span>
                <span>{totalAmounts} руб.</span>
              </div>
              <div className="flex justify-between">
                <span>Скидка</span>
                <span>0 руб.</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#088269] text-white py-2 rounded-full mb-2">
            Оформить заказ
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-full">
            Задать вопрос
          </button>
        </div>
      </div>
    </>
  );
};

export default Korzinka;
