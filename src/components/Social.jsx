import { FaInstagram, FaGithub, FaTelegram } from "react-icons/fa6";
import configData from "../../public/config.json";

export default function Social() {
  const socialLinks = configData.social;

  return (
    <>
      <div className="px-2">
        <div className="flex items-center justify-between px-7 py-7 bg-gray-100 rounded-lg">
          <div className="font-medium text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Follow Me
          </div>
          <div className="flex gap-x-1">
            {socialLinks.map((socialLink, index) => {
              const iconMap = {
                FaInstagram,
                FaGithub,
                FaTelegram,
              };
              const IconComponent = iconMap[socialLink.icon];

              return (
                <a
                  key={index}
                  href={socialLink.link}
                  className="bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<IconComponent size={20} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
