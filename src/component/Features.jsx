import Photo247 from "../asset/247.png";
import Coded from "../asset/coded.png";
import ColorSchemes from "../asset/ColorSchemes.png";
import ContactForm from "../asset/contactForm.png";
import Customize from "../asset/customize.png";
import Design from "../asset/design.png";
import Documented from "../asset/Documented.png";
import Google from "../asset/google.png";
import HomePages from "../asset/HomePages.png";
import Optimized from "../asset/Optimized.png";
import PageNotFound from "../asset/pageNotFound.png";
import InnerPages from "../asset/innerpages.png";
import Responsive from "../asset/responsive.png";
import W3CValidation from "../asset/W3CValidation.png";

export const Features = () => {
  const Details = [
    {
      title: "08 Homepages",
      picture: HomePages,
    },
    {
      title: "30+ Inner Pages",
      picture: InnerPages,
    },
    {
      title: "Speed Optimized",
      picture: Optimized,
    },
    {
      title: "Fully Responsive",
      picture: Responsive,
    },
    {
      title: "W3C Validation",
      picture: W3CValidation,
    },
    {
      title: "Clean Coded",
      picture: Coded,
    },
    {
      title: "Google Fonts",
      picture: Google,
    },
    {
      title: "Modern Design",
      picture: Design,
    },
    {
      title: "Easy Customizable",
      picture: Customize,
    },
    {
      title: "404 Error Page",
      picture: PageNotFound,
    },
    {
      title: "Contact Form",
      picture: ContactForm,
    },
    {
      title: "Well Documented",
      picture: Documented,
    },
    {
      title: "24/7 Support",
      picture: Photo247,
    },
    {
      title: "Unlimited Color Schemes",
      picture: ColorSchemes,
    },
  ];
  return (
    <div className="py-28 bg-[#f5f5f5]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <>
            <p className="w-full text-center font-semibold text-gray-400 text-sm">
              <span className="text-red-400">// </span>Core Features
            </p>
            <p className="text-5xl font-semibold text-center w-3/5">
              Functional, impressive and rich features
            </p>
          </>
        </div>
        <div  className="grid grid-cols-4 gap-8 px-16 py-8">
          {Details.map((item, i) => {
            return (
              <div className="hover:scale-90 transition-all bg-white p-6 flex flex-col items-center justify-center gap-4 shadow-lg" key={i}>
                <img src={item.picture} alt={item.title} className="h-20" />
                <p className="text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
