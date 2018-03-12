
const months = require('../config/default').months;
const logoMatch = require('./logo_match');

module.exports = {

    // здесь парсится информация из БД по "Следующему" матчу для стартовой страницы
    one_conversion: function(match){

        let nextMatch = {};

        nextMatch.tournament = match.tournament;

        if(match.nameVisitTeam == 'Сталь')
            nextMatch.opponent = match.nameHostTeam;
        else nextMatch.opponent = match.nameVisitTeam;

        //Здесь формируется строка даты для блока новостей.
        const date = new Date(match.dateMatch);

        nextMatch.date = `${date.getDate()} ${months[date.getMonth()]}`;

        // getUTCHours() - этот метод вызывается, что бы время из БД браузер не подстраивал под часовой пояс
        nextMatch.time = `${date.getUTCHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()):date.getMinutes()}`;

        // здесь определяются картинки для турнира и команд
        const logoSRC = logoMatch.get(match.tournament, match.nameHostTeam, match.nameVisitTeam);
        nextMatch.logoTournament = logoSRC.logoTournament;
        nextMatch.logoHost = logoSRC.logoHost;
        nextMatch.logoVisit = logoSRC.logoVisit;

        // это дополнительная информация для страницы календаря
        nextMatch.nextHost = match.nameHostTeam;
        nextMatch.nextVisit = match.nameVisitTeam;

        return nextMatch;

    },
    // здесь парсится информация из БД по матчу для страницы расписания матчей
    conversion: function(matchs_mas){

        let arr = new Array();
        let month, year;
            
		for(let i in matchs_mas){

            let match = {};

            //Здесь формируется строка даты для блока новостей.
            let date = new Date(matchs_mas[i].dateMatch);

            match.months = months[date.getMonth()];
            match.year = date.getFullYear();
             
            // здесь определяется выводить или нет <div> с информацией о годе и месяце матча
            if(i == 0){
                year = match.year;
                month = match.months;
                match.monthCalendar = true;
            }
            else {
                if(year != match.year || month != match.months){
                    year = match.year;
                    month = match.months;
                    match.monthCalendar = true;
                }                         
                else
                    match.monthCalendar = false;

            }

            match.day = `${date.getDate()} ${months[date.getMonth()]}`;

            // getUTCHours() - этот метод вызывается, что бы время из БД браузер не подстраивал под часовой пояс
            match.time = `${date.getUTCHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()):date.getMinutes()}`;
            match.tournament = matchs_mas[i].tournament;
            match.nameHostTeam = matchs_mas[i].nameHostTeam;
            match.goalHost = matchs_mas[i].goalHost;
            match.nameVisitTeam = matchs_mas[i].nameVisitTeam;
            match.goalVisit = matchs_mas[i].goalVisit;

            // Здесь разбиваеться строка из БД на массив строк по разделителю ";".
            //| Для ejs - страницы необходимо, что бы каждая строка с именем и временем (Степанюк Р. (20'))
            //| была в отдельном <span>. 
            // Поэтому строка с именами и временем разбивается на массив строк,
            // а потом, в ejs-файле, каждая строка размищается в отдельном <span>.
            //| Проверка "if(matchs_mas[i].playersGoalHost)" нужна, т.к. если matchs_mas[i].playersGoalHost = null,
            //| то у null нет метода null.split(";"). Следовательно произайдет ошибка.  
           
            if(matchs_mas[i].playersGoalHost){
                match.playersGoalHost = matchs_mas[i].playersGoalHost.split(";");
            }
            else match.playersGoalHost = matchs_mas[i].playersGoalHost;
            
            if(matchs_mas[i].playersGoalVisit){
                match.playersGoalVisit = matchs_mas[i].playersGoalVisit.split(";");
            }
            else match.playersGoalVisit = matchs_mas[i].playersGoalVisit;

            // вывести информацию о голах если она есть
            if(matchs_mas[i].playersGoalHost || matchs_mas[i].playersGoalVisit){
                match.goalBool = true;              
            }
            else
            match.goalBool = false; 

            // Здесь разбиваеться строка из БД на массив строк по разделителю ";".
            //| Для ejs - страницы необходимо, что бы каждая строка с именем и временем (Степанюк Р. (20'))
            //| была в отдельном <span>. 
            // Поэтому строка с именами и временем разбивается на массив строк,
            // а потом, в ejs-файле, каждая строка размищается в отдельном <span>.
            //| Проверка "if(matchs_mas[i].playersYeelowHost)" нужна, т.к. если matchs_mas[i].playersYeelowHost = null,
            //| то у null нет метода null.split(";"). Следовательно произайдет ошибка.  
            if(matchs_mas[i].playersYeelowHost){
                match.playersYellowHost = matchs_mas[i].playersYeelowHost.split(";");
            }
            else match.playersYellowHost = matchs_mas[i].playersYeelowHost;
            
            if(matchs_mas[i].playersYeelowVisit){
                match.playersYellowVisit = matchs_mas[i].playersYeelowVisit.split(";");

            }
            else match.playersYellowVisit = matchs_mas[i].playersYeelowVisit;
                        
            // вывести информацию о желтых карточках если она есть
            if(matchs_mas[i].playersYeelowHost || matchs_mas[i].playersYeelowVisit){
                match.yellowBool = true;              
            }
            else
            match.yellowBool = false;

            // Здесь разбиваеться строка из БД на массив строк по разделителю ";".
            //| Для ejs - страницы необходимо, что бы каждая строка с именем и временем (Степанюк Р. (20'))
            //| была в отдельном <span>. 
            // Поэтому строка с именами и временем разбивается на массив строк,
            // а потом, в ejs-файле, каждая строка размищается в отдельном <span>.
            //| Проверка "if(matchs_mas[i].playersRedHost)" нужна, т.к. если matchs_mas[i].playersRedHost = null,
            //| то у null нет метода null.split(";"). Следовательно произайдет ошибка. 
            if(matchs_mas[i].playersRedHost){
                match.playersRedHost = matchs_mas[i].playersRedHost.split(";");
            }
            else match.playersRedHost = matchs_mas[i].playersRedHost;
            
            if(matchs_mas[i].playersRedVisit){
                match.playersRedVisit = matchs_mas[i].playersRedVisit.split(";");

            }
            else match.playersRedVisit = matchs_mas[i].playersRedVisit;

            // вывести информацию о красных карточках если она есть
            if(matchs_mas[i].playersRedHost || matchs_mas[i].playersRedVisit){
                match.redBool = true;              
            }
            else
            match.redBool = false;
            
            match.referee = matchs_mas[i].referee;
            match.stadium = matchs_mas[i].stadium;
            match.audience = matchs_mas[i].audience;


            // здесь определяются картинки для турнира и команд
            const logoSRC = logoMatch.get(matchs_mas[i].tournament, matchs_mas[i].nameHostTeam, matchs_mas[i].nameVisitTeam);
            match.logoHostTeam = logoSRC.logoHost;
            match.logoVisitTeam = logoSRC.logoVisit;
            match.logoTournament = logoSRC.logoTournament;

            // если есть кая либо информация по матчу, то сделать видимым кнопку вызова доп. инфо. по матчу 
            if(matchs_mas[i].playersGoalHost || matchs_mas[i].playersGoalVisit 
                || matchs_mas[i].playersYeelowHost || matchs_mas[i].playersYeelowVisit
                || matchs_mas[i].playersRedHost || matchs_mas[i].playersRedVisit
                || matchs_mas[i].referee || matchs_mas[i].stadium || matchs_mas[i].audience)

                match.info = true;                    
            else 
                match.info = false;

            arr[i] = match;
        }
        return arr;
    }
}