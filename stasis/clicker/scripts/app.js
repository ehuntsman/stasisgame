var cars = 0
var engineer = 0
var totalClick = 1
var smk = false
var sm = 0
var rhRandom
var timb = 0
var tumblr = false

function press() {
	cars += (totalClick)
  document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
  $("#smk").fadeIn();
}
  
function engineerInfo() {
  document.getElementById('info').innerHTML = "A lonely man, whose whole purpose in life is to count every car that goes by."
}
  
function engineerBuy() {
  if (cars >= 100) {
  cars -= 100
  engineer ++
  document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
  document.getElementById('engineerCount').innerHTML = engineer
}
}
  
function engineerWork() {
  cars += engineer
  document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
}

setInterval(engineerWork, 2000);

function smkInfo() {
  document.getElementById('info').innerHTML = 'Super Minecraft Kid- A YouTube legend with the voice and the intelligence of an infant. His incessant screaming \<s>makes you wish for death\</s> encourages you to click harder. Double cash per click, can only be bought once. (You cannot duplicate a god.)'
}
  
function smkBuy() {
  if (cars >= 500 && smk === false) {
    cars -= 500
    totalClick *= 2
    document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
    document.getElementById('smkCount').innerHTML = 1
    smk = true
  }
}

function smInfo() {
  document.getElementById('info').innerHTML = 'The only thing dirty about this woman is her initials. ( ͡° ͜ʖ ͡°) Unphased by most worldly dangers thanks to her visor/sunglasses hybrid, she, her minivan, and her three kids: Kayleb, Kylea, and Tereesa are ready to destroy this button. Five cars per second.'
}
  
function smBuy() {
  if (cars >= 1000) {
    cars -= 1000
    sm++
    document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
    document.getElementById('smCount').innerHTML = sm
  }
}
  
function smWork() {
	cars += sm
  document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
}
  
function debug() {
  cars += 10000000000
  document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
}
  
setInterval(smWork, 200)
  
function rhInfo() {
  document.getElementById('info').innerHTML = 'The undisputed leader of the almighty pawn stars, he makes sure that you never, in fact, know what is coming through that door. Of course he would, he has been working here for 21 years after all. Gain a random amount of cars between 0 and 3000.'
}
  
function rhBuy() {
  if (cars >= 1500) {
		cars -= 1500
    rhRandom = Math.floor(Math.random() * 3000)
    cars += rhRandom
    document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
    alert('Sorry, best I can do is ' + rhRandom + '.');
  }
}
  
function timbInfo() {
  document.getElementById('info').innerHTML = 'This avid fanatic of the greatest example of footwear to ever be devised will certainly be of assisstance to your quest. Their elite designer footwear allow kicks to the button with astronomical agility. Fifteen extra cars per second.'
}
  
function timbBuy() {
  if (cars >= 2500) {
    cars -= 2500
    timb++
    document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
    document.getElementById('timbCount').innerHTML = timb
  }
}

function timbWork() {
  cars += timb
  document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
}
  
setInterval(timbWork, 67)
  
function tumblrInfo() {
  document.getElementById('tumblr').innerHTML = 'Tumblr Unknown: 5000 cars'
  document.getElementById('info').innerHTML = 'Sorry, my mistake. It appears xe does not like to be referred to by a gendered term such as "feminist." Xer button pressing abilities come from xer tendancies to type out well-thought out and justified messages to cis-scum about all men being misoginystic. Gain five cars per click, can only purchase one. (Who else would be a part of this anyways?)'
} 
  
function tumblrBuy() {
	if (tumblr == false) {
		cars -= 5000
    totalClick = 5
    document.getElementById('funds').innerHTML = 'Funds: ' + cars + ' cars'
    tumblr = true
  }
}
  
function chanInfo() {
  document.getElementById()
}