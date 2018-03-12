
const logoDB = require('./logo');

exports.get = function(tournament, nameHostTeam, nameVisitTeam){
    let logo = {};

    logo.logoTournament = logoDB.getTournament(tournament);
    logo.logoHost = logoDB.getTeam(nameHostTeam);
    logo.logoVisit = logoDB.getTeam(nameVisitTeam);

    return logo;

}