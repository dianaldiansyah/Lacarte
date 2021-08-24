import CONFIG from '../../globals/config';

const getMenuRestaurant = (menus) => {
  let listMenu = null;
  listMenu = menus.map((menu) => `<li>${menu.name}</li>`).join('');
  return listMenu;
};

const getCustomerReview = (reviews) => {
  let listReview = null;
  listReview = reviews.map((value) => `
            <div class="review__item">
                <p class="customer__name">${value.name}</p>
                <p class="review__date">${value.date}</p>
                <p class="customer__review">${value.review}</p>
            </div>
        `).join('');

  return listReview;
};

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__image">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    </div>
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <h4 class="restaurant__city">${restaurant.city}</h4>

    <div class="restaurant__review">
        <h4>Review</h4>
        <div class="restaurant__rating">
            <div class="rating__value">
                ${restaurant.rating}
            </div>
            <div class="rating__info">
                <p class="label">${((restaurant.rating >= 4) ? 'Good' : 'Okay')}</p>
                <p class="caption">dari ${restaurant.customerReviews.length} Review</p>
            </div>
        </div>
    </div>

  <div class="restaurant__info">
    <h3 class="info__headline">Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__info">
    <h3 class="info__headline">Address</h3>
    <p>${restaurant.address}</p>
  </div>
  <div class="restaurant__info">
    <h3 class="info__headline">Foods</h3>
    <ul class="info__menu">${getMenuRestaurant(restaurant.menus.foods)}</ul>
  </div>
  <div class="restaurant__info">
    <h3 class="info__headline">Drinks</h3>
    <ul class="info__menu">${getMenuRestaurant(restaurant.menus.drinks)}</ul>
  </div>
  <div class="restaurant__info">
    <h3 class="info__headline">Review</h3>
    <div class="info__review">${getCustomerReview(restaurant.customerReviews)}</div>
  </div>

  <div class="restaurant__review">
    <h3>Rate this Restaurant</h3>
    <div class="add__review">
        <input id="reviewName" class="input__review" placeholder="Your name" required>
        <textarea id="reviewContent" class="input__review" placeholder="Your Review" required></textarea>
        <button type="submit" id="submitReview">Kirim</button>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <img class="restaurant-item__thumbnail lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name || '-'}">
        <div class="restaurant-item__city">${restaurant.city || '-'}</div>
        <div class="restaurant-item__content">
            <p class="restaurant-item__rating">Rating : <span class="restaurant-item__rating__value"> ${restaurant.rating || '-'}</span>
            </p>
            <h1 class="restaurant-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h1>
            <p class="restaurant-item__description">${(restaurant.description !== undefined) ? restaurant.description.slice(0, 200) || '-' : '-'} ...</p>
        </div>
    </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
