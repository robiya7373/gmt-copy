import Marquee from 'react-fast-marquee';
import klent from '../../../utils/klentData';

const Klent = () => {
  return (
    <div className="bg-[#E5E2EE] mt-32 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto p-5 relative flex justify-between flex-col sm:flex-row">
        <div className="text-[18px] md:text-[20px] lg:text-[30px] mb-[50px] sm:mb-0">Наши клиенты</div>
        <div className="text-[28px] md:text-[34px] lg:text-[48px] mr-16">
          БОЛЕЕ <span className="bg-transparent text-[#088269]">5000</span> <br /> УСПЕШНЫХ ПРОЕКТОВ
        </div>
      </div>
      <Marquee>
        <div className='flex justify-between gap-16 mt-16'>
          {klent.map((client, index) => (
            <div key={index} className='border-[#D5D1E1]  border rounded-[10px]'>
              <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
                <img src={client.img} alt={`Client ${index + 1}`} />
              </div>
              <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
                <p>{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Klent;
