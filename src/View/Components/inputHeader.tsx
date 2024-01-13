import { ChangeEvent } from "react";
import Input from "./Input";

interface InputHeaderProps {
  searchInputValue: string;
  placeholder: string;
  handleChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputHeader = ({
  searchInputValue,
  placeholder,
  handleChangeSearchValue,
}: InputHeaderProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={handleChangeSearchValue}
      value={searchInputValue}
    />
  );
};

export default InputHeader;
