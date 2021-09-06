const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valores) {
    const corpo = document.querySelector('body')
    const paragrafo = document.createElement('p')
    paragrafo.innerText = valores
    corpo.appendChild(paragrafo)
}
function kata1() {
    // implemente o código do kata 1 aqui
    let resultado = ''
    for (let i = 0; i <= 25; i++) {
        if(i === 25){
            resultado += [i]
        } else {
            resultado += [i] + ', '
        }
    }

    return showResults(resultado);
}

function kata2() {
    // implemente o código do kata 2 aqui
    let resultado = ''
    for (let i = 25; i >= 1; i--) {
        if(i === 1){
            resultado += [i]
        } else {
            resultado += [i] + ', '
        }
    }

    return showResults(resultado)
}

function kata3() {
    // implemente o código do kata 3 aqui
    let resultado = ''
    for (let i = -1; i >= -25; i--) {
        if(i === -25){
            resultado += [i]
        } else {
            resultado += [i] + ', '
        }
    }

    return showResults(resultado)
}

function kata4() {
    // implemente o código do kata 4 aqui
    let resultado = ''
    for (let i = -25; i <= -1; i++) {
        if(i === -1) {
            resultado += [i]
        } else {
            resultado += [i] + ', '
        }
    }

    return showResults(resultado);
}

function kata5() {
    // implemente o código do kata 5 aqui
    let resultado = ''
    for (let i = 25; i >= -25; i--) {
        if (i % 2 !== 0) {
            if(i === -25) {
                resultado += [i]
            } else {
                resultado += [i] + ', '
            }
        }
    }

    return showResults(resultado)
}

function kata6() {
    // implemente o código do kata 6 aqui
    let resultado = ''
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i === 99) {
                resultado += [i]
            } else {
                resultado += [i] + ', '
            }
        }
    }

    return showResults(resultado)
}

function kata7() {
    // implemente o código do kata 7 aqui
    let resultado = ''
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            if (i === 98) {
                resultado += [i]
            } else {
                resultado += [i] + ', '
            }
        }
    }

    return showResults(resultado)
}

function kata8() {
    // implemente o código do kata 8 aqui
    let resultado = ''
    for (let i = 100; i >= 1; i--) {
        if (i % 3 == 0) {
            if (i === 3) {
                resultado += [i]
            } else {
                resultado += [i] + ', '
            }
        }
        if (i % 7 === 0) {
            if (i === 3) {
                resultado += [i]
            } else {
                resultado += [i] + ', '
            }
        }
    }

    return showResults(resultado)
}

function kata9() {
    // implemente o código do kata 9 aqui
    let resultado = ''
    for (let i = 1; i <= 100; i++) {
        if ((i % 5 === 0) & (i % 2 !== 0)) {
            if (i === 95) {
                resultado += [i]
            } else {
                resultado += [i] + ', '
            }
        }
    }
    return showResults(resultado)
}

function kata10() {
    // implemente o código do kata 10 aqui
    let resultado = ''
    for (let i = 0; i < 20; i++) {
        if (i === 19) {
            resultado += sampleArray[i]
        } else {
            resultado += sampleArray[i] + ', '
        }
    }
    return showResults(resultado)
}

function kata11() {
    // implemente o código do kata 11 aqui
    let resultado = ''
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            if (i === sampleArray.length - 1) {
                resultado += sampleArray[i]
            } else {
                resultado += sampleArray[i] + ', '
            }
        }
    }
    return showResults(resultado)
}

function kata12() {
    // implemente o código do kata 12 aqui
    let resultado = ''
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            if (sampleArray[i] === 535) {
                resultado += sampleArray[i]
            } else {
                resultado += sampleArray[i] + ', '
            }
        }
    }
    return showResults(resultado)
}

function kata13() {
    // implemente o código do kata 13 aqui
    let resultado = ''
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            if (sampleArray[i] === 472) {
                resultado += sampleArray[i]
            } else {
                resultado += sampleArray[i] + ', '
            }
        }
    }
    return showResults(resultado)
}

function kata14() {
    // implemente o código do kata 14 aqui
    let resultado = ''
    for (let i = 0; i < 20; i++) {
        if (i === 20) {
            resultado += sampleArray[i]
        } else {
            resultado += sampleArray[i]**2 + ', '
        }
    }
    return showResults(resultado)
}

function kata15() {
    // implemente o código do kata 15 aqui
    let resultado = 0
    for (let i = 1; i <= 20; i++) {
        resultado += i
    }
    return showResults(resultado)
}

function kata16() {
    // implemente o código do kata 16 aqui
    let resultado = 0
    for (let i = 0; i < sampleArray.length; i++) {
        resultado += sampleArray[i]
    }
    return showResults(resultado)
}

function kata17() {
    // implemente o código do kata 17 aqui
    let resultado = sampleArray[0]
    let verificador = 0
    for (let i = 0; i < sampleArray.length; i++) {
        verificador = sampleArray[i]
        if (resultado > verificador) { 
            resultado = verificador
        }
    }
    return showResults(resultado)
}

function kata18() {
    // implemente o código do kata 18 aqui
    let resultado = sampleArray[0]
    let verificador = 0
    for (let i = 0; i < sampleArray.length; i++) {
        verificador = sampleArray[i]
        if (resultado < verificador) { 
            resultado = verificador
        }
    }
    return showResults(resultado)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
