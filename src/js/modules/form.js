import { postData } from "../services/requests";
import maskName from "./mask-name";
import maskPhone from "./mask-phone";

const form = formSelector => {
    const forms = document.querySelectorAll(formSelector);

    maskName('input[name="name"]');
    maskPhone('input[name="phone"]');

    const message = {
        ok: 'img/svg/request/checked.svg',
        fail: 'img/svg/request/error.svg'
    };

    const bindPostData = form => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const btn = form.lastElementChild;

            btn.insertAdjacentHTML('beforeend', `
                <div class="loading">
                    <div class="loading__line"></div>
                    <div class="loading__line"></div>
                    <div class="loading__line"></div>
                </div>
            `);

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);

                    btn.lastElementChild.remove();
                    btn.insertAdjacentHTML('beforeend', `
                        <img class="form__message" src=${message.ok} alt="checked">
                    `);
                    btn.firstElementChild.setAttribute('disabled', 'disabled');
                    setTimeout(() => btn.lastElementChild.remove(), 3000);
                }).catch(error => {
                    console.log(error.status);

                    btn.lastElementChild.remove();
                    btn.insertAdjacentHTML('beforeend', `
                        <img class="form__message" src=${message.fail} alt="error">
                    `);
                    setTimeout(() => btn.lastElementChild.remove(), 3000);
                }).finally(() => form.reset());
        });
    };

    forms.forEach(form => bindPostData(form));
};

export default form;