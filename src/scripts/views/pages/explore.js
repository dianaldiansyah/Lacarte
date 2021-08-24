import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
        <!-- Hero -->
        <div id="hero" class="hero">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
            <img 
                src='./images/hero-image-large.jpg' 
                alt="Hero"></img>
          </picture>
            <!-- Hero Inner -->
            <div class="hero__inner">
                <h1 class="hero__title">Cari Restoran Menjadi <span>Lebih Mudah</span></h1>
                <p class="hero__tagline">Kamu tinggal akses Lacarte untuk mencari restoran terdekat</p>
                <!-- End Hero Caption -->
            </div>
            <!-- End Hero Content -->

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E7EDED" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <!-- End Hero -->

        <section class="content">
          <div class="explore">
              <h1 class="explore__label">Explore Restaurant</h1>
              <div class="restaurants" id="restaurants">
                  
              </div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Explore;
