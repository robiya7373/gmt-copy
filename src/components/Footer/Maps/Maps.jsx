import React, { useState } from "react";

const Map = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      question: "",
    });
  };
  return (
    <div className=" max-w-[1440px] mx-auto px-5 mb-36 py-5 gap-[20px] grid gird-cols-1 md:grid-cols-2 ">
      <div className="w-full border-[#D5D1E1]  border rounded-[10px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043826!2d69.20123767599627!3d41.2855182023078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719411223784!5m2!1suz!2s"
          width="100%"
          height="600"
          className=" rounded-[10px] "
        ></iframe>
      </div>
      <div className=" bg-white p-[40px] border-[#D5D1E1]  border rounded-[10px] ">
        <h2 className=" lg:text-[30px] mb-4 text-[18px] md:text-[20px] font-medium leading-[120%] text-[#202020]">
          {" "}
          Остались вопросы?
        </h2>
        <p className="mb-6 text-[14px] text-[#7A7687] xl:pr-[150px] ">
          Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
          координаты и наш менеджер перезвонит вам через 10 минут
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
            />
          </div>
          <div className=" lg:mb-[30px] ">
            <textarea
              name="question"
              placeholder="Ваш вопрос"
              value={formData.question}
              onChange={handleChange}
              required
              className="w-full h-[100px] resize-none p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
            />
          </div>

          <div className="flex flex-col lg:flex-row mt-[30px] lg:gap-[30px] items-start lg:items-center ">
            <button className="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Отправить
            </button>
            <p className="mt-4 text-[12px] font-medium text-[#7A7687] opacity-60">
              Нажимая «Отправить», я соглашаюсь с обработкой персональных данных
              на условиях{" "}
              <a href="#" className="text-[#088269] underline">
                Политики конфиденциальности
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Map;
