export default class UICtrl{
  constructor(){
    this.UISelectors = {
      container: '.container',
      homeState: '#home-state',
      noteTitleInput: '#note-title-input',
      noteBodyInput: '#note-body-input',
      appVersion: '#app-version'
    }
  }
  updateNotesUI(notes){
    //Get note list in ui
    const noteList = document.querySelector(this.UISelectors.homeState);
    //Resets note list's inner html
    noteList.innerHTML = '';

    //Add each object to the ui
    notes.forEach(note => {
      const noteDiv = document.createElement('div');
      noteDiv.className = 'note';
      noteDiv.innerHTML+=`
        <h3>${note.title}</h3>
        <p>${note.body}</p>
        <span> _${note.id}</span>
      `;

      //[EXPERIMENTAL] Using the note class to check if pinned
      try{
        noteDiv.innerHTML+=`
        <br>
        <p><strong>pinned:</strong> ${note.options.pinTop} <strong>highlighted:</strong> ${note.options.highlighted}</p>
        `;
      } catch(e){
        console.log(e.name + ': ' + e.message);
      }
      
      noteList.appendChild(noteDiv);
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
  updateVersionUI(vers){
    const version = document.querySelector(this.UISelectors.appVersion);
    version.textContent = `version: ${vers}`;
  }
}