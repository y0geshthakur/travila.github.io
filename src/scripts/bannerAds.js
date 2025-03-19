export const initBannerAds = () => {
    fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        const bannerAds = data.bannerAds;
        const bannerContainer = document.getElementById("banner-container");
        bannerContainer.innerHTML = `
            <img src="${bannerAds[0].image}" alt="${bannerAds[0].alt}" />
        `;
    })
    .catch(error => console.error("Error fetching banner ads", error));
}