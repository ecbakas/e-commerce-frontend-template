const quantity = () => {
    const qUp = document.querySelector('.quantity-up');
    const qDown = document.querySelector('.quantity-down');
    const qInput = document.querySelector('.quantity-input');

    qUp.addEventListener('click', () => {
        if (parseInt(qInput.getAttribute("value")) < 10) {
            qInput.setAttribute("value", (parseInt(qInput.getAttribute("value")) + 1))
        }
    });
    qDown.addEventListener('click', () => {
        if (parseInt(qInput.getAttribute("value")) > 1) {
            qInput.setAttribute("value", (parseInt(qInput.getAttribute("value")) - 1))
        }
    });
}
quantity();

