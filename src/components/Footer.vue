<template>
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
export default {
  name: 'AppFooter',
  data(){
    return {
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
  }
}
</script>

<style>
.footer {
    background-color: var(--text-dark);
}

.footer__container {
    display: grid;
    gap: 4rem 2rem;
}

.footer__col .section__description {
    margin-block: 2rem;
}

.footer__col h4 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--white);
}

.footer__links {
    list-style: none;
    display: grid;
    gap: 1rem;
}

.footer__links a {
    color: var(--text-light);
    transition: 0.3s;
}

.footer__links a:hover {
    color: var(--white);
}

.footer__socials {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.footer__socials img {
    max-width: 25px;
    opacity: 0.8;
    transition: 0.3s;
}

.footer__socials img:hover {
    opacity: 1;
}

.footer__bar {
    padding: 1rem;
    font-size: 0.9rem;
    color: var(--text-light);
    text-align: center;
}
</style>