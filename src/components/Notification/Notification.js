import {ROOT_MODAL} from '../../constants/root';
import './Notification.css';

class Notification{
    render() {
        const htmlWrapper = `
            <div class="notification__container">
                <span>Нет контента</span>
                <button
                    class="btn bg-contain notification__close close-btn"
                    onclick="modal.innerHTML = ''"
                    
                >×</button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}
export default new Notification();