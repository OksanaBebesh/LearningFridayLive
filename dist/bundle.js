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

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://friday-life-coding/./src/scss/app.scss?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\n    constructor({id, title, urlToImage, tags, ...rest}) {\n        this.id = id;\n        this.title = title;\n        this.urlToImage = urlToImage;\n        this.tags = tags;\n    }\n\n    //ArticleGenerator\n    generateArticle(){\n        let template = '';\n        let article = document.createElement('article');\n        article.className = 'strategy block-shadowed';\n        article.setAttribute('data-id', this.id);\n\n        this.urlToImage &&\n        (template += `<img src=${this.urlToImage} alt=\"strategy\">`)\n\n        if (this.title || this.tags) {\n            template += `<div class=\"strategy__content\">`\n            this.title &&\n                (template += `<h3>${this.title}</h3>`)\n\n            if (this.tags){\n                template += `<div class=\"strategies__tags\">`;\n                this.tags.map(tag => {\n                    template += `<span class=\"tag tag_background\">${tag}</span>`;\n                })\n                template += `</div>`;\n            }\n\n            template += '</div>';\n        }\n\n        article.innerHTML = template;\n        return article;\n    }\n\n\n}\n\n//# sourceURL=webpack://friday-life-coding/./src/js/Article.js?");

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n    constructor(classes) {\n        this.classes = classes;\n        this.overlay = '';\n        this.modalContent = '';\n        this.modal = '';\n        this.closeBtn = '';\n    }\n\n    buildModal(content) {\n        //Overlay\n        this.overlay = this.createDomNode(this.overlay,'div','overlay','overlay_modal');\n        //Modal\n        this.modal = this.createDomNode(this.modal, 'div','modal',this.classes);\n        //Modal Content\n        this.modalContent = this.createDomNode(this.modalContent,'div','modal__content');\n        //BindEvents\n\n        //Close Button\n        this.closeBtn = this.createDomNode(this.closeBtn,'span','modal__close-icon');\n        this.closeBtn.innerHTML = '<svg width=\"21\" height=\"22\" viewBox=\"0 0 21 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\\n' +\n            '<path d=\"M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z\" fill=\"#2F281E\"/>\\n' +\n            '</svg>\\n';\n        this.addCloseBtnClickHandler();\n        this.setContent(content);\n        this.appendModalElements();\n\n console.log(this.overlay);\n    }\n\n    createDomNode(node, element, ...classes) {\n        node = document.createElement(element);\n        node.classList.add(...classes);\n        return node;\n    }\n\n    appendModalElements() {\n        this.modal.append(this.closeBtn);\n        this.modal.append(this.modalContent);\n        this.overlay.append(this.modal);\n    }\n\n    setContent(content) {\n        if (typeof content === 'string'){\n            this.modalContent.innerHTML = content;\n        }else\n        {\n            this.modalContent.innerHTML = '';\n            this.modalContent.append(content);\n        }\n    }\n\n    addCloseBtnClickHandler(){\n        this.closeBtn.addEventListener('click', (e) => {\n            if (e.target.classList.contains('modal__close-icon')){\n                document.querySelector('.overlay').remove();\n            }\n        })\n\n    }\n}\n\n//# sourceURL=webpack://friday-life-coding/./src/js/Modal.js?");

/***/ }),

/***/ "./src/js/ModalArticles.js":
/*!*********************************!*\
  !*** ./src/js/ModalArticles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalArticles\": () => (/* binding */ ModalArticles)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/Modal.js\");\n\nclass ModalArticles extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal{\n    constructor(classes, { id, title, urlToImage, date,tags, content } ) {\n        super(classes);\n        this.id = id;\n        this.title = title;\n        this.urlToImage = urlToImage;\n        this.date = date;\n        this.tags = tags;\n        this.content = content;\n    }\n\n    //Article Modal Generator\n    generateArticleContent(){\n        let template = '';\n        let article = document.createElement('div');\n        article.className = 'strategy-modal-wrapper';\n\n        this.urlToImage &&\n        (template += `<img class=\"strategy-modal__image\" src=${this.urlToImage} alt=\"strategy\">`)\n\n        if (this.title || this.tags) {\n            template += `<div class=\"strategy strategy-modal-content\">`\n\n            this.date &&\n            (template += `<p class=\"strategy-modal__date\"> ${this.date} </p>`)\n\n            this.title &&\n            (template += `<h3>${this.title}</h3>`)\n\n            this.content &&\n            (template += `<div class=\"strategy-modal__content\">${this.content}</div>`)\n\n            if (this.tags){\n                template += `<div class=\"strategies__tags\">`;\n                this.tags.map(tag => {\n                    template += `<span class=\"tag tag_background\">${tag}</span>`;\n                })\n                template += `</div>`;\n            }\n\n            template += '</div>';\n        }\n\n        article.innerHTML = template;\n        return article;\n    }\n\n    renderArticleContent() {\n        let content = this.generateArticleContent();\n        super.buildModal(content);\n        document.body.append(this.overlay);\n    }\n}\n\n//# sourceURL=webpack://friday-life-coding/./src/js/ModalArticles.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article */ \"./src/js/Article.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"./src/js/Modal.js\");\n/* harmony import */ var _ModalArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalArticles */ \"./src/js/ModalArticles.js\");\n\n\n\n\n\nconst dataWithStrategiesArticles = [\n    {\n        id: 1,\n        title: 'Increasing Prosperity With Positive Thinking',\n        urlToImage: './asseets/strategies/1.jpg',\n        tags: ['Design','Art'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '12/12/2020'\n    },\n    {\n        id: 2,\n        title: 'Motivation Is The First Step To Success',\n        urlToImage: './asseets/strategies/2.jpg',\n        tags: ['Culture'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '22/11/2020'\n    },\n    {\n        id: 3,\n        title: 'Success Steps For Your Personal Or Business Life',\n        urlToImage: './asseets/strategies/3.jpg',\n        tags: ['Culture','Design','Art'],\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\n        date: '1/02/2020'\n    }\n]\n\nwindow.onload = function() {\n    //Tags\n    addTagsClickHandler();\n    //Articles rendering\n    if (dataWithStrategiesArticles){\n        renderArticlesDom();\n    }\n    //Generate Base Modal from Modal Class\n    addToolsClickHandler();\n\n    //Generate Article Modal\n    addStrategiesClickHandler();\n\n}\n\nconst addTagsClickHandler = () => {\ndocument.querySelector(\".strategies__tags\").addEventListener('click', (e) => {\n   if (e.target.classList.contains('tag')){\n       let clickedTag = e.target;\n       removeSelectedTags();\n       selectClickedTag(clickedTag);\n       if (clickedTag.innerText === 'All') {\n           showAllStrategies();\n       }\n       else {\n           filterStrategyBySelectedTag(clickedTag.innerText);\n       }\n   }\n})\n}\n\nconst  addStrategiesClickHandler = () => {\n    document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {\n\n       let dataId =  e.target.closest('.strategy').getAttribute('data-id');\n       let strategyOfDataId = filterSelectedStrategy(dataId);\n        console.log(strategyOfDataId);\n        renderStrategyModalWindow(strategyOfDataId, 'strategy-modal');\n    })\n}\n\nconst removeSelectedTags = () => {\n    let tags = document.querySelectorAll('.strategies__tags .tag');\n    tags.forEach((tag) => {\n        tag.classList.remove(\"tag_selected\");\n        tag.classList.add('tag_bordered');\n    })\n}\n\nconst selectClickedTag = (clickedTag) => {\n    clickedTag.classList.add('tag_selected');\n    clickedTag.classList.remove('tag_bordered');\n}\n\nconst showAllStrategies = () => {\n    let strategies = document.querySelectorAll('.strategy-wrapper .strategy')\n    strategies.forEach(strategy => {\n        strategy.classList.remove('strategy_hidden');\n    })\n}\n\nconst filterStrategyBySelectedTag = (selectedTag) => {\n    let strategies = document.querySelectorAll('.strategy-wrapper .strategy')\n    strategies.forEach(strategy => {\n        strategy.classList.add('strategy_hidden');\n        strategy.querySelectorAll('.tag').forEach(tag => {\n            if (tag.innerText === selectedTag) {\n                strategy.classList.remove('strategy_hidden');\n            }\n        })\n    })\n}\n\nconst filterSelectedStrategy = (strategyId) => {\n    return  dataWithStrategiesArticles.find( strategy  => strategy.id == strategyId) ;\n}\n\nconst renderArticlesDom = () => {\n    let strategiesWrapper = getStrategiesWrapper();\n    let strategiesTemplate = generateArticles(dataWithStrategiesArticles);\n    strategiesTemplate.map(strategy => {\n        strategiesWrapper.append(strategy)\n    });\n}\n\nconst getStrategiesWrapper = () => {\n    let strategiesContainer = document.querySelector('.strategy-wrapper');\n    strategiesContainer.innerHTML = '';\n    return strategiesContainer;\n}\n\nconst generateArticles = (dataWithStrategiesArticles) => {\n    let articles = [];\n    dataWithStrategiesArticles.forEach(article => {\n        let templateArticle = new _Article__WEBPACK_IMPORTED_MODULE_1__.Article(article);\n        console.log(templateArticle.generateArticle())\n        articles.push(templateArticle.generateArticle())\n    })\n\n    return articles;\n}\n\nconst addToolsClickHandler = () => {\n    document.querySelector('.tools__button .button').addEventListener('click',() => {\n        renderModalWindow('Here I am ','tools_modal');\n    })\n}\n\nconst renderModalWindow = (content,...classes) => {\n    let toolsModal = new _Modal__WEBPACK_IMPORTED_MODULE_2__.Modal(...classes);\n    toolsModal.buildModal(content)\n    document.body.append(toolsModal.overlay);\n}\n\nconst renderStrategyModalWindow = (data, ...classes) => {\n    let strategyModal = new _ModalArticles__WEBPACK_IMPORTED_MODULE_3__.ModalArticles(...classes,data);\n    strategyModal.renderArticleContent();\n}\n\n//# sourceURL=webpack://friday-life-coding/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;