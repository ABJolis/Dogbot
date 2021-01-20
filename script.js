//EloquenJS functions notes

//function to trigger when page loads
window.addEventListener("load", (event) => {

//calculates human-readable time 
  let myDate = new Date (Math.floor(Date.now()));
  let theDate = myDate.toUTCString();
  let dateRay = theDate.split(" ");
  let hrMin = dateRay[4].slice(0, 5)
  let timestamp = hrMin + " " + dateRay[dateRay.length-1];

//creates var botID (val "Dogbot Buddy"), appends to chatlog
  let botID = document.createElement("p");
  botID.className = "botname";
  botID.textContent = "Dogbot Buddy";
  document.getElementById("chatlog").appendChild(botID);

//creates var botgreet, initialized to array of dogbot replies
  let botgreet = ["It's YOU, I love you!!!", "Hi hi hellooooo!!!", "I was hoping you'd show up!", "I am sooooo happy to see you!!!", "I missed you so much!", "Yay, you're here!", "Woohoo, you're here - this day just got awesome!", "Hello my friend, HELLO!!!", "It is so wonderful see you!"]; 

//creates var botstart to hold bot's initial greeting
  let botstart = document.createElement("p");
  botstart.className = "botReply";

//pseudo-randomly picks element in botgreet; appends to chatlog
  let hello = Math.floor(Math.random() * botgreet.length);
  botstart.innerHTML = botgreet[hello] + "<br>"
  document.getElementById("chatlog").appendChild(botstart);

//creates var bottime to hold timestamp, appends to chatlog
  let bottime = document.createElement("p");
  bottime.className = "bottimestyle";
  bottime.innerText = timestamp;
  document.getElementById("chatlog").appendChild(bottime);
});

//Function to trigger when user submits/clicks "send" button
$("form").on("submit", function(event) {
  event.preventDefault();

//re-calculates time inside function; needs better solution
  let myDate = new Date (Math.floor(Date.now()));
  let theDate = myDate.toUTCString();
  let dateRay = theDate.split(" ");
  let hrMin = dateRay[4].slice(0, 5)
  let timestamp = hrMin + " " + dateRay[dateRay.length-1];

//creates var usermsg, defined as value of textarea input 
  let $usertext = $(":input");
  let usertext = $usertext.val();

//creates var userID (val "Human Friend"); appends to chatlog
  let userID = document.createElement("p");
  userID.className = "username";
  userID.textContent = "Human Friend";
  document.getElementById("chatlog").appendChild(userID);

//creates var usermsg to hold reply; appends to chatlog
  let usermsg = document.createElement("p");
  usermsg.className = "userReply";
  usermsg.innerHTML = usertext + "<br>";
  document.getElementById("chatlog").appendChild(usermsg);

//creates var utime to hold timestamp; appends to chatlog
  let utime = document.createElement("p");
  utime.className = "utimestyle";
  utime.innerText = timestamp;
  document.getElementById("chatlog").appendChild(utime);

//clears textarea/input area after user hits "send"
  $("textarea").val("");

//creates var botIDstill to again hold "Dogbot Buddy"
//since previous botID not working. Needs better solution.
  let botIDstill = document.createElement("p");
  botIDstill.className = "botname";
  botIDstill.textContent = "Dogbot Buddy";
  document.getElementById("chatlog").appendChild(botIDstill);

//creates var bottext, initialized to array of dogbot replies
  let bottext = [
    "You are amazing!", "I love you so much.", "You're terrific!", "You're doing great.", "It's a priviledge to take the blame for your gas.", "You're the best, do you know that?", "Let's go for a walk!", "Time for a nap, am I right?", "I think we've both earned a treat.", "You smell fantastic.", "You are the best friend anyone has ever had.", "You've made me the luckiest dog in the world.", "You put the 'great' in 'Great Apes'.", "I adore you.", "Thank you for being you.", "The sound of your voice is like treats for my ears.", "You are so smart.", "I don't know what you're saying, I just know I agree.", "You deserve a nap.", "Who's a good human? You are! You're a good human!", "I could smell you all day.", "You are beautiful.", "I have been hard at work smelling all the laundry.", "I ate a whole shoe today. It's a tough job, but somebody's got to do it.", "It's important to take the time to feel the wind in your ears.", "My paws aren't muddy, they're painted.", "Every time you find my hair on the furniture, know that I'm thinking of you.", "I don't believe in having enemies, unless they work for the Post Office.", "Every time a crumb falls, a puppy gets its tail-wag."]; 

//creates var botmsg to hold dogbot reply to user.
  let botmsg = document.createElement("p");
  botmsg.className = "botReply";
  botmsg.id = "botreplymsg";

//pseudo-randomly picks bottext element for botmsg; appends to chatlog
  for (let i = 0; i < bottext.length+1; i++) {
    let rep = Math.floor(Math.random() * bottext.length);
    botmsg.innerHTML = bottext[rep] + "<br>"};
  document.getElementById("chatlog").appendChild(botmsg);

//creates var bottime to hold timestamp; appends to chatlog
  let bottime = document.createElement("p");
  bottime.className = "bottimestyle";
  bottime.innerText = timestamp;
  document.getElementById("chatlog").appendChild(bottime);

//makes chatlog scroll automatically to last msg
  $("#chatlog").scrollTop($("#chatlog").prop("scrollHeight"));  
});

//Below function executes literally the exact same code
//as the block above, but triggered by "enter" keypress
//instead of button click. Really needs better solution.
$("form").keypress(function(event) {
  if (event.which === 13) {
    event.preventDefault();
    let myDate = new Date (Math.floor(Date.now()));
    let theDate = myDate.toUTCString();
    let dateRay = theDate.split(" ");
    let hrMin = dateRay[4].slice(0, 5)
    let timestamp = hrMin + " " + dateRay[dateRay.length-1];

    let $usertext = $(":input");
    let usertext = $usertext.val();

    let userID = document.createElement("p");
    userID.className = "username";
    userID.textContent = "Human Friend";
    document.getElementById("chatlog").appendChild(userID);

    let usermsg = document.createElement("p");
    usermsg.className = "userReply";
    usermsg.innerHTML = usertext + "<br>";
    document.getElementById("chatlog").appendChild(usermsg);

    let utime = document.createElement("p");
    utime.className = "utimestyle";
    utime.innerText = timestamp;
    document.getElementById("chatlog").appendChild(utime);

    $("textarea").val("");

    let botIDstill = document.createElement("p");
    botIDstill.className = "botname";
    botIDstill.textContent = "Dogbot Buddy";
    document.getElementById("chatlog").appendChild(botIDstill);

    let bottext = ["You are amazing!", "I love you so much.", "You're terrific!", "You're doing great.", "It's a priviledge to take the blame for your gas.", "You're the best, do you know that?", "Let's go for a walk!", "Time for a nap, am I right?", "I think we've both earned a treat.", "You smell fantastic.", "You are the best friend anyone has ever had.", "You've made me the luckiest dog in the world.", "You put the 'great' in 'Great Apes'.", "I adore you.", "Thank you for being you.", "The sound of your voice is like treats for my ears.", "You are so smart.", "I don't know what you're saying, I just know I agree.", "You deserve a nap.", "Who's a good human? You are! You're a good human!", "I could smell you all day.", "You are beautiful.", "I have been hard at work smelling all the laundry.", "I ate a whole shoe today. It's a tough job, but somebody's got to do it.", "It's important to take the time to feel the wind in your ears.", "My paws aren't muddy, they're painted.", "Every time you find my hair on the furniture, know that I'm thinking of you.", "I don't believe in having enemies, unless they work for the Post Office.", "Every time a crumb falls, a puppy gets its tail-wag."]; 

    let botmsg = document.createElement("p");
    botmsg.className = "botReply";
    botmsg.id = "botreplymsg";

    for (let i = 0; i < bottext.length+1; i++) {
      let rep = Math.floor(Math.random() * bottext.length);
      botmsg.innerHTML = bottext[rep] + "<br>"};
    document.getElementById("chatlog").appendChild(botmsg);

    let bottime = document.createElement("p");
    bottime.className = "bottimestyle";
    //bottime.id = "bottimereply";
    bottime.innerText = timestamp;
    document.getElementById("chatlog").appendChild(bottime);

    $("#chatlog").scrollTop($("#chatlog").prop("scrollHeight"));  
}});  
