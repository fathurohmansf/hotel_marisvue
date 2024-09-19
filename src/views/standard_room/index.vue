<template>
  <div class="room-familly">
    <section class="project-header pt-5">
      <NavBar />
      <div class="container mx-auto relative">
      </div>
    </section>
    <section class="container project-container mx-auto -mt-56">
      <div class="flex flex-col md:flex-row mt-3">
        <div class="w-full md:w-3/4 md:mr-6">
          <div class="bg-white p-3 mb-3 border border-gray-400 rounded-20">
            <figure class="item-image">
              <img :src="defaultImage" alt="" class="rounded-20 w-full" />
            </figure>
          </div>
          <div class="flex -mx-2">
            <div
              v-for="image in images"
              :key="image"
              class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
            >
              <figure class="item-thumbnail">
                <img
                  :src="image"
                  @click="changeImage(image)"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/4 order-2 md:order-1">
          <div
            class="bg-white w-full p-5 border border-gray-400 rounded-20 sticky"
            style="top: 15px"
          >
            <h3>Room Type:</h3>
            <div class="flex mt-3">
              <div class="w-1/4">
                <img :src="leaderImage" alt="" class="w-full inline-block rounded-full" />
              </div>
              <div class="w-3/4 ml-5 mt-1">
                <div class="font-semibold text-xl text-gray-800">{{ leaderName }}</div>
                <div class="font-light text-md text-gray-400">
                  <span class="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>

            <h4 class="mt-5 font-semibold">What will you get:</h4>
            <ul class="list-check mt-3">
              <li v-for="perk in perks" :key="perk">{{ perk }}</li>
            </ul>
            <br>
            <div><p class="ml-auto font-semibold text-2xl">Rp. 300,000 / night</p></div>
            <a
              href="https://api.whatsapp.com/send?phone=+6282110858255&text=Halo%21%20Hotel Maris,%20Saya%20ingin booking kamar hari ini ada yang kosong ? %20ingin bertanya%20dulu."
              class="text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"
              target="_blank"
            >
              Book Now
            </a>

          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center">
        <div class="w-full md:w-3/4 mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">{{ leaderName }}</h2>
          <p class="font-light text-xl mb-5">Family room with great view</p>
          <br>
            <div class="ml-auto font-semibold text-2xl">
              Description
          </div>

          <p class="font-light text-xl mb-5">
            Enjoy a comfortable stay with all the family-friendly perks.
          </p>
        </div>
        <div class="w-1/4 hidden md:block"></div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import '../../assets/css/tailwind.css';

export default {
  name: 'RoomStandard',
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      defaultImage: require('@/assets/images/room_standard/image-1.png'),
      images: [
        require('@/assets/images/room_standard/image-1.png'),
      ],
      leaderImage: require('@/assets/images/logo.png'),
      leaderName: 'Familly Room',
      roomPrice: 500000, // Harga per malam
      perks: ['Wi-Fi gratis', 'Sarapan gratis', 'Kolam renang'],
      nights: 1,
    };
  },
  methods: {
    changeImage(image) {
      this.defaultImage = image;
    },
    bookRoom() {
      alert(`Anda memesan kamar untuk ${this.nights} malam seharga Rp. ${this.roomPrice * this.nights}`);
    },
  },
};
</script>

<style src="@/assets/css/tailwind.css" />


