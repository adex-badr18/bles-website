import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { insuranceNames } from "../../appointment/data";

const AcceptedInsurance = () => {
    return (
        <section className="border-y py-2">
            <div className="px-2 sm:mx-auto w-full sm:max-w-[540px] md:max-w-[760px] blg:max-w-[990px] bxl:max-w-[1170px] b2xl:max-w-[1320px]">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    speed={5000}
                    autoplay={{ disableOnInteraction: false }}
                    className="w-full"
                >
                    {insuranceNames.map((insurance) => (
                        <SwiperSlide key={insurance.id} className="">
                            <img src={insurance.logo} alt={insurance.text} className="h-40" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default AcceptedInsurance;
