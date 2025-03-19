export const initFilterCards = () => {
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
}