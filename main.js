const bannersList = document.getElementById('banners-list');
const submitBtn = document.getElementById('submit');
const saveBtn = document.getElementById('save');
const clearBtn = document.getElementById('clear');

let savedItems = [];

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('savedItems') === null) {
    savedItems = [];
  } else {
    savedItems = JSON.parse(localStorage.getItem('savedItems'));
    savedItems.map((item) => {
      createNewBanner(bannersList, item.redirectUrl, item.imgUrl);
    });
  }
});

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

saveBtn.onclick = () => {
  localStorage.setItem('savedItems', JSON.stringify(savedItems));
};

clearBtn.onclick = () => {
  const images = document.getElementsByClassName('single-banner');
  localStorage.clear();
  // console.log(images);
  // while (bannersList.lastElementChild) {
  //   bannersList.removeChild(lastElementChild);
  // }
};

function createNewBanner(element_id, redirect_link, banner_img) {
  const imgDiv = document.createElement('div');
  const imgSource = document.createElement('img');
  const link = document.createElement('a');

  imgDiv.className = 'single-banner';
  link.href = redirect_link;
  link.target = '_blank';
  imgSource.src = banner_img;

  imgSource.style.height = '320px';
  imgSource.style.width = '320px';

  element_id.appendChild(imgDiv);
  imgDiv.appendChild(link);
  link.appendChild(imgSource);
}
