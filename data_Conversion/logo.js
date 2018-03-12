

module.exports = {

    getTournament: function(nameTournament){
        switch (nameTournament) {
            case 'Премьер-лига': return 'UPL.png';
                break; 
            case 'Первая лига': return 'PFL.png';
                break; 
           
            default:
                break;
        }
    },
    getTeam: function(nameTeam){
        switch (nameTeam) {
            case 'Сталь': return 'Stal_Logo3.png';
                break;
            case 'Заря': return 'Заря.png';
                break;
            case 'Ворскла': return 'Vorskla.png';
                break;   
            case 'Титан': return 'Titan.png';
                break;
            case 'Гелиос': return 'gelios.png';
                break;
            case 'УкрАгроКом': return 'UkrAhroKom.png';
                break;
            case 'Полтава': return 'poltava.png';
                break;
            case 'Олимпик': return 'olimpic.png';
                break; 
            case 'Сумы': return 'sumy.png';
                break;     
            case 'Нива': return 'Nyva_Ternopil.png';
                break;    
            case 'Буковина': return 'Bukovyna_Chernovtsy.png';
                break; 
            case 'Десна': return 'desna.png';
                break;
            case 'Александрия': return 'Oleksandria.png';
                break;
            case 'Зирка': return 'Zirka.png';
                break;
            case 'Николаев': return 'mykolaiv.png';
                break;
            case 'Нефтяник': return 'naftovyk.png';
                break;
            case 'Динамо-2': return 'Dynamo_Kyiv.png';
                break;
            case 'Авангард': return 'avangard.png';
                break;
    
            default:
                break;
        }
    }


}