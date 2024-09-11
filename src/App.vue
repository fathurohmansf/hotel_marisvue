<template>
  <header class="header">
    <NavBarComponent />
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
      <img src="assets/images/about.jpg" alt="about" />
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

  <footer class="footer" id="contact">
    <div class="section__container footer__container">
      <div class="footer__col">
        <div class="logo">
          <a href="#home"><img src="assets/images/logo.png" alt="logo" /></a>
        </div>
        <p class="section__description">
          Discover a world of comfort, luxury, and adventure as you explore our
          curated selection of hotels, making every moment of your getaway truly
          extraordinary.
        </p>
        <button class="btn">Book Now</button>
      </div>
      <div class="footer__col">
        <h4>QUICK LINKS</h4>
        <ul class="footer__links">
          <li v-for="link in quickLinks" :key="link.id">
            <a href="#">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>OUR SERVICES</h4>
        <ul class="footer__links">
          <li v-for="service in ourServices" :key="service.id">
            <a href="#">{{ service.text }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>CONTACT US</h4>
        <ul class="footer__links">
          <li><a href="#">helpdesk@hotelmarisrangkas.com</a></li>
        </ul>
        <div class="footer__socials">
          <a href="#" v-for="social in socials" :key="social.id">
            <img :src="social.image" :alt="social.alt" />
          </a>
        </div>
      </div>
    </div>
    <div class="footer__bar">
      Copyright © 2024 ICTWORK_NET. All rights reserved.
    </div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <a
      href="https://api.whatsapp.com/send?phone=+6282110858255&text=Halo%21%20Hotel Maris%20m%C3%A1s%20ingin booking kamar bisa ?%C3%B3n%20ingin bertanya%20dulu%202."
      class="float"
      target="_blank"
    >
      <i class="fa fa-whatsapp my-float"></i>
    </a>
  </footer>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';

export default {
  components: {
    NavBarComponent,
  },
  data() {
    return {
      isMenuOpen: false,
      rooms: [
        {
          id: 1,
          image: "assets/images/room-1.jpg",
          title: "Familly Room",
          description:
            "Bask in luxury with breathtaking ocean views from your private suite.",
          price: "Rp. 450,000/night",
          link: "familly_room/",
          buttonText: "Details Room",
        },
        {
          id: 2,
          image: "assets/images/room_superior.jpg",
          title: "Superior Room",
          description:
            "Experience urban elegance and modern comfort in the heart of the city. <br>Included Breakfest.",
          price: "Rp. 400,000/night",
          link: "superior_room/",
          buttonText: "Book Now",
        },
        {
          id: 3,
          image: "assets/images/room-3.jpg",
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
      quickLinks: [
        {
          id: 1,
          text: "Browse Destinations",
        },
        {
          id: 2,
          text: "Special Offers & Packages",
        },
        {
          id: 3,
          text: "Room Types & Amenities",
        },
        {
          id: 4,
          text: "Customer Reviews & Ratings",
        },
        {
          id: 5,
          text: "Travel Tips & Guides",
        },
      ],
      ourServices: [
        {
          id: 1,
          text: "Concierge Assistance",
        },
        {
          id: 2,
          text: "Flexible Booking Options",
        },
        {
          id: 3,
          text: "Airport Transfers",
        },
        {
          id: 4,
          text: "Wellness & Recreation",
        },
      ],
      socials: [
        {
          id: 1,
          image: "assets/images/facebook.png",
          alt: "facebook",
        },
        {
          id: 2,
          image: "assets/images/instagram.png",
          alt: "instagram",
        },
        {
          id: 3,
          image: "assets/images/youtube.png",
          alt: "youtube",
        },
        {
          id: 4,
          image: "assets/images/twitter.png",
          alt: "twitter",
        },
      ],
    };
  },
};
</script>


<style>
@import './assets/css/styles.css';
</style>