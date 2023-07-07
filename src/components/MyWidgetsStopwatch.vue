<template>
  <div class="stopwatch-widget">
    <h1>Widget Stopwatch</h1>
    <div class="time-container">
      <p class="time">{{ formatTime }}</p>
    </div>
    <div class="button-container">
      <button @click="startStopwatch" :disabled="isRunning">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button @click="resetStopwatch">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    },
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now();

        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  max-width: 90%; 
  margin-left: auto;
  margin-right: auto;
}
h1{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
}


.time-container {
  margin-bottom: 20px;
}

.time {
  color: #000;
  font-size: 48px;
  font-weight: bold;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button-container {
  display: flex;
  justify-content: center;
}

.stopwatch-widget button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #2C3333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.stopwatch-widget button:hover {
  background-color: #2E4F4F;
}

.stopwatch-widget button:disabled {
  background-color: #CBE4DE;
  color: #000;
  cursor: not-allowed;
}
@media (max-width: 480px) {
  .stopwatch-widget .time {
    font-size: 36px;
  }
}
</style>