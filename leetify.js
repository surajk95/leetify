//leetify v1.0 by surajk95

function leetifyRoutine(firstString, index){
  var index=(index+3)%firstString.length;
  var leetifyDiv = document.getElementById('leetify');
  let options = codes[firstString[index]];
  let secondString = firstString;
  secondString[index]=options[parseInt(Math.random()*options.length)];
  const finalString=firstString.join('');
  leetifyDiv.innerHTML=`${finalString}`;
  setTimeout(leetifyRoutine, 25, firstString, index);
}

function leetify(inputString='LEETIFY', color='white', fontSize='32px', speed='25'){
  inputString = inputString.toUpperCase();
  console.log(`leetifying...`);
  var leetifyDiv = document.getElementById('leetify');
  leetifyDiv.style.color=`${color}`;
  leetifyDiv.style.fontSize=`${fontSize}`;
  var baseString=inputString.split('');
  var firstString=baseString;
  leetifyRoutine(firstString, 0);
}

var codes={
  "A":["A","4","@"],
  "B":["B","E","3","8"],
  "C":["C","G","<"],
  "D":["D"],
  "E":["E","B","3","8"],
  "F":["F","H","#"],
  "G":["G","C","<"],
  "H":["H","F","#"],
  "I":["I","J","L","!","1"],
  "J":["J","I","L","1","!"],
  "K":["K","X"],
  "L":["L","J","I","!","1"],
  "M":["M"],
  "N":["N"],
  "O":["O","0","Q","&"],
  "P":["P","6","9"],
  "Q":["Q","O","0","&"],
  "R":["R"],
  "S":["S","5","$"],
  "T":["T","7"],
  "U":["U","V","Y"],
  "V":["V","U","Y"],
  "W":["W"],
  "X":["X","K"],
  "Y":["Y","V"],
  "Z":["Z","2"],
  "0":["0","O","Q","&"],
  "1":["1","I","J","L","!"],
  "2":["2","Z"],
  "3":["3", "E", "B", "8"],
  "4":["4", "A", "@"],
  "5":["5","S","$"],
  "6":["6","P","9"],
  "7":["7", "T"],
  "8":["8", "B", "3", "E"],
  "9":["9","6","P"],
  "@":["@","A","4"],
  "<":["<","C","G"],
  "#":["#","F","H"],
  "!":["!","I","1","J","L"],
  "&":["&","Q","O","0"],
  "$":["$","S","5"]
}
