// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <div className='py-10 px-6'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-xl"
            >
                <SwiperSlide>
                    <Slide
                        image={'https://i.ibb.co.com/HqzLSPw/carousel1.jpg'}
                        text='Get Your Web Development Projects Done in minutes' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={'https://i.ibb.co.com/X334Khw/carousel2.jpg'}
                        text='Get Your Graphics Design Projects Done in minutes' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={'https://i.ibb.co.com/28TpkCG/carousel3.jpg'}
                        text='Start Your Digital Marketing Campaigns up in running' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
