export const initDestinations = () => {
    fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
        const destinations = data.destinations;
        const container = document.getElementById("destinations-container");
        destinations.forEach(destination => {
            const cardDest = `
                    <div class="flex rounded-xl border border-zinc-200 p-2 transition duration-300 ease-in-out hover:scale-110 sm:p-4">
                        <figure class="h-12 w-12 sm:h-15 sm:w-15">
                            <img src="${destination.image}" alt="${destination.name}" class="rounded-full">
                        </figure>
                        <div class="pl-3">
                            <p class="pt-2 text-sm">${destination.name}</p>
                            <div class="flex pt-1.5">
                                <span>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_6566)">
                                            <mask id="mask0_1_6566" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="13">
                                                <path d="M12 0.719971H0V12.72H12V0.719971Z" fill="white"></path>
                                            </mask>
                                            <g mask="url(#mask0_1_6566)">
                                                <path d="M1 0.719971C0.725 0.719971 0.5 0.944971 0.5 1.21997V12.22C0.5 12.495 0.725 12.72 1 12.72C1.275 12.72 1.5 12.495 1.5 12.22V7.19497C2.12 6.80497 3.505 6.18497 5.515 6.79497C8.745 7.77497 11.33 3.96497 11.435 3.80497C11.525 3.67497 11.52 3.50497 11.43 3.37497C11.34 3.24997 11.175 3.18997 11.025 3.23497C11 3.23997 8.42 3.91997 6.09 2.28997C4.455 1.14497 2.52 1.13997 1.5 1.24497V1.21997C1.5 0.944971 1.275 0.719971 1 0.719971Z" fill="#8E8E8E"></path>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_6566">
                                                <rect width="12" height="12" fill="white" transform="translate(0 0.719971)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <p class="text-xs text-neutral-500">${destination.desc}</p>
                            </div>
                        </div>
                        <span class="pt-8 pl-1 hover:cursor-pointer">
                            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.219971" width="27" height="27" rx="13.5" fill="#F2F4F6"></rect>
                                <path d="M13.5004 17.5234L17.5837 13.4401M17.5837 13.4401L13.5004 9.35669M17.5837 13.4401H9.41699" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                `;
            container.innerHTML += cardDest;
        });
    })
    .catch(error => console.error("Error fetching destinations:", error));
}