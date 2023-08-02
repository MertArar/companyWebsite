import { content } from "./Content";

import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { TitleText, TypingText } from "./components/CustomText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="flex flex-col justify-center items-center px-5 pt-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex flex-col"
        >
          <TypingText
            title="| The Testimonial"
            textStyles="text-center text-white/90 text-lg"
          />
          <TitleText
            title={<>Opinions of Our Partners</>}
            textStyles="text-center mb-10"
          />
        </motion.div>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          navigation={true}
          slidesPerView={2}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-transparent mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col cursor-pointer
                ${activeIndex !== i && "scale-90 blur-none"}`}
              >
                <img src={content.img} alt="..." className="h-24 md:h-18" />
                <div>
                  <p className="sm:text-[20px] text-[18px] text-white">
                    {content.review}
                  </p>
                  <br />
                  <h6 className="text-white/70 text-[14px] sm:text-[16px]">
                    {content.name}
                  </h6>
                  <h6 className="text-white/70 text-[14px] sm:text-[12px]">
                    {content.attribute}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
