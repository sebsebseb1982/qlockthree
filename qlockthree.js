var _ = require('lodash');

var displayCharsMinutes = "moinsoledixetrquartpmdvingt-cinquetsdemiepam";
var displayCharsHours = "ilnestodeuxquatretroisneufunesepthuitsixcinqmidixminuitonzerheures";

console.log(_.chunk(displayCharsHours, 11));

var now = new Date();

var getTextHours = function(date) {
   var hoursIntToText = {
	0:'minuit',
	1:'une',
	2:'deux',
	3:'trois',
	4:'quatre',
	5:'cinq',
	6:'six',
	7:'sept',
	8:'huit',
	9:'neuf',
	10:'dix',
	11:'onze',
	12:'midi',
	13:'une',
	14:'deux',
	15:'trois',
	16:'quatre',
	17:'cinq',
	18:'six',
	19:'sept',
	20:'huit',
	21:'neuf',
	22:'dix',
	23:'onze'
   };
   return hoursIntToText[date.getHours()];
}

var getTextMinutes = function(date) {
	var minutes = date.getMinutes();

	if(_.inRange(minutes, 5, 9)) {
		return "cinq";
	} else if(_.inRange(minutes, 10, 14)) {
		return "dix";
        } else if(_.inRange(minutes, 15, 19)) {
                return "et quart";
        } else if(_.inRange(minutes, 20, 24)) {
                return "vingt";
        } else if(_.inRange(minutes, 25, 29)) {
                return "vingt-cinq";
        } else if(_.inRange(minutes, 30, 34)) {
                return "et demie";
        } else if(_.inRange(minutes, 35, 39)) {
                return "moins vingt-cinq";
        } else if(_.inRange(minutes, 40, 44)) {
                return "moins vingt";
        } else if(_.inRange(minutes, 45, 49)) {
                return "moins le quart";
        } else if(_.inRange(minutes, 50, 54)) {
                return "moins dix";
        } else if(_.inRange(minutes, 55, 59)) {
                return "moins cinq";
	}
};

console.log("il est " + getTextHours(now) + " heures " + getTextMinutes(now));
