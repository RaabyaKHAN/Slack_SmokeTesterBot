const Slackbot = require ('slackbots');
const axios = require ('axios');
var qaMembers = ['chance', 'kaygee', 'raabya', 'james'];
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
        bot.postMessageToChannel('test123', 'Who is the new QA team Member?')
        var member = bot.getUser();
            addMember(member.text);
            bot.postMessage('testforraabya','Ok I have added '+member.text+' to the member list')
            bot.postMessage('testforraabya','This is the current list of members')
    } else if (message.includes('removemember')) {
      removeMember()
      bot.postMessageToChannel('test123', 'Who is leaving us?')
      data => {
        removeMember(data.text);
      }
    } 
  }
function assignMembers(){
    var areaForSmokeTesting = ['Freelancer Application TC , Revver Tools TC, CTCE',
    'Freelancer Application CP, Revver Tools CP, CCPE',
    'Freelancer Application SU, Revver Tools SU, Customer Editor SU',
    'Freelancer Application TR, Revver Tools TR, Customer Order details TR, Temi, Checkout -> (Prepay + Invoicing + Credit limit, Credit card, Paypal'];
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