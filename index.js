console.log('\n\n* *Bem vindo ao CLASSIFICADOR DE NIVEL DE HEROÍ * *\n\n')

const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let xp = 0
let name = ''
let isEnd = false

const inputXP = async()=>{

     const value = new Promise((resolve) => {
        rl.question('Qual o XP do seu Heroí? --> ', (resposta) => {
          
            xp = resposta;
            resolve()
        });
      });

    return value
}

const inputName = async()=>{

    const value = new Promise((resolve) => {
       rl.question('Qual o nome do seu Heroí? --> ', (resposta) => {
         
           name = resposta;
           resolve(resposta)
       });
     });

   return value
}

const analisarXP = ()=>{
    if(xp <= 1000) return 'Ferro'
    if(xp <= 2000) return 'Bronze'
    if(xp <= 5000) return 'Prata'
    if(xp <= 7000) return 'Ouro'
    if(xp <= 8000) return 'Platina'
    if(xp <= 9000) return 'Ascendente'
    if(xp <= 10000) return 'Imortal'
    if(xp > 10000) return 'Radiante'
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
      await inputXP();
      await inputName();

      const placar = analisarXP()

      console.log('O Heroí de nome ' + name + ' está no nível de ' + placar)

      
      await inputEnd();
    }
    exit()
  };


main()

