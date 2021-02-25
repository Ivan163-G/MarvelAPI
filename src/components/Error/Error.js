
import { ROOT_INDEX } from '../../constants/root';

import './Error.css';

class Error {
	render() {
        const htmlWrapper = `
            <div class="error__container">
                <span>
                    <p class="error__message">Произошла ошибка.</p>
                    <p class="error__message">Попробуйте зайти позже</p>
                </span>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error();