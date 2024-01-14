import { ReactNode } from "react";
import { cn } from "../../App/utils/cn";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "flex flex-col static max-w-[1400px] w-[calc(100%_-_2rem)]  my-4 mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
