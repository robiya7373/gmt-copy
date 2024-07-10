import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";

const CustomTab = styled(Tab)({
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000",
  "&.Mui-selected": {
    color: "#000",
  },
});

const App = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="  max-w-[1440px] mx-auto px-5 ">
    <div className="p-4 border border-[#D5D1E1] rounded-t-lg">
    <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: {
            backgroundColor: "#088269",
          },
        }}
      >
        <CustomTab label="Описание оборудования" />
        <CustomTab label="Характеристики и документы" />
        <CustomTab label="Услуги и сервис" />
        <CustomTab label="Оптовым покупателям" />
        <CustomTab label="Отзывы 4" />
      </Tabs>
      {value === 1 && (
        <Box className="p-4">
          <h2 className="font-semibold mb-4">Технические характеристики</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex ">
                <span>Вес оборудования..............................</span>
                <span>90 кг</span>
              </div>
              <div className="flex">
                <span>
                  Детектор...............................................
                </span>
                <span>Си-1 на основе аморфного кремния</span>
              </div>
              <div className="flex">
                <span>Время сканирования..........................</span>
                <span>PAN стандарт - 12 сек</span>
              </div>
              <div className="flex">
                <span>Размер фокусного пятна...................</span>
                <span>0.6</span>
              </div>
              <div className="flex ">
                <span>Динамический диапазон...................</span>
                <span>16 бит (65 536 градаций серого)</span>
              </div>
            </div>
            <div>
              {" "}
              <div className="flex">
                <span>Рабочее напряжение..............................</span>
                <span>90 кг</span>
              </div>
              <div className="flex">
                <span>Максимальный ток..................................</span>
                <span>Си-1 на основе аморфного кремния</span>
              </div>
              <div className="flex ">
                <span>
                  Гарантия....................................................
                </span>
                <span>PAN стандарт - 12 сек</span>
              </div>
            </div>
          </div>
        </Box>
      )}
      {value === 0 && (
        <Box className="p-4">
          <h2 className="font-semibold mb-4">Описание оборудования</h2>
         <div className="text-[12px] text-[#7A7687]">
         <p>
            Биохимический анализатор Mindr UA-66 оснащен открытой платформой для
            загрузки образцов и отлично размещается на столе в кабинете врача.
            Функциональная сочетаемость с дополнительным модулем ISE
            обеспечивает увеличение «скорострельности» прибора от 100 до 300
            обработанных пробирок с биоматериалом в час, а также позволит
            замерять показатели K, Na, Cl и Li в плазме, моче, цереброспинальной
            жидкости вместе с другими важными параметрами исследования.
          </p>{" "}
          <p className="my-3">
            Прибор интуитивно понятен в использовании и техобслуживании,
            экономен в части финансовых затрат не реагенты. Что важно,
            калибровка системы аналогична той, что установлена на более
            современной аппаратуре, и это – идеальный вариант для небольших
            лабораторий, поскольку емкость погрузчика для проб меньше, чем у
            мощного оборудования.
          </p>
          <p>
            Только небольшая загрузочная емкость для образцов и химических
            компонентов, если сравнивать с передовой аналогичной техникой, не
            позволяет этой системе претендовать на принятие в ряды аппаратуры,
            которой оснащены крупномасштабные лаборатории.
          </p>
         </div>
        </Box>
      )}
    </div>
   
      <div className=" border border-[#D5D1E1] rounded-b-lg flex justify-between p-4 text-[#088269]">
              <button className="">Новинки</button>
        <button className="">Получить прайс</button>
        <button className="">Условия доставки</button>
        <button className="">Способы оплаты</button>
      </div>
    </div>
  );
};

export default App;
