import {getDataApi} from '../utils/getDataApi';
import {API_URL, API_COMICS, IMG_STANDART_XLARGE, IMG_NOT_AVIALABLE, API_CHARACTERS} from '../constants/api';
import {ROOT_INDEX} from '../constants/root';
import Error from '../components/Error';
import Characters from '../components/Characters';
import  './Comics.css';



class Comics {
    comicsRender(data) {
        let htmlContent = '';
        data.forEach(({id, title, description, thumbnail: {path, extension}}) => { 
            if(path.lastIndexOf(IMG_NOT_AVIALABLE) === -1 && description !== null){
              
                const uri = API_URL + API_COMICS + '/' + id + '/' + API_CHARACTERS;
                const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;

                htmlContent += `
                    <li class="comics__item" data-uri="${uri}">
                        <span class="comics__name">${title}</span>
                        <img class="img-contain comics__img" src='${imgSrc}' />
                    </li>
                `;
            }
            
        });
        
        const htmlWrapper = `
            <ul class="comics__container">
                ${htmlContent}
            </ul>
        `;
        ROOT_INDEX.innerHTML = htmlWrapper;  
    }
    async render() {
        const data = await getDataApi.getData(API_URL + API_COMICS);
        data ? this.comicsRender(data) : Error.render();  
    }
    eventListener(){
        document.querySelectorAll('.comics__item').forEach(element => {
            const uri = element.getAttribute('data-uri');
            element.addEventListener('click', () => {
                Characters.render(uri);
            });
        });  
    }
}
export default new Comics();