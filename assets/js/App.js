import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());

    NotesAPI.deleteNote(3841773448);

    this._refreshProfiles();
  }

  _refreshProfiles() {
    const profiles = NotesAPI.getAllProfiles();

    this._setProfiles(profiles);
  }

  _setProfiles(profiles) {
    this.notes = profiles;
    this.view.updateProfileList(profiles);
  }
  
  _setActiveProfile(profile) {
    this.activeNote = profile;
    this.view.updateViewVisibility(this.activeNote);
    this.view.setActiveProfile(profile);
  }

  _handlers() {
    return {
      onNoteSelect: id => {
        const selectedProfile = this.notes.find(profile => profile.id == id);
        this._setActiveProfile(selectedProfile);
      },
      onNoteAdd: () => {
        const today = new Date();
        today.setHours(today.getHours() + 1);
        const newToday = today.toISOString();
        console.log(newToday);
        const newProfile = {
          id: 7746391899,
          name: "Emeka Orji",
          address: "6, Popoola Street",
          currentDate: newToday.slice(0, -8),
          price: 500,
          advancePayment: 300,
          balance: 200,
          dueDate: newToday.slice(0, -14),
          phone: "09033661958",
          yardAmount: 3,
          imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersafari.com%2Fcool-cat-hd-wallpaper%2F&psig=AOvVaw0wflQqmXIQEtAEZiCn3TnC&ust=1634905683014000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDel7rA2_MCFQAAAAAdAAAAABAD",
          blouse: {
            lenth: 34,
            burst: 40,
            upperBurst: 35,
            lowerBurst: 34,
            roundLowerBurst: 30,
            waist: 29,
            shoulder: 18,
            hip: 38,
            thirdQuarterLength: 39,
            halfLength: 33,
            sleeve: 25,
            roundSleeve: "13",
            neck: 16,
          },
          gown: {
            lenth: 41,
            burst: 40,
            upperBurst: 35,
            lowerBurst: 34,
            roundLowerBurst: 30,
            waist: 29,
            shoulder: 18,
            hip: 38,
            thirdQuarterLength: 39,
            halfLength: 33,
            sleeve: 25,
            roundSleeve: "13",
            neck: 16,
          },
          skirt: {
            lenth: 38,
            halfLength: 22,
            waist: 29,
            hip: 38,
          },
          trouser: {
            lenth: 37.5,
            waist: 29,
            thight: 22,
            knee: 16,
            calf: 15,
            ankle: 13,
            flap: 11,
          },
        };
        // console.log(newProfile.currentDate);

        NotesAPI.saveProfile(newProfile);
        this._refreshProfiles();
      },
      onNoteEdit: (
        newName,
        newAddress,
        newDate,
        newPrice,
        newAdvancePayment,
        newBalance,
        newDueDate,
        newPhone,
        newYardAmount,
        newImageURL,
        newBlouseLength,
        newBlouseBurst,
        newBlouseUpperBurst,
        newBlouseLowerBurst,
        newBlouseRoundLowerBurst,
        newBlouseWaist,
        newBlouseShoulder,
        newBlouseHip,
        newBlouseThirdQuarterLength,
        newBlouseHalfLength,
        newBlouseSleeve,
        newBlouseRoundSleeve,
        newBlouseNeck,
        newGownLength,
        newGownBurst,
        newGownUpperBurst,
        newGownLowerBurst,
        newGownRoundLowerBurst,
        newGownWaist,
        newGownShoulder,
        newGownHip,
        newGownThirdQuarterLength,
        newGownHalfLength,
        newGownSleeve,
        newGownRoundSleeve,
        newGownNeck,
        newSkirtLength,
        newSkirtHalfLength,
        newSkirtWaist,
        newSkirtHip,
        newTrouserLength,
        newTrouserWaist,
        newTrouserThight,
        newTrouserKnee,
        newTrouserCalf,
        newTrouserAnkle,
        newTrouserFlap
      ) => {
        console.log("Note is being edited");
        console.log(newName);
        console.log(newAddress);
        console.log(newDate);
        console.log(newPrice);
        console.log(newAdvancePayment);
        console.log(newBalance);
        console.log(newDueDate);
        console.log(newPhone);
        console.log(newYardAmount);
        console.log(newImageURL);
        console.log(newBlouseLength);
        console.log(newBlouseBurst);
        console.log(newBlouseUpperBurst);
        console.log(newBlouseLowerBurst);
        console.log(newBlouseRoundLowerBurst);
        console.log(newBlouseWaist);
        console.log(newBlouseShoulder);
        console.log(newBlouseHip);
        console.log(newBlouseThirdQuarterLength);
        console.log(newBlouseHalfLength);
        console.log(newBlouseSleeve);
        console.log(newBlouseRoundSleeve);
        console.log(newBlouseNeck);
        console.log(newGownLength);
        console.log(newGownBurst);
        console.log(newGownUpperBurst);
        console.log(newGownLowerBurst);
        console.log(newGownRoundLowerBurst);
        console.log(newGownWaist);
        console.log(newGownShoulder);
        console.log(newGownHip);
        console.log(newGownThirdQuarterLength);
        console.log(newGownHalfLength);
        console.log(newGownSleeve);
        console.log(newGownRoundSleeve);
        console.log(newGownNeck);
        console.log(newSkirtLength);
        console.log(newSkirtHalfLength);
        console.log(newSkirtWaist);
        console.log(newSkirtHip);
        console.log(newTrouserLength);
        console.log(newTrouserWaist);
        console.log(newTrouserThight);
        console.log(newTrouserKnee);
        console.log(newTrouserCalf);
        console.log(newTrouserAnkle);
        console.log(newTrouserFlap);
      },
      onNoteDelete: (id) => {
        console.log("Note " + id + " has been deleted");
      },
      setUpImagePreview: () => { // THIS CODE IS FOR USING THE LIGHTBOX FRAMEWORK ON THE IMAGES SELECTED. IT IS SIMPLY FOR PREVIEW OF IMAGES UPLOADED
        const imageSpace = this.root.querySelector("#imageSpace");
        const imageInput = this.root.querySelector("#image");
        const file = imageInput.files;
        if (file) {
          for (const i of file) {
            const reader = new FileReader();
            let imagePreview = document.createElement("img");
            let largeImage = document.createElement("a");
            largeImage.appendChild(imagePreview);
            reader.onload = function (e) {
              imagePreview.setAttribute("src", e.target.result);
              largeImage.setAttribute("href", e.target.result);
              largeImage.setAttribute("data-lightbox", "mygallery");
            }
            imageSpace.prepend(largeImage);
            reader.readAsDataURL(i);
          }
        }
        let image = document.querySelectorAll("a");
        for (const e of image) {
          var removeBtn = document.createElement("div");
          removeBtn.textContent = "Remove";
          removeBtn.classList.add("remove_button");
          e.appendChild(removeBtn);
          removeBtn.addEventListener("click", function () {
            var a = this.parentNode;
            a.parentNode.removeChild(e);
          });
        }
      },
      setUpMeasuringUnits: () => { // THIS CODE IS FOR TOGGLING INCHES AND CENTIMETRES (MEASURING UNITS)
        const units = document.querySelectorAll(".measuring_unit");
        const headUnit = document.querySelectorAll("span[class*='header_unit']");
        const blouseHeadUnit = document.querySelector(".blouse_header_unit");
        const gownHeadUnit = document.querySelector(".gown_header_unit");
        const skirtHeadUnit = document.querySelector(".skirt_header_unit");
        const trouserHeadUnit = document.querySelector(".trouser_header_unit");
        headUnit.forEach(e => e.textContent = "inch");
        units.forEach(e => {
          e.textContent = "inch";
          e.addEventListener("click", function() {
            this.textContent === "cm" ? this.textContent = "inch" : this.textContent = "cm";
          });
        });
        const allHeadUnits = [blouseHeadUnit, gownHeadUnit, skirtHeadUnit, trouserHeadUnit];
        allHeadUnits.forEach(e => e.addEventListener("click", this.changeUnit));
      },
      toggleMeasurements: () => { // THIS CODE IS FOR THE TOGGLING OF THE MEASUREMENT INPUT SECTIONS FOR THE DIFFERENT STYLES
        const inputCheckers = document.querySelectorAll(".checkInputs");
        const clothesPane = document.querySelectorAll(".measurements_pane");
        inputCheckers.forEach((e, i) => {
          e.myArg = clothesPane[i];
          e.addEventListener("change", this.togglePane, false);
        });
      },
      onInputFocus: () => { // THIS CODE IS FOR THE FOCUS BOX-SHADOW EFFECRS ON THE REGISTRATION INPUT BOXES
        const textInput = document.querySelectorAll(".text_inputs");
        textInput.forEach(e => {
          e.addEventListener("focus", () => e.parentElement.style.boxShadow = "0em .1em .3em #00008b66");
          e.addEventListener("blur", () => e.parentElement.style.boxShadow = "");
        });
      }
    }
  }
}