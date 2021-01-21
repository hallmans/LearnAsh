//fh to celcius 
//Day 9

const chalk = require('chalk');
const log = console.log;

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToF = cTemp * 9 / 5 + 32;
    log(chalk.green(" The temperature in celcius is: " + cTemp + " The temperature in farenheight is: " + cToF + "\n"));
    return cTemp;
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToC = (fTemp - 32) * 5 / 9;
    log(chalk.blue("The temperature in farenheight is: " + fTemp + " The temperature in celcius is: " + fToC + "\n"));
    return fTemp;
} 
cToF(30);
fToC(60);

// (32°F − 32) × 5/9 = 0°C