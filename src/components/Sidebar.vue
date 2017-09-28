<template>
  <aside class="sidebar">
    <div class="branding">
      <img src="../assets/branding.jpg" />
      <img src="../assets/branding-mobile.jpg" class="mobile" />
    </div>
    <nav>
      <router-link to="/" class="active" exact>
        <i class="fa fa-home"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/resources/virtual-machines" class="active">
        <i class="fa fa-server"></i>
        <span>Virtual Machines</span>
      </router-link>
      <router-link to="/resources/storage-accounts" class="active">
        <i class="fa fa-bullseye"></i>
        <span>Storage Accounts</span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style scoped>
.sidebar {
	position: fixed;
	left: 0;
	top: 0;
	width: 300px;
	height: 100%;
	padding: 0;
	background: #ccc;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	z-index: 50;
}

.sidebar nav {
	font-size: 100%;
}

.sidebar nav a {
  display: block;
  padding: 12px;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px #aaa;
  text-decoration: none;
  color: #555;
  font-family: Helvetica;
	font-size: 100%;
	max-width: 80%;
  margin: 15px auto;
  text-align: left;

  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;

  -webkit-transition-property: background-color, border;
  -moz-transition-property: background-color, border;
  transition-property: background-color, border;
}

.sidebar nav span {
	padding-left: 12px;
}

.sidebar .branding {
	margin: 40px 0;
}

.sidebar .branding img {
	display: none;
	width: 100%;
}

.sidebar .branding img:not(.mobile) {
	display: block;
}

.sidebar nav a:hover,
.sidebar nav a:active {
	border: 1px solid #555;
}

.sidebar nav a.router-link-active {
	color: #000;
	border: 1px solid #555;
	background: rgba(170, 170, 170, 0.55);
}
</style>
