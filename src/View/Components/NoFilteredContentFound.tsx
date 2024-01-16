interface NoFilteredContentFoundProps {
  inputValue: string;
}

const NoFilteredContentFound = ({
  inputValue,
}: NoFilteredContentFoundProps) => {
  return (
    <div className="flex justify-center items-center">
      <h2 className="text-fuscous-gray-50 text-[1.6rem] text-center lg:text-[1.8rem]">
        Nenhum resultado para{" "}
        <span className="text-redVariation2-450">{inputValue}</span>
      </h2>
      ;
    </div>
  );
};

export default NoFilteredContentFound;
