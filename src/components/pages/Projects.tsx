import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

// import das imagens dos slides
import costs from "../../assets/ProjetosImg/costs.png";
import to_do from "../../assets/ProjetosImg/to-do.png";
import graficos from "../../assets/ProjetosImg/graficos.jpg";
import iot from "../../assets/ProjetosImg/iot.png";

const Projects = () => {
  const { t } = useTranslation(); // Hook para acessar as traduções
  // dados que seram montados no meu card de slide
  const data = [
    {
      id: 1,
      nome: "Costs",
      review: t("CostReview"),
      img: costs,
      link: "https://github.com/alyssonrafael/COSTs",
    },
    {
      id: 2,
      nome: t("To-do-List"),
      review: t("To-do-List review"),
      img: to_do,
      link: "https://github.com/alyssonrafael/to-do-list-Nodejs",
    },
    {
      id: 3,
      nome: t("Data frame python analytics"),
      review: t("Data frame python analytics review"),
      img: graficos,
      link: "https://github.com/alyssonrafael/projeto_DEV.rapido.python",
    },
    {
      id: 4,
      nome: t("Iot-office-security-system"),
      review: t("Iot-office-security-system review"),
      img: iot,
      link: "https://github.com/alyssonrafael/Iot-office-security-system",
    },
  ];
  // configuraçao do slide
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // contando o componente do slide
  return (
    <div id="projetos" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="w-full">
        <div className="text-center lg:text-5xl font-serif text-4xl mb-8 pt-16 lg:pt-0 md:pt-0 dark:text-gray-200">
          <h1>My Projects</h1>
        </div>

        <div className="my-12 mx-10">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                className="bg-white dark:bg-gray-900  text-black dark:text-white rounded-md hover:rounded-none my-6 flex "
                key={d.id}
              >
                <div className=" font-serif p-4 text-sm font-semibold lg:text-xl">
                  <p>{d.nome.toUpperCase()}</p>
                </div>

                <div className="rounded-t-xl w-full flex justify-center items-center">
                  <img
                    src={d.img}
                    alt=""
                    className="h-[200px] w-[410px] rounded-xl overflow-hidden p-4 "
                  />
                </div>

                <div className="flex flex-col justify-center p-4 pt-10 font-sans h-[100px] max-h-[100px] overflow-y-auto ">
                  <p className="pt-4">{d.review}</p>
                </div>
                {/* Button */}
                <div className="p-4 flex align-bottom">
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-blue-600 dark:bg-gray-950 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
                  >
                    <span className="z-40">{t("Visit Project")}</span>
                    <svg
                      className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 dark:bg-purple-500 group-hover:translate-x-[50%] z-20 duration-1000"></div>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
