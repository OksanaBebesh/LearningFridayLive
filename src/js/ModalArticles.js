import { Modal } from "./Modal";
export class ModalArticles extends Modal{
    constructor(classes, { id, title, urlToImage, date,tags, content } ) {
        super(classes);
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.date = date;
        this.tags = tags;
        this.content = content;
    }

    //Article Modal Generator
    generateArticleContent(){
        let template = '';
        let article = document.createElement('div');
        article.className = 'strategy-modal-wrapper';

        this.urlToImage &&
        (template += `<img class="strategy-modal__image" src=${this.urlToImage} alt="strategy">`)

        if (this.title || this.tags) {
            template += `<div class="strategy strategy-modal-content">`

            this.date &&
            (template += `<p class="strategy-modal__date"> ${this.date} </p>`)

            this.title &&
            (template += `<h3>${this.title}</h3>`)

            this.content &&
            (template += `<div class="strategy-modal__content">${this.content}</div>`)

            if (this.tags){
                template += `<div class="strategies__tags">`;
                this.tags.map(tag => {
                    template += `<span class="tag tag_background">${tag}</span>`;
                })
                template += `</div>`;
            }

            template += '</div>';
        }

        article.innerHTML = template;
        return article;
    }

    renderArticleContent() {
        let content = this.generateArticleContent();
        super.buildModal(content);
        document.body.append(this.overlay);
    }
}