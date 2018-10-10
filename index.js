const Slackbot = require ('slackbots');
const axios = require ('axios');
var qaMembers = ['Chance', 'Kaygee', 'Raabya', 'James', 'Emily', 'Pat'];
const bot = new Slackbot({
   token: 'xoxb-2670620364-398066704102-o0W7SYki1zAK00tfNGJYah4h',
   name: 'SmokeTesterBot'
});

//Start Handler
bot.on('start', function(){
    bot.postMessageToChannel(
    'test123',
    'Get ready to smoke test. Here are your assignments for the week \n'+assignMembers(),
    ':fire:'
    );
}
);

//Error Handler
bot.on('error',(err)=> console.log(err));

//Message Handler
bot.on('message', data => {
   if (data.type !== 'message') {
     return;
   }

   handleMessage(data.text);
 });

 // Respons to Data
 function handleMessage(message) {
   if (message.includes('addmember')) {
       bot.postMessageToChannel('qa-team', 'Who is the new QA team Member?')
       var member = bot.getUser();
           addMember(member.text);
           bot.postMessage('testforraabya','Ok I have added '+member.text+' to the member list')
           bot.postMessage('testforraabya','This is the current list of members')
   } else if (message.includes('removemember')) {
     removeMember()
     bot.postMessageToChannel('qa-team', 'Who is leaving us?')
     data => {
       removeMember(data.text);
     }
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

function addMember(newMember)
{
   qaMembers.push(newMember);
}

function removeMember(memberToRemove)
{
   qaMembers.splice(qaMembers.findIndex(memberToRemove),1)
}