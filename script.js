function estados() {
    var estado = document.querySelector('input#estado').value
    var res = document.querySelector('p#res')
    var img = document.querySelector('img#fotoestados')

    if (estado == '') {
        alert('Digite a sigla do estado que nasceu.')
    }
    else if ((estado == 'ac' || estado == 'AC') || (estado == 'Ac' || estado == 'aC')) {
        res.innerHTML = `Você é <strong>Acriano</strong>! Sua capital é <strong>Rio Branco</strong>!`
        img.src = './imgs/acre.png'
    }
    else if ((estado == 'al' || estado == 'AL') || (estado == 'Al' || estado == 'aL')) {
        res.innerHTML = `Você é <strong>Alagoano</strong>! Sua capital é <strong>Maceió</strong>!`
        img.src = './imgs/alagoas.png'
    }
    else if ((estado == 'ap' || estado == 'AP') || (estado == 'Ap' || estado == 'aP')) {
        res.innerHTML = `Você é <strong>Amapaense</strong>! Sua capital é <strong>Macapá</strong>!`
        img.src = './imgs/amapa.png'
    }
    else if ((estado == 'am' || estado == 'AM') || (estado == 'Am' || estado == 'aM')) {
        res.innerHTML = `Você é <strong>Amazonense</strong>! Sua capital é <strong>Manaus</strong>!`
        img.src = './imgs/amazonas.png'
    }
    else if ((estado == 'ba' || estado == 'BA') || (estado == 'Ba' || estado == 'bA')) {
        res.innerHTML = `Você é <strong>Baiano</strong>! Sua capital é <strong>Salvador</strong>!`
        img.src = './imgs/bahia.png'
    }
    else if ((estado == 'ce' || estado == 'CE') || (estado == 'Ce' || estado == 'cE')) {
        res.innerHTML = `Você é <strong>Cearense</strong>! Sua capital é <strong>Fortaleza</strong>!`
        img.src = './imgs/ceara.png'
    }
    else if ((estado == 'es' || estado == 'ES') || (estado == 'Es' || estado == 'eS')) {
        res.innerHTML = `Você é <strong>Capixaba</strong>! Sua capital é <strong>Vitória</strong>!`
        img.src = './imgs/espirito-santo.png'
    }
    else if ((estado == 'go' || estado == 'GO') || (estado == 'Go' || estado == 'gO')) {
        res.innerHTML = `Você é <strong>Goiano</strong>! Sua capital é <strong>Goiânia</strong>!`
        img.src = './imgs/goias.png'
    }
    else if ((estado == 'ma' || estado == 'MA') || (estado == 'Ma' || estado == 'mA')) {
        res.innerHTML = `Você é <strong>Maranhense</strong>! Sua capital é <strong>São Luís</strong>!`
        img.src = './imgs/maranhao.png'
    }
    else if ((estado == 'mt' || estado == 'MT') || (estado == 'Mt' || estado == 'mT')) {
        res.innerHTML = `Você é <strong>Mato Grossense</strong>! Sua capital é <strong>Cuiabá</strong>!`
        img.src = './imgs/mato-grosso.png'
    }
    else if ((estado == 'ms' || estado == 'MS') || (estado == 'Ms' || estado == 'mS')) {
        res.innerHTML = `Você é <strong>Mato Grossense Do Sul</strong>! Sua capital é <strong>Campo Grande</strong>!`
        img.src = './imgs/mato-grosso-do-sul.png'
    }
    else if ((estado == 'mg' || estado == 'MG') || (estado == 'Mg' || estado == 'mG')) {
        res.innerHTML = `Você é <strong>Mineiro</strong>! Sua capital é <strong>Belo Horizonte</strong>!`
        img.src = './imgs/minas-gerais.png'
    }
    else if ((estado == 'pa' || estado == 'PA') || (estado == 'Pa' || estado == 'pA')) {
        res.innerHTML = `Você é <strong>Paraense</strong>! Sua capital é <strong>Belém</strong>!`
        img.src = './imgs/pa.png'
    }
    else if ((estado == 'pb' || estado == 'PB') || (estado == 'Pb' || estado == 'pB')) {
        res.innerHTML = `Você é <strong>Paraibano</strong>! Sua capital é <strong>João Pessoa</strong>!`
        img.src = './imgs/paraiba.png'
    }
    else if ((estado == 'pr' || estado == 'PR') || (estado == 'Pr' || estado == 'pR')) {
        res.innerHTML = `Você é <strong>Paranaense</strong>! Sua capital é <strong>Curitiba</strong>!`
        img.src = './imgs/parana.png'
    }
    else if ((estado == 'pe' || estado == 'PE') || (estado == 'Pe' || estado == 'pE')) {
        res.innerHTML = `Você é <strong>Pernambucano</strong>! Sua capital é <strong>Recife</strong>!`
        img.src = './imgs/pernambuco.png'
    }
    else if ((estado == 'pi' || estado == 'PI') || (estado == 'Pi' || estado == 'pI')) {
        res.innerHTML = `Você é <strong>Piauiense</strong>! Sua capital é <strong>Teresina</strong>!`
        img.src = './imgs/piaui.png'
    }
    else if ((estado == 'rj' || estado == 'RJ') || (estado == 'Rj' || estado == 'rJ')) {
        res.innerHTML = `Você é <strong>Carioca</strong>! Sua capital é <strong>Rio De Janeiro</strong>!`
        img.src = './imgs/rio-de-janeiro.png'
    }
    else if ((estado == 'rn' || estado == 'RN') || (estado == 'Rn' || estado == 'rN')) {
        res.innerHTML = `Você é <strong>Potiguar</strong>! Sua capital é <strong>Natal</strong>!`
        img.src = './imgs/rio-grande-do-norte.png'
    }
    else if ((estado == 'rs' || estado == 'RS') || (estado == 'Rs' || estado == 'rS')) {
        res.innerHTML = `Você é <strong>Gaúcho</strong>! Sua capital é <strong>Porto Alegre</strong>!`
        img.src = './imgs/rio-grande-do-sul.png'
    }
    else if ((estado == 'ro' || estado == 'RO') || (estado == 'Ro' || estado == 'rO')) {
        res.innerHTML = `Você é <strong>Rondoniense</strong>! Sua capital é <strong>Porto Velho</strong>!`
        img.src = './imgs/rondonia.png'
    }
    else if ((estado == 'rr' || estado == 'RR') || (estado == 'Rr' || estado == 'rR')) {
        res.innerHTML = `Você é <strong>Roraimense</strong>! Sua capital é <strong>Boa Vista</strong>!`
        img.src = './imgs/roraima.png'
    }
    else if ((estado == 'sc' || estado == 'SC') || (estado == 'Sc' || estado == 'sC')) {
        res.innerHTML = `Você é <strong>Catarinense</strong>! Sua capital é <strong>Florianópolis</strong>!`
        img.src = './imgs/santa-catarina.png'
    }
    else if ((estado == 'sp' || estado == 'SP') || (estado == 'Sp' || estado == 'sP')) {
        res.innerHTML = `Você é <strong>Paulista</strong>! Sua capital é <strong>São Paulo</strong>!`
        img.src = './imgs/sao-paulo.png'
    }
    else if ((estado == 'se' || estado == 'SE') || (estado == 'Se' || estado == 'sE')) {
        res.innerHTML = `Você é <strong>Sergipano</strong>! Sua capital é <strong>Aracaju</strong>!`
        img.src = './imgs/sergipe.png'
    }
    else if ((estado == 'to' || estado == 'TO') || (estado == 'To' || estado == 'tO')) {
        res.innerHTML = `Você é <strong>Tocantinense</strong>! Sua capital é <strong>Palmas</strong>!`
        img.src = './imgs/tocantins.png'
    }
    else if ((estado == 'df' || estado == 'DF') || (estado == 'Df' || estado == 'dF')) {
        res.innerHTML = `Você é <strong>Brasiliense</strong>! Sua capital é <strong>Brasília</strong>!`
        img.src = './imgs/distrito-federal.png'
    }
    else {
        alert('[ERRO] - Coloque uma sigla válida e tente novamente!')
    }
}