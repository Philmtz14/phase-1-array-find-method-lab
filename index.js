// code your solution here
function superbowlWin(team) {
    const winningTeam = team.find(team => team.result === "W");
    if (winningTeam != undefined) {
    return (winningTeam.year);
    }
};
