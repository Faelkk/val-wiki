import { Link } from "react-router-dom";
import { cn } from "../../../../../App/utils/cn";
import ValorantLogo from "../../../../../assets/icons/ValorantLogo";

interface TitleHeader {
  classNameImg?: string;
  classNameH1?: string;
  currentColor: string;
}

const TitleHeader = ({
  classNameImg,
  classNameH1,
  currentColor,
}: TitleHeader) => {
  return (
    <Link to="/" className="flex justify-center items-center gap-2">
      {" "}
      <ValorantLogo currentColor={currentColor!} className={classNameImg!} />
      <h1 className={cn(" font-bold", classNameH1)}>Val Wiki</h1>
    </Link>
  );
};

export default TitleHeader;
