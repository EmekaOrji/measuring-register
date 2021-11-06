export default class NotesAPI {
  static getAllProfiles() {
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  static saveProfile(profileToSave) {
    const notes = this.getAllProfiles();
    const existing = notes.find(note => note.id == profileToSave.id);

    if (existing) {
      var existingProp = Object.getOwnPropertyNames(existing);
      existingProp.forEach(e => {
        existing[e] = profileToSave[e];
      });
      existing.updated = new Date().toISOString();
    } else {
      profileToSave.id = Math.floor(Math.random() * 10000000000);
      profileToSave.updated = new Date().toISOString();
      notes.push(profileToSave);
    }

    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }
  static deleteNote(id) {
    const notes = NotesAPI.getAllProfiles();
    const newNotes = notes.filter(note => note.id != id);

    localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
  }
}