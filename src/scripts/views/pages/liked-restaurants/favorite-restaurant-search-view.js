import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <section class="content">
              <div class="explore">
                <h2 class="explore__label">Favorite Restaurant</h2>
                <input id="query" placeholder="Cari Restoran berdasarkan Nama.." class="input__search" type="text">
                <div id="restaurants" class="restaurants">

                </div>
              </div>
            </section>
           `;
    }
  
    runWhenUserIsSearching(callback) {
      document.getElementById('query').addEventListener('change', (event) => {
        callback(event.target.value);
      });
    }
  
    showrestaurants(restaurants) {
      this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
          html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
        } else {
          html = this._getEmptyRestaurantTemplate();
        }
    
        document.getElementById('restaurants').innerHTML = html;
    
        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyRestaurantTemplate() {
      return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada resto untuk ditampilkan</div>';
    }
  }
  
  export default FavoriteRestaurantSearchView;