import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBarStyly, setNavBarStyly] = useState(" ");

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if(!isMenuOpen) setNavBarStyly("border-b-2 bg-[#26547C]")
    else setNavBarStyly("")
  }

  let navigate = useNavigate();

  const btns = [
    {
      name: "الرئيسية",
      route: "/",
    },
    {
      name: "الخدمات",
      route: "/Services",
    },
    {
      name: "المنتجات",
      route: "/Products",
    },
    {
      name: "المشاريع",
      route: "/Projects",
    },
    {
      name: "المدونة",
      route: "/Blog",
    },
    {
      name: "من نحن",
      route: "/AboutUs",
    },
    {
      name: "تواصل معنا",
      route: "/ContactUs",
    },
  ];

  const HtmlBtns: Array<JSX.Element> = btns.map(({ name, route }, i) => {
    return (
      <li
        key={i}
        className={
          "lg:border-2 rounded-lg mx-1 my-1 lg:my-0 cursor-pointer w-24 lg:w-auto " +
          (useLocation().pathname === route ? " border-[#06D6A0] " : " ") +
          (name === "تواصل معنا" ? "bg-[#06D6A0] " : " ")
        }
        onClick={() => {
          navigate(route)
          setIsMenuOpen(false)
        }}
      >
        <div
          className={
            "h-8 px-2 rounded lg:border-0 lg:pt-[2px] " +
            (useLocation().pathname === route
              ? " text-[#06D6A0] "
              : "text-white ") +
            (name === "تواصل معنا" ? "text-[#000] " : " ")
          }
        >
          {name}
        </div>
      </li>
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop === 0;

      if (isAtTop)
        setNavBarStyly(" ")
      else
        setNavBarStyly("border-b-2 bg-[#26547C]")

    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={" w-full p-2 lg:p-0 sticky top-0  " + navBarStyly}>
      <div className="w-full flex lg:flex-row-reverse flex-wrap items-center justify-between mx-auto lg:py-4">
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="lg:block cursor-pointer" onClick={() => navigate("/")}>
          <img
            src='/ImgsCompomets/logo.webp'
            className="lg:ml-6"
            alt="Logo"
          />
        </div>
        <div
          className={`${isMenuOpen ? "absolute" : "hidden"
            } w-full lg:block lg:w-auto right-0 top-12 z-50 bg-[#26547C] lg:bg-transparent` }
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col py-2 lg:py-0 lg:flex-row font-medium mt-4 lg:mr-6 lg:mt-0 ">
            {HtmlBtns}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
