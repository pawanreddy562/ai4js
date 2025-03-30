
        let score = JSON.parse(localStorage.getItem('score'))||{
                wins : 0,
                loose : 0,
                tie : 0};

        function computerMovef(){
                let computerResult = '';
                const a = Math.random();
                if(a>=0 && a<1/3)
                        {
                            computerResult = 'rock';
                        }
                else if(a>=1/3 && a<2/3){
                    computerResult = 'paper';
                }
                else if(a>=2/3 && a<1){
                    computerResult = 'scissors';
                }
                return computerResult;
            }
      let isAutoplaySet = false; 
      let autoPlayID=""; 
      function autoPlay(){

            if(!isAutoplaySet){
            autoPlayID = setInterval(()=>{
            const autoPlayMove = computerMovef();
            yourMove(autoPlayMove);

            },2000);
            isAutoplaySet = true;
            }else{
             clearInterval(autoPlayID);
             isAutoplaySet = false;
            }

      }

     function yourMove(playerMove){
       //  alert(`${playerMove}`);
         let result = '';
         let computerMove = computerMovef();
         if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose';
          } else if (computerMove === 'paper') {
            result = 'You win';
          } else if (computerMove === 'scissors') {
            result = 'Tie';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win';
          } else if (computerMove === 'paper') {
            result = 'Tie';
          } else if (computerMove === 'scissors') {
            result = 'You lose';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie';
          } else if (computerMove === 'paper') {
            result = 'You lose';
          } else if (computerMove === 'scissors') {
            result = 'You win';
          }

          
        }
          
        if(result === 'You win'){
            score.wins +=1;
                    }
        else if(result === 'You lose'){
            score.loose +=1;
                    }
        else{
            score.tie +=1;
           }
           
           localStorage.setItem('score',JSON.stringify(score));
           updateMyResultElement(result);
           updateConsolidateResultElement(playerMove,computerMove);
           updateScoreElement();
     
      }

      function updateScoreElement(){
          const res = ` Wins: ${score.wins}, Lost: ${score.loose}, Tie ${score.tie}`;
        document.querySelector(".js-game-result").innerHTML =res;
        }

        function updateMyResultElement(result){
          
          document.querySelector(".js-myresult").innerHTML =result;
        }

        function updateConsolidateResultElement(yourmove, computermove){
          document.querySelector(".js-collectivemessage-result")
          .innerHTML =`Your move 
          <img src="/images/${yourmove}-emoji.png" class="move-icon">, computer move is - 
         <img src="/images/${computermove}-emoji.png" class="move-icon"> `;
        }
        