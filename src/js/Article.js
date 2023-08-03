export class Article {
    constructor({id, title, urlToImage, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }

    //ArticleGenerator
    generateArticle(){
        let template = '';
        let article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img src=${this.urlToImage} alt="strategy">`)

        if (this.title || this.tags) {
            template += `<div class="strategy__content">`
            this.title &&
                (template += `<h3>${this.title}</h3>`)

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


}