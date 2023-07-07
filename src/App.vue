<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/' }"><router-link to="/" class="nav-link">Lokasi</router-link></li>
          <li :class="{ 'active': $route.path === '/WidgetsCuaca' }"><router-link to="/WidgetsCuaca" class="nav-link">Cuaca</router-link></li>
          <li :class="{ 'active': $route.path === '/WidgetsPhoto' }"><router-link to="/WidgetsPhoto" class="nav-link">Photo</router-link></li>
          <li :class="{ 'active': $route.path === '/WidgetsGame' }"><router-link to="/WidgetsGame" class="nav-link">Game</router-link></li>
          <li :class="{ 'active': $route.path === '/WidgetsStopwatch' }"><router-link to="/WidgetsStopwatch" class="nav-link">Stopwatch</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
}
body {
  background-color: #CBE4DE;
}
header {
  background: #2E4F4F; 
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap; 
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}

nav a:hover {
  background-color: #0E8388; 
  text-decoration: none;
}

.active {
  background-color: #0E8388; 
  border-radius: 4px;
  width: auto;
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  nav li {
    width: auto; 
    margin: 0 5px;
  }
}
</style>
