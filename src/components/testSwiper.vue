<template>
  <section class="explore" id="explore">
   <p class="section__subheader">PHOTOS</p>
   <h2 class="section__header">Our Gallery.</h2>
   <section class="collection">
 <div class="swiper mySwiper">
   <div class="swiper-wrapper">
     <div class="content swiper-slide" v-for="(image, index) in images" :key="index">
       <img :src="image.src" :alt="image.alt">
       <div class="text-content">
         <h3>{{ image.title }}</h3>
         <p>{{ image.description }}</p>
       </div>
     </div>
   </div>
 </div>
</section>
</section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
name: 'SwiperGallery',
data() {
 return {
   images: [
     { src: require('@/assets/images/gallery/room-1.jpg'), alt: 'Image 1', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-2.jpg'), alt: 'Image 2', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-3.jpg'), alt: 'Image 3', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-1.jpg'), alt: 'Image 1', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-2.jpg'), alt: 'Image 2', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-3.jpg'), alt: 'Image 3', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-1.jpg'), alt: 'Image 1', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-2.jpg'), alt: 'Image 2', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
     { src: require('@/assets/images/gallery/room-3.jpg'), alt: 'Image 3', title: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur.' },
   ]
 };
},
mounted() {
 new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   loop: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 150,
     modifier: 2.5,
     slideShadows: true,
   },
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   }
 });
}
}
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