import './../scss/app.scss';
import { Article } from "./Article";

const dataWithStrategiesArticles = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './asseets/strategies/1.jpg',
        tags: ['Design','Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '12/12/2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './asseets/strategies/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: ''
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './asseets/strategies/3.jpg',
        tags: ['Culture','Design','Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: ''
    }
]

window.onload = function() {
    //Tags
    addTagsClickHandler();
    //Articles rendering
    renderArticlesDom();

}

const addTagsClickHandler = () => {
document.querySelector(".strategies__tags").addEventListener('click', (e) => {
   if (e.target.classList.contains('tag')){
       let clickedTag = e.target;
       removeSelectedTags();
       selectClickedTag(clickedTag);
       if (clickedTag.innerText === 'All') {
           showAllStrategies();
       }
       else {
           filterStrategyBySelectedTag(clickedTag.innerText);
       }
   }
})
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach((tag) => {
        tag.classList.remove("tag_selected");
        tag.classList.add('tag_bordered');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy')
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy')
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
}

const renderArticlesDom = () => {
    let strategiesWrapper = getStrategiesWrapper();
    let strategiesTemplate = generateArticles(dataWithStrategiesArticles);
    strategiesTemplate.map(strategy => {
        strategiesWrapper.append(strategy)
    });
}

const getStrategiesWrapper = () => {
    let strategiesContainer = document.querySelector('.strategy-wrapper');
    strategiesContainer.innerHTML = '';
    return strategiesContainer;
}

const generateArticles = (dataWithStrategiesArticles) => {
    let articles = [];
    dataWithStrategiesArticles.forEach(article => {
        let templateArticle = new Article(article);
        console.log(templateArticle.generateArticle())
        articles.push(templateArticle.generateArticle())
    })

    return articles;
}