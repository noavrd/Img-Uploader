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

  console.log(localStorage);
});
submitBtn.onclick = () => {
  console.log(1);
  const imgLink = document.getElementsByClassName('img-link')[0].value;
  const redirectLink =
    document.getElementsByClassName('redirect-link')[0].value;

  createNewBanner(bannersList, redirectLink, imgLink);
};

saveBtn.onclick = () => {
  // localStorage.clear();

  localStorage.setItem('savedItems', JSON.stringify(savedItems));
};

clearBtn.onclick = () => {
  localStorage.clear();
};

function createNewBanner(element_id, redirect_link, banner_img) {
  const imgDiv = document.createElement('div');
  imgDiv.className = 'single-banner';
  const link = document.createElement('a');
  link.href = redirect_link;
  link.target = '_blank';
  const imgSource = document.createElement('img');
  imgSource.src = banner_img;
  imgSource.style.height = '320px';
  imgSource.style.width = '320px';

  element_id.appendChild(imgDiv);
  imgDiv.appendChild(link);
  link.appendChild(imgSource);

  savedItems.push({
    imgUrl: banner_img,
    redirectUrl: redirect_link,
  });
}
