const Slackbot = require ('slackbots');
const axios = require ('axios');
var qaMembers = new Array();
qaMembers = ['Chance', ' Kaygee', ' Raabya', ' James', ' Emily', ' Pat'];
var channel = "test123";
const bot = new Slackbot({
   token: 'xoxb-2670620364-398066704102-o0W7SYki1zAK00tfNGJYah4h',
   name: 'SmokeTesterBot'
});

//Start Handler
bot.on('start', function(){
    bot.postMessageToChannel(
    channel,
    'Get ready to smoke test. Here are your assignments for the week \n'+assignMembers()
    )
}
);

//Error Handler
bot.on('error',(err)=> console.log(err));

//Message Handler
bot.on("message", (data) => {
   if (data.type !== "message") {
     return;
   }
   handleMessage(data.text);
 });

 // Response to Data
 function handleMessage(message) {
   if (message.includes("addmember")) {
    addMember(message); 
    displayMembers();
   } 
   else if (message.includes("removemember")) {
       removeMember(message);
     }
 }
function assignMembers(){
   var areaForSmokeTesting =
   ['Translator Application, Tranlation job claim, Translator customer side, Workspace claim jobs (TR, CP, SU, TR)',
   'Line Editor (SR, Non-SR), CTCE timestamped (Desktop + Mobil), CTCE non-timestamped (Desktop + Mobil)',
   'Dash, CPCE (Desktop + Mobil), SU Editor, SU Customer editor (Desktop + Mobil)',
   'Freelancer CP, Freelancer SU, Freelancer TC',
   'Temi set up order (Mobil + Dekstop), Temi Editor (Mobil + Dekstop)',
   'QC & Grading, Customer Experience: Payment & Billing, My Files & Search Files, Order Hitory'];
   qaMembers = shuffleArray (qaMembers);
   var temp='';
   for (var i = qaMembers.length-1; i >=0; i--)
   temp = temp + '@'+qaMembers[i]+' : '+ areaForSmokeTesting[i] +'\n';
   return temp;
}

function shuffleArray (array){
  for (var i = array.length-1; i >=0; i--) {

       var randomIndex = Math.floor(Math.random()*(i+1));
       var itemAtIndex = array[randomIndex];
       array[randomIndex] = array[i];
       array[i] = itemAtIndex;
   }

   return array
}

function addMember(member)
{
  member = member.replace("addmember","");
  var indexOfMemberName = member.indexOf('>');
  member = member.substring(indexOfMemberName+2);
  member = member.trim();
  var newMember = ' '+member; 
   qaMembers.push(newMember);
   bot.postMessage(channel,'Ok I have added '+newMember+' to the member list');
}

function displayMembers()
{
  bot.postMessage(channel,'This is the current list of members ' +qaMembers.toString());
}

function removeMember(memberToRemove)
{
    memberToRemove = memberToRemove.replace("removemember","");
    var indexOfMemberName = memberToRemove.indexOf('>');
    memberToRemove = memberToRemove.substring(indexOfMemberName+2);
    console.log(memberToRemove); 
    if (qaMembers.includes(memberToRemove)){
    var indexOfMemberName = qaMembers.indexOf(memberToRemove)
    qaMembers.splice(indexOfMemberName,1);
    displayMembers();
  }
  else
  {bot.postMessageToChannel(channel,"The member does not exist")}
}