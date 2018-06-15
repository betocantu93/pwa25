const list = document.querySelector(".list");
const api = "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json";

window.addEventListener('load', e => {

    getCalendar();

});


async function getCalendar(){

    const response = await fetch(api);

    const json = await response.json();

    console.log(json);
    let groups = json.groups;
    this.stadiums = json.stadiums;
    this.teams = json.teams;

    let dom = [];
    for(let key in groups) {
        if(groups.hasOwnProperty(key)) {
           dom.push(buildGroup(groups[key], stadiums, teams));
        }
    }


    list.innerHTML = dom.join('\n');

    // setTimeout(getCalendar, 5000);

}

function buildSingleMatch(match){

    let home_result = match.home_result !== null ? match.home_result : "";
    let away_result = match.away_result !== null ? match.away_result : "";
    let home_team = getTeam(match.home_team);
    let away_team = getTeam(match.away_team);
    let matchStadium = getStadium(match.stadium);
    let matchDate = new Date(match.date);
    let dateString = `${matchDate.getDate()}/${matchDate.getMonth()+1} ${matchDate.getHours() }:00`
    let statusColorClass;

    if(match.finished) {
        statusColorClass = "match-done";
    } else if(match.home_result !== null || match.away_result !== null){
        statusColorClass = "match-in-progress";
    } else {
        statusColorClass = "match-in-future";
    }

    return `
            <div class="match">
            <span class=match-date>${dateString} in ${matchStadium.name}</span>
                <div class="${statusColorClass}">
                    <img class="flag" src=${home_team.flag} alt="${home_team.name} flag"> ${home_team.name} ${home_result}
                </div>
                
                <div  class="${statusColorClass}">
                     <img class="flag" src=${away_team.flag} alt="${home_team.name} flag"> ${away_team.name} ${away_result} 
                </div>
             
                
            </div>
        `;
}

function getTeam(teamId){
    return this.teams[teamId-1];
}

function getStadium(stadiumId) {
    return this.stadiums[stadiumId-1];
}

function buildMatches(matches) {

    return matches.map((match) => {
        return buildSingleMatch(match);
    })
}
function buildGroup(group) {
    return `

        <div class="card">
           <h2>${group.name}</h2>
            ${buildMatches(group.matches).join('\n')}
        </div>
        
    `;
}