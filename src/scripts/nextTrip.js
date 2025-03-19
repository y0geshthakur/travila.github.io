export const initNextTrip = () => {
    fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const nextTrip = data.nextTrip;
    const nextTripContainer = document.getElementById('nextTrip-container');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');

    // Render all trips initially
    function renderTrips(trips) {
      nextTripContainer.innerHTML = trips.map(trip => `
        <div class="trip-card relative min-w-1/3 p-0 transition-all duration-300 ease-in-out hover:scale-110 sm:w-1/3 sm:p-2">
          <fig>
                                  <img src="${trip.image}" alt="${trip.name}" class="z-0 rounded-t-4xl">
                              </fig>
                              <div class="absolute top-6 right-6 left-6 z-10 flex items-center justify-between">
                                  <p class="rounded-4xl bg-white px-2 py-1 text-xs text-black">${trip.header}</p>
                                  <span>
                                      <svg width="25" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect y="0.219971" width="32" height="32" rx="16" fill="white" fill-opacity="0.82"></rect>
                                          <path d="M23.0705 18.5821L17.4136 24.239C16.6326 25.02 15.3662 25.02 14.5852 24.239L8.92833 18.5821C6.97571 16.6295 6.97571 13.4637 8.92833 11.5111C10.881 9.55847 14.0468 9.55847 15.9994 11.5111C17.952 9.55847 21.1178 9.55847 23.0705 11.5111C25.0231 13.4637 25.0231 16.6295 23.0705 18.5821Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                  </span>
                              </div>
                              <div class="relative z-5 -mt-7 rounded-4xl border border-zinc-200 bg-white px-4 pt-6">
                                  <div class="flex items-center justify-between pb-2">
                                      <div class="flex">
                                          <span>
                                              <svg width="15" height="15" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M11.0215 3.01171H10.5737V2.55859C10.5737 2.2997 10.3638 2.08984 10.1049 2.08984C9.84603 2.08984 9.63617 2.2997 9.63617 2.55859V3.01171H5.0371V2.55859C5.0371 2.2997 4.82724 2.08984 4.56835 2.08984C4.30946 2.08984 4.0996 2.2997 4.0996 2.55859V3.01171H3.65183C2.37376 3.01171 1.33398 4.05149 1.33398 5.32954V11.7719C1.33398 13.05 2.37376 14.0898 3.65183 14.0898H11.0215C12.2996 14.0898 13.3393 13.05 13.3393 11.7719V5.32954C13.3393 4.05149 12.2996 3.01171 11.0215 3.01171ZM3.65183 3.94921H4.0996V4.86327C4.0996 5.12216 4.30946 5.33202 4.56835 5.33202C4.82724 5.33202 5.0371 5.12216 5.0371 4.86327V3.94921H9.63619V4.86327C9.63619 5.12216 9.84605 5.33202 10.105 5.33202C10.3639 5.33202 10.5737 5.12216 10.5737 4.86327V3.94921H11.0215C11.7826 3.94921 12.4018 4.56843 12.4018 5.32954V5.77733H2.27148V5.32954C2.27148 4.56843 2.89069 3.94921 3.65183 3.94921ZM11.0215 13.1523H3.65183C2.89069 13.1523 2.27148 12.5331 2.27148 11.7719V6.71483H12.4018V11.7719C12.4018 12.5331 11.7826 13.1523 11.0215 13.1523ZM5.49805 8.55859C5.49805 8.81748 5.28819 9.02734 5.0293 9.02734H4.10743C3.84854 9.02734 3.63868 8.81748 3.63868 8.55859C3.63868 8.2997 3.84854 8.08984 4.10743 8.08984H5.0293C5.28816 8.08984 5.49805 8.2997 5.49805 8.55859ZM11.0347 8.55859C11.0347 8.81748 10.8248 9.02734 10.5659 9.02734H9.64402C9.38513 9.02734 9.17527 8.81748 9.17527 8.55859C9.17527 8.2997 9.38513 8.08984 9.64402 8.08984H10.5659C10.8248 8.08984 11.0347 8.2997 11.0347 8.55859ZM8.26367 8.55859C8.26367 8.81748 8.05381 9.02734 7.79492 9.02734H6.87305C6.61416 9.02734 6.4043 8.81748 6.4043 8.55859C6.4043 8.2997 6.61416 8.08984 6.87305 8.08984H7.79492C8.05379 8.08984 8.26367 8.2997 8.26367 8.55859ZM5.49805 11.3242C5.49805 11.5831 5.28819 11.7929 5.0293 11.7929H4.10743C3.84854 11.7929 3.63868 11.5831 3.63868 11.3242C3.63868 11.0653 3.84854 10.8554 4.10743 10.8554H5.0293C5.28816 10.8554 5.49805 11.0653 5.49805 11.3242ZM11.0347 11.3242C11.0347 11.5831 10.8248 11.7929 10.5659 11.7929H9.64402C9.38513 11.7929 9.17527 11.5831 9.17527 11.3242C9.17527 11.0653 9.38513 10.8554 9.64402 10.8554H10.5659C10.8248 10.8554 11.0347 11.0653 11.0347 11.3242ZM8.26367 11.3242C8.26367 11.5831 8.05381 11.7929 7.79492 11.7929H6.87305C6.61416 11.7929 6.4043 11.5831 6.4043 11.3242C6.4043 11.0653 6.61416 10.8554 6.87305 10.8554H7.79492C8.05379 10.8554 8.26367 11.0653 8.26367 11.3242Z" fill="#8E8E8E"></path>
                                              </svg>
                                          </span>
                                          <p style="font-size: 10px;">18 Sep 2024</p>
                                      </div>
                                      <div class="flex">
                                          <span>
                                              <svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M8.87988 14.0898C12.1936 14.0898 14.8799 11.4036 14.8799 8.08984C14.8799 4.77614 12.1936 2.08984 8.87988 2.08984C5.56617 2.08984 2.87988 4.77614 2.87988 8.08984C2.87988 11.4036 5.56617 14.0898 8.87988 14.0898Z" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                  <path d="M8.21289 5.42285V8.75619H11.5462" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                              </svg>
                                          </span>
                                          <p style="font-size: 10px;">${trip.time}</p>
                                      </div>
                                      <div class="flex">
                                          <span>
                                              <svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <g clip-path="url(#clip0_1_7340)">
                                                      <mask id="mask0_1_7340" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                                                          <path d="M16.8604 0.0898438H0.860352V16.0898H16.8604V0.0898438Z" fill="white"></path>
                                                      </mask>
                                                      <g mask="url(#mask0_1_7340)">
                                                          <path d="M8.86035 14.0898C12.1741 14.0898 14.8604 11.4035 14.8604 8.08984C14.8604 4.77613 12.1741 2.08984 8.86035 2.08984C5.54664 2.08984 2.86035 4.77613 2.86035 8.08984C2.86035 9.08159 3.10097 10.0172 3.52702 10.8413L2.86035 14.0898L6.10888 13.4231C6.93304 13.8492 7.8686 14.0898 8.86035 14.0898Z" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                          <path d="M5.86702 8.08984H5.86035V8.09651H5.86702V8.08984Z" stroke="#8E8E8E" stroke-width="2.25" stroke-linejoin="round"></path>
                                                          <path d="M8.86702 8.08984H8.86035V8.09651H8.86702V8.08984Z" stroke="#8E8E8E" stroke-width="2.25" stroke-linejoin="round"></path>
                                                          <path d="M11.867 8.08984H11.8604V8.09651H11.867V8.08984Z" stroke="#8E8E8E" stroke-width="2.25" stroke-linejoin="round"></path>
                                                      </g>
                                                  </g>
                                                  <defs>
                                                      <clipPath id="clip0_1_7340">
                                                          <rect width="16" height="16" fill="white" transform="translate(0.860352 0.0898438)"></rect>
                                                      </clipPath>
                                                  </defs>
                                              </svg>
                                          </span>
                                          <p style="font-size: 10px;">${trip.comments} comments</p>
                                      </div>
                                  </div>
                                  <p style="font-size: 14px;" class="pb-1.5">${trip.name}</p>
                                  <div class="mt-5 mb-4 flex items-center justify-between">
                                      <div class="flex items-center gap-2">
                                          <img src="${trip.authorImage}" alt="${trip.author} image" class="w-6 rounded-full">
                                          <p style="font-size: 10px;">${trip.author}</p>
                                      </div>
                                      <p style="font-size: 10px;" class="rounded-full border border-zinc-200 bg-gray-100 px-2 py-1 text-black transition duration-300 ease-in-out hover:cursor-pointer hover:bg-black hover:text-white">${trip.footer}</p>
                                  </div>
                              </div>
        </div>
      `).join('');
    }

    renderTrips(nextTrip);

    // Handle scroll
    function scrollContainer(scrollOffset) {
      const firstCard = nextTripContainer.querySelector('.trip-card');
      if (!firstCard) return;
      
      const cardStyle = window.getComputedStyle(firstCard);
      const cardWidth = firstCard.offsetWidth + 
        parseInt(cardStyle.marginRight) + 
        parseInt(cardStyle.marginLeft);
      
      nextTripContainer.scrollBy({
        left: scrollOffset * cardWidth,
        behavior: 'smooth'
      });
    }

    leftButton.addEventListener("click", () => scrollContainer(-1));
    rightButton.addEventListener("click", () => scrollContainer(1));
  })
  .catch(error => console.error("Error Fetching Next Trips: ", error));
}