function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'bh.jpg')
            } else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'jh.jpg')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'ah.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'ih.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'bm.jpg')
            } else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'jm.jpg')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'am.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'im.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${gênero}, de ${idade} anos`
        res.appendChild(img)
    }
}