var makeCanidate = function(nameLast, theirColor){

var canidate = {};
canidate.name = nameLast;
canidate.electionResults = null;
canidate.totalVotes = 0;
canidate.theirColor = theirColor;  
  return canidate;
};

var canidate1 = makeCanidate("Johnson", [132, 17, 11]);
var canidate2 = makeCanidate("Smith", [245, 141, 136]);

canidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3,
7, 2];

canidate2.electionResults =[4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8,
1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2,
14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

canidate1.electionResults[9] = 1;
canidate2.electionResults[9] = 28;
canidate1.electionResults[4] = 17;
canidate2.electionResults[4] = 38;
canidate1.electionResults[43] = 11;
canidate2.electionResults[43] = 27;

var setStateResults = function(state) {

    theStates[state].winner = null;

    if (canidate1.electionResults[state] > canidate2.electionResults[state]) {
        theStates[state].winner = canidate1;
    } else if (canidate1.electionResults[state] < canidate2.electionResults[state]) {
        theStates[state].winner = canidate2;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.theirColor;

    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }
  
  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var canidate1Name = body.children[0].children[0];
  var canidate2Name = body.children[1].children[0];
  var canidate1Results = body.children[0].children[1];
  var canidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = theStates[state].nameAbbrev;
  canidate1Name.innerText = canidate1.name;
  canidate2Name.innerText = canidate2.name;
  canidate1Results.innerText = canidate1.electionResults[state];
  canidate2Results.innerText = canidate2.electionResults[state];
  
  if (canidate1.electionResults[state] > canidate2.electionResults[state]) {
    winnersName.innerText = canidate1.name;
  } else if (canidate1.electionResults[state] < canidate2.electionResults[state]) {
             winnersName.innerText = canidate2.name;
             } else {
             winnersName.innerText = "DRAW";
             }
  
};

canidate1.totalVotes = function() {
  this.totalVotes = 0;
  
  for (var i= 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
    console.log(this.totalVotes);
  }
};

canidate1.totalVotes();

canidate2.totalVotes = function() {
  this.totalVotes = 0;
  
  for (var i= 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
    console.log(this.totalVotes);
  }
};

canidate2.totalVotes();

var winner = "";

if (canidate1.totalVotes > canidate2.totalVotes){
  winner = canidate1.name;
}
else if (canidate1.totalVotes < canidate2.totalVotes){
  winner = canidate2.name;
}
else {
  winner = "Draw";
}

console.log("The winner is " + winner + "!!!");

var countryTable = document.getElementById("countryResults");
var countryRow = countryTable.children[0].children[0];

countryRow.children[0].innerText = canidate1.name;
countryRow.children[1].innerText = canidate1.totalVotes;
countryRow.children[2].innerText = canidate2.name;
countryRow.children[3].innerText = canidate2.totalVotes;
countryRow.children[5].innerText = winner;

