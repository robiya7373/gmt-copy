import React, { useState, useEffect } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { SiVk } from "react-icons/si";
import { LuPenLine, LuCamera, LuX } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState("");

  // Load profile image from localStorage when component mounts
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  // Save profile image to localStorage whenever it changes
  useEffect(() => {
    if (image) {
      localStorage.setItem("profileImage", image);
    }
  }, [image]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      closeModal();
    };
    reader.readAsDataURL(file);
  };

  const removeImg = () => {
    localStorage.removeItem("profileImage");
    setImage("");
    console.log("Profile image removed from localStorage");
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/cabinet"} className="">
            Личный кабинет
          </NavLink>
        </div>
        <div className="flex mt-[100px]">
          <div
            className="w-1/3  flex justify-center items-center"
            onClick={openModal}
          >
            <div className="relative group cursor-pointer  flex w-[200px] h-[200px]">
              <span
                className="text-bold flex justify-center items-center text-[70px] border w-[200px]
             h-[200px] rounded-full bg-[#E1EFE6]  text-[#23473B]"
              >
                {image ? (
                  <img
                    src={image}
                    alt="Profile"
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                ) : (
                  "K"
                )}
              </span>
              <div className="absolute left-[80px] top-[150px]  w-[40px] h-[40px]  inset-0  bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                <LuCamera className="text-white w-[20px] h-[20px]" />
              </div>
            </div>
          </div>

          <div className="w-2/3">
            <button onClick={removeImg}>Delete Image</button>
            <h1 className="text-[30px] font-medium mb-[20px]">
              Константин Константинопольский
            </h1>
            <div className="flex gap-4 items-center ">
              <SiVk className="w-[30px] h-[30px]" />
              <FaFacebookF className="w-[30px] h-[30px]" />
              <BiLogoInstagramAlt className="w-[30px] h-[30px]" />
              <FaTwitter className="w-[30px] h-[30px]" />
            </div>
            <div className="mt-[50px] flex gap-4">
              <button className="px-4 py-2 border border-[#D5D1E1] rounded-full text-[14px] font-semibold">
                Изменить персональную информацию
              </button>
              <button className="px-4 py-2 border border-[#D5D1E1] rounded-full text-[14px] font-semibold">
                Изменить пароль
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-[100px] mt-[100px] ml-[25%] pb-[150px]">
          <div className="">
            <div className="flex gap-2">
              <p className="text-[16px] font-medium">+7 911 564–86–86</p>
              <LuPenLine className="mt-1 text-[#088269]" />
            </div>
            <span className="text-[16px] font-medium text-[#7A7687]">
              Телефон
            </span>
          </div>
          <div className="">
            <div className="flex gap-2">
              <p className="text-[16px] font-medium">person@mail.ru</p>
              <LuPenLine className="mt-1 text-[#088269]" />
            </div>
            <span className="text-[16px] font-medium text-[#7A7687]">
              Email
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between">
              {" "}
              <h2 className="text-lg font-medium mb-10">
                Выбор изображения профиля
              </h2>
              <LuX onClick={closeModal} className="mt-2" />
            </div>{" "}
            <label htmlFor="file" className= "cursor-pointer flex justify-center items-center h-[200px]">
              <div className="">
                <h2>Выбор изображения</h2>
              </div>
            </label>
            <input
              type="file"
              id="file"
              onChange={handleImageUpload}
              className="mb-4 text-[#088269] hidden  border-dotted border-2 border-[#E5E2EE] py-16 rounded-lg "
            />
            <div>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[#088269] text-white rounded-full ml-28"
              >
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
