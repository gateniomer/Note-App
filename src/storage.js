export default class StorageCtrl{

  getNotesFromLocalStorage(){
    const notes = localStorage.getItem('notes');
    return (notes===null) ? [] : JSON.parse(notes);
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