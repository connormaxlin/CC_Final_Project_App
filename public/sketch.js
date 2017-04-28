var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
var textHPos = 260;
var canvas;
var introText, introText2;
var responseText;

var nyt = ["https://www.nytimes.com/2017/04/27/us/politics/fact-check-trump-border-wall-mexico.html", 
           "https://www.nytimes.com/2017/04/26/us/politics/trump-tax-plan-budget-deficit.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news",
          "https://www.nytimes.com/2017/04/27/us/politics/trump-legal-defeats.html?ribbon-ad-idx=4&rref=politics&module=Ribbon&version=context&region=Header&action=click&contentCollection=Politics&pgtype=article",
          "https://www.nytimes.com/2017/04/27/world/americas/mexico-trump-nafta-trade.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news",
          "https://www.nytimes.com/2017/04/27/us/politics/first-100-days-donald-trump.html",
          "https://www.nytimes.com/aponline/2017/04/27/us/politics/ap-us-trump-confusing-trade-policy.html",
          "https://www.nytimes.com/aponline/2017/04/27/us/politics/ap-us-trump-personal-taxes.html"];

function setup() {
    //    createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    canvas = createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    // instructions:
    myRec.onResult = showResult;
    myRec.start();
    introText = createP("The truth is ...");
    introText.position(100, 100);
    introText.style("font-family: ChaparralPro-Bold; font-size: 38pt;");
    introText2 = createP("(Say something)");
    introText2.position(100, 200);
    introText2.style("font-family: Arial");
}

function draw() {
    
}

//Voice not working. Documentation says it needs to be running on a server? 
function showResult() {
    if (myRec.resultValue == true) {
        responseText = createA(nyt[Math.floor(Math.random() * nyt.length)], "The truth is " + myRec.resultString);
        responseText.position(100, textHPos);
        responseText.style("font-family: ChaparralPro-Bold; font-size: 38pt; color: black; text-decoration: none");
        console.log(myRec.resultString);
        textHPos += 100;
    }
}