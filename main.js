const BannersList = document.getElementById('banners-list');
const submitBtn = document.getElementById('submit');

submitBtn.onclick = () => {
  console.log(1);
  const imgLink = document.getElementsByClassName('img-link')[0].value;
  const redirectLink =
    document.getElementsByClassName('redirect-link')[0].value;

  createNewBanner(BannersList, redirectLink, imgLink);
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

  console.log(imgDiv);
}
