<template>
  <header class="header">
    <NavBar />
    <div class="section__container header__container" id="home">
      <p>Simple - Unique - Friendly</p>
      <h1>
        Make Yourself At Home<br />In Our <span>Hotel</span>.
      </h1>
    </div>
  </header>

  <section class="section__container booking__container">
    <form action="/" class="booking__form">
      <div class="input__group">
        <span><i class="ri-calendar-2-fill"></i></span>
        <div>
          <label for="check-in">CHECK-IN</label>
          <input type="text" placeholder="Check In" />
        </div>
      </div>
      <div class="input__group">
        <span><i class="ri-calendar-2-fill"></i></span>
        <div>
          <label for="check-out">CHECK-OUT</label>
          <input type="text" placeholder="Check Out" />
        </div>
      </div>
      <div class="input__group">
        <span><i class="ri-user-fill"></i></span>
        <div>
          <label for="guest">GUEST</label>
          <input type="text" placeholder="Guest" />
        </div>
      </div>
      <div class="input__group input__btn">
        <button class="btn">CHECK OUT</button>
      </div>
    </form>
  </section>

  <section class="section__container about__container" id="about">
    <div class="about__image">
      <img src="assets/images/homemarisss.jpeg" alt="about" />
    </div>
    <div class="about__content">
      <p class="section__subheader">ABOUT US</p>
      <h2 class="section__header">The Best Holidays Start Here!</h2>
      <p class="section__description">
        With a focus on quality accommodations, personalized experiences, and
        seamless booking, our platform is dedicated to ensuring that every
        traveler embarks on their dream holiday with confidence and excitement.
      </p>
      <div class="about__btn">
        <button class="btn">Read More</button>
      </div>
    </div>
  </section>

  <section class="section__container room__container">
    <p class="section__subheader">OUR LIVING ROOM</p>
    <h2 class="section__header">
      The Most Memorable Rest Time Starts Here.
    </h2>
    <div class="room__grid">
      <div class="room__card" v-for="room in rooms" :key="room.id">
        <div class="room__card__image">
          <img :src="room.image" alt="room" />
          <div class="room__card__icons">
            <span><i class="ri-heart-fill"></i></span>
            <span><i class="ri-paint-fill"></i></span>
            <span><i class="ri-shield-star-line"></i></span>
          </div>
        </div>
        <div class="room__card__details">
          <h4>{{ room.title }}</h4>
          <p>{{ room.description }}</p>
          <h5>
            Starting from <span>{{ room.price }}</span>
          </h5>
          <a :href="room.link">
            <button class="btn">{{ room.buttonText }}</button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <SwiperGallery />

  <section class="service" id="service">
    <div class="section__container service__container">
      <div class="service__content">
        <p class="section__subheader">SERVICES</p>
        <h2 class="section__header">Strive Only For The Best.</h2>
        <ul class="service__list">
          <li v-for="service in services" :key="service.id">
            <span><i :class="service.icon"></i></span>
            {{ service.text }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section__container banner__container">
    <div class="banner__content">
      <div class="banner__card" v-for="banner in banners" :key="banner.id">
        <h4>{{ banner.value }}</h4>
        <p>{{ banner.text }}</p>
      </div>
    </div>
  </section>

  <section class="explore" id="explore">
    <p class="section__subheader">EXPLORE</p>
    <h2 class="section__header">What's New Today.</h2>
    <div class="explore__bg">
      <div class="explore__content">
        <p class="section__description">{{ explore.date }}</p>
        <h4>{{ explore.title }}</h4>
        <button class="btn">{{ explore.buttonText }}</button>
      </div>
    </div>
  </section>
    <!-- maps -->
    <section class="explore map top" id="explore">
      <br>
    <p class="section__subheader">MAPS</p>
    <h2 class="section__header">Hotel Maris | RANGKASBITUNG.</h2>
    <section class="">
      <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7ch2U84RQi4Rh-2bJzSmJt0&key=AIzaSyCjgdqvldgbtOkkOCxqtSZPVd3F9zqmOM8" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </section>
  </section>

  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue';
import ScrollReveal from 'scrollreveal';
import Footer from './components/Footer.vue';
import SwiperGallery from './components/SwiperGallery.vue';

export default {
  components: {
    NavBar,
    Footer,
    SwiperGallery,
  },
  data() {
    return {
      isMenuOpen: false,
      rooms: [
        {
          id: 1,
          image: "assets/images/familly_room.png",
          title: "Familly Room",
          description:
            "Bask in luxury with breathtaking ocean views from your private suite.",
          price: "Rp. 450,000/night",
          link: "familly_room/",
          buttonText: "Details Room",
        },
        {
          id: 2,
          image: "assets/images/superior_room.png",
          title: "Superior Room",
          description:
            "Experience urban elegance and modern comfort in the heart of the city. <br>Included Breakfest.",
          price: "Rp. 400,000/night",
          link: "superior_room/",
          buttonText: "Book Now",
        },
        {
          id: 3,
          image: "assets/images/standard_room.png",
          title: "Standard Room",
          description:
            "Spacious and inviting, perfect for creating cherished memories with loved ones.",
          price: "Rp. 350.000/night",
          link: "standard_room/",
          buttonText: "Book Now",
        },
      ],
      services: [
        {
          id: 1,
          icon: "ri-shield-star-line",
          text: "High Class Security",
        },
        {
          id: 2,
          icon: "ri-24-hours-line",
          text: "24 Hours Room Service",
        },
        {
          id: 3,
          icon: "ri-headphone-line",
          text: "Conference Room",
        },
        {
          id: 4,
          icon: "ri-map-2-line",
          text: "Tourist Guide Support",
        },
      ],
      banners: [
        {
          id: 1,
          value: "25+",
          text: "Properties Available",
        },
        {
          id: 2,
          value: "350+",
          text: "Bookings Completed",
        },
        {
          id: 3,
          value: "600+",
          text: "Happy Customers",
        },
      ],
      explore: {
        date: "10th MAR 2023",
        title: "A New Menu Is Available In Our Hotel.",
        buttonText: "Continue",
      },
    };
  },
  mounted() {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
  };
  ScrollReveal().reveal('.header__container p', scrollRevealOption);
    ScrollReveal().reveal('.header__container h1', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.about__image img', { ...scrollRevealOption, origin: 'left' });
    ScrollReveal().reveal('.about__content .section__subheader', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.about__content .section__header', { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal('.about__content .section__description', { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal('.about__btn', { ...scrollRevealOption, delay: 2000 });
    ScrollReveal().reveal('.room__card', { ...scrollRevealOption, interval: 500 });
    ScrollReveal().reveal('.service__list li', { ...scrollRevealOption, interval: 500, origin: 'right' });
    ScrollReveal().reveal('.room-details', { duration: 1000, origin: 'bottom', distance: '50px' });
},
};
</script>


<style>
@import './assets/css/styles.css';
</style>