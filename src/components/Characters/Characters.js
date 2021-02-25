import {getDataApi} from '../../utils/getDataApi';
import {IMG_STANDART_XLARGE} from '../../constants/api';
import {ROOT_MODAL} from '../../constants/root';
import Notification from '../Notification';
import './Characters.css';

class Characters{
    
    renderContent(data) {
        let htmlContent = '';
        data.forEach(({name, thumbnail: { path, extension }}) => {
            const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension; 

            htmlContent += `
                <li class="characters__item">
                    <img src="${imgSrc}" class="characters__item-img img-cover" />
                    <span class="characters__item-name">${name}</span>
                </li>
            `;
        });
        const wrapperHTML = `
            <div class="characters">
                <ul class="characters__container">
                    ${htmlContent}
                </ul>
                <button class="characters__close close-btn btn" onclick="modal.innerHTML = '' ">×</button>
            </div>
        `;
        ROOT_MODAL.innerHTML = wrapperHTML;
    }
    async render(uri) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : Notification.render();
    }
}

export default new Characters();