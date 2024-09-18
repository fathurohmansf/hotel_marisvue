<template>
  <section class="explore" id="explore">
    <p class="section__subheader">PHOTOS</p>
    <h2 class="section__header">Our Gallery.</h2>
    <section class="collection">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :breakpoints="{
          320: {
            slidesPerView: 1,  // Mobile
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,  // Tablet
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,  // Desktop
            spaceBetween: 30
          }
        }"
        :loop="true"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <div class="content">
            <img :src="image.src" :alt="image.alt">
            <div class="text-content">
              <h3>{{ image.title }}</h3>
              <p>{{ image.description }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        { src: require('@/assets/images/gallery/leuit_meeting.png'), alt: 'leuit_meeting', title: 'Leuit Meeting', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/gazebo_meeting.jpg'), alt: 'gazebo_meeting', title: 'Gazebo Meeting', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/image-1.jpg'), alt: 'Image 1', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/image-2.jpg'), alt: 'Image 2', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/image-3.jpg'), alt: 'Image 3', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/familly_room.png'), alt: 'familly_room', title: 'Familly Room', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/superior_room.png'), alt: 'superior_room', title: 'Superior Room', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/standard_room.png'), alt: 'standard_room', title: 'Standard Room', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/image-4.jpg'), alt: 'Image 4', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/image-5.jpg'), alt: 'Image 5', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/image-6.jpg'), alt: 'Image 6', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { src: require('@/assets/images/gallery/image-7.jpg'), alt: 'Image 7', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
        // Tambahkan gambar lainnya jika diperlukan
      ],
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>

<style scoped>

.collection {
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.collection .content {
  height: 28rem;
  width: 25rem;
  background-color: white;
  border: .2rem solid rgba(255, 255, 255, .1);
  border-radius: .7rem;
  border-bottom: .4rem solid #e82574;
  border-top: .4rem solid #e82574;
  overflow: hidden;
  /* margin: 0; */
}

.content img {
  width: 100%;
  border-bottom-left-radius: .6rem;
  border-bottom-right-radius: .6rem;
}

.text-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text-content h3 {
  font-size: 1.7rem;
  font-weight: 500;
}

.text-content p {
  max-width: 22rem;
  font-size: .8rem;
  font-weight: 400;
  text-align: center;
}
</style>
