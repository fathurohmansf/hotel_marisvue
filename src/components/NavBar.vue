<template>
      <nav>
      <div class="nav__bar">
        <div class="logo">
          <a href="#"><img src="assets/images/logo.png" alt="logo" /></a>
        </div>
        <div class="nav__menu__btn" id="menu-btn" @click="toggleMenu">
          <i class="ri-menu-line"></i>
        </div>
      </div>
      <ul class="nav__links" id="nav-links" :class="{ show: isMenuOpen }">
        <li><a href="#home" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#service" @click="closeMenu">Services</a></li>
        <li><a href="#explore" @click="closeMenu">Explore</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
      <a
        href="https://api.whatsapp.com/send?phone=+6282110858255&text=Halo%21%20Hotel Maris,%20Saya%20ingin booking kamar hari ini ada yang kosong ? %20ingin bertanya%20dulu."
        class="btn nav__btn">Book Now
      </a>
    </nav>
</template>

<style>
nav {
    position: fixed;
    isolation: isolate;
    top: 0;
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    z-index: 9;
}

.nav__bar {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    background-color: var(--primary-color);
}

.nav__menu__btn {
    font-size: 1.5rem;
    color: var(--white);
    cursor: pointer;
}

.nav__links {
    list-style: none;
    position: absolute;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    background-color: rgba(188, 28, 92, 0.9);
    transform: translateY(-100%);
    transition: 0.5s;
    z-index: -1;
}

.nav__links.show {
    transform: translateY(0);
    z-index: 10;
}

.nav__links a {
    position: relative;
    isolation: isolate;
    padding-bottom: 8px;
    color: var(--white);
    transition: 0.3s;
}

.nav__btn {
    display: none;
}
</style>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,  // Menyimpan status apakah menu terbuka atau tidak
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
