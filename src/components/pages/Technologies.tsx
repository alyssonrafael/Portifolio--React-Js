import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaTrello,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite, SiPostman } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import Technologie from "../common/Tecnologie";

const Technologies = () => {

    const { t } = useTranslation(); // Hook para acessar as traduções

    return (
      <div id="Technologies" className="flex flex-col justify-center items-center min-h-screen dark:text-gray-200">
        <div className="flex justify-center mb-8">
          <div className="text-center lg:text-5xl font-serif text-4xl lg:pb-16 pt-16 lg:pt-0">
            <h1>{t("Technologies & Tools")}</h1>
          </div>
        </div>
  
        <div className="lg:grid grid-rows-auto grid-cols-4 grid-rows-4  lg:grid-cols-12 lg:grid-rows-1 gap-4 w-4/5">
          <div className="lg:col-span-3 row-span-1 col-span-4  text-center whitespace-normal  ">
            <div className="text-lg lg:flex-column lg:justify-center space-y-4 mb-4 lg:mb-0">
              <h1>{t("Applications & Data")}</h1>
              <div className="mx-2 lg:space-y-3 md:space-y-3 grid grid-cols-2 gap-4 md:block lg:block ">
                <Technologie
                  text="HTML"
                  Icon={FaHtml5}
                  className="hover:border-orange-400 dark:bg-gray-900"
                  iconClassName="text-orange-400"
                />
                <Technologie
                  text="CSS"
                  Icon={FaCss3}
                  className="hover:border-blue-600 dark:bg-gray-900"
                  iconClassName="text-blue-400"
                />
                <Technologie
                  text="Tailwind css"
                  Icon={RiTailwindCssFill}
                  className="hover:border-blue-600 dark:bg-gray-900"
                  iconClassName="text-blue-400"
                />
                <Technologie
                  text="JavaScript"
                  Icon={IoLogoJavascript}
                  className="hover:border-yellow-300 dark:bg-gray-900"
                  iconClassName="text-yellow-400"
                />
                <Technologie
                  text="Node JS"
                  Icon={FaNodeJs}
                  className="hover:border-green-400 dark:bg-gray-900"
                  iconClassName="text-green-400"
                />
                <Technologie
                  text="React Js"
                  Icon={FaReact}
                  className="hover:border-blue-400 dark:bg-gray-900"
                  iconClassName="text-blue-500"
                />
                <Technologie
                  text="Python"
                  Icon={FaPython}
                  className="hover:border-yellow-400 dark:bg-gray-900"
                  iconClassName="text-yellow-400"
                />
              </div>
            </div>
          </div>
  
          <div className="lg:col-span-3 row-span-1 col-span-4  text-center whitespace-normal">
            <div className="text-lg flex-column justify-center space-y-4 mb-4 lg:mb-0">
              <h1>SGBDs</h1>
              <div className="mx-2 lg:space-y-3 md:space-y-3 grid grid-cols-2 gap-4 md:block lg:block ">
                <Technologie
                  text="MYsql"
                  Icon={GrMysql}
                  className="hover:border-blue-400 dark:bg-gray-900"
                  iconClassName="text-blue-400"
                />
                <Technologie
                  text="Postgresql"
                  Icon={BiLogoPostgresql}
                  className="hover:border-blue-400 dark:bg-gray-900"
                  iconClassName="text-blue-400"
                />
                <Technologie
                  text="Sqlite"
                  Icon={SiSqlite}
                  className="hover:border-black dark:bg-gray-900 dark:hover:border-white"
                  iconClassName="text-black-400 dark:text-white"
                />
              </div>
            </div>
          </div>
  
          <div className="lg:col-span-3 row-span-1 col-span-4  text-center whitespace-normal">
            <div className="text-lg flex-column justify-center space-y-4 mb-4 lg:mb-0">
              <h1>DevOps</h1>
              <div className="mx-2 lg:space-y-3 md:space-y-3 grid grid-cols-2 gap-4 md:block lg:block ">
                <Technologie
                  text="Github"
                  Icon={FaGithub}
                  className="hover:border-black dark:bg-gray-900 dark:hover:border-white"
                  iconClassName="text-black-400"
                />
                <Technologie
                  text="Git"
                  Icon={FaGitAlt}
                  className="hover:border-orange-400 dark:bg-gray-900"
                  iconClassName="text-orange-400"
                />
                <Technologie
                  text="Docker"
                  Icon={FaDocker}
                  className="hover:border-blue-400 dark:bg-gray-900"
                  iconClassName="text-blue-400"
                />
              </div>
            </div>
          </div>
  
          <div className="lg:col-span-3 row-span-1 col-span-4  text-center whitespace-normal">
            <div className="text-lg flex-column justify-center space-y-4 mb-4 lg:mb-0">
              <h1>{t("Development")}</h1>
              <div className="mx-2 lg:space-y-3 md:space-y-3 grid grid-cols-2 gap-4 md:block lg:block ">
                <Technologie
                  text="Vscode"
                  Icon={VscVscodeInsiders}
                  className="hover:border-blue-400 dark:bg-gray-900  "
                  iconClassName="text-blue-400"
                />
                <Technologie
                  text="Figma"
                  Icon={FaFigma}
                  className="hover:border-pink-400 dark:bg-gray-900"
                  iconClassName="text-pink-400"
                />
                <Technologie
                  text="Postman"
                  Icon={SiPostman}
                  className="hover:border-orange-400 dark:bg-gray-900"
                  iconClassName="text-orange-400"
                />
                <Technologie
                  text="Trello"
                  Icon={FaTrello}
                  className="hover:border-blue-400 dark:bg-gray-900"
                  iconClassName="text-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Technologies;