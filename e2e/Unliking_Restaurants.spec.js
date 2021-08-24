const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
  
    I.amOnPage('/');

    I.seeElement('.restaurant-item__content .restaurant-item__title');
    I.wait(1);
    const firstResto = locate('.restaurant-item__content .restaurant-item__title a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.wait(1);
    I.click(firstResto);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');
    const unlikedRestoName = await I.grabTextFrom('.restaurant-item__title');
    assert.strictEqual(firstRestoName, unlikedRestoName);

    I.seeElement('.restaurant-item__title a');
    await I.grabTextFrom(firstResto);
    I.click(firstResto);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});