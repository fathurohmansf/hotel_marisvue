<template>
  <div class="room-details" v-if="room">
    <div class="room-details__image">
      <img :src="room.image" :alt="room.title" />
    </div>
    <div class="room-details__content">
      <h2>{{ room.title }}</h2>
      <p class="room-details__description">{{ room.description }}</p>
      <p class="room-details__price">Starting from {{ room.price }}</p>

      <div class="room-details__features">
        <h3>Amenities:</h3>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <!-- Add more amenities as needed -->
        </ul>
      </div>

      <button class="btn">Book Now</button> 
    </div>
  </div>
  <p v-else>Loading room details...</p>
</template>

<script>
export default {
  name: "RoomDetail",
  data() {
    return {
      room: null, // Start with room data as null
    };
  },
  mounted() {
    this.fetchRoomDetails();
  },
  methods: {
    fetchRoomDetails() {
      // Get the room ID from the URL parameters
      const roomId = this.$route.params.id;

      // Simulate fetching room details from data (replace with your actual data fetching logic)
      const allRooms = [
        {
          id: 1,
          image: "assets/images/room-1.jpg",
          title: "Family Room",
          description:
            "Bask in luxury with breathtaking ocean views from your private suite.",
          price: "Rp. 450,000/night",
          link: "family_room/",
          buttonText: "Details Room",
        },
        {
          id: 2,
          image: "assets/images/room_superior.jpg",
          title: "Superior Room",
          description:
            "Experience urban elegance and modern comfort in the heart of the city. <br>Included Breakfast.",
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
      ];

      this.room = allRooms.find((r) => r.id === parseInt(roomId, 10));
    },
  },
};
</script>

<style scoped>
/* Add styles for room details here */
.room-details {
  display: flex; /* Or use grid for more layout control */
  gap: 20px; /* Adjust spacing as needed */
  padding: 20px;
}

.room-details__image {
  /* ... styles for the image container */
}

.room-details__image img {
  /* ... styles for the image */
}

.room-details__content {
  /* ... styles for the content container */
}

.room-details__description {
  /* ... styles for the description */
}

.room-details__price {
  /* ... styles for the price */
  font-size: 1.2em;
  font-weight: bold;
}

/* ... add more styles for features, booking button, etc. */
</style>