<template>
  <div class="weather-widget">
    <h1>Widget Cuaca</h1>
    <div class="location-input">
      <label for="location">Masukkan Nama Kota:</label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData">Cari</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Nama Kota: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Suhu: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Deskripsi Cuaca: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Sedang Mencari Data Cuaca...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
}

 h1{
  margin-top: 0;
  font-weight: bold;
  color: #000;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.location-input {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}
p{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

label {
  width: 100px;
  font-size: 16px;
  color: #000;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  max-width: 100%;
  background-color: #F7F1E5;
}

button {
  width: 100px;
  padding: 8px 16px;
  background-color: #2C3333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto 10px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}

button:hover {
  background-color: #2E4F4F;
}

@media (max-width: 600px) {
  button {
    width: 100%;
  }

  .location-input {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 100px;
  }
}
</style>
