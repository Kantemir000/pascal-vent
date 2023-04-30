const maskName = selector => {
    const nameInputs = document.querySelectorAll(selector);

    nameInputs.forEach(nameInput => {
        nameInput.addEventListener('input', () => {
            nameInput.value = nameInput.value.replace(/\d/, "");
        });
    });
};

export default maskName;
