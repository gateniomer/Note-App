import Note from "./note";

export default class StorageCtrl{

  getNotesFromLocalStorage(){
    //Get data from local storage
    const dataFromLocalStorage = localStorage.getItem('notes');

    //Check if these is no data in local storage
    if(dataFromLocalStorage===null){
      return [];
    }else{
      //Parse data from local storage to array of regular objects
      const notesObj = JSON.parse(dataFromLocalStorage);
      //Create array for Note objects
      let notes = [];
      //Iterate and transform each regular object to a 'Note' object, then add it to 'notes' array.
      notesObj.forEach(noteObj => {
        const note = Object.setPrototypeOf(noteObj,Note.prototype);
        notes.push(note);
      });
      return notes;
    }
  }

  saveNoteToLocalStorage(note){
    const notes = this.getNotesFromLocalStorage ();
    notes.push(note);
    localStorage.setItem('notes',JSON.stringify(notes));
    return notes;
  }

  clearNotesFromLocalStorage(){
    localStorage.removeItem('notes');
  }
}