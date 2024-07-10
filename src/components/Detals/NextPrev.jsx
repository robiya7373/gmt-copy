import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import tovar from "../../utils/tovarData";

const NextPrev = ({setStartIndex}) => {
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % tovar.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + tovar.length) % tovar.length);
  };
  return (
    <div className="flex items-center gap-3">
      <div
        onClick={handlePrev}
        className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
      >
        <GoArrowLeft />
      </div>
      <div
        onClick={handleNext}
        className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
      >
        <GoArrowRight />
      </div>
    </div>
  );
};

export default NextPrev;
