export const initPrinciples = () => {
    fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const man = data.man;
      const manContainer = document.getElementById("man-container");
      manContainer.innerHTML = `
        <div class="absolute left-1/2 z-5 flex -translate-x-1/2 transform">
          <img src="${man[0].imageMan}" alt="man image" class="w-54" />
        </div>
        <div class="absolute top-38 z-0">
          <img src="${man[0].imagePath}" alt="path image" />
        </div>
      `;
      const leftColumn = document.getElementById('left-column');
      const middleColumn = document.getElementById('middle-column');
      const rightColumn = document.getElementById('right-column');
      data.principles.forEach((principle, index) => {
        const principleHtml = `
          <div class="flex justify-between">
            <span>
            ${principle.svg}
            </span>
            <div class="mt-4">
              <p class="pb-2 text-sm">${principle.name}</p>
              <p class="pb-2 text-xs text-neutral-500">${principle.desc}</p>
              <div class="flex transition duration-300 ease-in-out hover:cursor-pointer hover:underline">
                <p class="text-xs">Learn More</p>
                <span class="pt-1 pl-2">
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.66051 9.52366L9.74387 5.4403M9.74387 5.4403L5.66051 1.35693M9.74387 5.4403H1.57715" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        `;
        if (index === 0 || index === 1) {
          leftColumn.insertAdjacentHTML('beforeend', principleHtml);
        } else if (index === 2 || index === 3) {
          middleColumn.insertAdjacentHTML('beforeend', principleHtml);
        }
      });
      rightColumn.insertAdjacentHTML(
        'beforeend',
        `<p style="box-shadow: 0px 6px 22px 0px #00000017;" class="mt-32 ml-5 w-max rounded-full bg-white px-2 py-1 text-sm text-amber-500">+01 235 368</p>`
      );
    })
    .catch(error => console.error("Error fetching Man: ", error));
}