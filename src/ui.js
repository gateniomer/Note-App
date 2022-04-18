
export default class UICtrl{
  constructor(){
    this.UISelectors = {
      container: '.container',
      homeState: '#home-state',
      noteTitleInput: '#note-title-input',
      noteBodyInput: '#note-body-input'
    }
  }
  updateNotesUI(notes){
    const noteList = document.querySelector(this.UISelectors.homeState);
    noteList.innerHTML = '';
    notes.forEach(note => {
      noteList.innerHTML+=`
      <div class='note'>
      <h3>${note.title}</h3>
      <p>${note.body}</p>
      <span> _${note.id}</span>
      </div>
      `;
    });
    document.querySelector(this.UISelectors.container).appendChild(noteList);
  }
  getInputValues(){
    const inputTitle = document.querySelector(this.UISelectors.noteTitleInput);
    const inputBody = document.querySelector(this.UISelectors.noteBodyInput);
    return{
      title: inputTitle.value,
      body: inputBody.value
    }
  }
  clearInput(){
    const inputTitle = document.querySelector(this.UISelectors.noteTitleInput);
    const inputBody = document.querySelector(this.UISelectors.noteBodyInput);
    inputTitle.value = '';
    inputBody.value = '';
  }
}