
const choice = {
    paper: 'paper',
    scissors: 'scissors',
    rock: 'rock'
}

const GameResult = (player,computer) => {
    if(player === computer){
        return 'draw';
    }
    switch(player){
        case choice.paper:
            if(computer === choice.rock){
                return 'you win'
         } else {
             return 'you lose';
         }
         case choice.scissors:
            if(computer === choice.paper){
                return 'you win'
         } else {
             return 'you lose';
         }
         case choice.rock:
            if(computer === choice.scissors){
                return 'you win'
         } else {
             return 'you lose';
         }
          
    }
}


export default GameResult;