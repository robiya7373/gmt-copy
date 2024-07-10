import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();
    if (agreeToTerms) {
      localStorage.setItem("agreeToTerms", true);
      navigate("/cobinet");
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };
  return (
    <div>
      <NavLink
        to="#"
        className="flex flex-col gap-1 items-center"
        onClick={() => setShowModal(true)}
      >
        <FaRegUser className=" w-6 h-5" />
        <p className="text-[#8a8694] text-[14px] hidden lg:block">Войти</p>
      </NavLink>
      {showModal && (
        <div className="fixed z-[999] inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl mb-4 flex justify-between">
              Регистрация <LuX onClick={() => setShowModal(false)} />
            </h2>
            <form onSubmit={handleRegistration}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 border-b "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 border-b "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#088269] text-white py-2 w-full rounded-full"
              >
                Register
              </button>
              <div className="my-4">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  className="mr-2"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                />
                <label htmlFor="agreeToTerms" className="text-gray-700">
                  Я соглашаюсь c обработкой персональных данных <br /> на
                  условиях
                  <span className="text-[#088269]">
                    {" "}
                    Политики конфиденциальности.
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
