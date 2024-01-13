import { ReactNode } from "react";

interface IconScrollClickProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

const IconScrollClick = ({
  children,
  className,
  onClick,
}: IconScrollClickProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconScrollClick;
