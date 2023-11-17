console.log('\n\n* *Bem vindo ao Calculadora de partidas * *\n\n')

const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let vitoria = 0
let derrota = 0
let isEnd = false

const inputVitoria = async()=>{

     const value = new Promise((resolve) => {
        rl.question('Quantas vitorias teve o seu jogador? --> ', (resposta) => {
          
            vitoria = resposta;
            resolve()
        });
      });

    return value
}

const inputDerrotas = async()=>{

    const value = new Promise((resolve) => {
       rl.question('Quantas derrotas teve o seu jogador? --> ', (resposta) => {
         
           derrota = resposta;
           resolve()
       });
     });

   return value
}

const analisarXP = (xp)=>{
    if(xp <= 10) return 'Ferro'
    if(xp <= 20) return 'Bronze'
    if(xp <= 50) return 'Prata'
    if(xp <= 70) return 'Ouro'
    if(xp <= 80) return 'Platina'
    if(xp <= 90) return 'Ascendente'
    if(xp <= 100) return 'Imortal'
    if(xp > 100) return 'Radiante'
}

const inputEnd =()=>{

    const value = new Promise ((resolve) => {
        rl.question('Deseja finalizar ? S/N', (resposta) => {
        
            if(resposta === 'S'){
                isEnd = true;
            }
        
            resolve(resposta)
        });
    })

    return value
}

const main = async () => {
    while (!isEnd) {
      await inputVitoria();
      await inputDerrotas();

      const placar = analisarXP(vitoria - derrota)

      console.log(`O Herói tem de saldo de ${vitoria - derrota} está no nível de ${placar}`)

      
      await inputEnd();
    }
    exit()
  };


main()

