<template>
  <div class="room-familly">
    <NavBar />
    <div class="content">
      <h1>Familly Room</h1>
      <p>Welcome to the Familly Room page!</p>
      <!-- Tambahkan detail kamar keluarga di sini -->
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';

export default {
  name: 'RoomFamilly',
  components: {
    NavBar,
    Footer
  }
};
</script>

<style scoped>
.room-familly {
  padding: 20px;
}
.content {
  margin-top: 60px; /* Sesuaikan dengan tinggi NavBar Anda */
}
</style>