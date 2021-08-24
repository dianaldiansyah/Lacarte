import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
        <section class="content">
          <div class="restaurant-detail" id="restaurant">
              
          </div>

          <div id="likeButtonContainer"></div>
        </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
      },
    });

    const reviewName = document.querySelector('#reviewName');
    const reviewContent = document.querySelector('#reviewContent');
    const reviewButton = document.querySelector('#submitReview');
    reviewButton.addEventListener('click', async () => {
      const values = {
        id: url.id,
        name: reviewName.value,
        review: reviewContent.value,
      };
      const response = await RestaurantSource.storeReview(values);
      if (response.error === true) {
        alert(response.message);
      } else {
        reviewName.value = '';
        reviewContent.value = '';
      }
    });
  },

};

export default Detail;
