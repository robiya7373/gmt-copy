import React from "react";

const Fakt = () => {
  const stats = [
    { value: "7 лет", description: "на рынке" },
    { value: "964+", description: "оригинальной продукции со всего мира" },
    { value: "23+", description: "международных сертификатов качества" },
    { value: "2452+", description: "товаров всегда в наличии" },
  ];

  return (
    <div className="flex gap-[440px] mr-8 mb-24">
      <div>
        <h1 className="text-[42px] font-semibold">Цифры и факты</h1>
        <p className="">
          Мы работаем на результат и продаём <br /> только качественную
          продукцию
        </p>
      </div>
      <div className="text-gray-900">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center py-4 gap-52 ${
              index !== 0 ? "border-t border-gray-300" : ""
            }`}
          >
            <p className="text-4xl font-bold text-[#088269]">
              {stat.value}
            </p>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fakt;
