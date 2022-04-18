import StorageCtrl from './storage'
import UICtrl from './ui';
import Note from './note';
import Observable from './observer';

//Initiate Controllers
const storageCtrl = new StorageCtrl();
const uiCtrl = new UICtrl();
const observable = new Observable();

//Add targets to the observer
observable.subscribe('note-created',updateNoteList);
observable.subscribe('notes-cleared',updateNoteList);



  function createNote(){
  console.log('Creating notes...');
  //Retrieving the notes from local storage
  const notes = storageCtrl.getNotesFromLocalStorage();
  //Get input from fields
  const inputValues = uiCtrl.getInputValues();
  //Creating new note
  const note = new Note(notes.length  ,(inputValues.title!=='')?inputValues.title:`Note #${notes.length+1}`,(inputValues.body!=='')?inputValues.body:"");
  //Save new note to local storage
  storageCtrl.saveNoteToLocalStorage(note);
  //Fire the 'note-created' event
  observable.fire('note-created');
  //Clear input fields
  uiCtrl.clearInput();
}

function updateNoteList(...args){
  console.log('Updating notes...');
  console.log(args);
  //Retrieving the notes from local storage
  const notes = storageCtrl.getNotesFromLocalStorage();
  //Update UI using UIController
  uiCtrl.updateNotesUI(notes);
}

function clearNotes(){
  //Clear notes from local storage
  storageCtrl.clearNotesFromLocalStorage();
  //Fire the 'notes-cleard' event
  observable.fire('notes-cleared','test');
}

function loadEventListeners(){
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click',clearNotes);

  const addBtn = document.querySelector('#add');
  addBtn.addEventListener('click',createNote);
}

function init(){
  //Load all the event listeners
  loadEventListeners();

  //Update Note List
  updateNoteList();

  // Register new service worker (using webpack plugin)
 if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/Note-App/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }
}

init();