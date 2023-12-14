let rankingBalance = rankingCalculation (500, 405)


function rankingCalculation (victoris, defeats){
    let result = victoris - defeats
    return result
}

if (rankingBalance < 10){
    console.log(`"O Herói tem de saldo de ${rankingBalance} está no Nível Ferro"`)

}else if (rankingBalance >= 11 && rankingBalance <=20){
    console.log(`"O Herói tem de saldo de ${rankingBalance} está no Nível Bronze"`)

}else if (rankingBalance >= 21 && rankingBalance <=50){
    console.log(`"O Herói tem de saldo de ${rankingBalance} está no Nível Prata"`)

}else if (rankingBalance >= 51 && rankingBalance <=80){
    console.log(`"O Herói tem de saldo de ${rankingBalance} está no Nível Ouro"`)

}else if (rankingBalance >= 81 && rankingBalance <=90){
    console.log(`"O Herói tem de saldo de ${rankingBalance} está no Nível Diamante"`)

}else if (rankingBalance >= 91 && rankingBalance <=100){
    console.log(`"O Herói tem de saldo de ${rankingBalance} está no Nível Lendário"`)

}else{
    console.log(`"O Herói tem de saldo de ${rankingBalance} está no Nível Imortal"`)
}