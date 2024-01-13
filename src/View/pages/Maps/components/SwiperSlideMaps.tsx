import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Map } from "../../../../App/entities/Mapas";

interface SwiperSlideMapsProps {
  maps: Map[];
}

const SwiperSlideMaps = ({ maps }: SwiperSlideMapsProps) => {
  const mapItemStyle = (mapa: Map) => ({
    backgroundImage: `url(${mapa.splash})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  });

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
      >
        {maps.map((map, index) => (
          <SwiperSlide key={index}>
            <div
              className="border-[1px] border-blueVariation2-500 w-[95%] h-[600px] pp:h-[700px] object-cover object-center pp:w-full overflow-hidden relative bg-agent before:content-[''] before:block before:w-full before:h-full before:absolute before:top-0 before:border-[2rem] before:border-[#0F141A] before:box-border  transition-all "
              style={mapItemStyle(map)}
            >
              <h2 className="absolute left-4 bottom-4 text-fuscous-gray-50 font-semibold uppercase text-[1.8rem] tracking-wide ">
                {map.displayName}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlideMaps;
