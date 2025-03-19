export const initFeaturedTours = () => {
    let featuredTours = [];

fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
        featuredTours = data.featuredTours;
        renderTours(featuredTours);
    });

function renderTours(featuredTours) {
    const featuredToursContainer = document.getElementById("featuredTours-container");
    featuredToursContainer.innerHTML = "";
    featuredTours.forEach(tour => {
        const cardTours = `
                <div class="relative w-full p-2 transition duration-300 ease-in-out hover:scale-110">
                  <fig>
                    <img src="${tour.image}" alt="${tour.name}" class="z-0 rounded-t-4xl">
                  </fig>
                  <div class="absolute top-6 right-6 left-6 z-10 flex items-center justify-between">
                    <p class="rounded-4xl bg-white px-2 py-1 text-xs text-amber-500">${tour.header}</p>
                    <span>
                      <svg width="25" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.219971" width="32" height="32" rx="16" fill="white" fill-opacity="0.82"></rect>
                        <path d="M23.0705 18.5821L17.4136 24.239C16.6326 25.02 15.3662 25.02 14.5852 24.239L8.92833 18.5821C6.97571 16.6295 6.97571 13.4637 8.92833 11.5111C10.881 9.55847 14.0468 9.55847 15.9994 11.5111C17.952 9.55847 21.1178 9.55847 23.0705 11.5111C25.0231 13.4637 25.0231 16.6295 23.0705 18.5821Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>
                  <div class="absolute top-41 left-24 z-20 flex rounded-4xl border border-zinc-200 bg-white px-2 py-1 sm:top-48 sm:left-32">
                    <span class="pt-0.5 pr-1">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_6749)">
                          <path d="M12.1487 4.80594C12.0735 4.57351 11.8674 4.40843 11.6235 4.38645L8.3105 4.08563L7.00046 1.01935C6.90387 0.794633 6.68388 0.64917 6.43945 0.64917C6.19503 0.64917 5.97504 0.794633 5.87845 1.01988L4.56841 4.08563L1.2549 4.38645C1.01144 4.40896 0.80581 4.57351 0.730232 4.80594C0.654655 5.03836 0.724452 5.29329 0.908623 5.454L3.41285 7.65021L2.67441 10.9031C2.62038 11.1422 2.71321 11.3895 2.91165 11.5329C3.01832 11.61 3.14312 11.6492 3.26896 11.6492C3.37747 11.6492 3.4851 11.6199 3.58169 11.5621L6.43945 9.85414L9.29617 11.5621C9.50521 11.6879 9.76871 11.6764 9.96673 11.5329C10.1653 11.389 10.258 11.1417 10.204 10.9031L9.46554 7.65021L11.9698 5.45443C12.1539 5.29329 12.2242 5.0388 12.1487 4.80594Z" fill="#FFC700"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_6749">
                            <rect width="12" height="12" fill="white" transform="translate(0.700195 0.219971)"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <p class="text-xs">${tour.stars}</p>
                    <p class="text-xs text-neutral-500">(${tour.reviews} reviews)</p>
                  </div>
                  <div class="relative z-5 -mt-7 rounded-4xl bg-white px-4 pt-6">
                    <p class="pb-1.5 text-lg sm:text-xl">${tour.name}</p>
                    <div class="flex pb-4">
                      <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00032 0.886719C6.54993 0.886719 5.1321 1.31681 3.92614 2.12261C2.72018 2.9284 1.78025 4.07371 1.22521 5.4137C0.670169 6.7537 0.524945 8.22818 0.807903 9.65071C1.09086 11.0732 1.78929 12.3799 2.81488 13.4055C3.84046 14.4311 5.14714 15.1295 6.56966 15.4125C7.99219 15.6954 9.46668 15.5502 10.8066 14.9952C12.1466 14.4401 13.2919 13.5002 14.0977 12.2942C14.9035 11.0883 15.3336 9.67045 15.3336 8.22005C15.3313 6.27583 14.558 4.4119 13.1832 3.03713C11.8084 1.66236 9.94454 0.889013 8.00032 0.886719ZM10.4716 10.6914C10.3466 10.8164 10.1771 10.8866 10.0003 10.8866C9.82355 10.8866 9.65401 10.8164 9.52899 10.6914L7.52899 8.69138C7.40396 8.56639 7.3337 8.39685 7.33366 8.22005V4.22005C7.33366 4.04324 7.4039 3.87367 7.52892 3.74864C7.65394 3.62362 7.82351 3.55338 8.00032 3.55338C8.17714 3.55338 8.34671 3.62362 8.47173 3.74864C8.59675 3.87367 8.66699 4.04324 8.66699 4.22005V7.94405L10.4716 9.74872C10.5966 9.87373 10.6668 10.0433 10.6668 10.2201C10.6668 10.3968 10.5966 10.5664 10.4716 10.6914Z" fill="#D6D7D8"></path>
                        </svg>
                      </span>
                      <p class="pl-1.5 text-xs text-neutral-500">${tour.duration.days} days ${tour.duration.nights} nights</p>
                      <span class="pl-5">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.9235 3.88664C2.9235 2.14064 4.34417 0.719971 6.09017 0.719971C7.83617 0.719971 9.25679 2.14064 9.25679 3.88664C9.25679 5.63264 7.83617 7.0533 6.09017 7.0533C4.34417 7.0533 2.9235 5.63264 2.9235 3.88664ZM8.09019 8.0533H4.09017C1.97684 8.0533 0.256836 9.77327 0.256836 11.8867C0.256836 12.898 1.07884 13.72 2.09017 13.72H10.0902C11.1015 13.72 11.9235 12.898 11.9235 11.8867C11.9235 9.77327 10.2035 8.0533 8.09019 8.0533Z" fill="#D6D7D8"></path>
                        </svg>
                      </span>
                      <p class="pl-1.5 text-xs text-neutral-500">${tour.guests.min}-${tour.guests.max} guest</p>
                    </div>
                    <div class="flex items-center justify-between pb-4">
                      <div class="flex">
                        <h6 style="font-size: 20px;">${tour.currency}${tour.price}</h6>
                        <p class="pt-2 pl-1 text-xs text-neutral-500">/ person</p>
                      </div>
                      <p class="h-max w-max rounded-full border border-zinc-200 bg-gray-100 px-3 py-1 text-xs transition duration-300 ease-in-out hover:cursor-pointer hover:bg-black hover:text-white">Book Now</p>
                    </div>
                  </div>
                </div>
              `;
        featuredToursContainer.innerHTML += cardTours;
    });
}

function filterToursFeatured() {
    const category = document.getElementById("category").value;
    const duration = document.getElementById("duration").value;
    const reviewRating = document.getElementById("review-rating").value;
    const price = document.getElementById("price").value;

    const filteredTours = featuredTours.filter(tour => {
        if (category && tour.category !== category)
            return false;
        if (duration) {
            const [minDays, maxDays] = duration.split("-").map(Number);
            if (maxDays && (tour.duration.days < minDays || tour.duration.days > maxDays))
                return false;
            if (!maxDays && tour.duration.days < minDays)
                return false;
        }
        if (reviewRating && tour.stars < parseFloat(reviewRating))
            return false;
        if (price) {
            const [minPrice, maxPrice] = price.split("-").map(Number);
            if (maxPrice && (tour.price < minPrice || tour.price > maxPrice))
                return false;
            if (!maxPrice && tour.price < minPrice)
                return false;
        }
        return true;
    });
    renderTours(filteredTours);
}

function resetFilters() {
    document.getElementById("category").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("review-rating").value = "";
    document.getElementById("price").value = "";
    renderTours(featuredTours);
}
document.getElementById("category").addEventListener("change", filterToursFeatured);
document.getElementById("duration").addEventListener("change", filterToursFeatured);
document.getElementById("review-rating").addEventListener("change", filterToursFeatured);
document.getElementById("price").addEventListener("change", filterToursFeatured);
document.getElementById("reset-filters").addEventListener("click", resetFilters);
}