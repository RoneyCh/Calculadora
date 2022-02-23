const criaCalculadora = () => {
    return {
        display: document.querySelector('.display'),

        start() {
            this.hasClicked();
            this.keyPressed();
        },

        keyPressed() {
            this.display.addEventListener('keyup', (e) => {
                e.keyCode === 13 ? this.result() : null;
            })
        },

        hasClicked() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                console.log(this.display.value);
                el.classList.contains('num') ? this.pressedToDisplay(el.innerText) : null;
                el.classList.contains('clear') ? this.clearDisplay() : null;
                el.classList.contains('del') ? this.deleteOne() : null;
                el.classList.contains('eq') ? this.result() : null;
            })
        },
        pressedToDisplay(valor) {
            this.display.value += valor;
        },
        
        clearDisplay() {
            this.display.value = '';
        },
        deleteOne() {
            this.display.value = this.display.value.slice(0,-1); 
        },

        result() {
            let valor = this.display.value;

            try {
                valor = eval(valor);

                !valor ? alert('Conta inválida') : this.display.value = String(valor);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
            
        }

    };
}

const calculadora = criaCalculadora();
calculadora.start();