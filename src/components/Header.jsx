import { useState } from 'react';
import SunIcon from '../assets/icons/sun-icon.jpg';
import GlobeIcon from '../assets/icons/globe-icon.jpg';

import ToTopIcon from '../assets/icons/to-top-icon.png';
import { NavLink } from 'react-router-dom';
const cities = [
  'Toshkent',
  'Andijon',
  'Buxoro',
  "Farg'ona",
  'Jizzax',
  'Namangan',
  'Navoiy',
  'Qashqadaryo',
  "Qoraqalpog'iston",
  'Samarqand',
  'Sirdaryo',
  'Surxandaryo',
  'Xorazm',
];

const Header = () => {
  const [goodNews, setGoodNews] = useState(true);
  const toggleGoodNews = () => setGoodNews(!goodNews);
  const [selectedCity, setSelectedCity] = useState('Toshkent');
  const [hovered, setHovered] = useState(false);

  return (
    <header className="w-full h-[302px]">
      <div className="w-full h-[180px]">
        <div className="w-[1420px] h-[180px] container mx-auto flex items-center">
          <div className="w-[1420px] h-[140px] bg-[rgb(7,24,36)] rounded-[20px] flex items-center justify-center">
            <NavLink to="/" className="text-white text-[28px]">
              Daryo
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full h-[122px]">
        <div className="w-full h-[45px] bg-[rgb(7,24,36)] flex items-center">
          <div className="w-[1420px] h-[40px] container mx-auto flex items-center justify-between">
            <div className="w-[558px] h-[24px] flex items-center justify-between">
              <div className="w-[156px] h-[24px] flex items-center justify-between">
                <div className="w-[59px] h-[24px] flex items-center justify-between">
                  <div className="h-[24px] flex justify-center items-center">
                    <img src={SunIcon} alt="Sun Icon" />
                  </div>
                  <p className="text-white">C</p>
                </div>
                <div
                  className="relative w-[89px] h-[24px] flex items-center justify-between cursor-pointer group"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}>
                  <span className="text-white">{selectedCity}</span>

                  <div className="w-[16px] h-[16px]">
                    <img
                      src={ToTopIcon}
                      alt="To Top Icon"
                      className={`transition-transform duration-300 ease-in-out ${
                        hovered ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute top-[28px] left-0 w-[170px] bg-[rgb(14,45,66)] overflow-hidden
                  flex flex-col items-center p-[6px] gap-y-[6px] rounded-[10px]
                  transition-all duration-500 ease-in-out
                   ${
                     hovered ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                   }`}>
                    {cities.map((city) => (
                      <div
                        key={city}
                        className="w-[98%] h-[24px] rounded-[6px] bg-[rgb(32,61,80)] flex items-center pl-[10px] text-white hover:bg-[rgb(0,116,184)] cursor-pointer"
                        onClick={() => setSelectedCity(city)}>
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[362px] h-[20px] flex items-center justify-between">
                <div className="w-[102px] h-[20px] flex items-center justify-between">
                  <span className="text-[rgb(131,145,153)]">USD:</span>
                  <p className="text-white">11 985,1</p>
                </div>
                <div className="w-[95px] h-[20px] flex items-center justify-between">
                  <span className="text-[rgb(131,145,153)]">RUB:</span>
                  <p className="text-white">148,86</p>
                </div>
                <div className="w-[118px] h-[20px] flex items-center justify-between">
                  <span className="text-[rgb(131,145,153)]">EUR:</span>
                  <p className="text-white">13 923,09</p>
                </div>
              </div>
            </div>
            <div className="w-[593px] h-[40px] flex items-center justify-between">
              <div className="w-[125px] h-[26px]">
                <a
                  className="text-white text-[18px]"
                  target="_blank"
                  href="https://7media.uz/?utm_source=daryo">
                  header reklama
                </a>
              </div>
              <div className="w-[184px] h-[26px] flex items-center justify-between">
                <p className="text-white">Yaxshi yangiliklar:</p>
                <div
                  onClick={toggleGoodNews}
                  className={`w-[46px] h-[26px] bg-[rgb(0,116,184)] rounded-[24px] flex items-center transition-all duration-400 p-[3px] ease-in-out ${
                    goodNews ? 'bg-[rgb(0,116,184)]' : 'bg-[rgb(14,45,66)]'
                  }`}>
                  <div
                    className={`w-[20px] h-[20px] rounded-[50%] transition-all duration-400 ease-in-out ${
                      goodNews
                        ? 'bg-white translate-x-[20px]'
                        : 'bg-[rgb(27,103,152)] translate-x-0'
                    }`}></div>
                </div>
              </div>
            </div>
            <div className="w-[156px] h-[40px] flex items-center">
              <div className="flex">
                <img className="w-[50px]" src={GlobeIcon} alt="Globe Icon" />
              </div>
              <select
                className="w-[85px] text-white text-[18px] font-[600]"
                id="">
                <option value="English">English</option>
                <option value="O'zbekcha">O'zbekcha</option>
                <option value="Русский">Русский</option>
              </select>
            </div>
            <div className="w-[58px] h-[30px] bg-[rgb(14,45,66)] rounded-[20px]">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
