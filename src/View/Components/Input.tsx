import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, type, value, placeholder }: InputProps) => {
  return (
    <form className=" w-full lg:w-[60%]">
      <input
        className="w-full border-none outline-none hover:outline-none bg-white h-[50px] rounded-[20px] px-4"
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </form>
  );
};

export default Input;
