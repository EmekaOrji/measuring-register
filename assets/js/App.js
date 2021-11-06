import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());

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

  changeUnit() {
    const units = document.querySelectorAll(".measuring_unit");
    const headUnit = document.querySelectorAll("span[class*='header_unit']");
    this.textContent === "cm" ? this.textContent = "inch" : this.textContent = "cm";
    units.forEach(e => e.textContent = this.textContent);
    headUnit.forEach(e => e.textContent = this.textContent);
  }

  togglePane(x) {
    this.checked ? x.currentTarget.myArg.classList.add("tuckout") : x.currentTarget.myArg.classList.remove("tuckout");
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
          name: "",
          address: "",
          currentDate: newToday.slice(0, -8),
          price: "",
          advancePayment: "",
          balance: "",
          dueDate: newToday.slice(0, -14),
          phone: "",
          yardAmount: "",
          imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersafari.com%2Fcool-cat-hd-wallpaper%2F&psig=AOvVaw0wflQqmXIQEtAEZiCn3TnC&ust=1634905683014000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDel7rA2_MCFQAAAAAdAAAAABAD",
          blouseLenth: "",
          blouseBurst: "",
          blouseUpperBurst: "",
          blouseLowerBurst: "",
          blouseRoundLowerBurst: "",
          blouseWaist: "",
          blouseShoulder: "",
          blouseHip: "",
          blouseThirdQuarterLength: "",
          blouseHalfLength: "",
          blouseSleeve: "",
          blouseRoundSleeve: "",
          blouseNeck: "",
          gownLenth: "",
          gownBurst: "",
          gownUpperBurst: "",
          gownLowerBurst: "",
          gownRoundLowerBurst: "",
          gownWaist: "",
          gownShoulder: "",
          gownHip: "",
          gownThirdQuarterLength: "",
          gownHalfLength: "",
          gownSleeve: "",
          gownRoundSleeve: "",
          gownNeck: "",
          skirtLenth: "",
          skirtHalfLength: "",
          skirtWaist: "",
          skirtHip: "",
          trouserLenth: "",
          trouserWaist: "",
          trouserThight: "",
          trouserKnee: "",
          trouserCalf: "",
          trouserAnkle: "",
          trouserFlap: "",
        };
        
        NotesAPI.saveProfile(newProfile);
        this._refreshProfiles();
        this._setActiveProfile(newProfile);
      },
      onNoteEdit: (
        name,
        address,
        currentDate,
        price,
        advancePayment,
        balance,
        dueDate,
        phone,
        yardAmount,
        imageURL,
        blouseLenth,
        blouseBurst,
        blouseUpperBurst,
        blouseLowerBurst,
        blouseRoundLowerBurst,
        blouseWaist,
        blouseShoulder,
        blouseHip,
        blouseThirdQuarterLength,
        blouseHalfLength,
        blouseSleeve,
        blouseRoundSleeve,
        blouseNeck,
        gownLenth,
        gownBurst,
        gownUpperBurst,
        gownLowerBurst,
        gownRoundLowerBurst,
        gownWaist,
        gownShoulder,
        gownHip,
        gownThirdQuarterLength,
        gownHalfLength,
        gownSleeve,
        gownRoundSleeve,
        gownNeck,
        skirtLenth,
        skirtHalfLength,
        skirtWaist,
        skirtHip,
        trouserLenth,
        trouserWaist,
        trouserThight,
        trouserKnee,
        trouserCalf,
        trouserAnkle,
        trouserFlap
      ) => {
        NotesAPI.saveProfile({
          id: this.activeNote.id,
          name,
          address,
          currentDate,
          price,
          advancePayment,
          balance,
          dueDate,
          phone,
          yardAmount,
          imageURL,
          blouseLenth,
          blouseBurst,
          blouseUpperBurst,
          blouseLowerBurst,
          blouseRoundLowerBurst,
          blouseWaist,
          blouseShoulder,
          blouseHip,
          blouseThirdQuarterLength,
          blouseHalfLength,
          blouseSleeve,
          blouseRoundSleeve,
          blouseNeck,
          gownLenth,
          gownBurst,
          gownUpperBurst,
          gownLowerBurst,
          gownRoundLowerBurst,
          gownWaist,
          gownShoulder,
          gownHip,
          gownThirdQuarterLength,
          gownHalfLength,
          gownSleeve,
          gownRoundSleeve,
          gownNeck,
          skirtLenth,
          skirtHalfLength,
          skirtWaist,
          skirtHip,
          trouserLenth,
          trouserWaist,
          trouserThight,
          trouserKnee,
          trouserCalf,
          trouserAnkle,
          trouserFlap
        });

        this._refreshProfiles();
      },
      onNoteDelete: (id) => {
        NotesAPI.deleteNote(id);

        this._refreshProfiles();
        this._setActiveProfile();
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