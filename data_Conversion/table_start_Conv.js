

module.exports = {

    conversion: function(table){

        let teamsArr = [];

        let posNum = 1; 

        for(let i = 0; i < table.length; i++){

            table[i].position = posNum++;
            table[i].stal = '';

            if(table[i].nameTeam === "Сталь"){
                
                table[i].stal = ' stal_main';
                
                // если Сталь первая, то в таблицу добавить следующие две команды
                // если Сталь не первая, то в таблицу добавить одну предыдущую и одну последующую команду.  
                if(i === 0){        
                    teamsArr[0] = table[i];
                    teamsArr[1] = table[i + 1];
                    teamsArr[2] = table[i + 2];
                }
                else{                 
                    teamsArr[0] = table[i - 1];
                    teamsArr[1] = table[i];
                    teamsArr[2] = table[i + 1];
                }
            }            
        } 
        return teamsArr;  
    }
}