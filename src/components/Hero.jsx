import { FiHome } from "react-icons/fi";
import { MdLightbulbOutline } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { IoMdQrScanner } from "react-icons/io";
import logo from "../assets/Frame 41.svg";

const Hero = () => {
  return (
    <div className="mx-[150px] mt-[50px]">
      <p className="text-[#696671] text-[18px] flex items-center gap-2 font-semibold">
        <FiHome /> &gt; Flashcard &gt; Mathematics{" "}
        <span className="text-[#06286E]">&gt; Relation and Function</span>
      </p>
      <h1 className="mt-16 bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent text-[32px] font-bold">
        Relations and Functions (Mathematics)
      </h1>
      <div className="tabs flex mx-[350px] mt-12 text-[20px] font-semibold justify-between text-[#696671] list-none ">
        <li className="border-b-2 text-[#06286e] border-[#06286E]">Study</li>
        <li>Quiz</li>
        <li>Test</li>
        <li>Game</li>
        <li>Others</li>
      </div>
      <div className=" mx-[250px] mt-12 rounded-3xl p-5 text-[40px] text-white bg-gradient-to-tr from-[#1F80EB] to-[#061C93] h-[400px]">
        <div className="icons flex justify-between mb-28">
          <MdLightbulbOutline />
          <FaVolumeUp />
        </div>
        <p className="flex text-white justify-center items-center">
          9 + 6 + 7x -2x -3
        </p>
      </div>
      <div className="mx-[300px] mt-10 mb-10 text-[40px] items-center text-[#06286e] justify-between flex">
        <TbReload />
        <div className="text-[28px] flex items-center">
          <div className="bg-gradient-to-t from-[#164EC0] to-[#061C93] px-[15px] py-1 rounded-full text-white">
            &lt;
          </div>
          <span className="mx-10 text-black font-bold">01/10</span>
          <div className="bg-gradient-to-t from-[#164EC0] to-[#061C93] px-[15px] py-1 rounded-full text-white">
            &gt;
          </div>
        </div>
        <IoMdQrScanner />
      </div>
      <div className="mx-[10px] mt-20 flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-center gap-2 text-[28px] font-semibold text-[#061c93] items-center">
          <div className="bg-gradient-to-t  from-[#164EC0] to-[#061C93] px-[18px] py-1 rounded-full text-white">
            +
          </div>
          Create FlashCard
        </div>
      </div>
    </div>
  );
};

export default Hero;
