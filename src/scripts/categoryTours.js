export const initCategoryTours = () => {
let visibleTours = 4;
let categoryToursData = [];
    fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
        categoryToursData = data.categoryTours;
        const categoryToursContainer = document.getElementById("categoryTours-container");
        const viewMoreButton = document.getElementById("viewMoreButton");

        function renderTours() {
            // Clear container and add current visible tours
            categoryToursContainer.innerHTML = '';
            categoryToursData.slice(0, visibleTours).forEach(categoryTour => {
                const cardTours = `
                    <div class="rounded-xl border border-zinc-200 p-4 transition duration-300 ease-in-out hover:scale-110">
                        <figure>
                            <img src="${categoryTour.image}" alt="${categoryTour.name}" class="rounded-xl">
                        </figure>
                        <p class="pt-2 text-sm">${categoryTour.name}</p>
                        <div class="flex items-center justify-between">
                            <p class="pt-1.5 text-xs text-neutral-500">${categoryTour.tours} Tours, ${categoryTour.activities} Activities</p>
                            <span class="transition duration-300 ease-in-out hover:scale-120 hover:cursor-pointer">
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.219971" width="27" height="27" rx="13.5" fill="#F2F4F6"></rect>
                                    <path d="M13.5004 17.5234L17.5837 13.4401M17.5837 13.4401L13.5004 9.35669M17.5837 13.4401H9.41699" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                `;
                categoryToursContainer.innerHTML += cardTours;
            });
            
            // Show/hide view more button
            viewMoreButton.style.display = visibleTours >= categoryToursData.length ? 'none' : 'block';
        }

        // Initial render
        renderTours();

        // View More button handler
        viewMoreButton.addEventListener("click", function() {
            visibleTours += 4;
            renderTours();
        });
    })
    .catch(error => console.log("Error Fetching Category Tours: ", error));
}