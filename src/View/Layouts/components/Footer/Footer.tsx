import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-[#14191f] flex justify-center w-full p-6 h-[72px] border-t border-blueVariation2-950">
      <div className="flex items-center justify-between w-[80%]">
        <span className="text-fuscous-gray-50">
          <a href="https://github.com/Faelkk">© Rafael Achtenberg</a>
        </span>

        <nav>
          <ul className="flex gap-6">
            <li className="flex items-center gap-3">
              <a
                href="https://github.com/Faelkk"
                aria-label="My github, see more projects"
              >
                <GitHubLogoIcon color="#fff" className="h-6 w-6" />
              </a>
              <span className="text-fuscous-gray-50 hidden sm:block">
                Github
              </span>
            </li>
            <li className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/rafael-achtenberg/"
                aria-label="My linkedin, see more informations about me"
              >
                <LinkedInLogoIcon color="#fff" className="h-6 w-6" />
              </a>
              <span className="text-fuscous-gray-50 hidden sm:block">
                Linkedin
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
