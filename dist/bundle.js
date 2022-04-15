/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ \"./src/observer.js\");\n\r\n\r\n\r\n\r\n\r\n//Initiate Controllers\r\nconst storageCtrl = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst uiCtrl = new _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst observable = new _observer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n//Add targets to the observer\r\nobservable.subscribe('note-created',updateNoteList);\r\nobservable.subscribe('notes-cleared',updateNoteList);\r\n\r\n\r\n\r\n  function createNote(){\r\n  console.log('Creating notes...');\r\n  //Retrieving the notes from local storage\r\n  const notes = storageCtrl.getNotesFromLocalStorage();\r\n  //Get input from fields\r\n  const inputValues = uiCtrl.getInputValues();\r\n  //Creating new note\r\n  const note = new _note__WEBPACK_IMPORTED_MODULE_2__[\"default\"](notes.length  ,(inputValues.title!=='')?inputValues.title:`Note #${notes.length+1}`,`Body ${notes.length+1}`);\r\n  //Save new note to local storage\r\n  storageCtrl.saveNoteToLocalStorage(note);\r\n  //Fire the 'note-created' event\r\n  observable.fire('note-created');\r\n  //Clear input fields\r\n  uiCtrl.clearInput();\r\n}\r\n\r\nfunction updateNoteList(data){\r\n  console.log('Updating notes...');\r\n  //check if any arguments were passed to the function\r\n  if(data !== undefined){\r\n    //using the arguments\r\n    console.log(data);\r\n  }\r\n  //Retrieving the notes from local storage\r\n  const notes = storageCtrl.getNotesFromLocalStorage();\r\n  //Update UI using UIController\r\n  uiCtrl.updateNotesUI(notes);\r\n}\r\n\r\nfunction clearNotes(){\r\n  //Clear notes from local storage\r\n  storageCtrl.clearNotesFromLocalStorage();\r\n  //Fire the 'notes-cleard' event\r\n  observable.fire('notes-cleared','test');\r\n}\r\n\r\nfunction loadEventListeners(){\r\n  const clearBtn = document.querySelector('#clear');\r\n  clearBtn.addEventListener('click',clearNotes);\r\n\r\n  const addBtn = document.querySelector('#add');\r\n  addBtn.addEventListener('click',createNote);\r\n}\r\n\r\nfunction init(){\r\n  //Load all the event listeners\r\n  loadEventListeners();\r\n\r\n  //Update Note List\r\n  updateNoteList();\r\n\r\n  // Check that service workers are supported\r\n  if ('serviceWorker' in navigator) {\r\n  // Use the window load event to keep the page load performant\r\n  window.addEventListener('load', () => {\r\n    navigator.serviceWorker.register('./service-worker.js');\r\n  });\r\n}\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://test/./src/app.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Note)\n/* harmony export */ });\nclass Note{\r\n  constructor(id,title,body){\r\n    this.id=id;\r\n    this.title=title;\r\n    this.body=body;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://test/./src/note.js?");

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observable)\n/* harmony export */ });\nclass Observable{\r\n  constructor(){\r\n    this.observers = [];\r\n  }\r\n\r\n  subscribe(event,func){\r\n    const observer = {\r\n      event: event,\r\n      func: func\r\n    }\r\n    this.observers.push(observer);\r\n  }\r\n\r\n  unsubscribe(event,func){\r\n    this.observers.forEach((observer,index) => {\r\n      if(observer.event === event && observer.func === func){\r\n        this.observers.splice(index,1);\r\n      }\r\n    });\r\n  }\r\n  fire(event,data){\r\n    this.observers.forEach(observer => {\r\n      if(observer.event === event){\r\n        (data!==null) ? observer.func(data) : observer.func();\r\n      }\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://test/./src/observer.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StorageCtrl)\n/* harmony export */ });\nclass StorageCtrl{\r\n\r\n  getNotesFromLocalStorage(){\r\n    const notes = localStorage.getItem('notes');\r\n    return (notes===null) ? [] : JSON.parse(notes);\r\n  }\r\n\r\n  saveNoteToLocalStorage(note){\r\n    const notes = this.getNotesFromLocalStorage ();\r\n    notes.push(note);\r\n    localStorage.setItem('notes',JSON.stringify(notes));\r\n    return notes;\r\n  }\r\n\r\n  clearNotesFromLocalStorage(){\r\n    localStorage.removeItem('notes');\r\n  }\r\n}\n\n//# sourceURL=webpack://test/./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UICtrl)\n/* harmony export */ });\n\r\nclass UICtrl{\r\n  constructor(){\r\n    this.UISelectors = {\r\n      container: '.container',\r\n      homeState: '#home-state',\r\n      noteTitleInput: '#note-title-input'\r\n    }\r\n  }\r\n  updateNotesUI(notes){\r\n    const noteList = document.querySelector(this.UISelectors.homeState);\r\n    noteList.innerHTML = '';\r\n    notes.forEach(note => {\r\n      noteList.innerHTML+=`\r\n      <div class='note'>\r\n      <h3>${note.title}</h3>\r\n      <p>${note.body}</p>\r\n      <span> _${note.id}</span>\r\n      </div>\r\n      `;\r\n    });\r\n    document.querySelector(this.UISelectors.container).appendChild(noteList);\r\n  }\r\n  getInputValues(){\r\n    const inputTitle = document.querySelector(this.UISelectors.noteTitleInput);\r\n    return{\r\n      title: inputTitle.value\r\n    }\r\n  }\r\n  clearInput(){\r\n    const inputTitle = document.querySelector(this.UISelectors.noteTitleInput);\r\n    inputTitle.value = '';\r\n  }\r\n}\n\n//# sourceURL=webpack://test/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;