export default class NotesView {
  constructor(root, {
    onNoteSelect,
    onNoteAdd,
    onNoteEdit,
    onNoteDelete,
    setUpImagePreview,
    setUpMeasuringUnits,
    toggleMeasurements,
    onInputFocus
  } = {}) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.setUpImagePreview = setUpImagePreview;
    this.setUpMeasuringUnits = setUpMeasuringUnits;
    this.toggleMeasurements = toggleMeasurements;
    this.onInputFocus = onInputFocus;
    this.root.innerHTML = `
      <div class="profile_preview_pane">
      </div>
      <div class="profile_view_pane">
        <div class="name_container input_container"><input type="text" name="Name" id="name" class="profile_inputs" placeholder="Customer's Name"><label for="name" class="label">Name</label></div>
        <div class="address_container input_container"><input type="text" name="Address" id="address" class="profile_inputs"><label for="address" class="label">Address</label></div>
        <div class="date_container input_container"><input type="datetime-local" name="Date" id="date" class="profile_inputs"><label for="date" class="label">Date/Time</label></div>
        <div class="price_container input_container"><input type="number" name="Price" id="price" class="profile_inputs"><label for="price" class="label">Price</label></div>
        <div class="advance_container input_container"><input type="number" name="Advance" id="advance" class="profile_inputs"><label for="advance" class="label">Advance</label></div>
        <div class="balance_container input_container"><input type="number" name="Balance" id="balance" class="profile_inputs"><label for="balance" class="label">Balance</label></div>
        <div class="duedate_container input_container"><input type="date" name="Duedate" id="dueDate" class="profile_inputs"><label for="duedate" class="label">Collection Date</label></div>
        <div class="phone_container input_container"><input type="tel" name="Phone" id="phone" class="profile_inputs"><label for="phone" class="label">Phone</label></div>
        <div class="yardamount_container input_container"><input type="number" name="YardAmount" id="yardAmount" class="profile_inputs"><label for="phone" class="label">No. of Yards</label></div>
        <div class="image_container input_container">
          <div id="imageSpace"></div>
          <input type="file" name="Image" id="image" class="inputs" multiple accept="image/*"><label for="image" class="label">Upload Design</label>
        </div>
        <div class="style_container input_container">
          <div class="style"><label for="blouse" class="checkbox_label"><input type="checkbox" name="Blouse" id="blouse" class="inputs checkInputs"><span class="check_span">Blouse</span></label></div>
          <div class="style"><label for="gown" class="checkbox_label"><input type="checkbox" name="Gown" id="gown" class="inputs checkInputs"><span class="check_span">Gown</span></label></div>
          <div class="style"><label for="skirt" class="checkbox_label"><input type="checkbox" name="Skirt" id="skirt" class="inputs checkInputs"><span class="check_span">Skirt</span></label></div>
          <div class="style"><label for="trouser" class="checkbox_label"><input type="checkbox" name="Trouser" id="trouser" class="inputs checkInputs"><span class="check_span">Trouser</span></label></div>
        </div>
        <div class="measurements_pane">
          <div class="measurements_headers"><h2>Blouse Measurements</h2><span class="blouse_header_unit"></span></div>
          <div class="measurements_container">
            <label class="measurements_label"><span class="measurements_label_text">Length:&nbsp;</span><input type="number" name="Length" id="blouseLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Burst:&nbsp;</span><input type="number" name="Burst" id="blouseBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Upper Burst:&nbsp;</span><input type="number" name="UpperBurst" id="blouseUpperBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Lower Burst:&nbsp;</span><input type="number" name="LowerBurst" id="blouseLowerBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Round Lower Burst:&nbsp;</span><input type="number" name="RoundLowerBurst" id="blouseRoundLowerBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Waist:&nbsp;</span><input type="number" name="Waist" id="blouseWaist" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Shoulder:&nbsp;</span><input type="number" name="Shoulder" id="blouseShoulder" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Hip:&nbsp;</span><input type="number" name="Hip" id="blouseHip" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">3/4 Length:&nbsp;</span><input type="number" name="ThirdQuarterLength" id="blouseThirdQuarterLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Half Length:&nbsp;</span><input type="number" name="HalfLength" id="blouseHalfLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Sleeve:&nbsp;</span><input type="number" name="Sleeve" id="blouseSleeve" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Round Sleeve:&nbsp;</span><input type="number" name="RoundSleeve" id="blouseRoundSleeve" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Neck:&nbsp;</span><input type="number" name="Neck" id="blouseNeck" class="measurements_inputs"><span class="measuring_unit"></span></label>
          </div>
        </div>
        <div class="measurements_pane">
          <div class="measurements_headers"><h2>Gown Measurements</h2><span class="gown_header_unit"></span></div>
          <div class="measurements_container">
            <label class="measurements_label"><span class="measurements_label_text">Length:&nbsp;</span><input type="number" name="Length" id="gownLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Burst:&nbsp;</span><input type="number" name="Burst" id="gownBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Upper Burst:&nbsp;</span><input type="number" name="UpperBurst" id="gownUpperBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Lower Burst:&nbsp;</span><input type="number" name="LowerBurst" id="gownLowerBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Round Lower Burst:&nbsp;</span><input type="number" name="RoundLowerBurst" id="gownRoundLowerBurst" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Waist:&nbsp;</span><input type="number" name="Waist" id="gownWaist" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Shoulder:&nbsp;</span><input type="number" name="Shoulder" id="gownShoulder" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Hip:&nbsp;</span><input type="number" name="Hip" id="gownHip" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">3/4 Length:&nbsp;</span><input type="number" name="ThirdQuarterLength" id="gownThirdQuarterLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Half Length:&nbsp;</span><input type="number" name="HalfLength" id="gownHalfLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Sleeve:&nbsp;</span><input type="number" name="Sleeve" id="gownSleeve" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Round Sleeve:&nbsp;</span><input type="number" name="RoundSleeve" id="gownRoundSleeve" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Neck:&nbsp;</span><input type="number" name="Neck" id="gownNeck" class="measurements_inputs"><span class="measuring_unit"></span></label>
          </div>
        </div>
        <div class="measurements_pane">
          <div class="measurements_headers"><h2>Skirt Measurements</h2><span class="skirt_header_unit"></span></div>
          <div class="measurements_container">
            <label class="measurements_label"><span class="measurements_label_text">Length:&nbsp;</span><input type="number" name="Length" id="skirtLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Half Length:&nbsp;</span><input type="number" name="HalfLength" id="skirtHalfLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Waist:&nbsp;</span><input type="number" name="Waist" id="skirtWaist" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Hip:&nbsp;</span><input type="number" name="Hip" id="skirtHip" class="measurements_inputs"><span class="measuring_unit"></span></label>
          </div>
        </div>
        <div class="measurements_pane">
          <div class="measurements_headers"><h2>Trouser Measurements</h2><span class="trouser_header_unit"></span></div>
          <div class="measurements_container">
            <label class="measurements_label"><span class="measurements_label_text">Length:&nbsp;</span><input type="number" name="Length" id="trouserLength" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Waist:&nbsp;</span><input type="number" name="Waist" id="trouserWaist" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Thight:&nbsp;</span><input type="number" name="Thight" id="trouserThight" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Knee:&nbsp;</span><input type="number" name="Knee" id="trouserKnee" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Calf:&nbsp;</span><input type="number" name="Calf" id="trouserCalf" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Ankle:&nbsp;</span><input type="number" name="Ankle" id="trouserAnkle" class="measurements_inputs"><span class="measuring_unit"></span></label>
            <label class="measurements_label"><span class="measurements_label_text">Flap:&nbsp;</span><input type="number" name="Flap" id="trouserFlap" class="measurements_inputs"><span class="measuring_unit"></span></label>
          </div>
        </div>
      </div>
      <button class="add_profile"><img src="media/drawing.svg" id="addIcon" alt="Plus"></button>
    `;

    const addButton = this.root.querySelector(".add_profile");
    const imageInput = this.root.querySelector("#image");

    ///////////////////////////
    const nameInput = this.root.querySelector("#name");
    const addressInput = this.root.querySelector("#address");
    const currentDateInput = this.root.querySelector("#date");
    const priceInput = this.root.querySelector("#price");
    const advancePaymentInput = this.root.querySelector("#advance");
    const balanceInput = this.root.querySelector("#balance");
    const dueDateInput = this.root.querySelector("#dueDate");
    const phoneInput = this.root.querySelector("#phone");
    const yardAmountInput = this.root.querySelector("#yardAmount");
    const imageURLInput = this.root.querySelector("#image");
    const blouseLengthInput = this.root.querySelector("#blouseLength");
    const blouseBurstInput = this.root.querySelector("#blouseBurst");
    const blouseUpperBurstInput = this.root.querySelector("#blouseUpperBurst");
    const blouseLowerBurstInput = this.root.querySelector("#blouseLowerBurst");
    const blouseRoundLowerBurstInput = this.root.querySelector("#blouseRoundLowerBurst");
    const blouseWaistInput = this.root.querySelector("#blouseWaist");
    const blouseShoulderInput = this.root.querySelector("#blouseShoulder");
    const blouseHipInput = this.root.querySelector("#blouseHip");
    const blouseThirdQuarterLengthInput = this.root.querySelector("#blouseThirdQuarterLength");
    const blouseHalfLengthInput = this.root.querySelector("#blouseHalfLength");
    const blouseSleeveInput = this.root.querySelector("#blouseSleeve");
    const blouseRoundSleeveInput = this.root.querySelector("#blouseRoundSleeve");
    const blouseNeckInput = this.root.querySelector("#blouseNeck");
    const gownLengthInput = this.root.querySelector("#gownLength");
    const gownBurstInput = this.root.querySelector("#gownBurst");
    const gownUpperBurstInput = this.root.querySelector("#gownUpperBurst");
    const gownLowerBurstInput = this.root.querySelector("#gownLowerBurst");
    const gownRoundLowerBurstInput = this.root.querySelector("#gownRoundLowerBurst");
    const gownWaistInput = this.root.querySelector("#gownWaist");
    const gownShoulderInput = this.root.querySelector("#gownShoulder");
    const gownHipInput = this.root.querySelector("#gownHip");
    const gownThirdQuarterLengthInput = this.root.querySelector("#gownThirdQuarterLength");
    const gownHalfLengthInput = this.root.querySelector("#gownHalfLength");
    const gownSleeveInput = this.root.querySelector("#gownSleeve");
    const gownRoundSleeveInput = this.root.querySelector("#gownRoundSleeve");
    const gownNeckInput = this.root.querySelector("#gownNeck");
    const skirtLengthInput = this.root.querySelector("#skirtLength");
    const skirtHalfLengthInput = this.root.querySelector("#skirtHalfLength");
    const skirtWaistInput = this.root.querySelector("#skirtWaist");
    const skirtHipInput = this.root.querySelector("#skirtHip");
    const trouserLengthInput = this.root.querySelector("#trouserLength");
    const trouserWaistInput = this.root.querySelector("#trouserWaist");
    const trouserThightInput = this.root.querySelector("#trouserThight");
    const trouserKneeInput = this.root.querySelector("#trouserKnee");
    const trouserCalfInput = this.root.querySelector("#trouserCalf");
    const trouserAnkleInput = this.root.querySelector("#trouserAnkle");
    const trouserFlapInput = this.root.querySelector("#trouserFlap");
    /////////////////////////////

    const profileInputs = [
      nameInput,
      addressInput,
      currentDateInput,
      priceInput,
      advancePaymentInput,
      balanceInput,
      dueDateInput,
      phoneInput,
      yardAmountInput,
      imageURLInput,
      blouseLengthInput,
      blouseBurstInput,
      blouseUpperBurstInput,
      blouseLowerBurstInput,
      blouseRoundLowerBurstInput,
      blouseWaistInput,
      blouseShoulderInput,
      blouseHipInput,
      blouseThirdQuarterLengthInput,
      blouseHalfLengthInput,
      blouseSleeveInput,
      blouseRoundSleeveInput,
      blouseNeckInput,
      gownLengthInput,
      gownBurstInput,
      gownUpperBurstInput,
      gownLowerBurstInput,
      gownRoundLowerBurstInput,
      gownWaistInput,
      gownShoulderInput,
      gownHipInput,
      gownThirdQuarterLengthInput,
      gownHalfLengthInput,
      gownSleeveInput,
      gownRoundSleeveInput,
      gownNeckInput,
      skirtLengthInput,
      skirtHalfLengthInput,
      skirtWaistInput,
      skirtHipInput,
      trouserLengthInput,
      trouserWaistInput,
      trouserThightInput,
      trouserKneeInput,
      trouserCalfInput,
      trouserAnkleInput,
      trouserFlapInput
    ];

    addButton.addEventListener("click", () => {
      this.onNoteAdd();
    });

    profileInputs.forEach(e => e.addEventListener("input", () => {
      const updatedName = nameInput.value.trim();
      const updatedAddress = addressInput.value.trim();
      const updatedDate = currentDateInput.value.trim();
      const updatedPrice = priceInput.value.trim();
      const updatedAdvancePayment = advancePaymentInput.value.trim();
      const updatedBalance = balanceInput.value.trim();
      const updatedDueDate = dueDateInput.value.trim();
      const updatedPhone = phoneInput.value.trim();
      const updatedYardAmount = yardAmountInput.value.trim();
      const updatedImageURL = imageURLInput.value.trim();
      const updatedBlouseLength = blouseLengthInput.value.trim();
      const updatedBlouseBurst = blouseBurstInput.value.trim();
      const updatedBlouseUpperBurst = blouseUpperBurstInput.value.trim();
      const updatedBlouseLowerBurst = blouseLowerBurstInput.value.trim();
      const updatedBlouseRoundLowerBurst = blouseRoundLowerBurstInput.value.trim();
      const updatedBlouseWaist = blouseWaistInput.value.trim();
      const updatedBlouseShoulder = blouseShoulderInput.value.trim();
      const updatedBlouseHip = blouseHipInput.value.trim();
      const updatedBlouseThirdQuarterLength = blouseThirdQuarterLengthInput.value.trim();
      const updatedBlouseHalfLength = blouseHalfLengthInput.value.trim();
      const updatedBlouseSleeve = blouseSleeveInput.value.trim();
      const updatedBlouseRoundSleeve = blouseRoundSleeveInput.value.trim();
      const updatedBlouseNeck = blouseNeckInput.value.trim();
      const updatedGownLength = gownLengthInput.value.trim();
      const updatedGownBurst = gownBurstInput.value.trim();
      const updatedGownUpperBurst = gownUpperBurstInput.value.trim();
      const updatedGownLowerBurst = gownLowerBurstInput.value.trim();
      const updatedGownRoundLowerBurst = gownRoundLowerBurstInput.value.trim();
      const updatedGownWaist = gownWaistInput.value.trim();
      const updatedGownShoulder = gownShoulderInput.value.trim();
      const updatedGownHip = gownHipInput.value.trim();
      const updatedGownThirdQuarterLength = gownThirdQuarterLengthInput.value.trim();
      const updatedGownHalfLength = gownHalfLengthInput.value.trim();
      const updatedGownSleeve = gownSleeveInput.value.trim();
      const updatedGownRoundSleeve = gownRoundSleeveInput.value.trim();
      const updatedGownNeck = gownNeckInput.value.trim();
      const updatedSkirtLength = skirtLengthInput.value.trim();
      const updatedSkirtHalfLength = skirtHalfLengthInput.value.trim();
      const updatedSkirtWaist = skirtWaistInput.value.trim();
      const updatedSkirtHip = skirtHipInput.value.trim();
      const updatedTrouserLength = trouserLengthInput.value.trim();
      const updatedTrouserWaist = trouserWaistInput.value.trim();
      const updatedTrouserThight = trouserThightInput.value.trim();
      const updatedTrouserKnee = trouserKneeInput.value.trim();
      const updatedTrouserCalf = trouserCalfInput.value.trim();
      const updatedTrouserAnkle = trouserAnkleInput.value.trim();
      const updatedTrouserFlap = trouserFlapInput.value.trim();

      this.onNoteEdit(
        updatedName,
        updatedAddress,
        updatedDate,
        updatedPrice,
        updatedAdvancePayment,
        updatedBalance,
        updatedDueDate,
        updatedPhone,
        updatedYardAmount,
        updatedImageURL,
        updatedBlouseLength,
        updatedBlouseBurst,
        updatedBlouseUpperBurst,
        updatedBlouseLowerBurst,
        updatedBlouseRoundLowerBurst,
        updatedBlouseWaist,
        updatedBlouseShoulder,
        updatedBlouseHip,
        updatedBlouseThirdQuarterLength,
        updatedBlouseHalfLength,
        updatedBlouseSleeve,
        updatedBlouseRoundSleeve,
        updatedBlouseNeck,
        updatedGownLength,
        updatedGownBurst,
        updatedGownUpperBurst,
        updatedGownLowerBurst,
        updatedGownRoundLowerBurst,
        updatedGownWaist,
        updatedGownShoulder,
        updatedGownHip,
        updatedGownThirdQuarterLength,
        updatedGownHalfLength,
        updatedGownSleeve,
        updatedGownRoundSleeve,
        updatedGownNeck,
        updatedSkirtLength,
        updatedSkirtHalfLength,
        updatedSkirtWaist,
        updatedSkirtHip,
        updatedTrouserLength,
        updatedTrouserWaist,
        updatedTrouserThight,
        updatedTrouserKnee,
        updatedTrouserCalf,
        updatedTrouserAnkle,
        updatedTrouserFlap
      );
    }));

    this.updateViewVisibility(false);




    ///////////////////////////////////////////////////////////////////////////
    imageInput.addEventListener("change", () => {
      this.setUpImagePreview();
    });

    this.setUpMeasuringUnits();

    this.toggleMeasurements();

    this.onInputFocus();
  }
  _createPreviewHTML(id, name, currentDate, price, updated) {
    return `
      <div class="profile_preview" data-note-id="${id}">
        <h2 class="preview_name">${name}</h2>
        <div class="preview_body">
          <span class="hort_branding">House of Rhoda Treasures</span>
          <div class="preview_reg_date"><span class="material-icons">how_to_reg</span><span class="preview_reg_date_figure">${currentDate.toLocaleDateString(undefined, {month: "short", day: "numeric"})}</span></div>
          <div class="preview_price"><span class="preview_price_naira">&#8358</span><span class="preview_price_naira">${price}</span></div>
          <div class="preview_updated">Last edited at <span class="preview_updated_time">${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}</span></div>
        </div>
      </div>
    `;
  }
  updateProfileList(notes) {
    const previewPane = this.root.querySelector(".profile_preview_pane");
    previewPane.innerHTML = "";

    for (const note of notes) {
      const html = this._createPreviewHTML(note.id, note.name, new Date(note.currentDate), note.price, new Date(note.updated));
      previewPane.insertAdjacentHTML("beforeend", html);
    }

    previewPane.querySelectorAll(".profile_preview").forEach(card => {
      card.addEventListener("click", () => {
        this.onNoteSelect(card.dataset.noteId);
      });
      card.addEventListener("dblclick", () => {
        const doDelete = confirm("Do you really want to delete this profile?");
        if (doDelete) {
          this.onNoteDelete(card.dataset.noteId);
        }
      });
    });
  }
  setActiveProfile(card) {
    const nameInput = this.root.querySelector("#name");
    const addressInput = this.root.querySelector("#address");
    const currentDateInput = this.root.querySelector("#date");
    const priceInput = this.root.querySelector("#price");
    const advancePaymentInput = this.root.querySelector("#advance");
    const balanceInput = this.root.querySelector("#balance");
    const dueDateInput = this.root.querySelector("#dueDate");
    const phoneInput = this.root.querySelector("#phone");
    const yardAmountInput = this.root.querySelector("#yardAmount");
    const imageURLInput = this.root.querySelector("#image");
    const blouseLengthInput = this.root.querySelector("#blouseLength");
    const blouseBurstInput = this.root.querySelector("#blouseBurst");
    const blouseUpperBurstInput = this.root.querySelector("#blouseUpperBurst");
    const blouseLowerBurstInput = this.root.querySelector("#blouseLowerBurst");
    const blouseRoundLowerBurstInput = this.root.querySelector("#blouseRoundLowerBurst");
    const blouseWaistInput = this.root.querySelector("#blouseWaist");
    const blouseShoulderInput = this.root.querySelector("#blouseShoulder");
    const blouseHipInput = this.root.querySelector("#blouseHip");
    const blouseThirdQuarterLengthInput = this.root.querySelector("#blouseThirdQuarterLength");
    const blouseHalfLengthInput = this.root.querySelector("#blouseHalfLength");
    const blouseSleeveInput = this.root.querySelector("#blouseSleeve");
    const blouseRoundSleeveInput = this.root.querySelector("#blouseRoundSleeve");
    const blouseNeckInput = this.root.querySelector("#blouseNeck");
    const gownLengthInput = this.root.querySelector("#gownLength");
    const gownBurstInput = this.root.querySelector("#gownBurst");
    const gownUpperBurstInput = this.root.querySelector("#gownUpperBurst");
    const gownLowerBurstInput = this.root.querySelector("#gownLowerBurst");
    const gownRoundLowerBurstInput = this.root.querySelector("#gownRoundLowerBurst");
    const gownWaistInput = this.root.querySelector("#gownWaist");
    const gownShoulderInput = this.root.querySelector("#gownShoulder");
    const gownHipInput = this.root.querySelector("#gownHip");
    const gownThirdQuarterLengthInput = this.root.querySelector("#gownThirdQuarterLength");
    const gownHalfLengthInput = this.root.querySelector("#gownHalfLength");
    const gownSleeveInput = this.root.querySelector("#gownSleeve");
    const gownRoundSleeveInput = this.root.querySelector("#gownRoundSleeve");
    const gownNeckInput = this.root.querySelector("#gownNeck");
    const skirtLengthInput = this.root.querySelector("#skirtLength");
    const skirtHalfLengthInput = this.root.querySelector("#skirtHalfLength");
    const skirtWaistInput = this.root.querySelector("#skirtWaist");
    const skirtHipInput = this.root.querySelector("#skirtHip");
    const trouserLengthInput = this.root.querySelector("#trouserLength");
    const trouserWaistInput = this.root.querySelector("#trouserWaist");
    const trouserThightInput = this.root.querySelector("#trouserThight");
    const trouserKneeInput = this.root.querySelector("#trouserKnee");
    const trouserCalfInput = this.root.querySelector("#trouserCalf");
    const trouserAnkleInput = this.root.querySelector("#trouserAnkle");
    const trouserFlapInput = this.root.querySelector("#trouserFlap");
    nameInput.value = card.name;
    addressInput.value = card.address;
    currentDateInput.value = card.currentDate;
    priceInput.value = card.price;
    advancePaymentInput.value = card.advancePayment;
    balanceInput.value = card.balance;
    dueDateInput.value = card.dueDate;
    phoneInput.value = card.phone;
    yardAmountInput.value = card.yardAmount;
    // imageURLInput.value = card.imageURL;
    blouseLengthInput.value = card.blouseLenth;
    blouseBurstInput.value = card.blouseBurst;
    blouseUpperBurstInput.value = card.blouseUpperBurst;
    blouseLowerBurstInput.value = card.blouseLowerBurst;
    blouseRoundLowerBurstInput.value = card.blouseRoundLowerBurst;
    blouseWaistInput.value = card.blouseWaist;
    blouseShoulderInput.value = card.blouseShoulder;
    blouseHipInput.value = card.blouseHip;
    blouseThirdQuarterLengthInput.value = card.blouseThirdQuarterLength;
    blouseHalfLengthInput.value = card.blouseHalfLength;
    blouseSleeveInput.value = card.blouseSleeve;
    blouseRoundSleeveInput.value = card.blouseRoundSleeve;
    blouseNeckInput.value = card.blouseNeck;
    gownLengthInput.value = card.gownLenth;
    gownBurstInput.value = card.gownBurst;
    gownUpperBurstInput.value = card.gownUpperBurst;
    gownLowerBurstInput.value = card.gownLowerBurst;
    gownRoundLowerBurstInput.value = card.gownRoundLowerBurst;
    gownWaistInput.value = card.gownWaist;
    gownShoulderInput.value = card.gownShoulder;
    gownHipInput.value = card.gownHip;
    gownThirdQuarterLengthInput.value = card.gownThirdQuarterLength;
    gownHalfLengthInput.value = card.gownHalfLength;
    gownSleeveInput.value = card.gownSleeve;
    gownRoundSleeveInput.value = card.gownRoundSleeve;
    gownNeckInput.value = card.gownNeck;
    skirtLengthInput.value = card.skirtLenth;
    skirtHalfLengthInput.value = card.skirtHalfLength;
    skirtWaistInput.value = card.skirtWaist;
    skirtHipInput.value = card.skirtHip;
    trouserLengthInput.value = card.trouserLenth;
    trouserWaistInput.value = card.trouserWaist;
    trouserThightInput.value = card.trouserThight;
    trouserKneeInput.value = card.trouserKnee;
    trouserCalfInput.value = card.trouserCalf;
    trouserAnkleInput.value = card.trouserAnkle;
    trouserFlapInput.value = card.trouserFlap;

    this.root.querySelectorAll(".profile_preview").forEach(card => {
      card.setAttribute("tabindex", 0);
      card.classList.remove("active_profile");
    });
    this.root.querySelector(`.profile_preview[data-note-id="${card.id}"]`).classList.add("active_profile");
  }
  updateViewVisibility(visible) {
    const viewPane = this.root.querySelector(".profile_view_pane");
    const previewPane = this.root.querySelector(".profile_preview_pane")
    visible ? viewPane.classList.add("profile_view_pane_visible") : viewPane.classList.remove("profile_view_pane_visible");
    visible ? previewPane.classList.add("profile_preview_pane_hidden") : previewPane.classList.remove("profile_preview_pane_hidden");
    this.root.querySelector(".profile_preview_pane").classList.add("profile_preview_pane_fullscreen");
  }
}