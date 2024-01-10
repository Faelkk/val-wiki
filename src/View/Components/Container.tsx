import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col static max-w-[1400px] w-[calc(100%_-_2rem)]  my-4 mx-auto">
      {children}
    </section>
  );
};

export default Container;
