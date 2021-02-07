import React from 'react';
import GameOption from '../../components/GameOption/GameOption';
import Score from '../../components/Score/Score';


import PaperIcon from '../../icons/PaperIcon';
import RockIcon from '../../icons/RockIcon';
import ScissorsIcon from '../../icons/ScissorsIcon';
import GameResult from '../../utils/GameResult';


import './Game.scss'


const choice = {
    paper: 'paper',
    scissors: 'scissors',
    rock: 'rock'
}


const optionsMap = {
    paper:{
        icon:PaperIcon,
        color:'lightblue',
    },
    rock:{
        icon:RockIcon,
        color:'coral',
    },
    scissors:{
        icon:ScissorsIcon ,
        color:'yellow',
    },  
}

const initialState = {
    userSelect: null,
    randomSelect:null,
    isTimerOn:false,
    winnerText:'',
    timer:3,
}




class Game extends React.Component  {
    state = {
        ...initialState,
        currentScore:0,
    }
    restart = () => {
        this.setState({
            ...initialState,
            currentScore: this.state.currentScore
        })
    }

    pcChose = () =>{
        const randomIndex = Math.floor(Math.random() * 3 )
        const pcChose = Object.keys(choice)[randomIndex];
        return pcChose;
    }
     
    play = (select) => {
        this.setState({
            userSelect:select,
        })
        const pcChose = this.pcChose();
        const winnerText = GameResult(select, pcChose);
        this.setState({
            randomSelect:pcChose,
            winnerText,
        })}

        componentDidUpdate(){
            if(this.state.timer === 3  && this.state.userSelect){
                this.intervalId = setInterval(() => {
                    if(this.state.timer ===1){
                        clearInterval(this.intervalId);
                        this.setState({
                            isTimerOn:false,
                        })
                    }
                    this.setState({
                        timer: this.state.timer - 1
                    })
                },1000)
            }
        }
        componentWillUnmount(){
            clearInterval(this.intervalId);
        }

    render(){
        const {currentScore , userSelect, randomSelect, isTimerOn, timer,winnerText } = this.state;
        return(
            <div className='app-game'>
                <Score currentScore={currentScore} />
                {!userSelect ?(  <div className='app-game__content'>
                                    <GameOption
                                    Icon={optionsMap[choice.paper].icon}
                                    color={optionsMap[choice.paper].color}
                                    onClick={() => {this.play(choice.paper)}}
                                    />
                                     <GameOption
                                    Icon={optionsMap[choice.rock].icon}
                                    color={optionsMap[choice.rock].color}
                                    onClick={() => {this.play(choice.rock)}}
                                    />
                                     <GameOption
                                    Icon={optionsMap[choice.scissors].icon}
                                    color={optionsMap[choice.scissors].color}
                                    onClick={() => {this.play(choice.scissors)}}
                                    />                
                                </div>
                                ) : (
                                    <div>
                                    <GameOption
                                    Icon={optionsMap[userSelect].icon}
                                    color={optionsMap[userSelect].color}
                                    onClick={() => {}}
                                    />   
                                    {isTimerOn ? (
                                        <div>{timer}</div>
                                    ):(
                                        <div>
                                            <button onClick={this.restart}>Lets try again</button>
                                            <span>{winnerText}</span>
                                            <GameOption
                                            Icon={optionsMap[randomSelect].icon}
                                            color={optionsMap[randomSelect].color}
                                            onClick={() => {}}
                                    />  
                                        </div>
                                    )}

                                    </div>
                                    
                                )

                                
                            }
                                  
                </div>
                )


    }
}
   
       


export default Game