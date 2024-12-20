import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import { Swiper, SwiperSlide } from "swiper/react"; //swiper API
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import List from "../conponents/List";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Home = () => {
  const { data } = useContext(DataContext);
  const [swiper, setSwiper] = useState(null);

  //swiper 좌, 우로 이동하는 버튼을 클릭했을때 실행
  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <div className="home">
      <Swiper
        modules={[Autoplay]}
        className="swiperMain"
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {
          data.slice(11, 18).map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.ATT_FILE_NO_MAIN} alt={item.HASH_TAG} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="title">
        <h2> 추천 레시피</h2>
      </div>
      <div className="homeList">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          /*  navigation={true} */
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {data.slice(0, 10).map((item) => (
            <SwiperSlide key={item.id}>
              <List data={[item]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper_btn">
          <div className="swiperPrevBtn" onClick={handlePrev}>
            <FaAngleLeft />
          </div>
          <div className="swiperNextBtn" onClick={handleNext}>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
