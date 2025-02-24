fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const heroSection = data.heroSection;
    const heroContainer = document.getElementById("hero-container");
    heroContainer.innerHTML = `
      <div>
          <figure>
            <img src="${heroSection[0].mainImage}" alt="main background" class="absolute h-1/3 sm:h-max" />
          </figure>
        </div>
        <div class="flex justify-center py-4 sm:py-8">
          <div style="background-color: #FEFA17" class="relative flex w-max items-center justify-center gap-1 rounded-full px-4 py-2 transition duration-300 ease-in-out hover:scale-120 hover:cursor-pointer">
            <span>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_6465)">
                  <g clip-path="url(#clip1_1_6465)">
                    <g clip-path="url(#clip2_1_6465)">
                      <mask id="mask0_1_6465" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                        <path d="M24.7197 0.220001H0.719727V24.22H24.7197V0.220001Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_6465)">
                        <path d="M24.7197 12.22C24.7197 18.8475 19.3471 24.22 12.7197 24.22C10.6716 24.22 8.74331 23.7069 7.05639 22.8022C5.66768 22.0575 4.94895 21.0474 3.95521 19.8397C3.01728 18.6999 1.77917 17.384 1.31046 15.9492C0.927068 14.7754 0.719727 13.5219 0.719727 12.22C0.719727 10.0045 1.3201 7.92929 2.36707 6.14807C4.45197 2.60096 8.30778 1.10096 12.7197 1.10096C14.0397 1.10096 15.31 0.433197 16.498 0.826938C21.2742 2.41004 24.7197 6.91268 24.7197 12.22Z" fill="url(#paint0_linear_1_6465)" />
                        <path d="M15.3909 1.90978C14.183 1.50117 12.889 1.27957 11.5432 1.27957C8.74333 1.27957 6.40592 2.47703 4.36446 4.08437C3.73185 4.73355 2.93387 5.21576 2.46037 5.99444C1.98686 6.77312 1.59952 7.60997 1.31152 8.49185C1.36268 8.55392 1.42023 8.61195 1.48559 8.66357C1.78681 8.90141 2.18695 8.97308 2.55199 8.85458L5.8166 7.79463C6.21194 7.66625 6.64583 7.77049 6.93971 8.06442L7.72394 8.84865C8.0415 9.16621 8.13538 9.64428 7.96154 10.0584C7.71105 10.655 8.02427 11.3383 8.6398 11.5379L9.58333 11.8439C9.72559 11.8901 9.85015 11.9791 9.93991 12.0987C10.1769 12.4148 10.1175 12.8624 9.80616 13.1057L9.4247 13.4037C9.06884 13.6817 8.86084 14.1082 8.86084 14.5598V14.8967C8.86084 15.4752 9.14559 16.0165 9.62225 16.3442L10.2768 16.7942C10.3362 16.8351 10.4028 16.8644 10.4731 16.8806L10.8593 16.9697C11.6738 17.1577 12.2978 17.8132 12.4455 18.636C12.5021 18.9511 12.4855 19.2749 12.397 19.5825L11.7542 21.8168C11.6486 22.184 11.9243 22.5502 12.3064 22.5502C12.4511 22.5502 12.5905 22.4956 12.6967 22.3974L15.159 20.1188C15.5061 19.7977 15.7879 19.4127 15.9892 18.9849L16.539 17.8167C16.7208 17.4303 16.834 17.0151 16.8735 16.5899L17.0873 14.2855C17.1805 13.2812 16.7425 12.3012 15.9321 11.7007C15.435 11.3324 14.8328 11.1335 14.2142 11.1335H13.7737C13.118 11.1335 12.5651 10.6449 12.4845 9.99416C12.4264 9.52437 12.6284 9.06014 13.0118 8.78249L13.4988 8.42992C13.6671 8.30799 13.8623 8.22828 14.0679 8.19741L15.2624 8.01821C16.092 7.89378 16.8162 7.39002 17.2214 6.65552C17.7459 5.70494 17.7725 4.55802 17.2929 3.58409C16.905 2.79661 16.2224 2.1911 15.3909 1.90978Z" fill="url(#paint1_linear_1_6465)" />
                        <path d="M12.72 0.220001C12.4031 0.220001 12.0891 0.232519 11.7783 0.256613C17.9656 0.736895 22.8367 5.90951 22.8367 12.22C22.8367 18.5305 17.9656 23.7031 11.7783 24.1834C12.0891 24.2075 12.4031 24.22 12.72 24.22C16.1777 24.22 19.2938 22.7576 21.4836 20.4176C21.4836 20.4176 24.6259 15.3897 24.6259 12.22C24.6259 9.90706 22.9319 5.91468 22.9319 5.91468C20.8171 2.49689 17.0344 0.220001 12.72 0.220001Z" fill="url(#paint2_linear_1_6465)" />
                        <path d="M18.4696 2.52447C18.0818 1.73699 17.3992 1.13153 16.5677 0.850213C15.3598 0.441554 14.0658 0.220001 12.72 0.220001C8.32108 0.220001 4.47505 2.58701 2.38592 6.11685C2.09294 6.61191 2.21096 7.24748 2.66244 7.604C2.96367 7.84184 3.36381 7.91351 3.72884 7.79501L6.99345 6.73506C7.38879 6.60668 7.82268 6.71092 8.11656 7.00485L8.9008 7.78908C9.21835 8.10664 9.31223 8.58471 9.1384 8.99878C8.8879 9.59543 9.20112 10.2787 9.81665 10.4784L10.7602 10.7844C10.9024 10.8305 11.027 10.9195 11.1167 11.0392C11.3538 11.3552 11.2943 11.8029 10.983 12.0461L10.6016 12.3441C10.2457 12.6222 10.0377 13.0487 10.0377 13.5003V13.8372C10.0377 14.4156 10.3224 14.957 10.7991 15.2847L11.4536 15.7347C11.5131 15.7755 11.5797 15.8048 11.65 15.8211L12.0361 15.9102C12.8507 16.0982 13.4747 16.7537 13.6224 17.5765C13.6789 17.8915 13.6623 18.2153 13.5738 18.523L12.9311 20.7573C12.8254 21.1246 13.1011 21.4907 13.4833 21.4907C13.628 21.4907 13.7673 21.4361 13.8735 21.3378L16.3359 19.0592C16.6829 18.7381 16.9647 18.3532 17.1661 17.9254L17.7158 16.7571C17.8977 16.3707 18.0109 15.9556 18.0503 15.5304L18.2641 13.226C18.3573 12.2217 17.9193 11.2416 17.1089 10.6411C16.6119 10.2728 16.0097 10.074 15.3911 10.074H14.9505C14.2948 10.074 13.742 9.58537 13.6614 8.93464C13.6032 8.46485 13.8053 8.00061 14.1887 7.72296L14.6756 7.3704C14.844 7.24847 15.0392 7.16875 15.2448 7.13788L16.4393 6.95868C17.2688 6.83426 17.9931 6.33049 18.3983 5.596C18.9227 4.64532 18.9493 3.4984 18.4696 2.52447Z" fill="url(#paint3_linear_1_6465)" />
                        <path d="M5.5868 18.0718C4.77076 17.6666 4.1284 16.9805 3.77786 16.1395L3.39701 15.2259C3.24134 14.8524 2.894 14.5939 2.4916 14.5519C1.69301 14.4686 1.07513 15.2377 1.32784 15.9998C2.30167 18.9364 4.37918 21.3694 7.06878 22.8079L7.24276 21.0656C7.36704 19.8204 6.70765 18.6282 5.5868 18.0718Z" fill="url(#paint4_linear_1_6465)" />
                        <path d="M22.9308 5.91507L22.8556 6.05596C22.2225 7.24312 22.3964 8.69907 23.2914 9.70363C23.8172 10.2938 24.1078 11.0567 24.1078 11.8472C24.1078 12.7723 23.7102 13.6528 23.0161 14.2645L22.0775 15.0919C21.4675 15.6296 21.118 16.4035 21.118 17.2166V17.4622C21.118 17.9437 20.9952 18.4173 20.7613 18.8382L20.3432 19.5904C20.2378 19.78 20.225 20.0073 20.3085 20.2075C20.507 20.6837 21.1301 20.7937 21.4826 20.417C23.4901 18.272 24.7195 15.3897 24.7195 12.22C24.7195 9.90697 24.0645 7.7473 22.9308 5.91507Z" fill="url(#paint5_linear_1_6465)" />
                        <path d="M22.9308 5.91507L22.8557 6.05596C22.2225 7.24312 22.3965 8.69907 23.2914 9.70363C23.8173 10.2938 24.1078 11.0567 24.1078 11.8472C24.1078 12.7723 23.7102 13.6528 23.0162 14.2645L22.5915 14.6388C22.2308 16.401 21.484 18.0223 20.4431 19.4107L20.3432 19.5904C20.2378 19.78 20.225 20.0073 20.3085 20.2075C20.507 20.6837 21.1301 20.7937 21.4826 20.417C23.4902 18.272 24.7196 15.3897 24.7196 12.22C24.7196 9.90697 24.0646 7.7473 22.9308 5.91507Z" fill="url(#paint6_linear_1_6465)" />
                        <path d="M14.1881 7.72287L14.675 7.37031C14.8434 7.24838 15.0386 7.16866 15.2442 7.13779L16.4387 6.95859C17.2682 6.83417 17.9925 6.3304 18.3977 5.59591C18.9222 4.64532 18.9488 3.4984 18.4691 2.52447C18.0813 1.73699 17.3987 1.13153 16.5671 0.850213C15.3593 0.441554 14.0653 0.220001 12.7195 0.220001C12.4024 0.220001 12.0883 0.232707 11.7774 0.256848C12.7863 0.335154 13.7603 0.537789 14.6838 0.850213C15.5153 1.13153 16.1979 1.73699 16.5858 2.52447C17.0655 3.4984 17.0388 4.64532 16.5143 5.59591C16.1091 6.3304 15.3849 6.83417 14.5553 6.95859L13.3608 7.13779C13.1552 7.16861 12.96 7.24838 12.7917 7.37031L12.3047 7.72287C11.9214 8.00052 11.7193 8.46475 11.7774 8.93454C11.858 9.58527 12.4109 10.0739 13.0666 10.0739H13.5071C14.1257 10.0739 14.728 10.2728 15.225 10.641C16.0353 11.2415 16.4734 12.2216 16.3802 13.2259L16.1664 15.5303C16.127 15.9555 16.0137 16.3706 15.8319 16.757L15.2821 17.9253C15.0808 18.353 14.799 18.738 14.4519 19.0592L13.0442 20.3618L12.9304 20.7571C12.8248 21.1244 13.1005 21.4905 13.4826 21.4905C13.6273 21.4905 13.7667 21.436 13.8729 21.3377L16.3352 19.0591C16.6822 18.738 16.9641 18.353 17.1654 17.9252L17.7152 16.7569C17.897 16.3705 18.0102 15.9554 18.0497 15.5302L18.2635 13.2258C18.3566 12.2216 17.9187 11.2415 17.1083 10.641C16.6112 10.2727 16.009 10.0739 15.3904 10.0739H14.9499C14.2942 10.0739 13.7413 9.58522 13.6607 8.93449C13.6026 8.46471 13.8046 8.00052 14.1881 7.72287Z" fill="url(#paint7_linear_1_6465)" />
                        <path d="M5.587 18.0717C4.77096 17.6666 4.1286 16.9804 3.77806 16.1395L3.39721 15.2258C3.24154 14.8524 2.8942 14.5939 2.4918 14.5519C2.2295 14.5245 1.98696 14.5896 1.78809 14.7157C1.97801 14.8351 2.13086 15.0114 2.22023 15.2258L2.60107 16.1395C2.95161 16.9804 3.59397 17.6666 4.41001 18.0717C5.53086 18.6282 6.19025 19.8203 6.06592 21.0656L5.95929 22.1338C6.31599 22.3775 6.68601 22.6031 7.06898 22.8079L7.24296 21.0656C7.36724 19.8204 6.70785 18.6282 5.587 18.0717Z" fill="url(#paint8_linear_1_6465)" />
                      </g>
                    </g>
                  </g>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1_6465" x1="0.331021" y1="12.4613" x2="29.7651" y2="12.4613" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#60B7FF" />
                    <stop offset="0.5857" stop-color="#0182FC" />
                    <stop offset="1" stop-color="#2740B0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_6465" x1="-5.02095" y1="11.9149" x2="26.4764" y2="11.9149" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#60B7FF" />
                    <stop offset="0.5857" stop-color="#0182FC" />
                    <stop offset="1" stop-color="#2740B0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_1_6465" x1="-0.974809" y1="12.22" x2="25.0325" y2="12.22" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#60B7FF" />
                    <stop offset="0.5857" stop-color="#0182FC" />
                    <stop offset="1" stop-color="#2740B0" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_1_6465" x1="1.04946" y1="10.8553" x2="25.7119" y2="10.8553" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2E62E" />
                    <stop offset="0.5857" stop-color="#81B823" />
                    <stop offset="1" stop-color="#037E73" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_1_6465" x1="1.0493" y1="18.6768" x2="25.7118" y2="18.6768" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2E62E" />
                    <stop offset="0.5857" stop-color="#81B823" />
                    <stop offset="1" stop-color="#037E73" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_1_6465" x1="1.04895" y1="13.2791" x2="25.7114" y2="13.2791" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2E62E" />
                    <stop offset="0.5857" stop-color="#81B823" />
                    <stop offset="1" stop-color="#037E73" />
                  </linearGradient>
                  <linearGradient id="paint6_linear_1_6465" x1="9.00194" y1="13.2791" x2="19.7634" y2="13.2791" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2E62E" />
                    <stop offset="0.5857" stop-color="#81B823" />
                    <stop offset="1" stop-color="#037E73" />
                  </linearGradient>
                  <linearGradient id="paint7_linear_1_6465" x1="0.349139" y1="10.8553" x2="22.5856" y2="10.8553" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2E62E" />
                    <stop offset="0.5857" stop-color="#81B823" />
                    <stop offset="1" stop-color="#037E73" />
                  </linearGradient>
                  <linearGradient id="paint8_linear_1_6465" x1="-1.13253" y1="18.6768" x2="15.1823" y2="18.6768" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2E62E" />
                    <stop offset="0.5857" stop-color="#81B823" />
                    <stop offset="1" stop-color="#037E73" />
                  </linearGradient>
                  <clipPath id="clip0_1_6465">
                    <rect width="24" height="24" fill="white" transform="translate(0.719727 0.220001)" />
                  </clipPath>
                  <clipPath id="clip1_1_6465">
                    <rect width="24" height="24" fill="white" transform="translate(0.719727 0.220001)" />
                  </clipPath>
                  <clipPath id="clip2_1_6465">
                    <rect width="24" height="24" fill="white" transform="translate(0.719727 0.220001)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>${heroSection[0].explore}</p>
          </div>
        </div>
        <div class="relative flex flex-col items-center justify-center">
          <h2 class="pb-3 text-center text-3xl text-white sm:text-4xl">${heroSection[0].gateway}</h2>
          <h6 class="mx-2 pb-10 text-center text-xs text-white sm:mx-0 sm:w-1/2 sm:text-sm">${heroSection[0].pack}</h6>
        </div>
    `;
  })
  .catch(error => console.error("Error fetching Hero Section ", error));

fetch('data/data.json')
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

let featuredTours = [];

fetch('data/data.json')
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

let visibleTours = 4;
let categoryToursData = [];

fetch('data/data.json')
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

fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        const install = data.install;
        const installContainer = document.getElementById("install-container");
        installContainer.innerHTML = `
            <div class="w-1/2 pl-2 sm:pl-5">
            <div class="flex flex-col items-start justify-center">
              <div class="h-max w-max rounded-full bg-yellow-400 px-0.5 py-1 sm:px-1 sm:py-1">
                <p class="text-xs sm:text-sm">${install[0].installApp}</p>
              </div>
              <h5 class="pt-2 text-xs sm:text-2xl">${install[0].discount}</h5>
              <div class="flex gap-1">
                <span class="transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
                  <svg class="h-10 w-20 sm:h-18 sm:w-40" viewBox="0 0 204 66" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="204" height="65" transform="translate(0 0.500488)" fill="url(#pattern0_1_7136)" />
                    <defs>
                      <pattern id="pattern0_1_7136" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1_7136" transform="scale(0.00490196 0.0153846)" />
                      </pattern>
                      <image id="image0_1_7136" width="204" height="65" xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </span>
                <span class="transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
                  <svg class="h-10 w-20 sm:h-18 sm:w-40" viewBox="0 0 202 66" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="202" height="65" transform="translate(0 0.500488)" fill="url(#pattern0_1_7137)" />
                    <defs>
                      <pattern id="pattern0_1_7137" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1_7137" transform="scale(0.0049505 0.0153846)" />
                      </pattern>
                      <image id="image0_1_7137" width="202" height="65" xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <img src="${install[0].image}" alt="download app image" />
          </div>
        `;
    })
    .catch(error => console.error("Error fetching Install App Section", error));

fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        const easyPayment = data.easyPayment;
        const easyPaymentContainer = document.getElementById("easyPayment-container");
        easyPaymentContainer.innerHTML = `
          <div>
            <img src="${easyPayment[0].mainImage}" alt="background payment image" class="absolute top-10 right-0 hidden w-80 sm:block" />
          </div>
          <div class="flex gap-4 px-2 sm:px-0">
            <div class="flex flex-col gap-2">
              <a href="${easyPayment[0].link1}" target="_blank" class="block">
                <div class="group relative inline-block">
                  <img src="${easyPayment[0].image1}" alt="payment image" style="width: 230px;" class="rounded-xl" />
                  <img src="${easyPayment[0].imagePlay}" alt="play button image" style="width: 80px;" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
              <a href="${easyPayment[0].link3}" target="_blank" class="block">
                <div class="group relative inline-block">
                  <img src="${easyPayment[0].image3}" alt="payment3 image" style="width: 230px;" class="rounded-xl" />
                  <img src="${easyPayment[0].imagePlay}" alt="play button image" style="width: 80px;" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
            </div>
            <div class="mt-10 flex flex-col gap-2">
              <a href="${easyPayment[0].link2}" target="_blank" class="block">
                <div class="group relative inline-block">
                  <img src="${easyPayment[0].image2}" alt="payment2 image" style="width: 230px;" class="rounded-xl" />
                  <img src="${easyPayment[0].imagePlay}" alt="play button image" style="width: 80px;" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
              <a href="${easyPayment[0].link4}" target="_blank" class="block">
                <div class="group relative inline-block">
                  <img src="${easyPayment[0].image4}" alt="payment4 image" style="width: 230px;" class="rounded-xl" />
                  <img src="${easyPayment[0].imagePlay}" alt="play button image" style="width: 80px;" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
            </div>
          </div>
          <div class="p-4 pt-20 sm:pt-10 sm:pl-6">
            <p class="h-max w-max rounded-full bg-gray-100 px-2 py-1 text-xs text-black">${easyPayment[0].easy}</p>
            <h2 style="font-size: 40px;" class="pb-2 text-3xl sm:pb-0 sm:text-4xl">${easyPayment[0].weOffer}</h2>
            <p class="text-xm">${easyPayment[0].chooseOne}</p>
            <div class="flex w-80 justify-between pt-4 pb-2">
              <div class="flex">
                <span>
                  <svg width="17" height="17" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11144 15.8258C8.10898 15.8258 8.10611 15.8258 8.10365 15.8258C8.00193 15.8237 7.90596 15.7803 7.83705 15.7056L0.804507 8.05864C0.683917 7.92739 0.672847 7.72969 0.778257 7.58573C0.883667 7.44217 1.07562 7.39295 1.23722 7.46842L7.67381 10.4823C7.72795 10.5077 7.79193 10.4954 7.83336 10.4523L17.6517 0.190609C17.7846 0.0515693 18.002 0.0363892 18.1529 0.156159C18.3039 0.275919 18.3387 0.490839 18.2333 0.652039L8.46664 15.6137C8.45269 15.6355 8.43629 15.6552 8.41824 15.6736L8.37517 15.7167C8.30504 15.7864 8.20988 15.8258 8.11144 15.8258Z" fill="#34D674" />
                  </svg>
                </span>
                <p class="text-sm">${easyPayment[0].prin1}</p>
              </div>
              <div class="flex">
                <span>
                  <svg width="17" height="17" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11144 15.8258C8.10898 15.8258 8.10611 15.8258 8.10365 15.8258C8.00193 15.8237 7.90596 15.7803 7.83705 15.7056L0.804507 8.05864C0.683917 7.92739 0.672847 7.72969 0.778257 7.58573C0.883667 7.44217 1.07562 7.39295 1.23722 7.46842L7.67381 10.4823C7.72795 10.5077 7.79193 10.4954 7.83336 10.4523L17.6517 0.190609C17.7846 0.0515693 18.002 0.0363892 18.1529 0.156159C18.3039 0.275919 18.3387 0.490839 18.2333 0.652039L8.46664 15.6137C8.45269 15.6355 8.43629 15.6552 8.41824 15.6736L8.37517 15.7167C8.30504 15.7864 8.20988 15.8258 8.11144 15.8258Z" fill="#34D674" />
                  </svg>
                </span>
                <p class="text-sm">${easyPayment[0].prin2}</p>
              </div>
            </div>
            <div class="flex w-80 justify-between pb-4">
              <div class="flex">
                <span>
                  <svg width="17" height="17" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11144 15.8258C8.10898 15.8258 8.10611 15.8258 8.10365 15.8258C8.00193 15.8237 7.90596 15.7803 7.83705 15.7056L0.804507 8.05864C0.683917 7.92739 0.672847 7.72969 0.778257 7.58573C0.883667 7.44217 1.07562 7.39295 1.23722 7.46842L7.67381 10.4823C7.72795 10.5077 7.79193 10.4954 7.83336 10.4523L17.6517 0.190609C17.7846 0.0515693 18.002 0.0363892 18.1529 0.156159C18.3039 0.275919 18.3387 0.490839 18.2333 0.652039L8.46664 15.6137C8.45269 15.6355 8.43629 15.6552 8.41824 15.6736L8.37517 15.7167C8.30504 15.7864 8.20988 15.8258 8.11144 15.8258Z" fill="#34D674" />
                  </svg>
                </span>
                <p class="text-sm">${easyPayment[0].prin3}</p>
              </div>
              <div class="flex">
                <span>
                  <svg width="17" height="17" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11144 15.8258C8.10898 15.8258 8.10611 15.8258 8.10365 15.8258C8.00193 15.8237 7.90596 15.7803 7.83705 15.7056L0.804507 8.05864C0.683917 7.92739 0.672847 7.72969 0.778257 7.58573C0.883667 7.44217 1.07562 7.39295 1.23722 7.46842L7.67381 10.4823C7.72795 10.5077 7.79193 10.4954 7.83336 10.4523L17.6517 0.190609C17.7846 0.0515693 18.002 0.0363892 18.1529 0.156159C18.3039 0.275919 18.3387 0.490839 18.2333 0.652039L8.46664 15.6137C8.45269 15.6355 8.43629 15.6552 8.41824 15.6736L8.37517 15.7167C8.30504 15.7864 8.20988 15.8258 8.11144 15.8258Z" fill="#34D674" />
                  </svg>
                </span>
                <p class="text-sm">${easyPayment[0].prin4}</p>
              </div>
            </div>
            <p class="pb-4 text-xs">${easyPayment[0].paySecure}</p>
            <div class="flex sm:gap-2">
              <div class="flex sm:gap-2">
                <span>
                  <svg width="89" height="41" viewBox="0 0 111 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="0.5" y="0.560059" width="110" height="49" rx="4.5" fill="white" />
                    <rect x="0.5" y="0.560059" width="110" height="49" rx="4.5" stroke="#E4E6E8" />
                    <rect width="75" height="18.95" transform="translate(18 15.72)" fill="url(#pattern0_1_7049)" />
                    <defs>
                      <pattern id="pattern0_1_7049" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1_7049" transform="scale(0.0114943 0.0454545)" />
                      </pattern>
                      <image id="image0_1_7049" width="87" height="22" xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="89" height="41" viewBox="0 0 112 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="0.75" y="0.560059" width="110" height="49" rx="4.5" fill="white" />
                    <rect x="0.75" y="0.560059" width="110" height="49" rx="4.5" stroke="#E4E6E8" />
                    <rect width="75" height="32.69" transform="translate(18.25 8.86011)" fill="url(#pattern0_1_7051)" />
                    <defs>
                      <pattern id="pattern0_1_7051" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1_7051" transform="scale(0.0128205 0.0294118)" />
                      </pattern>
                      <image id="image0_1_7051" width="78" height="34" xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </span>
              </div>
              <div class="flex sm:gap-2">
                <span>
                  <svg width="89" height="41" viewBox="0 0 112 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="1" y="0.560059" width="110" height="49" rx="4.5" fill="white" />
                    <rect x="1" y="0.560059" width="110" height="49" rx="4.5" stroke="#E4E6E8" />
                    <rect width="53" height="32" transform="translate(29.5 9.19995)" fill="url(#pattern0_1_7053)" />
                    <defs>
                      <pattern id="pattern0_1_7053" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1_7053" transform="scale(0.0188679 0.03125)" />
                      </pattern>
                      <image id="image0_1_7053" width="53" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAgCAYAAACy/TBYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgB3ZnLThNRGMf/Z6YXoCCgVGMiocbLVjBxZUzqyiW+Ae3ahfQJaJ9AeILCG5Stq67cWlYujLFEEzRq2iiR0s7M8ftmOmUK03ZaPmPiLxk4PT05Z/79LuemMCbfEMsaUKtUXAHUgl/vAIcKqHXQrt0E6lH702UstIDnVMyYivvs0bS01+d0HlWMgYrSqCtknYq5oJAhndYc6J0ldHYHtTkpI0ciNjSQxWia1GfF1tiLInCoqCP69ZKIlzVUFpNR19CloLjTMllF4RUVM5iMiqNRIHH1QQ0Gimog/pJcqhjFMqNQ0FX1qFOYeYEteK52aQyFYnwDpfDxQmggseUJksFIacytW7CfkLNNQ4xBwi6I+huCrjyzYMySI04BnTWICiMB24kcCn1jBj+cuZwcc089Qe4LUJqLv6WCBTGo581WGZvBup6lOCkk3CEvH0M+0w9s9zmPfYue+xClo7E2m0eNyz1LkaAtSUHsdmGCGPMzfd+AKAkvo3pj858jN72qHAQZJMjHrEMUnu9o7sty2RXlWUkOlQCSd53hbdhSgrHF0GTu6nBj6gcSHzH5ZHiB5B0Hqcej39i+R88yREloLBq8BIKgICZ2w4nUzvgOcX6TG5L7uYtTUWJXdaR26hfEIUGrhmTG8zEjinJjSj6uVmilIet646KERTkcU/jPICvNkyjdhDC6PUbbGKSpG3qMXWpUdDvS3pMySvcRhDaShyyqCmE6X6OJ0nMQhyaTmnEdnZq0C1pfooWqswRxZshI7uhkrT0I0v5kRIorJw1RtMa+yqPZFaUrEIQFnX4wh7Zx6MiJN42i49KGkf+7otKwqnyOAEFa74Zby74NUSiKq/5Jk3FWaeYlY8s5ViQs3FrOsryVKOvl/XJP1CJadfpYgiAnByYljf5MyGKkrUSriFLwyKwvTV3D6TalRFFhx29iZDWvzIKsh7ITLiWHHRJUDNZdyL1ptIuSwtgNf76Ow7a6ggTdjgVN5fsPXZjQCYWFUUYUizH7GNXW+/ianRSbOpokqBAmiBk69TcwlbHhFKnRBiZCNx2K0zS5tV/DZ+iGt+3OYAI4y3FSmOjYOciZOL0eZf+l+ZgZ2DeQ2l1EM9Ta/+yCIAz/KkfDyNDrz/v12r3K0XUTqcogIWGQuAzvVimOV89d5YCucg74BoXCsMYrhah9/gFghTp3l4rjJQAAAABJRU5ErkJggg==" />
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="89" height="41" viewBox="0 0 112 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="1.25" y="0.560059" width="110" height="49" rx="4.5" fill="white" />
                    <rect x="1.25" y="0.560059" width="110" height="49" rx="4.5" stroke="#E4E6E8" />
                    <rect width="61" height="22" transform="translate(25.75 14.2)" fill="url(#pattern0_1_7055)" />
                    <defs>
                      <pattern id="pattern0_1_7055" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1_7055" transform="scale(0.0163934 0.0454545)" />
                      </pattern>
                      <image id="image0_1_7055" width="61" height="22" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAWCAYAAABzCZQcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPiSURBVHgB1VhdbttGEP5mSSopXLTqDVbpAaKcoM4Jqp7ASmMXfbP6aBuFaQS2+2b1oUARp7BygtonsHoD9wL19gTRQwI4VsTJDH8ciyIlxpGc5ANWpGaHuzOzszOzC3xGeGJXl7XhA0FlHaFt14G7dQ9v7Ai+i2nuT4cKSL5V/t4Ac8C+bVtQcMqAjQmE483/Dn9A+fxW5nbFfT9bPz84o7YOitoysgg+imfw4iew11iDTHxGTP0RopNf3bO+0p/Yxy0PZGHMd2BuCslGqFl5zkXpCMEyZQorGC1dcZ0/kdlvkfHuRxw1ha9JhJ5wPVLWXftjm+DfB6lc2kb1K6V/u7e2HjG6OuIUB9Cepg4gSrbkb2NfLMc0+jsRhrEYsM3L5IFjb4pglonogDmakDqV7SjRKZVeYPRn1661E4U/VdAxxryG3CWCM9wQsdKGsD2FZ4A5uelNseUOZUt5D8SRftd2yeZh1fhSBF/3I1/fLyl08CGWwtB1Y4VD25Gg9lLcWt0b34u1LRYEDTYaQPU9ixsbiZIdzAG+ATWLOphqB+F592qFU+X7aeuqEVABGnA8otM8nRgnG+6wlePbzoJNuv+ctMaeXe2BaGVMPuadLfcsxA0gnl3suh4N2xr6yz7MPGAWEkUmwYh62fv+vbWj1DDLSdZYLHxJRmdeQYdYMqxREF6lKSLHEZ/I/uqhInTrIFYkD3Kb7i8NTqLw6rZspTZuEUb3DIkQ05jiNMXckvx3JEY4r1IVEV9+45M5KOpT19SnFjHMFOKWEUfviFmrm6oR2qor7n3708o0JjK0XRQgdZUzb/HgF8eTOEJ7jc3zwwYWgFjpLCXMWvExRNzNys1CiGcUkTXdvJs8spMcsVE6H5KSZsFkL5oSNs6fNkbMD9XSInVfBNcCoMwD6jX4bbwHxJV3ZilDzP9iwfDzhDQv9q/Tdu3jLpFZz/MyyJYXrJPwDL6eyWTwAguGqcIUJWXg5MfTlZjwEIkdnWlp8LbgZ0W5uPRz+X+m+/s6g9TlemopjMJRhH/KrMY8+oXIO8rT75hA8/YjfERk7i0nlSSfal5GUgkJ4pNMabAawuvfKelj+uLUYOg4PiFdo0tOltXeKTvv3gbKFsomrbw6qhKU5Hz7vIgeIJhLDX1TVNrTeajCW+5pOIvPwO8V0cWrVqamuwXDvMbFIE5Ps4uTgWjb15RWRWGFpkE5WLiCrnoA08JHgp/eY8UFg56cArySq57kVkKLB7mZcHISG+QDXAZVTI6CE5VT6P74X5+vsfQAfFGwqkuJkfmiP0bmuxPGv8SXHeELx6kJ3xBfHZeNUSbbW5kapEZmSTRMAAAAAElFTkSuQmCC" />
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        `;
    })
    .catch(error => console.error("Error fetching Easy Payments Section", error));

fetch('data/data.json')
    .then(response => response.json())
    .then(data =>{
      const whyTravila = data.whyTravila;
      const whyTravilaContainer = document.getElementById("whyTravila-container");
      whyTravilaContainer.innerHTML = `
        <div class="px-4 pt-6 sm:w-1/2 sm:px-0">
            <div style="background-color: #FEFA17" class="relative flex w-max items-center justify-center gap-1 rounded-full px-4 py-2 transition duration-300 ease-in-out hover:scale-120 hover:cursor-pointer">
              <span>
                <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_6465)">
                    <g clip-path="url(#clip1_1_6465)">
                      <g clip-path="url(#clip2_1_6465)">
                        <mask id="mask0_1_6465" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                          <path d="M24.7197 0.220001H0.719727V24.22H24.7197V0.220001Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1_6465)">
                          <path d="M24.7197 12.22C24.7197 18.8475 19.3471 24.22 12.7197 24.22C10.6716 24.22 8.74331 23.7069 7.05639 22.8022C5.66768 22.0575 4.94895 21.0474 3.95521 19.8397C3.01728 18.6999 1.77917 17.384 1.31046 15.9492C0.927068 14.7754 0.719727 13.5219 0.719727 12.22C0.719727 10.0045 1.3201 7.92929 2.36707 6.14807C4.45197 2.60096 8.30778 1.10096 12.7197 1.10096C14.0397 1.10096 15.31 0.433197 16.498 0.826938C21.2742 2.41004 24.7197 6.91268 24.7197 12.22Z" fill="url(#paint0_linear_1_6465)" />
                          <path d="M15.3909 1.90978C14.183 1.50117 12.889 1.27957 11.5432 1.27957C8.74333 1.27957 6.40592 2.47703 4.36446 4.08437C3.73185 4.73355 2.93387 5.21576 2.46037 5.99444C1.98686 6.77312 1.59952 7.60997 1.31152 8.49185C1.36268 8.55392 1.42023 8.61195 1.48559 8.66357C1.78681 8.90141 2.18695 8.97308 2.55199 8.85458L5.8166 7.79463C6.21194 7.66625 6.64583 7.77049 6.93971 8.06442L7.72394 8.84865C8.0415 9.16621 8.13538 9.64428 7.96154 10.0584C7.71105 10.655 8.02427 11.3383 8.6398 11.5379L9.58333 11.8439C9.72559 11.8901 9.85015 11.9791 9.93991 12.0987C10.1769 12.4148 10.1175 12.8624 9.80616 13.1057L9.4247 13.4037C9.06884 13.6817 8.86084 14.1082 8.86084 14.5598V14.8967C8.86084 15.4752 9.14559 16.0165 9.62225 16.3442L10.2768 16.7942C10.3362 16.8351 10.4028 16.8644 10.4731 16.8806L10.8593 16.9697C11.6738 17.1577 12.2978 17.8132 12.4455 18.636C12.5021 18.9511 12.4855 19.2749 12.397 19.5825L11.7542 21.8168C11.6486 22.184 11.9243 22.5502 12.3064 22.5502C12.4511 22.5502 12.5905 22.4956 12.6967 22.3974L15.159 20.1188C15.5061 19.7977 15.7879 19.4127 15.9892 18.9849L16.539 17.8167C16.7208 17.4303 16.834 17.0151 16.8735 16.5899L17.0873 14.2855C17.1805 13.2812 16.7425 12.3012 15.9321 11.7007C15.435 11.3324 14.8328 11.1335 14.2142 11.1335H13.7737C13.118 11.1335 12.5651 10.6449 12.4845 9.99416C12.4264 9.52437 12.6284 9.06014 13.0118 8.78249L13.4988 8.42992C13.6671 8.30799 13.8623 8.22828 14.0679 8.19741L15.2624 8.01821C16.092 7.89378 16.8162 7.39002 17.2214 6.65552C17.7459 5.70494 17.7725 4.55802 17.2929 3.58409C16.905 2.79661 16.2224 2.1911 15.3909 1.90978Z" fill="url(#paint1_linear_1_6465)" />
                          <path d="M12.72 0.220001C12.4031 0.220001 12.0891 0.232519 11.7783 0.256613C17.9656 0.736895 22.8367 5.90951 22.8367 12.22C22.8367 18.5305 17.9656 23.7031 11.7783 24.1834C12.0891 24.2075 12.4031 24.22 12.72 24.22C16.1777 24.22 19.2938 22.7576 21.4836 20.4176C21.4836 20.4176 24.6259 15.3897 24.6259 12.22C24.6259 9.90706 22.9319 5.91468 22.9319 5.91468C20.8171 2.49689 17.0344 0.220001 12.72 0.220001Z" fill="url(#paint2_linear_1_6465)" />
                          <path d="M18.4696 2.52447C18.0818 1.73699 17.3992 1.13153 16.5677 0.850213C15.3598 0.441554 14.0658 0.220001 12.72 0.220001C8.32108 0.220001 4.47505 2.58701 2.38592 6.11685C2.09294 6.61191 2.21096 7.24748 2.66244 7.604C2.96367 7.84184 3.36381 7.91351 3.72884 7.79501L6.99345 6.73506C7.38879 6.60668 7.82268 6.71092 8.11656 7.00485L8.9008 7.78908C9.21835 8.10664 9.31223 8.58471 9.1384 8.99878C8.8879 9.59543 9.20112 10.2787 9.81665 10.4784L10.7602 10.7844C10.9024 10.8305 11.027 10.9195 11.1167 11.0392C11.3538 11.3552 11.2943 11.8029 10.983 12.0461L10.6016 12.3441C10.2457 12.6222 10.0377 13.0487 10.0377 13.5003V13.8372C10.0377 14.4156 10.3224 14.957 10.7991 15.2847L11.4536 15.7347C11.5131 15.7755 11.5797 15.8048 11.65 15.8211L12.0361 15.9102C12.8507 16.0982 13.4747 16.7537 13.6224 17.5765C13.6789 17.8915 13.6623 18.2153 13.5738 18.523L12.9311 20.7573C12.8254 21.1246 13.1011 21.4907 13.4833 21.4907C13.628 21.4907 13.7673 21.4361 13.8735 21.3378L16.3359 19.0592C16.6829 18.7381 16.9647 18.3532 17.1661 17.9254L17.7158 16.7571C17.8977 16.3707 18.0109 15.9556 18.0503 15.5304L18.2641 13.226C18.3573 12.2217 17.9193 11.2416 17.1089 10.6411C16.6119 10.2728 16.0097 10.074 15.3911 10.074H14.9505C14.2948 10.074 13.742 9.58537 13.6614 8.93464C13.6032 8.46485 13.8053 8.00061 14.1887 7.72296L14.6756 7.3704C14.844 7.24847 15.0392 7.16875 15.2448 7.13788L16.4393 6.95868C17.2688 6.83426 17.9931 6.33049 18.3983 5.596C18.9227 4.64532 18.9493 3.4984 18.4696 2.52447Z" fill="url(#paint3_linear_1_6465)" />
                          <path d="M5.5868 18.0718C4.77076 17.6666 4.1284 16.9805 3.77786 16.1395L3.39701 15.2259C3.24134 14.8524 2.894 14.5939 2.4916 14.5519C1.69301 14.4686 1.07513 15.2377 1.32784 15.9998C2.30167 18.9364 4.37918 21.3694 7.06878 22.8079L7.24276 21.0656C7.36704 19.8204 6.70765 18.6282 5.5868 18.0718Z" fill="url(#paint4_linear_1_6465)" />
                          <path d="M22.9308 5.91507L22.8556 6.05596C22.2225 7.24312 22.3964 8.69907 23.2914 9.70363C23.8172 10.2938 24.1078 11.0567 24.1078 11.8472C24.1078 12.7723 23.7102 13.6528 23.0161 14.2645L22.0775 15.0919C21.4675 15.6296 21.118 16.4035 21.118 17.2166V17.4622C21.118 17.9437 20.9952 18.4173 20.7613 18.8382L20.3432 19.5904C20.2378 19.78 20.225 20.0073 20.3085 20.2075C20.507 20.6837 21.1301 20.7937 21.4826 20.417C23.4901 18.272 24.7195 15.3897 24.7195 12.22C24.7195 9.90697 24.0645 7.7473 22.9308 5.91507Z" fill="url(#paint5_linear_1_6465)" />
                          <path d="M22.9308 5.91507L22.8557 6.05596C22.2225 7.24312 22.3965 8.69907 23.2914 9.70363C23.8173 10.2938 24.1078 11.0567 24.1078 11.8472C24.1078 12.7723 23.7102 13.6528 23.0162 14.2645L22.5915 14.6388C22.2308 16.401 21.484 18.0223 20.4431 19.4107L20.3432 19.5904C20.2378 19.78 20.225 20.0073 20.3085 20.2075C20.507 20.6837 21.1301 20.7937 21.4826 20.417C23.4902 18.272 24.7196 15.3897 24.7196 12.22C24.7196 9.90697 24.0646 7.7473 22.9308 5.91507Z" fill="url(#paint6_linear_1_6465)" />
                          <path d="M14.1881 7.72287L14.675 7.37031C14.8434 7.24838 15.0386 7.16866 15.2442 7.13779L16.4387 6.95859C17.2682 6.83417 17.9925 6.3304 18.3977 5.59591C18.9222 4.64532 18.9488 3.4984 18.4691 2.52447C18.0813 1.73699 17.3987 1.13153 16.5671 0.850213C15.3593 0.441554 14.0653 0.220001 12.7195 0.220001C12.4024 0.220001 12.0883 0.232707 11.7774 0.256848C12.7863 0.335154 13.7603 0.537789 14.6838 0.850213C15.5153 1.13153 16.1979 1.73699 16.5858 2.52447C17.0655 3.4984 17.0388 4.64532 16.5143 5.59591C16.1091 6.3304 15.3849 6.83417 14.5553 6.95859L13.3608 7.13779C13.1552 7.16861 12.96 7.24838 12.7917 7.37031L12.3047 7.72287C11.9214 8.00052 11.7193 8.46475 11.7774 8.93454C11.858 9.58527 12.4109 10.0739 13.0666 10.0739H13.5071C14.1257 10.0739 14.728 10.2728 15.225 10.641C16.0353 11.2415 16.4734 12.2216 16.3802 13.2259L16.1664 15.5303C16.127 15.9555 16.0137 16.3706 15.8319 16.757L15.2821 17.9253C15.0808 18.353 14.799 18.738 14.4519 19.0592L13.0442 20.3618L12.9304 20.7571C12.8248 21.1244 13.1005 21.4905 13.4826 21.4905C13.6273 21.4905 13.7667 21.436 13.8729 21.3377L16.3352 19.0591C16.6822 18.738 16.9641 18.353 17.1654 17.9252L17.7152 16.7569C17.897 16.3705 18.0102 15.9554 18.0497 15.5302L18.2635 13.2258C18.3566 12.2216 17.9187 11.2415 17.1083 10.641C16.6112 10.2727 16.009 10.0739 15.3904 10.0739H14.9499C14.2942 10.0739 13.7413 9.58522 13.6607 8.93449C13.6026 8.46471 13.8046 8.00052 14.1881 7.72287Z" fill="url(#paint7_linear_1_6465)" />
                          <path d="M5.587 18.0717C4.77096 17.6666 4.1286 16.9804 3.77806 16.1395L3.39721 15.2258C3.24154 14.8524 2.8942 14.5939 2.4918 14.5519C2.2295 14.5245 1.98696 14.5896 1.78809 14.7157C1.97801 14.8351 2.13086 15.0114 2.22023 15.2258L2.60107 16.1395C2.95161 16.9804 3.59397 17.6666 4.41001 18.0717C5.53086 18.6282 6.19025 19.8203 6.06592 21.0656L5.95929 22.1338C6.31599 22.3775 6.68601 22.6031 7.06898 22.8079L7.24296 21.0656C7.36724 19.8204 6.70785 18.6282 5.587 18.0717Z" fill="url(#paint8_linear_1_6465)" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_1_6465" x1="0.331021" y1="12.4613" x2="29.7651" y2="12.4613" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#60B7FF" />
                      <stop offset="0.5857" stop-color="#0182FC" />
                      <stop offset="1" stop-color="#2740B0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_6465" x1="-5.02095" y1="11.9149" x2="26.4764" y2="11.9149" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#60B7FF" />
                      <stop offset="0.5857" stop-color="#0182FC" />
                      <stop offset="1" stop-color="#2740B0" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_6465" x1="-0.974809" y1="12.22" x2="25.0325" y2="12.22" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#60B7FF" />
                      <stop offset="0.5857" stop-color="#0182FC" />
                      <stop offset="1" stop-color="#2740B0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1_6465" x1="1.04946" y1="10.8553" x2="25.7119" y2="10.8553" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A2E62E" />
                      <stop offset="0.5857" stop-color="#81B823" />
                      <stop offset="1" stop-color="#037E73" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1_6465" x1="1.0493" y1="18.6768" x2="25.7118" y2="18.6768" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A2E62E" />
                      <stop offset="0.5857" stop-color="#81B823" />
                      <stop offset="1" stop-color="#037E73" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1_6465" x1="1.04895" y1="13.2791" x2="25.7114" y2="13.2791" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A2E62E" />
                      <stop offset="0.5857" stop-color="#81B823" />
                      <stop offset="1" stop-color="#037E73" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_1_6465" x1="9.00194" y1="13.2791" x2="19.7634" y2="13.2791" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A2E62E" />
                      <stop offset="0.5857" stop-color="#81B823" />
                      <stop offset="1" stop-color="#037E73" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_1_6465" x1="0.349139" y1="10.8553" x2="22.5856" y2="10.8553" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A2E62E" />
                      <stop offset="0.5857" stop-color="#81B823" />
                      <stop offset="1" stop-color="#037E73" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_1_6465" x1="-1.13253" y1="18.6768" x2="15.1823" y2="18.6768" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A2E62E" />
                      <stop offset="0.5857" stop-color="#81B823" />
                      <stop offset="1" stop-color="#037E73" />
                    </linearGradient>
                    <clipPath id="clip0_1_6465">
                      <rect width="24" height="24" fill="white" transform="translate(0.719727 0.220001)" />
                    </clipPath>
                    <clipPath id="clip1_1_6465">
                      <rect width="24" height="24" fill="white" transform="translate(0.719727 0.220001)" />
                    </clipPath>
                    <clipPath id="clip2_1_6465">
                      <rect width="24" height="24" fill="white" transform="translate(0.719727 0.220001)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p class="text-xs">${whyTravila[0].why}</p>
            </div>
            <h2 class="text-3xl sm:pt-4 sm:text-4xl">${whyTravila[0].embrace}</h2>
            <p class="sm:text-xm pt-2 text-xs sm:pt-4">${whyTravila[0].chooseOne}</p>
            <div class="flex items-center justify-between sm:pt-4">
              <div class="">
                <p style="font-size: 32px;">${whyTravila[0].para1}</p>
                <p class="w-4 text-sm text-neutral-500">${whyTravila[0].desc1}</p>
              </div>
              <div class="">
                <p style="font-size: 32px;">${whyTravila[0].para2}</p>
                <p class="w-4 text-sm text-neutral-500">${whyTravila[0].desc2}</p>
              </div>
              <div class="">
                <p style="font-size: 32px;">${whyTravila[0].para3}</p>
                <p class="w-4 text-sm text-neutral-500">${whyTravila[0].desc3}</p>
              </div>
              <div class="">
                <p style="font-size: 32px;">${whyTravila[0].para4}</p>
                <p class="w-4 text-sm text-neutral-500">${whyTravila[0].desc4}</p>
              </div>
            </div>
          </div>
          <div class="flex gap-4 px-4 sm:px-0">
            <div class="mt-10 flex w-1/2 flex-col gap-4">
              <div class="flex flex-col items-center justify-center rounded-xl bg-rose-50 px-8 py-4">
                <span class="pb-2">
                  <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" transform="translate(0 0.69043)" fill="url(#pattern0_1_6936)" />
                    <defs>
                      <pattern id="pattern0_1_6936" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1_6936" transform="scale(0.03125)" />
                      </pattern>
                      <image id="image0_1_6936" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgBtVfbddswDL3t6X+1QblB1QnKETwCO0G8gZUJ0g3sTuBs4G5QZwJ3A6UTuGKEG0IQqUce9xwcmi/gCgRAGnhbVJ3sOjl10nZy7eTSyb4Th3dGLcauIq3pX4Xcu8AhffGxE6/moleCInOHN4JTQuWNmfemz3UbvAAePfs/GLqVcpJ1lfzm+EUZ9GbtYsMnY+wiYzrYaGSPFANHtcfJPHV9wQLcGaNbjKPZKqTxSvqNjG2lf5C+j51PebtPmxlMj53cdvIT0/hn+o+mrbAC+pwjETexlm6upU+PRB3RgzwiZ+brkkK63eZxqZhsMXSxwzj/G7W+FckiIJ23E2lmiHjkI9uLPu36jdKRBQ0FM+4yRHRBoVs9psF12TpAdlM56pCi+qrGtwv38mizYDAFTMMhBRlRIQWbL+zTtSSbEZPBoVA6x4CyFwKGQcmAxUdpa2F1xjyYPg9qLO79Lr+9NoB0RUfcS/vVKvXCbK7YOKRA9GqMdaNVrZN5pjWzJ+ulgHG+WtwoA/r8L0ppJR/BPo9Lp/WLCDTIFxUgBRfTslKkSDjInCsRmCsQB5Tz12GcAbUa08daWwK8jM5qwRT0xaLJxOAK6FP5m+j7gXFAOmkfcsrJOJejBwy/sPQomfIikN4Kz+T1dfwLfaAFjLPhs+mT5C3GuEcZXtpzaZIRy/4Ow/pPBRxbg4B5Dw3ucu3WOK7Pci0Bp/a4qYW1MhpJNIUNawnwnpkrdE/gzcbigQkCJyM3mbU7pW/xs6xRm3xmnkeVE6ZyNLZf8DGzJHQdh1LujHD9SUhfXmOcCBg/xzbIu9L+N4xyxMrXcA4OfSFqjXI+Wq1R7YVZfMBysPx69Pe5Q/q6v+iLSyyxv0UW4T/sFjnU+YBnKwAAAABJRU5ErkJggg==" />
                    </defs>
                  </svg>
                </span>
                <p class="text-sm">${whyTravila[0].title1}</p>
                <p class="pt-2 text-center text-xs text-neutral-500">${whyTravila[0].cont1}</p>
              </div>
              <div class="flex flex-col items-center justify-center rounded-xl bg-sky-100 px-8 py-4">
                <span class="pb-2">
                  <svg width="24" height="24" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5625 15.4404V1.62793C23.5625 1.11018 23.1428 0.69043 22.625 0.69043H1.375C0.8572 0.69043 0.4375 1.11018 0.4375 1.62793V15.4404C0.4375 15.689 0.5363 15.9275 0.7121 16.1033L1.2992 16.6904L0.7121 17.2775C0.5363 17.4533 0.4375 17.6918 0.4375 17.9404V31.7529C0.4375 32.2707 0.8572 32.6904 1.375 32.6904H22.625C23.1428 32.6904 23.5625 32.2707 23.5625 31.7529V17.9404C23.5625 17.6918 23.4637 17.4533 23.2879 17.2775L22.7008 16.6904L23.2879 16.1033C23.4637 15.9275 23.5625 15.689 23.5625 15.4404ZM21.6875 15.0521L20.7121 16.0275C20.346 16.3936 20.346 16.9872 20.7121 17.3533L21.6875 18.3287V30.8154H2.3125V18.3287L3.2879 17.3533C3.654 16.9871 3.654 16.3936 3.2879 16.0275L2.3125 15.0521V2.56543H21.6875V15.0521Z" fill="black" />
                    <path d="M5.76768 10.8004L7.24638 12.1117C7.54828 12.3794 7.98768 12.4239 8.33718 12.2221L12.774 9.66053L12.5967 12.41C12.5634 12.9267 12.9553 13.3725 13.472 13.4059C13.9887 13.4393 14.4345 13.0474 14.4679 12.5307L14.7257 8.53383L18.08 6.59723C18.5284 6.33833 18.682 5.76493 18.4231 5.31653C18.1642 4.86813 17.5908 4.71453 17.1425 4.97343L13.7882 6.91003L10.1978 5.13493C9.73368 4.90543 9.17148 5.09563 8.94188 5.55973C8.71238 6.02393 8.90268 6.58623 9.36678 6.81573L11.8365 8.03693L7.98478 10.2606L7.01168 9.39763C6.62428 9.05423 6.03178 9.08973 5.68818 9.47703C5.34468 9.86443 5.38028 10.4569 5.76768 10.8004Z" fill="black" />
                    <path d="M5.125 21.4404H18.875C19.3928 21.4404 19.8125 21.0207 19.8125 20.5029C19.8125 19.9851 19.3928 19.5654 18.875 19.5654H5.125C4.6072 19.5654 4.1875 19.9851 4.1875 20.5029C4.1875 21.0207 4.6072 21.4404 5.125 21.4404Z" fill="black" />
                    <path d="M5.125 25.1904H12C12.5178 25.1904 12.9375 24.7707 12.9375 24.2529C12.9375 23.7351 12.5178 23.3154 12 23.3154H5.125C4.6072 23.3154 4.1875 23.7351 4.1875 24.2529C4.1875 24.7707 4.6072 25.1904 5.125 25.1904Z" fill="black" />
                    <path d="M5.125 28.9404H12C12.5178 28.9404 12.9375 28.5207 12.9375 28.0029C12.9375 27.4851 12.5178 27.0654 12 27.0654H5.125C4.6072 27.0654 4.1875 27.4851 4.1875 28.0029C4.1875 28.5207 4.6072 28.9404 5.125 28.9404Z" fill="black" />
                    <path d="M6.375 17.6279H7.625C8.1428 17.6279 8.5625 17.2082 8.5625 16.6904C8.5625 16.1726 8.1428 15.7529 7.625 15.7529H6.375C5.8572 15.7529 5.4375 16.1726 5.4375 16.6904C5.4375 17.2082 5.8572 17.6279 6.375 17.6279Z" fill="black" />
                    <path d="M12.625 15.7529H11.375C10.8572 15.7529 10.4375 16.1726 10.4375 16.6904C10.4375 17.2082 10.8572 17.6279 11.375 17.6279H12.625C13.1428 17.6279 13.5625 17.2082 13.5625 16.6904C13.5625 16.1726 13.1428 15.7529 12.625 15.7529Z" fill="black" />
                    <path d="M17.625 15.7529H16.375C15.8572 15.7529 15.4375 16.1726 15.4375 16.6904C15.4375 17.2082 15.8572 17.6279 16.375 17.6279H17.625C18.1428 17.6279 18.5625 17.2082 18.5625 16.6904C18.5625 16.1726 18.1428 15.7529 17.625 15.7529Z" fill="black" />
                    <path d="M17 23.3154C15.4492 23.3154 14.1875 24.5771 14.1875 26.1279C14.1875 27.6787 15.4492 28.9404 17 28.9404C18.5508 28.9404 19.8125 27.6787 19.8125 26.1279C19.8125 24.5771 18.5508 23.3154 17 23.3154ZM17 27.0654C16.4831 27.0654 16.0625 26.6448 16.0625 26.1279C16.0625 25.611 16.4831 25.1904 17 25.1904C17.5169 25.1904 17.9375 25.611 17.9375 26.1279C17.9375 26.6448 17.5169 27.0654 17 27.0654Z" fill="black" />
                  </svg>
                </span>
                <p class="text-sm">${whyTravila[0].title2}</p>
                <p class="pt-2 text-center text-xs text-neutral-500">${whyTravila[0].cont2}</p>
              </div>
            </div>
            <div class="flex w-1/2 flex-col gap-4">
              <div class="flex flex-col items-center justify-center rounded-xl bg-sky-100 px-8 py-4">
                <span class="pb-2">
                  <svg width="24" height="24" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6484 8.22163H11.8203V2.56543H12.7656C13.2835 2.56543 13.7031 2.14568 13.7031 1.62793C13.7031 1.11018 13.2835 0.69043 12.7656 0.69043H5.23445C4.71665 0.69043 4.29695 1.11018 4.29695 1.62793C4.29695 2.14568 4.71665 2.56543 5.23445 2.56543H6.17975V8.22163H3.35165C1.79645 8.22163 0.53125 9.48683 0.53125 11.042V26.1045C0.53125 27.4048 1.41615 28.5018 2.61505 28.8266C2.48595 29.1496 2.41415 29.5015 2.41415 29.8701C2.41415 31.4252 3.67935 32.6904 5.23445 32.6904C6.78955 32.6904 8.05475 31.4252 8.05475 29.8701C8.05475 29.5386 7.99685 29.2205 7.89125 28.9248H10.1087C10.0032 29.2205 9.94525 29.5386 9.94525 29.8701C9.94525 31.4252 11.2105 32.6904 12.7656 32.6904C14.3207 32.6904 15.5859 31.4252 15.5859 29.8701C15.5859 29.5015 15.5141 29.1496 15.3849 28.8266C16.5839 28.5018 17.4688 27.4048 17.4688 26.1045V11.042C17.4688 9.48683 16.2036 8.22163 14.6484 8.22163ZM8.05475 2.56543H9.94535V8.22163H8.05475V2.56543ZM6.17975 29.8701C6.17975 30.3913 5.75565 30.8154 5.23445 30.8154C4.71315 30.8154 4.28915 30.3913 4.28915 29.8701C4.28915 29.3488 4.71315 28.9248 5.23445 28.9248C5.75565 28.9248 6.17975 29.3488 6.17975 29.8701ZM12.7656 30.8154C12.2444 30.8154 11.8203 30.3913 11.8203 29.8701C11.8203 29.3488 12.2444 28.9248 12.7656 28.9248C13.287 28.9248 13.7109 29.3488 13.7109 29.8701C13.7109 30.3913 13.287 30.8154 12.7656 30.8154ZM15.5938 26.1045C15.5938 26.6257 15.1697 27.0498 14.6484 27.0498H3.35165C2.83035 27.0498 2.40625 26.6257 2.40625 26.1045V11.042C2.40625 10.5207 2.83035 10.0966 3.35165 10.0966H14.6484C15.1697 10.0966 15.5938 10.5207 15.5938 11.042V26.1045Z" fill="black" />
                    <path d="M5.23438 11.9873C4.71658 11.9873 4.29688 12.407 4.29688 12.9248V24.2216C4.29688 24.7394 4.71658 25.1592 5.23438 25.1592C5.75207 25.1592 6.17188 24.7394 6.17188 24.2216V12.9248C6.17188 12.407 5.75207 11.9873 5.23438 11.9873Z" fill="black" />
                    <path d="M9 11.9873C8.4822 11.9873 8.0625 12.407 8.0625 12.9248V24.2216C8.0625 24.7394 8.4822 25.1592 9 25.1592C9.5178 25.1592 9.9375 24.7394 9.9375 24.2216V12.9248C9.9375 12.407 9.5178 11.9873 9 11.9873Z" fill="black" />
                    <path d="M12.7656 11.9873C12.2479 11.9873 11.8281 12.407 11.8281 12.9248V24.2216C11.8281 24.7394 12.2479 25.1592 12.7656 25.1592C13.2834 25.1592 13.7031 24.7394 13.7031 24.2216V12.9248C13.7031 12.407 13.2834 11.9873 12.7656 11.9873Z" fill="black" />
                  </svg>
                </span>
                <p class="text-sm">${whyTravila[0].title3}</p>
                <p class="pt-2 text-center text-xs text-neutral-500">${whyTravila[0].cont3}</p>
              </div>
              <div class="flex flex-col items-center justify-center rounded-xl bg-rose-50 px-8 py-4">
                <span class="pb-2">
                  <svg width="24" height="24" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9999 0.69043C6.36432 0.69043 0.96582 6.08883 0.96582 12.7244V20.6564C0.96582 27.2919 6.36432 32.6903 12.9999 32.6903C19.6354 32.6903 25.0339 27.2919 25.0339 20.6564V12.7244C25.0339 6.08883 19.6354 0.69043 12.9999 0.69043ZM23.1581 20.6564C23.1581 26.2576 18.6011 30.8146 12.9999 30.8146C7.39862 30.8146 2.84162 26.2576 2.84162 20.6564V12.7244C2.84162 7.12323 7.39862 2.56621 12.9999 2.56621C18.6011 2.56621 23.1581 7.12323 23.1581 12.7244V20.6564Z" fill="black" />
                    <path d="M21.2827 12.7243C21.2827 8.15739 17.5672 4.44189 13.0002 4.44189C8.43327 4.44189 4.71777 8.15739 4.71777 12.7243V20.6563C4.71777 25.2232 8.43327 28.9387 13.0002 28.9387C16.3585 28.9387 19.2563 26.9295 20.555 24.0501C20.5557 24.0485 20.5563 24.047 20.5571 24.0454C21.0231 23.0103 21.2828 21.8631 21.2828 20.6563V18.4023C21.2828 18.397 21.2828 18.3918 21.2828 18.3865L21.2827 12.7243ZM13.1928 19.6167C13.1978 18.688 13.955 17.9339 14.8848 17.9339C15.7109 17.9339 16.4295 18.548 16.5564 19.3622C16.6149 19.7377 16.8941 20.0407 17.2636 20.1297C17.6327 20.2186 18.0196 20.0759 18.2425 19.7682C18.5177 19.3884 18.941 19.1684 19.4069 19.1609V20.6564C19.4069 21.3871 19.2836 22.0895 19.0572 22.7443H12.1373C11.545 22.7443 11.0631 22.2624 11.0631 21.6701C11.0631 21.0778 11.545 20.5959 12.1373 20.5959H12.2557C12.5063 20.5959 12.7465 20.4956 12.9227 20.3174C13.0988 20.1392 13.1964 19.8979 13.1935 19.6473C13.1934 19.6376 13.1931 19.6277 13.1928 19.6167ZM13.0002 6.31769C16.4057 6.31769 19.1987 8.98849 19.3954 12.3455H6.60507C6.80177 8.98849 9.59477 6.31769 13.0002 6.31769ZM13.0002 27.063C9.46757 27.063 6.59357 24.189 6.59357 20.6564V14.2213H19.4069V17.2852C18.8655 17.2892 18.339 17.4253 17.8706 17.673C17.6896 17.3966 17.4699 17.1444 17.2162 16.9252C16.5689 16.3661 15.741 16.0582 14.8848 16.0582C13.198 16.0582 11.7807 17.2349 11.411 18.8106C10.1345 19.1351 9.18727 20.2941 9.18727 21.6702C9.18727 23.2968 10.5107 24.6201 12.1373 24.6201H18.03C16.8558 26.1069 15.0376 27.063 13.0002 27.063Z" fill="black" />
                    <path d="M11.935 10.47H14.0647C14.5826 10.47 15.0026 10.0501 15.0026 9.53214C15.0026 9.01424 14.5826 8.59424 14.0647 8.59424H11.935C11.417 8.59424 10.9971 9.01424 10.9971 9.53214C10.9971 10.0501 11.417 10.47 11.935 10.47Z" fill="black" />
                  </svg>
                </span>
                <p class="text-sm">${whyTravila[0].title4}</p>
                <p class="pt-2 text-center text-xs text-neutral-500">${whyTravila[0].cont4}</p>
              </div>
            </div>
          </div>
      `;
    })
    .catch(error => console.error("Error fetching why travila section", error));

    fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const trendingDestinations = data.trendingDestinations;
      const trendContainer = document.getElementById("trendingDestinations-container");
      trendingDestinations.forEach((dest, index) => {
        const destDiv = document.createElement("div");
        if(index === 0){
          destDiv.className = "relative w-full sm:w-2/3 p-1.5";
        }
        else{
          destDiv.className = "relative w-1/2 sm:w-1/3 p-1.5";
        }

        const img = document.createElement("img");
        img.src = dest.image;
        img.alt = dest.name;
        img.className = "h-full w-full rounded-xl object-cover";
        destDiv.appendChild(img);
        const overlay = document.createElement("div");
        overlay.className = "absolute right-3 bottom-3 left-3 z-10 flex items-center justify-between";
        const infoDiv = document.createElement("div");
        if(index === 0){
          infoDiv.className = "w-1/2 rounded-md bg-white p-2 transition duration-300 ease-in-out hover:scale-110";
        }
        else{
          infoDiv.className = "w-full rounded-md bg-white p-2 transition duration-300 ease-in-out hover:scale-110";
        }
        const nameP = document.createElement("p");
        nameP.className = "text-sm";
        nameP.textContent = dest.name;
        infoDiv.appendChild(nameP);
        const infoSubDiv = document.createElement("div");
        infoSubDiv.className = "flex items-center justify-between";
        const detailsP = document.createElement("p");
        detailsP.className = "pt-1.5 text-xs text-neutral-500";
        detailsP.textContent = dest.tours + " Tours, " + dest.activities + " Activities";
        infoSubDiv.appendChild(detailsP);
        const arrowSpan = document.createElement("span");
        arrowSpan.className = "transition duration-300 ease-in-out hover:scale-120 hover:cursor-pointer";
        arrowSpan.innerHTML = `
          <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.720215" width="27" height="27" rx="13.5" fill="#F2F4F6" />
            <path d="M13.5004 18.0237L17.5837 13.9403M17.5837 13.9403L13.5004 9.85693M17.5837 13.9403H9.41699" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        `;
        infoSubDiv.appendChild(arrowSpan);
        infoDiv.appendChild(infoSubDiv);
        overlay.appendChild(infoDiv);

        if(index === 0){
          const timerDiv = document.createElement("div");
          timerDiv.innerHTML = `
            <p class="text-sm text-white">${dest.timerDesc}</p>
          `;
          const timerContainer = document.createElement("div");
          timerContainer.className = "flex gap-2";
          ["days", "hours", "mins", "secs"].forEach((unit) => {
            const unitDiv = document.createElement("div");
            unitDiv.className = "flex flex-col items-center justify-center";
            const unitVal = document.createElement("p");
            unitVal.className = "rounded-md bg-white p-1 text-xl text-black";
            unitVal.id = "timer-" + unit;
            unitVal.textContent = "00";
            const unitLabel = document.createElement("p");
            unitLabel.className = "text-xs text-white";
            unitLabel.textContent = unit[0].toUpperCase() + unit.slice(1, unit.length);
            unitDiv.appendChild(unitVal);
            unitDiv.appendChild(unitLabel);
            timerContainer.appendChild(unitDiv);
          });
          timerDiv.appendChild(timerContainer);
          overlay.appendChild(timerDiv);
        }
        destDiv.appendChild(overlay);
        if(dest.promotions){
          const promoDiv = document.createElement("div");
          promoDiv.className = "absolute top-3 right-3 z-10 flex rounded-full bg-white px-2 py-1";
          promoDiv.innerHTML = `
            <span class="pt-1 pr-1">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9968 8.13721H2.66341C2.57501 8.13721 2.49022 8.17233 2.42771 8.23484C2.3652 8.29735 2.33008 8.38214 2.33008 8.47054V14.4706C2.33008 14.7358 2.43544 14.9902 2.62297 15.1777C2.81051 15.3652 3.06486 15.4706 3.33008 15.4706H13.3301C13.5953 15.4706 13.8497 15.3652 14.0372 15.1777C14.2247 14.9902 14.3301 14.7358 14.3301 14.4706V8.47054C14.3301 8.38214 14.295 8.29735 14.2325 8.23484C14.17 8.17233 14.0852 8.13721 13.9968 8.13721Z" fill="#FFC127" />
                <path d="M14.3301 5.13721H2.33008C1.7778 5.13721 1.33008 5.58492 1.33008 6.13721V7.80387C1.33008 8.35616 1.7778 8.80387 2.33008 8.80387H14.3301C14.8824 8.80387 15.3301 8.35616 15.3301 7.80387V6.13721C15.3301 5.58492 14.8824 5.13721 14.3301 5.13721Z" fill="#EE4D2D" />
                <path d="M10.1368 5.80088C9.46044 5.80088 8.71778 5.56154 8.37544 4.97054C8.04711 4.40388 8.12611 3.56354 8.58044 2.77688C9.05344 1.95854 9.77444 1.47021 10.5101 1.47021H10.5135C11.0771 1.4919 11.6117 1.72559 12.0104 2.12454C12.4091 2.52349 12.6425 3.05826 12.6638 3.62188C12.6615 4.80021 11.5808 5.60721 10.5638 5.76821C10.4225 5.79022 10.2797 5.80114 10.1368 5.80088ZM10.5101 2.13688C9.92778 2.13688 9.43044 2.63954 9.15778 3.11021C8.83244 3.67354 8.74978 4.28688 8.95211 4.63654C9.18878 5.04454 9.90411 5.19821 10.4608 5.10988C11.0978 5.00988 11.9941 4.47988 11.9971 3.62054C11.9728 3.2348 11.8085 2.87121 11.5351 2.59804C11.2616 2.32486 10.8979 2.16087 10.5121 2.13688H10.5101Z" fill="#EE4D2D" />
                <path d="M6.50953 5.78595C6.32266 5.7867 6.13615 5.76962 5.95253 5.73495C5.12219 5.57262 3.88586 4.87162 3.88086 3.60662C3.90895 3.05053 4.14193 2.52454 4.53487 2.13006C4.92781 1.73558 5.45289 1.50055 6.00886 1.47029C6.77153 1.46329 7.52353 1.94429 8.02953 2.78495C8.50253 3.57195 8.60119 4.40795 8.28753 4.96662C7.94053 5.58562 7.16353 5.78595 6.50953 5.78595ZM4.54753 3.60362C4.55019 4.46095 5.48953 4.96395 6.08086 5.07962C6.67719 5.19695 7.46953 5.06195 7.70619 4.63962C7.89386 4.30629 7.79186 3.68329 7.45786 3.12762C7.16419 2.63895 6.62453 2.10995 6.02453 2.13595C5.64386 2.16405 5.28578 2.32732 5.01493 2.59627C4.74408 2.86523 4.5783 3.22316 4.54753 3.60362Z" fill="#EE4D2D" />
                <path d="M6.99102 14.0482C6.9301 14.0481 6.87038 14.0313 6.81833 13.9996C6.76629 13.968 6.72391 13.9227 6.6958 13.8686C6.6677 13.8146 6.65494 13.7539 6.65892 13.6931C6.66289 13.6323 6.68345 13.5737 6.71835 13.5238L9.39635 9.70084C9.42146 9.66496 9.45338 9.63439 9.4903 9.61085C9.52722 9.58732 9.56842 9.57128 9.61154 9.56367C9.65466 9.55606 9.69885 9.55701 9.7416 9.56647C9.78435 9.57594 9.82481 9.59373 9.86069 9.61884C9.89656 9.64394 9.92714 9.67586 9.95067 9.71279C9.97421 9.74971 9.99024 9.7909 9.99785 9.83402C10.0055 9.87714 10.0045 9.92133 9.99505 9.96408C9.98558 10.0068 9.96779 10.0473 9.94269 10.0832L7.26469 13.9062C7.23388 13.9501 7.1929 13.986 7.14526 14.0107C7.09761 14.0354 7.0447 14.0483 6.99102 14.0482Z" fill="white" />
                <path d="M6.82976 11.8035C6.59901 11.8035 6.37345 11.7351 6.18159 11.6069C5.98973 11.4787 5.8402 11.2965 5.7519 11.0833C5.66359 10.8702 5.64049 10.6356 5.68551 10.4093C5.73052 10.183 5.84164 9.97508 6.0048 9.81192C6.16796 9.64876 6.37584 9.53764 6.60215 9.49263C6.82846 9.44761 7.06304 9.47072 7.27622 9.55902C7.4894 9.64732 7.67161 9.79685 7.7998 9.98871C7.928 10.1806 7.99642 10.4061 7.99642 10.6369C7.99642 10.9463 7.87351 11.243 7.65471 11.4618C7.43592 11.6806 7.13917 11.8035 6.82976 11.8035ZM6.82976 10.1369C6.73086 10.1369 6.63419 10.1662 6.55197 10.2211C6.46975 10.2761 6.40566 10.3542 6.36782 10.4455C6.32997 10.5369 6.32007 10.6374 6.33936 10.7344C6.35866 10.8314 6.40628 10.9205 6.4762 10.9904C6.54613 11.0603 6.63522 11.108 6.73221 11.1273C6.8292 11.1466 6.92973 11.1367 7.0211 11.0988C7.11246 11.061 7.19055 10.9969 7.24549 10.9147C7.30043 10.8324 7.32976 10.7358 7.32976 10.6369C7.32976 10.5043 7.27708 10.3771 7.18331 10.2833C7.08954 10.1896 6.96236 10.1369 6.82976 10.1369Z" fill="white" />
                <path d="M9.82976 14.137C9.59901 14.137 9.37345 14.0686 9.18159 13.9404C8.98973 13.8122 8.8402 13.63 8.7519 13.4168C8.66359 13.2036 8.64049 12.969 8.68551 12.7427C8.73052 12.5164 8.84164 12.3085 9.0048 12.1454C9.16796 11.9822 9.37584 11.8711 9.60215 11.8261C9.82846 11.7811 10.063 11.8042 10.2762 11.8925C10.4894 11.9808 10.6716 12.1303 10.7998 12.3222C10.928 12.514 10.9964 12.7396 10.9964 12.9703C10.9964 13.2797 10.8735 13.5765 10.6547 13.7953C10.4359 14.0141 10.1392 14.137 9.82976 14.137ZM9.82976 12.4703C9.73086 12.4703 9.63419 12.4996 9.55197 12.5546C9.46975 12.6095 9.40566 12.6876 9.36782 12.779C9.32997 12.8703 9.32007 12.9709 9.33936 13.0679C9.35866 13.1649 9.40628 13.2539 9.4762 13.3239C9.54613 13.3938 9.63522 13.4414 9.73221 13.4607C9.8292 13.48 9.92973 13.4701 10.0211 13.4323C10.1125 13.3944 10.1905 13.3303 10.2455 13.2481C10.3004 13.1659 10.3298 13.0692 10.3298 12.9703C10.3298 12.8377 10.2771 12.7105 10.1833 12.6168C10.0895 12.523 9.96236 12.4703 9.82976 12.4703Z" fill="white" />
              </svg>
            </span>
            <p>${dest.promotions} promotions</p>
          `;
          destDiv.appendChild(promoDiv);
        }
        trendContainer.appendChild(destDiv);
      });
      function updateTimer(){
        const now = new Date();
        const target = new Date(trendingDestinations[0].timerEndIn);
        let diff = target - now;

        if(diff < 0){
          diff = 0;
        }

        let seconds = Math.floor(diff / 1000); // ms to seconds
        const days = Math.floor(seconds / (3600 * 24));
        seconds = seconds % (3600 * 24);
        const hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;
        const minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;

        document.getElementById("timer-days").textContent = days.toString().padStart(2, "0"); // pad Start meand that if the string is not 2 digit long it will add a leading 0 to the start
        document.getElementById("timer-hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("timer-mins").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("timer-secs").textContent = seconds.toString().padStart(2, "0");
      }
      updateTimer();
      setInterval(updateTimer, 1000);
    })
    .catch(error => console.error("Error fetching trending destinations: ", error));

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

    const cardsSection = document.getElementById('cardsSection');
    const searchForm = document.getElementById('searchForm');
    const toursD = document.getElementById("toursM");
    toursD.addEventListener("click", filterTours);
    const hotelsD = document.getElementById("hotelsM");
    hotelsD.addEventListener("click", filterHotels);
    const ticketsD = document.getElementById("ticketsM");
    ticketsD.addEventListener("click", filterTickets);
    const rentalD = document.getElementById("rentalM");
    rentalD.addEventListener("click", filterRental);
    const activitiesD = document.getElementById("activitiesM");
    activitiesD.addEventListener("click", filterActivities);
    
    
    searchForm.className = "";
    
    filterTours();
    
    function filterTours() {
        cardsSection.innerHTML = ``;
        searchForm.className = "flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-200 px-5 py-5 sm:flex-row sm:gap-0";
        toursD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full bg-black text-white sm:px-5";
        hotelsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        ticketsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        rentalD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        activitiesD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";

        fetch('data/data2.json')
            .then(response => response.json())
            .then(data => {
                const filters = data.filters.tours;
                const toursData = data.tours;
            
                searchForm.innerHTML = ``;
                filters.forEach(filter => {
                    let inputField = '';
                    const filterId = filter.name.toLowerCase().replace(/\s+/g, '');

                    if (filter.type === "dropdown") {
                        inputField = `
                            <select aria-label="${filterId}" name="${filterId}" id="${filterId}" class="text-sm">
                                ${filter.options.map(option => `<option value="${option.toLowerCase()}">${option}</option>`).join('')}
                            </select>
                        `;
                    } else if (filter.type === "date") {
                        inputField = `
                            <input type="date" name="${filterId}" id="${filterId}" class="text-sm">
                        `;
                    } else if (filter.type === "number") {
                        inputField = `
                            <input type="number" name="${filterId}" id="${filterId}" class="text-sm border px-2 py-1" placeholder="Enter ${filter.name}">
                        `;
                    }

                    searchForm.innerHTML += `
                        <div class="flex flex-row border-zinc-200 pr-2 sm:flex-col sm:border-r">
                            <div>
                                <label for="${filterId}" class="text-sm">${filter.name}</label>
                            </div>
                            <div class="flex">
                                <span class="pt-1 pr-1">
                                    ${filter.icon}
                                </span>
                                ${inputField}
                            </div>
                        </div>
                    `;
                });

                searchForm.innerHTML += `
                    <div class="pl-5 hover:cursor-pointer">
                        <div class="flex gap-2 rounded-full bg-black px-4 py-2 transition duration-300 ease-in-out hover:scale-120">
                            <span>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.3301 19.22L14.987 14.8769M14.987 14.8769C16.4347 13.4291 17.3301 11.4291 17.3301 9.21997C17.3301 4.80169 13.7484 1.21997 9.33008 1.21997C4.9118 1.21997 1.33008 4.80169 1.33008 9.21997C1.33008 13.6383 4.9118 17.22 9.33008 17.22C11.5392 17.22 13.5392 16.3246 14.987 14.8769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <input id = "formSubmit" type="submit" value="Submit" class="text-sm text-white hover:cursor-pointer" />
                        </div>
                    </div>
                `;
                
                // Handle form submission
                searchForm.addEventListener('submit', function(e) {
                    e.preventDefault();

                    // Get filter values
                    const location = document.getElementById('location').value.toLowerCase();
                    const from = document.getElementById('from').value;
                    const to = document.getElementById('to').value;
                    const guests = parseInt(document.getElementById('guests').value) || 0;
                
                    // Filter tours
                    const filteredTours = toursData.filter(tour => {
                        // Validate tour structure first
                        if (!validateTourStructure(tour)) return false;

                        // Destination filter
                        if (location) {
                        const searchLocation = location.toLowerCase().trim();
                        const tourLocation = tour.location.toLowerCase().trim();
                        
                        // Match exact city or region name (case-insensitive)
                        const [tourCity] = tourLocation.split(',');
                        if (!tourCity.includes(searchLocation) && !tourLocation.includes(searchLocation)) {
                            return false;
                        }
                        }
                    
                        // Date filters
                        if (from && to) {
                        const fromDate = parseDate(from);
                        const toDate = parseDate(to);
                        const tourFrom = parseDate(tour.from);
                        const tourTo = parseDate(tour.to);
                        
                        // Check for valid dates and date range
                        if (!fromDate || !toDate || !tourFrom || !tourTo) return false;
                        
                        // Find tours that overlap with selected dates (fix logic)
                        // Tour should start before selected end and end after selected start
                        const dateOverlap = tourFrom <= toDate && tourTo >= fromDate;
                        if (!dateOverlap) return false;
                        }
                    
                        // Guests filter
                        if (guests) {
                        const totalOccupancy = (tour.guests?.adults || 0) + (tour.guests?.children || 0);
                        if (totalOccupancy < guests) return false;
                        }
                    
                        return true;
                    });

                    // Helper functions
                    function parseDate(dateString) {
                        const parts = dateString.split('-');
                        if (parts.length !== 3) return null;
                        return new Date(parts[0], parts[1] - 1, parts[2]); // Year, Month (0-based), Day
                    }
                
                    function validateTourStructure(tour) {
                        // Check required properties including 'from' (Original Tour 6 has 'form' typo)
                        const isValid = [
                        'id', 'name', 'location', 'from', 'to',
                        'price', 'guests'
                        ].every(prop => prop in tour);
                        
                        // Additional guests validation
                        return isValid && 
                        'adults' in tour.guests && 
                        'children' in tour.guests &&
                        parseDate(tour.from) &&
                        parseDate(tour.to);
                    }
                
                    // Display results
                    display(filteredTours);
                });
                    
                // Initial display of all tours
                display(toursData);
            })
            .catch(error => console.error('Error fetching tours data:', error));
    }
    
    function display(tours) {
        const cardsHTML = tours.map(tour => `
            <div class="group flex items-center justify-center">
                <div class="flex w-full max-w-md flex-row overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:flex-col">
                    <!-- Image Section -->
                    <figure class="relative h-58 w-2/5 shrink-0 overflow-hidden sm:h-48 sm:w-full">
                        <img 
                        alt="A luxurious hotel with a pool and palm trees at dusk"
                        class="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                        src="${tour.image}"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent sm:bg-gradient-to-r"></div>
                            <div class="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                                <h1 class="text-lg font-bold text-white drop-shadow sm:text-xl md:text-2xl">
                                    ${tour.name}
                                </h1>
                            <div class="mt-1 h-1 w-8 rounded-full bg-white/30 sm:mt-2 sm:w-12"></div>
                        </div>
                    </figure>

                    <!-- Content Section -->
                    <div class="flex w-3/5 flex-col p-3 bg-gray-200 sm:w-full sm:p-4 md:p-5">
                        <!-- Date Section -->
                        <div class="mb-2 flex flex-col space-y-2 rounded-lg bg-gray-100 px-2 py-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:px-3 sm:py-2">
                            <div class="flex items-center gap-1 sm:gap-2">
                                <svg class="h-3 w-3 shrink-0 text-gray-600 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            <div>
                            <p class="text-[0.6rem] font-medium uppercase tracking-tight text-gray-500 sm:text-[0.7rem]">Departure</p>
                            <p class="text-xs font-semibold text-gray-700 sm:text-sm">${tour.from}</p>
                        </div>
                    </div>
                    <div class="hidden h-4 w-px bg-gray-200 sm:block"></div>
                        <div class="flex items-center gap-1 sm:gap-2">
                            <svg class="h-3 w-3 shrink-0 text-gray-600 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <div>
                                <p class="text-[0.6rem] font-medium uppercase tracking-tight text-gray-500 sm:text-[0.7rem]">Return</p>
                                <p class="text-xs font-semibold text-gray-700 sm:text-sm">${tour.to}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Location Section -->
                    <div class="mb-2 sm:mb-4">
                        <div class="flex items-center gap-1 sm:gap-2">
                            <svg class="h-4 w-4 shrink-0 text-gray-600 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <p class="text-sm font-semibold text-gray-800 sm:text-base md:text-lg">${tour.location}</p>
                            </div>
                        </div>

                        <!-- Price Section -->
                        <div class="mt-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="mb-0.5 text-[0.7rem] font-medium text-gray-500 sm:text-xs">Starting from</p>
                                <p class="text-lg font-bold text-gray-900 sm:text-xl">
                                <span class="text-xs align-top sm:text-sm">$</span>${tour.price}
                                </p>
                            </div>
                            <button class="rounded-md bg-gray-800 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-all duration-150 hover:bg-gray-900 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm hover:cursor-pointer">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    `).join('');
    
    cardsSection.innerHTML = cardsHTML;
    }
    function filterHotels() {
        cardsSection.innerHTML = ``;
        searchForm.className = "flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-200 px-5 py-5 sm:flex-row sm:gap-0";
        toursD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        hotelsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full bg-black text-white sm:px-5";
        ticketsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        rentalD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        activitiesD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        fetch('data/data2.json')
            .then(response => response.json())
            .then(data => {
                const hotels = data.filters.hotels;
                const hotelsData = data.hotels;
                searchForm.innerHTML = ``;
            
                hotels.forEach(filter => {
                    let inputField = '';
                    const filterId = filter.name.toLowerCase().replace(/\s+/g, '');
                
                    if (filter.type === "dropdown") {
                    inputField = `
                        <select aria-label="${filterId}" name="${filterId}" id="${filterId}" class="text-sm">
                            ${filter.options.map(option => `<option value="${option.toLowerCase()}">${option}</option>`).join('')}
                        </select>
                    `;
                    } else if (filter.type === "date") {
                        inputField = `
                            <input type="date" name="${filterId}" id="${filterId}" class="text-sm">
                        `;
                    } else if (filter.type === "number") {
                        inputField = `
                            <input type="number" name="${filterId}" id="${filterId}" class="text-sm border px-2 py-1" placeholder="Enter ${filter.name}">
                        `;
                    }
                    
                    searchForm.innerHTML += `
                        <div class="flex flex-row border-zinc-200 pr-2 sm:flex-col sm:border-r">
                            <div>
                                <label for="${filterId}" class="text-sm">${filter.name}</label>
                            </div>
                            <div class="flex">
                                <span class="pt-1 pr-1">
                                    ${filter.icon}
                                </span>
                                ${inputField}
                            </div>
                        </div>
                    `;
                });
                searchForm.innerHTML += `
                    <div class="pl-5 hover:cursor-pointer">
                        <div class="flex gap-2 rounded-full bg-black px-4 py-2 transition duration-300 ease-in-out hover:scale-120">
                            <span>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.3301 19.22L14.987 14.8769M14.987 14.8769C16.4347 13.4291 17.3301 11.4291 17.3301 9.21997C17.3301 4.80169 13.7484 1.21997 9.33008 1.21997C4.9118 1.21997 1.33008 4.80169 1.33008 9.21997C1.33008 13.6383 4.9118 17.22 9.33008 17.22C11.5392 17.22 13.5392 16.3246 14.987 14.8769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <input id = "formSubmit" type="submit" value="Submit" class="text-sm text-white hover:cursor-pointer" />
                        </div>
                    </div>
                `;
                searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get filter values
                const location = document.getElementById('location').value.toLowerCase();
                const from = document.getElementById('check-in').value;
                const to = document.getElementById('check-out').value;
                const guests = parseInt(document.getElementById('guests').value) || 0;
                
                const filteredHotels = hotelsData.filter(hotel => {
                    // Validate tour structure first
                    if (!validateHotelStructure(hotel)) return false;

                    // Destination filter
                    if (location) {
                        const searchLocation = location.toLowerCase().trim();
                        const hotelLocation = hotel.location.toLowerCase().trim();
                        
                        // Match exact city or region name (case-insensitive)
                        const [hotelCity] = hotelLocation.split(',');
                        if (!hotelCity.includes(searchLocation) && !hotelLocation.includes(searchLocation)) {
                            return false;
                        }
                    }

                    // Date filters
                    if (from && to) {
                        const fromDate = parseDate(from);
                        const toDate = parseDate(to);
                        const tourFrom = parseDate(hotel.from);
                        const tourTo = parseDate(hotel.to);
                    
                        // Check for valid dates and date range
                        if (!fromDate || !toDate || !tourFrom || !tourTo) return false;
                    
                        // Find tours that overlap with selected dates (fix logic)
                        // Tour should start before selected end and end after selected start
                        const dateOverlap = hotelFrom <= toDate && hotelTo >= fromDate;
                        if (!dateOverlap) return false;
                    }

                    // Guests filter
                    if (guests) {
                        const totalOccupancy = (hotel.guests?.adults || 0) + (hotel.guests?.children || 0);
                        if (totalOccupancy < guests) return false;
                    }

                    return true;
                });
                function parseDate(dateString) {
                    const parts = dateString.split('-');
                    if (parts.length !== 3) return null;
                        return new Date(parts[0], parts[1] - 1, parts[2]); // Year, Month (0-based), Day
                }

                function validateHotelStructure(hotel) {
                    // Check required properties including 'from' (Original Tour 6 has 'form' typo)
                    const isValid = [
                    'id', 'name', 'location', 'from', 'to',
                    'price', 'guests'
                    ].every(prop => prop in hotel);
                
                    // Additional guests validation
                    return isValid && 
                    'adults' in hotel.guests && 
                    'children' in hotel.guests &&
                    parseDate(hotel.from) &&
                    parseDate(hotel.to);
                }
            
                // Display results
                display(filteredHotels);
            });
    
            // Initial display of all tours
            display(hotelsData);
    
        })
        .catch(error => console.error('Error fetching tours data:', error));
    }
    function filterTickets() {
        cardsSection.innerHTML = ``;
        searchForm.innerHTML = ``;
        searchForm.className = "";
        toursD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        hotelsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        ticketsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full bg-black text-white sm:px-5";
        rentalD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        activitiesD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        fetch('data/data2.json')
            .then(response => response.json())
            .then(data => {
                const ticketsData = data.tickets;
                displayTickets(ticketsData);
            })
            .catch(error => console.error('Error fetching tickets data:', error));
    }
    function displayTickets(tickets) {
        const cardsHTML = tickets.map(ticket => `
            <div class="group flex items-center justify-center">
                <div class="flex w-full max-w-md flex-row overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:flex-col">
                    <!-- Image Section -->
                    <figure class="relative h-58 w-2/5 shrink-0 overflow-hidden sm:h-48 sm:w-full">
                        <img 
                            alt="${ticket.event}"
                            class="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                            src="${ticket.image || '/images/default-ticket.jpg'}"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                        <div class="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                            <h1 class="text-lg font-bold text-white drop-shadow sm:text-xl md:text-2xl">
                                ${ticket.event}
                            </h1>
                            <div class="mt-1 h-1 w-8 rounded-full bg-white/30 sm:mt-2 sm:w-12"></div>
                        </div>
                    </figure>
                
                    <!-- Content Section -->
                    <div class="flex w-3/5 flex-col p-3 sm:w-full sm:p-4 md:p-5">
                        <!-- Date Section -->
                        <div class="mb-2 flex flex-col space-y-2 rounded-lg bg-gray-100 px-2 py-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:px-3 sm:py-2">
                            <div class="flex items-center gap-1 sm:gap-2">
                                <svg class="h-4 w-4 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-tight text-gray-500">Event Date</p>
                                    <p class="text-sm font-semibold text-gray-700">${new Date(ticket.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    
                        <!-- Location Section -->
                        <div class="mb-2 sm:mb-4">
                            <div class="flex items-center gap-1 sm:gap-2">
                                <svg class="h-5 w-5 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <p class="text-sm font-semibold text-gray-800 sm:text-base">${ticket.location}</p>
                            </div>
                        </div>
                    
                        <!-- Price Section -->
                        <div class="mt-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="text-xs font-medium text-gray-500">Price per ticket</p>
                                <p class="text-lg font-bold text-gray-900">
                                    <span class="text-sm align-top">$</span>${ticket.price.replace('$', '')}
                                </p>
                            </div>
                            <button class="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-150 hover:bg-gray-900 hover:shadow-md">
                                View Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        cardsSection.innerHTML = cardsHTML;
    }
    function filterRental() {
        cardsSection.innerHTML = ``;
        searchForm.className = "flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-200 px-5 py-5 sm:flex-row sm:gap-0";
        toursD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        hotelsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        ticketsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        rentalD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full bg-black text-white sm:px-5";
        activitiesD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";

        fetch('data/data2.json')
            .then(response => response.json())
            .then(data => {
                const filters = data.filters.rental;
                const rentalData = data.rentals;
                console.log(rentalData);
            
                searchForm.innerHTML = ``;
                filters.forEach(filter => {
                    let inputField = '';
                    const filterId = filter.name.toLowerCase().replace(/\s+/g, '');
                
                    if (filter.type === "dropdown") {
                        inputField = `
                            <select aria-label="${filterId}" name="${filterId}" id="${filterId}" class="text-sm">
                                ${filter.options.map(option => `<option value="${option.toLowerCase()}">${option}</option>`).join('')}
                            </select>
                        `;
                    } else if (filter.type === "date") {
                        inputField = `
                            <input type="date" name="${filterId}" id="${filterId}" class="text-sm">
                        `;
                    } else if (filter.type === "number") {
                        inputField = `
                            <input type="number" name="${filterId}" id="${filterId}" class="text-sm border px-2 py-1" placeholder="Enter ${filter.name}">
                        `;
                    }
                
                    searchForm.innerHTML += `
                        <div class="flex flex-row border-zinc-200 pr-2 sm:flex-col sm:border-r">
                            <div>
                                <label for="${filterId}" class="text-sm">${filter.name}</label>
                            </div>
                            <div class="flex">
                                <span class="pt-1 pr-1">
                                    ${filter.icon}
                                </span>
                                ${inputField}
                            </div>
                        </div>
                    `;
                });
            
                searchForm.innerHTML += `
                    <div class="pl-5 hover:cursor-pointer">
                        <div class="flex gap-2 rounded-full bg-black px-4 py-2 transition duration-300 ease-in-out hover:scale-120">
                            <span>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.3301 19.22L14.987 14.8769M14.987 14.8769C16.4347 13.4291 17.3301 11.4291 17.3301 9.21997C17.3301 4.80169 13.7484 1.21997 9.33008 1.21997C4.9118 1.21997 1.33008 4.80169 1.33008 9.21997C1.33008 13.6383 4.9118 17.22 9.33008 17.22C11.5392 17.22 13.5392 16.3246 14.987 14.8769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <input id="formSubmit" type="submit" value="Submit" class="text-sm text-white hover:cursor-pointer" />
                        </div>
                    </div>
                `;
                
                // Handle form submission
                searchForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                
                    // Get filter values
                    const location = document.getElementById('location').value.toLowerCase();
                    const from = document.getElementById('from').value;
                    const to = document.getElementById('to').value;
                    const type = document.getElementById('type')?.value.toLowerCase() || '';
                    const price = parseInt(document.getElementById('price')?.value) || 0;
                
                    // Filter rentals
                    const filteredRentals = rentalData.filter(rental => {
                        if (!validateRentalStructure(rental)) return false;
                    
                        // Location filter
                        if (location) {
                            const searchLocation = location.trim();
                            const rentalLocation = rental.location.toLowerCase().trim();
                            const [rentalCity] = rentalLocation.split(',');
                            if (!rentalCity.includes(searchLocation) && !rentalLocation.includes(searchLocation)) {
                                return false;
                            }
                        }
                    
                        // Date filter
                        if (from && to) {
                            const fromDate = parseDate(from);
                            const toDate = parseDate(to);
                            const rentalFrom = parseDate(rental.from);
                            const rentalTo = parseDate(rental.to);
                        
                            if (!fromDate || !toDate || !rentalFrom || !rentalTo) return false;
                            if (!(rentalFrom <= toDate && rentalTo >= fromDate)) return false;
                        }
                    
                        // Vehicle type filter
                        if (type && rental.type.toLowerCase() !== type) return false;
                    
                        // Price filter
                        if (price && rental.price > price) return false;
                    
                        return true;
                    });
                
                    display(filteredRentals);
                });
            
                // Initial display
                display(rentalData);
            })
            .catch(error => console.error('Error fetching rental data:', error));
    }

    // Rental validation helper
    function validateRentalStructure(rental) {
        const requiredProps = ['id', 'name', 'location', 'from', 'to', 'price', 'type'];
        const isValid = requiredProps.every(prop => prop in rental);
        return isValid && parseDate(rental.from) && parseDate(rental.to);
    }

    // Date parser (reuse from existing implementation)
    function parseDate(dateString) {
        const parts = dateString.split('-');
        if (parts.length !== 3) return null;
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    
    function filterActivities() {
        cardsSection.innerHTML = ``;
        searchForm.className = "flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-200 px-5 py-5 sm:flex-row sm:gap-0";
        toursD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        hotelsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        ticketsD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        rentalD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full hover:bg-black hover:text-white sm:px-5";
        activitiesD.className = "cursor-pointer px-3 py-2 text-xs transition-all rounded-full bg-black text-white sm:px-5";
                
        fetch('data/data2.json')
            .then(response => response.json())
            .then(data => {
                const filters = data.filters.activities;
                const activitiesData = data.activities;
                
                // Build search form
                searchForm.innerHTML = filters.map(filter => {
                    const filterId = filter.name.toLowerCase().replace(/\s+/g, '');
                    let inputField = '';
                    
                    if (filter.type === "dropdown") {
                        inputField = `
                            <select id="${filterId}" class="text-sm">
                                ${filter.options.map(option => 
                                    `<option value="${option.toLowerCase()}">${option}</option>`
                                ).join('')}
                            </select>
                        `;
                    } else if (filter.type === "date") {
                        inputField = `<input type="date" id="${filterId}" class="text-sm">`;
                    } else if (filter.type === "number") {
                        inputField = `
                            <input type="number" id="${filterId}" 
                                   class="text-sm border px-2 py-1" 
                                   placeholder="${filter.placeholder || ''}">
                        `;
                    }
                
                    return `
                        <div class="flex flex-row border-zinc-200 pr-2 sm:flex-col sm:border-r">
                            <div>
                                <label for="${filterId}" class="text-sm">${filter.name}</label>
                            </div>
                            <div class="flex">
                                <span class="pt-1 pr-1">${filter.icon}</span>
                                ${inputField}
                            </div>
                        </div>
                    `;
                }).join('');
            
                // Add submit button
                searchForm.innerHTML += `
                    <div class="pl-5 hover:cursor-pointer">
                        <div class="flex gap-2 rounded-full bg-black px-4 py-2 transition duration-300 ease-in-out hover:scale-120">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M19.3301 19.22L14.987 14.8769M14.987 14.8769C16.4347 13.4291 17.3301 11.4291 17.3301 9.21997C17.3301 4.80169 13.7484 1.21997 9.33008 1.21997C4.9118 1.21997 1.33008 4.80169 1.33008 9.21997C1.33008 13.6383 4.9118 17.22 9.33008 17.22C11.5392 17.22 13.5392 16.3246 14.987 14.8769Z" 
                                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input type="submit" value="Submit" class="text-sm text-white hover:cursor-pointer">
                        </div>
                    </div>
                `;
                
                // Handle form submission
                searchForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get filter values
                    const location = document.getElementById('location')?.value.toLowerCase() || '';
                    const activityDate = document.getElementById('date')?.value;
                    const maxPrice = parseFloat(document.getElementById('price')?.value) || Infinity;
                    const activityType = document.getElementById('type')?.value.toLowerCase() || '';
                
                    // Filter activities
                    const filteredActivities = activitiesData.filter(activity => {
                        // Validate activity structure
                        if (!validateActivityStructure(activity)) return false;
                    
                        // Location filter
                        if (location && !activity.location.toLowerCase().includes(location)) return false;
                    
                        // Date filter
                        if (activityDate) {
                            const selectedDate = parseDate(activityDate);
                            const activityFrom = parseDate(activity.from);
                            const activityTo = parseDate(activity.to);
                            
                            if (!selectedDate || !activityFrom || !activityTo) return false;
                            if (selectedDate < activityFrom || selectedDate > activityTo) return false;
                        }
                    
                        // Price filter
                        const activityPrice = parseFloat(activity.price.replace(/[^0-9.]/g, ''));
                        if (activityPrice > maxPrice) return false;
                    
                        // Type filter
                        if (activityType && !activity.type?.toLowerCase().includes(activityType)) return false;
                    
                        return true;
                    });
                
                    display(filteredActivities);
                });
            
                // Initial display
                display(activitiesData);
            })
            .catch(error => console.error('Error fetching activities data:', error));
    }

    // Validation helper for activities
    function validateActivityStructure(activity) {
        const requiredProps = ['id', 'name', 'location', 'from', 'to', 'price'];
        return requiredProps.every(prop => prop in activity) &&
               parseDate(activity.from) && 
               parseDate(activity.to);
    }


































    document.addEventListener('DOMContentLoaded', () => {
      fetch('data/footer.json')
        .then(response => response.json())
        .then(data => {
          const footer = data.footer;
          const container = document.getElementById("footer-container");
          
          const companyInfoHTML = `
            <div class="flex flex-col sm:flex-row">
              ${renderCompanyInfo(footer.companyInfo)}
              ${renderLinks(footer.links)}
              ${renderNewsletter(footer.newsletter)}
            </div>
            ${renderInfoBoxes(footer.infoBoxes)}
            ${renderBottomSection(footer)}
          `;

          container.innerHTML = companyInfoHTML;
        });

      function renderCompanyInfo(info) {
        return `
          <div class="flex flex-col items-start justify-center gap-4 p-4 px-4 sm:w-1/3 sm:px-0 sm:pt-0">
            <span>${info.logo.svg}</span>
            <p class="text-sm text-white">${info.description}</p>
            ${renderContactInfo(info.contact)}
          </div>
        `;
      }

      function renderContactInfo(contact) {
        return `
          <div class="flex items-start gap-2">
            <span>${contact.address.icon}</span>
            <p class="text-xs text-neutral-400">${contact.address.text}</p>
          </div>
          <div class="flex items-center gap-2">
            <span>${contact.hours.icon}</span>
            <p class="text-xs text-neutral-400">${contact.hours.text}</p>
          </div>
          <div class="flex items-center gap-2">
            <span>${contact.email.icon}</span>
            <p class="text-xs text-neutral-400">${contact.email.text}</p>
          </div>
        `;
      }

      function renderLinks(links) {
        return `
          <div class="flex justify-between px-0 pt-9 pr-6 pl-4 sm:w-1/3 sm:px-4">
            <div class="flex flex-col gap-4">
              <p class="text-sm text-white">Company</p>
              ${links.company.map(link => `<p class="footer-link text-xs text-neutral-400">${link}</p>`).join('')}
            </div>
            <div class="flex flex-col gap-4">
              <p class="text-sm text-white">Services</p>
              ${links.services.map(link => `<p class="footer-link text-xs text-neutral-400">${link}</p>`).join('')}
            </div>
          </div>
        `;
      }

      function renderNewsletter(newsletter) {
  return `
    <div class="flex flex-col items-center pt-9 sm:w-1/3 sm:items-end">
      <div class="flex flex-col gap-3">
        <p class="text-sm text-white">Newsletter</p>
        <form class="flex flex-col gap-3" data-newsletter-form>
          <div class="flex h-10 items-center gap-1 rounded-full border border-neutral-500 p-2">
            <span class="pt-0.5">${newsletter.inputIcon}</span>
            <input type="email" placeholder="${newsletter.placeholder}" class="w-40 bg-transparent text-xs text-neutral-400" />
          </div>
          <button type="submit" class="subscribe-button text-Black h-10 w-49 rounded-full bg-yellow-400 px-4 py-1 text-sm transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">${newsletter.button}</button>
        </form>
      </div>
    </div>
  `;
}

// Add this JavaScript to handle form submission
document.addEventListener('submit', function(e) {
  if (e.target.matches('form[data-newsletter-form]')) {
    e.preventDefault();
    
    // Get the email input field
    const emailInput = e.target.querySelector('input[type="email"]');
    
    // Set message based on email input presence
    const message = emailInput.value.trim()
      ? "Thank you for subscribing!"
      : "Please enter an email";
    
    // Create popup element with a translucent background
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 max-w-sm w-full relative">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">${message}</h3>
            <button class="popup-close text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(popup);
    
    // Add close functionality to remove the popup
    popup.querySelector('.popup-close').addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  }
});



      function renderInfoBoxes(boxes) {
        return `
          <div class="mx-15 flex flex-col rounded-4xl border border-zinc-800 sm:mx-0 sm:flex-row sm:w-2/3">
            ${boxes.map(box => `
              <div class="flex flex-1 items-center justify-start border-zinc-800 px-4 py-8 sm:border-r">
                <span>${box.icon}</span>
                <div>
                  <p class="text-sm text-white">${box.title}</p>
                  ${box.phone ? `<p class="text-xl text-white">${box.phone}</p>` : ''}
                  ${box.description ? `<p class="text-xs text-white">${box.description}</p>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      function renderBottomSection(footer) {
        return `
          <div class="mb-5 flex w-full flex-col items-center justify-between gap-4 sm:mb-0 sm:flex-row sm:gap-0 sm:w-2/3">
            <p class="text-xs text-white">${footer.copyright}</p>
            <div class="flex items-center justify-center gap-2">
              <p class="text-sm text-white">Follow us</p>
              ${footer.socialMedia.map(social => `
                <span class="social-icon">${social.icon}</span>
              `).join('')}
            </div>
          </div>
        `;
      }
    });



























































    import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
    const genAI = new GoogleGenerativeAI("AIzaSyBYv5EkZUtFEJvkmlplM92AK7t5sr2c4so"); 
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    document.addEventListener('DOMContentLoaded', () => {
        const chatContainer = document.getElementById('chatContainer');
        const chatbotButton = document.getElementById('chatbotButton');
        const closeButton = document.getElementById('closeButton');
        const userInput = document.getElementById('userInput');
        const sendButton = document.getElementById('sendButton');
        const chatMessages = document.getElementById('chatMessages');
        const body = document.body;
    
        const toggleChat = () => {
            const isOpening = !chatContainer.classList.contains("flex");
            chatContainer.classList.toggle("hidden");
            chatContainer.classList.toggle("flex");
    
            if (isOpening) {
                // Prevent touch scrolling but keep scrollbar visible
                document.body.classList.add("touch-none");
                userInput.focus();
                scrollToBottom();
            } else {
                // Restore scrolling
                document.body.classList.remove("touch-none");
            }
        };
    
        chatbotButton.addEventListener('click', toggleChat);
        closeButton.addEventListener('click', toggleChat);
    
        const sendMessage = async () => {
            const message = userInput.value.trim();
            if (!message) return;
    
            // Always display the user's message
            addMessage(message, 'user');
            userInput.value = '';
    
            // Keywords for travel and general conversation
            const relevantKeywords = [
              // Travel-related keywords
              "travel", "trip", "vacation", "flight", "tour", "hotel", "destination", "tourist", "sightseeing",
              "adventure", "explore", "journey", "itinerary", "passport", "visa", "resort", "cruise", "backpacking",
              "safari", "excursion", "holiday", "expedition", "road trip", "package", "getaway", "booking", "accommodation",
              
              // General greetings and conversation keywords
              "hi", "hello", "hey", "how are you", "good morning", "good evening", "thank you", "bye", "goodbye",
              "welcome", "greetings", "what's up", "howdy", "salutations", "nice to meet you", "hey there", "good day", "hi there", "how are you doing"
            ];
            
            const isRelevant = relevantKeywords.some(keyword => message.toLowerCase().includes(keyword));
            
            if (!isRelevant) {
                // If not relevant, display fallback answer and exit
                addMessage("I do not have information about this topic.", "bot");
                userInput.disabled = false;
                userInput.focus();
                return;
            }
    
            // If relevant, disable input while fetching response
            userInput.disabled = true;
            try {
                const loadingId = addMessage('Typing...', 'bot', true);
                const result = await model.generateContentStream(message);
                removeMessage(loadingId);
    
                const responseId = addMessage('', 'bot');
                let fullResponse = '';
    
                // Stream the answer from the API
                for await (const chunk of result.stream) {
                    const chunkText = chunk.text();
                    fullResponse += chunkText;
                    updateMessage(responseId, fullResponse);
                    scrollToBottom();
                }
    
                // Once full response is received, format it before final update
                const formattedResponse = formatResponse(fullResponse);
                updateMessage(responseId, formattedResponse);
            } catch (error) {
                addMessage(`Error: ${error.message}`, 'bot');
            }
    
            userInput.disabled = false;
            userInput.focus();
        };
    
        let messageCounter = 0;
        const addMessage = (text, sender, isTemp = false) => {
            const id = `msg-${messageCounter++}`;
            const messageDiv = document.createElement('div');
            messageDiv.id = id;
            messageDiv.className = `flex justify-${sender === 'user' ? 'end' : 'start'} mb-2`;
            
            messageDiv.innerHTML = `
                <div class="max-w-[90%] md:max-w-[80%] rounded-xl p-3 shadow-sm text-sm md:text-base ${
                    sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-white'
                } ${isTemp ? 'opacity-50 italic' : ''}">
                    ${text}
                </div>
            `;
    
            chatMessages.appendChild(messageDiv);
            scrollToBottom();
            return id;
        };
    
        const updateMessage = (id, newText) => {
            const messageDiv = document.getElementById(id);
            if (messageDiv) {
                // Use innerHTML so that formatted HTML is rendered
                messageDiv.querySelector('div').innerHTML = newText;
                scrollToBottom();
            }
        };
    
        const removeMessage = (id) => {
            document.getElementById(id)?.remove();
        };
    
        const scrollToBottom = () => {
            setTimeout(() => {
                chatMessages.scrollTo({
                    top: chatMessages.scrollHeight,
                    behavior: "smooth"
                });
            }, 100);
        };
    
        // Helper function to format response text into paragraphs
        const formatResponse = (text) => {
            return text
                .split("\n")
                .filter(line => line.trim() !== "")
                .map(line => `<p>${line.trim()}</p>`)
                .join("");
        };
    
        // Event listeners for sending message
        sendButton.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => e.key === 'Enter' && sendMessage());
    });
    
    






















    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
    });