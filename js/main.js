/* =========================
   Контакты
   ========================= */

.contacts {
    padding: 80px 0;
}

.contacts__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.contacts__item {
    margin-bottom: 30px;
}

.contacts__item-title {
    margin: 0 0 8px;

    font-size: 20px;
}

.contacts__item p {
    margin: 5px 0;

    color: var(--color-text-light);
}

.contacts__item a {
    color: var(--color-primary);
    text-decoration: none;

    transition: color var(--transition);
}

.contacts__item a:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
}

.contacts__item a:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.25);
    outline-offset: 4px;
}

.contacts__form-wrapper {
    padding: 35px;

    border: 1px solid var(--color-border);
    border-radius: var(--radius-medium);

    background-color: var(--color-white);
    box-shadow: var(--shadow-card);
}

.contact-form {
    margin-top: 25px;
}

.contacts-map {
    padding: 80px 0;

    background-color: #f8fafc;
}

.map-placeholder {
    min-height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-border);
    border-radius: var(--radius-medium);

    background-color: #e2e8f0;

    text-align: center;
}

.map-placeholder span {
    font-size: 60px;
}

.map-placeholder p {
    margin: 15px 0 0;

    font-weight: 600;
}


@media (max-width: 800px) {

    .contacts__layout {
        grid-template-columns: 1fr;
    }

    .contacts__form-wrapper {
        padding: 25px;
    }

}
const modal = document.querySelector("#request-modal");
const openButtons = document.querySelectorAll("[data-modal-open]");
const closeButtons = document.querySelectorAll("[data-modal-close]");

if (modal) {
    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.showModal();
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.close();
        });
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}