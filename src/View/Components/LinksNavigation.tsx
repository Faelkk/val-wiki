import { Link } from "react-router-dom";

interface LinksNavigationProps {
  classNameUL: string;
  classNameLI: string;
  onClick?: () => void;
}

const LinksNavigation = ({
  classNameUL,
  classNameLI,
  onClick,
}: LinksNavigationProps) => {
  return (
    <ul className={classNameUL}>
      <li className={classNameLI} onClick={onClick}>
        <Link to="/agents">Agentes</Link>
      </li>
      <li className={classNameLI} onClick={onClick}>
        <Link to="/weapons">Arsenal</Link>
      </li>

      <li className={classNameLI} onClick={onClick}>
        {" "}
        <Link to="/cards">Cards</Link>
      </li>
      <li className={classNameLI} onClick={onClick}>
        {" "}
        <Link to="/Buddies">Chaveiro</Link>
      </li>

      <li className={classNameLI} onClick={onClick}>
        {" "}
        <Link to="/maps">Mapas</Link>
      </li>

      <li className={classNameLI} onClick={onClick}>
        <Link to="/sprays">Sprays</Link>
      </li>
    </ul>
  );
};

export default LinksNavigation;
