const Faq = () => {
  return (
    <div className="relative mx-[150px] mb-40 w-full font-sans text-gray-800 md:max-w-screen-lg ">
      <h1 className="bg-gradient-to-t from-[#164EC0] text-[48px] font-semibold to-[#06286E] mt-10 mb-8 bg-clip-text text-transparent">
        FAQ
      </h1>
      <ul className="space-y-4">
        <li className="text-left">
          <label
            htmlFor="accordion-1"
            className="relative flex flex-col rounded-md border-2 border-[#217EEC] shadow-md"
          >
            <input
              className="peer hidden"
              type="checkbox"
              id="accordion-1"
              defaultChecked=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-[16px] font-semibold text-[#28262C]">
                Can education flashcards be used for all age groups?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-[16px] font-semibold text-gray-500">
                  Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi,
                  recusandae voluptatum distinctio facilis necessitatibus
                  aperiam ut? Dolor mollitia modi aliquam, non sint at
                  reprehenderit commodi dignissimos quo unde asperiores officiis
                  quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-2"
            className="relative flex flex-col rounded-md border-2 border-[#217EEC] shadow-md"
          >
            <input className="peer hidden" type="checkbox" id="accordion-2" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-[16px] font-semibold text-[#28262C]">
                How do education flashcards work?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-[16px] font-semibold text-gray-500">
                  Lorem ipsum consectetur adipisicing elit. Adipisci eligendi,
                  recusandae voluptatum distinctio facilis necessitatibus
                  aperiam ut? Dolor mollitia modi aliquam, non sint at
                  reprehenderit commodi dignissimos quo unde asperiores officiis
                  quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-3"
            className="relative flex flex-col rounded-md border-2 border-[#217EEC] shadow-md"
          >
            <input className="peer hidden" type="checkbox" id="accordion-3" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-[16px] font-semibold text-[#28262C]">
                Can education flashcards be used for test preparation?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-[16px] font-semibold text-gray-500">
                  Lorem ipsum consectetur adipisicing elit. Adipisci eligendi,
                  recusandae voluptatum distinctio facilis necessitatibus
                  aperiam ut? Dolor mollitia modi aliquam, non sint at
                  reprehenderit commodi dignissimos quo unde asperiores officiis
                  quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Faq;


