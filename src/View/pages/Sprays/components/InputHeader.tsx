import { ChangeEvent } from "react";
import Input from "../../../Components/Input";

interface InputHeaderProps {
  searchSpray: string;
  handleChangeSearchSpray: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputHeader = ({
  searchSpray,
  handleChangeSearchSpray,
}: InputHeaderProps) => {
  return (
    <Input
      type="text"
      placeholder="Pesquise algum spray..."
      onChange={handleChangeSearchSpray}
      value={searchSpray}
    />
  );
};

export default InputHeader;
