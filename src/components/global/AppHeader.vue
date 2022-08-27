<template>
  <div class="app-header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand ms-3" href="#"
            ><img
              src="@/assets/site-logo.png"
              width="120px"
              height="60px"
              alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <router-link to="/">الصفحة الرئيسية</router-link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/financialBoxes">
                  الصناديق المالية</router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/about">من نحن</router-link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style>
.navbar {
  direction: rtl;
}
</style>
