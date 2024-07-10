import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import img1 from "../../../../public/assets/Banner.png";
import "../../../index.css";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { LuX } from "react-icons/lu";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots custom-dots",
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Имя обязательно";
    if (!formData.phone) tempErrors.phone = "Телефон обязателен";
    if (!formData.email) tempErrors.email = "Email обязателен";
    if (!formData.organization) tempErrors.organization = "Организация обязательна";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="max-w-[1440px] hero mx-auto px-5 relative ">
      <div className="bg-[#f8f7f3] py-[20px] slick-track">
        <div className="h-full md:h-[368px] w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {[img1, img1, img1].map((image, index) => (
                <div
                  key={index}
                  className="w-[100%] h-[100%] md:h-[350px] flex justify-between bg-[#e5e4ed] slider border rounded-2xl"
                >
                  <div className="p-[30px] flex flex-col justify-center md:w-1/2">
                    <h2 className="text-[#202020] text-[32px] lg:text-[45px] w-[100%] lg:w-[90%] leading-[37px] lg:leading-[52px]">
                      Заголовок баннера в пару строк
                    </h2>
                    <p className="text-[#7A7687] py-[20px] text-[14px] lg:text-[16px] w-[100%] sm:w-[80%] lg:w-[60%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <div className="flex gap-2 pt-[20px] sm:pt-[40px]">
                      <button
                        className=" modal px-4 sm:px-6 py-2 text-[13px] sm:text-[16px] bg-[#088269] border rounded-full text-[#fff]"
                        onClick={openModal}
                      >
                        Запросить цену
                      </button>
                      <button className="px-4 sm:px-6 py-2 text-[13px] sm:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                        В каталог
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[350px] md:w-1/2 flex items-center justify-center border-l">
                    <img
                      src={image}
                      alt={"Banner"}
                      className="w-full h-full object-cover rounded-r-2xl"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-between absolute right-[60px] bottom-16">
            <div className="flex gap-3">
              <button
                className="w-[41px] h-[41px] rounded-full border bg-[#fff] flex items-center justify-center"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <HiArrowSmLeft />
              </button>
              <button
                className="w-[41px] h-[41px] rounded-full border bg-[#fff] flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <HiArrowSmRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
      open={modalIsOpen}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          borderBottom: "2px solid #000",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          className="flex justify-between"
        >
          Запросить цену <LuX className="mt-3 cursor-pointer" onClick={closeModal} />
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Ваше имя*"
            name="name"
            autoComplete="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Ваш телефон*"
            name="phone"
            autoComplete="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Ваш email*"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="organization"
            label="Название вашей организации*"
            name="organization"
            autoComplete="organization"
            value={formData.organization}
            onChange={handleChange}
            error={!!errors.organization}
            helperText={errors.organization}
          />
          <TextField
            margin="normal"
            fullWidth
            id="message"
            label="Ваше сообщение"
            name="message"
            autoComplete="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <div className="flex gap-2 mt-3">
            <Button
              type="submit"
              // fullWidth
              sx={{ mt: 3, mb: 2,  color: "#fff", bgcolor: "#088269" }}
              className="hover:border hover:border-[#088269] hover:text-[#088269] w-[70%]"
            >
              Отправить
            </Button>
            <p>
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях <br />
              <span className="text-[#088269]">
                Политики конфиденциальности.
              </span>
            </p>
          </div>
        </form>
      </Box>
    </Modal>
    </div>
  );
};

export default Carousel;
