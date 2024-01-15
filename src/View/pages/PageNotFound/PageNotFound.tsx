import Container from "../../Components/Container";

const PageNotFound = () => {
  return (
    <Container className="h-full">
      <div className="flex flex-col items-center  h-full">
        <span className="text-redVariation2-450 font-bold text-[1.6rem] small:text-[1.8rem] tracking-wider">
          ERROR 404
        </span>
        <h2 className="text-fuscous-gray-50 uppercase text-[2rem] text-center small:text-[3.2rem] font-bold tracking-wide">
          Pagina não encontrada
        </h2>
        <span className="text-fuscous-gray-50 font-bold text-[1.6rem] small:text-[1.8rem]">
          Tente novamente
        </span>
      </div>
    </Container>
  );
};

export default PageNotFound;
