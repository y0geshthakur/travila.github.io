export const initTrendingDestinations = () => {
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
}