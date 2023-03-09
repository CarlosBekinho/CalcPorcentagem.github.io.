const acrescimoBtn = document.querySelector("#acrescimo")
const descontoBtn = document.querySelector("#desconto")
const btnCalcAcrescimo = document.querySelector(".btnCalc-acrescimo")
const btnCalcDesconto = document.querySelector(".btnCalc-desconto")

acrescimoBtn.addEventListener("click", acrescimo)
descontoBtn.addEventListener("click", desconto)


function acrescimo() {
    const contentOptions = document.querySelector('.content-options')
    const formContainerAcrescimo = document.querySelector('.form-container-acrescimo')

    contentOptions.style.display = 'none'
    formContainerAcrescimo.style.display = 'block'


}

btnCalcAcrescimo.addEventListener("click", calcBtnAcrescimo)

function calcBtnAcrescimo() {


    const valor = document.querySelector(".valorA")
    const porcentagem = document.querySelector(".porcentagem-acrescimo")


    if (valor.value <= 0 || porcentagem.value <= 0) {
        valor.setAttribute('id', 'valError')
        porcentagem.setAttribute('id', 'porcentError')

    }

    else {

        const calcPorcent = (porcentagem.value) / 100


        const calc = (valor.value) * calcPorcent

        const final = (valor.value)++ + calc



        const respAcr = document.querySelector(".respAcr")

        respAcr.innerHTML = `valor com acréscimo: R$ ${final}`

        valor.value = ''
        porcentagem.value = ''
        valor.removeAttribute('id', 'valError')
        porcentagem.removeAttribute('id', 'porcentError')

    }

}





function desconto() {
    const contentOptions = document.querySelector('.content-options')
    const formContainerDesconto = document.querySelector('.form-container-desconto')

    contentOptions.style.display = 'none'
    formContainerDesconto.style.display = 'block'


}

btnCalcDesconto.addEventListener("click", calcBtnDesc)

function calcBtnDesc() {
    const valor = document.querySelector(".valorD")
    const porcentagem = document.querySelector(".porcentagem-desconto")

    if (valor.value <= 0 || porcentagem.value <= 0) {
        valor.setAttribute('id', 'valError')
        porcentagem.setAttribute('id', 'porcentError')

    } else {

        const calcPorcent = porcentagem.value / 100


        const calc = valor.value * calcPorcent

        const final = valor.value - calc


        const respDesc = document.querySelector(".respDesc")


        respDesc.innerHTML = `valor com desconto: R$ ${final}`

        valor.value = ''
        porcentagem.value = ''

        valor.removeAttribute('id', 'valError')
        porcentagem.removeAttribute('id', 'porcentError')
    }
}

const btnVoltarAcr = document.querySelector('.btnVoltarAcr')
const btnVoltarDesc = document.querySelector('.btnVoltarDesc')


btnVoltarAcr.addEventListener("click", voltar)
btnVoltarDesc.addEventListener("click", voltar)


function voltar() {
    window.location.reload(false)
}

