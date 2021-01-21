//Telco program with functions inside of the objects
//Day 9


const chalk = require('chalk');
const log = console.log;

var checking = 0;

var Telco = {
    isDeposit : function (amt){
        checking = checking + amt;
	log(chalk.green('Your deposit was $' + amt + ' Your new balance is $',+ checking + '\n' ));
        },
    isWithdraw : function (amt){
	var broke = amt > checking;
		if(broke){
			checking = checking;
			log(chalk.red('Insufficient funds! We cannot withdraw $', amt, + " Your current balance is: " + checking + '\n'));
		}
		else{
			checking = checking - amt;
			log(chalk.yellow('Your withdraw was $', + amt,'Your new balance is $' + checking));
		}		
}
}
Telco.isDeposit(10);
Telco.isWithdraw(50);
Telco.isDeposit(100);
Telco.isWithdraw(50);
Telco.isDeposit(10);
Telco.isWithdraw(50);



