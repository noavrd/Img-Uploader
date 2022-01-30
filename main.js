const bannersList = document.getElementById('banners-list');
const submitBtn = document.getElementById('submit');
const saveBtn = document.getElementById('save');
const clearBtn = document.getElementById('clear');

let savedItems = [];

// Check on loading if there are banners saved
document.addEventListener('DOMContentLoaded', () => {
  console.log(localStorage);
  if (localStorage.getItem('banners-data') === null) {
    savedItems = [];
  } else {
    savedItems = JSON.parse(localStorage.getItem('banners-data'));
    savedItems.map((item) => {
      createNewBanner(bannersList, item.redirectUrl, item.imgUrl);
    });
  }
});

// Add new banner on submit button
submitBtn.onclick = () => {
  let imgLink = document.getElementsByClassName('img-link')[0];
  let redirectLink = document.getElementsByClassName('redirect-link')[0];

  createNewBanner(bannersList, redirectLink.value, imgLink.value);

  savedItems.push({
    imgUrl: imgLink.value,
    redirectUrl: redirectLink.value,
  });

  imgLink.value = '';
  redirectLink.value = '';
};

// Save banners to local storage on save button
saveBtn.onclick = () => {
  localStorage.setItem('banners-data', JSON.stringify(savedItems));
};

// Delete banners from local storage on clear button
clearBtn.onclick = () => {
  const images = document.getElementsByClassName('single-banner');
  localStorage.clear();
  console.log(images.length);
  const num = images.length;
  for (let i = 0; i < num; i++) {
    images[0].remove();
  }
};

// Add banners and display them on screen
function createNewBanner(element_id, redirect_link, banner_img) {
  const imgDiv = document.createElement('div');
  const imgSource = document.createElement('img');
  const link = document.createElement('a');

  imgDiv.className = 'single-banner';
  link.href = redirect_link;
  link.target = '_blank';
  imgSource.src = banner_img;
  imgSource.className = 'img-banner';
  imgSource.alt = 'url';

  imgSource.style.height = '320px';
  imgSource.style.width = '320px';

  element_id.appendChild(imgDiv);
  imgDiv.appendChild(link);
  link.appendChild(imgSource);
}
