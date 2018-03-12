

module.exports = {

    // здесь обработываються данные из турнирной таблицы,
    // добавляются недостающие своиства position и diffGoal, которых нет в БД.
    conversion: function(table){

        let table_mas = [];

        for(let i in table){

            table_mas[i] = {};

            table_mas[i].id = table[i]._id;
            table_mas[i].nameTeam = table[i].nameTeam;
            table_mas[i].gamesNum = table[i].gamesNum;
            table_mas[i].victoryNum = table[i].victoryNum;
            table_mas[i].drawsNum = table[i].drawsNum;
            table_mas[i].lesionsNum = table[i].lesionsNum;
            table_mas[i].goalScore = table[i].goalScore;
            table_mas[i].goalMissed = table[i].goalMissed;
            table_mas[i].points = table[i].points;


            table_mas[i].diffGoal = table_mas[i].goalScore - table_mas[i].goalMissed;

            if(table_mas[i].diffGoal > 0)
                table_mas[i].diffGoal = "+" + table_mas[i].diffGoal;

            if(table_mas[i].nameTeam === "Сталь")    
                table_mas[i].stal = ' stal';
            else table_mas[i].stal = '';           

            table_mas[i].position = ++i;           

        }
        return table_mas;

    }
}