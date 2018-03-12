

 // метод определения возраста по дате рождения
 function get_current_age(date) {

    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}


module.exports = {

    // здесь обрабатывается информация по игрокам из БД,
    // команда разбивается по амплуа игроков. 
    conversion: function(players){

        let team_amplua = {

            goalkeepers: [],
            backs: [], 
            halfbacks: [], 
            forwards: []
        } 

        // Здесь происходит глубокое копирование массива с объектами.
        let team_mas = JSON.parse(JSON.stringify(players));
            
        for(let i = 0; i < team_mas.length; i++){

            // определение возраста по дате рождения
            team_mas[i].birthday = get_current_age(team_mas[i].birthday);              

            switch (team_mas[i].amplua) {
                case 'вратарь': team_amplua.goalkeepers.push(team_mas[i]);
                    break; 
                case 'защитник': team_amplua.backs.push(team_mas[i]);
                    break; 
                case 'полузащитник': team_amplua.halfbacks.push(team_mas[i]);
                    break;
                case 'нападающий': team_amplua.forwards.push(team_mas[i]);
                    break;
               
                default:
                    break;
            }
        }
        return team_amplua;
    }
}