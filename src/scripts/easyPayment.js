export const initEasyPayment = () => {
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
}