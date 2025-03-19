export const initFooter = () => {
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
}