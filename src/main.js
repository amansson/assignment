import { zipCodes, messages } from './data';
const zipCodeInput = document.querySelector("#zipcode");
const submitBtn = document.querySelector("#submit-button");
const link = document.querySelector(".link");
const loading = document.querySelector(".loading");
const resultTitle = document.querySelector(".result-title");
const form = document.querySelector(".form");
const result = document.querySelector(".result");
const status = document.querySelector(".status");
const error = document.querySelector(".error");
let zipcode = "";

const getZipCodeInfo = () => {
   const { online, store } = zipCodes;
   const parsedZipCode = parseInt(zipcode);
   let isAvailableOnline = false;
   let isAvailableInStore = false;
   if (online.indexOf(parsedZipCode) !== -1) {
      isAvailableOnline = true;
   }
   if (store.indexOf(parsedZipCode) !== -1) {
      isAvailableInStore = true;
   }
   return { isAvailableOnline, isAvailableInStore };

}

const getStatus = (isOnline, isAtStore) => {
   let availabilityText = "";
   if (isOnline) {
      availabilityText = `<span class="available"></span>${messages.online}${isAtStore && "<br>"}`;
   }
   if (isAtStore) {
      availabilityText += `<span class="available"></span>${messages.store}`
   }
   else {
      availabilityText = `<span class="not-available"></span>${messages.not_deliverable}`;
   }
   status.innerHTML = availabilityText
}

zipCodeInput.addEventListener("input", function (e) {
   if (isNaN(e.target.value)) {
      e.target.value = e.target.value.replace(/\D/g, '');
   }
})

zipCodeInput.addEventListener('keydown', (e) => {
   const length = e.target.value.length;
   const charCode = e.which ? e.which : e.keyCode;
   if (length >= 5) {
      if (!(charCode == 8 || charCode == 9 || charCode == 27 || charCode == 46 || (charCode >= 35 && charCode <= 40))) {
         e.preventDefault();
      }
   }
   else {
      if (charCode == 109 || charCode == 110) {
         e.preventDefault();
      }
   }
});

zipCodeInput.addEventListener('keyup', (e) => {
   const value = e.target.value;
   const length = value.length;

   if (length < 5) {
      zipCodeInput.classList.remove("valid");
      submitBtn.disabled = true;
      submitBtn.classList.remove("enabled");
   }
   else if (length === 5) {
      zipCodeInput.classList.add("valid");
      submitBtn.disabled = false;
      submitBtn.classList.add("enabled");
      zipcode = value;
      error.innerText = "";
   }
});

zipCodeInput.addEventListener('paste', (e) => {
   let value = e.clipboardData.getData("text");
   if (value.length > 5) {
      e.preventDefault();
      error.innerText = "Zipcode incorrect, it should be 5 digits only"
   } else {
      error.innerText = "";
   }

})

submitBtn.addEventListener('click', () => {
   loading.style.display = "flex";
   form.style.display = "none";

   const { isAvailableOnline, isAvailableInStore } = getZipCodeInfo();
   getStatus(isAvailableOnline, isAvailableInStore);

   setTimeout(() => {
      loading.style.display = "none";
      resultTitle.innerText = `Here is the information we found for Zipcode number ${zipcode}:`;
      result.style.display = "block";
   }, 3000);

})

link.addEventListener('click', () => {
   // resultTitle.innerText = "";
   result.style.display = "none";
   form.style.display = "block";
})

