// banking progtram
//day 5

const chalk = require('chalk');
const log = console.log;
 
var checking = 0;

function isDeposit(amt){
        checking = checking + amt;
	log(chalk.green('Your deposit was $' + amt + ' Your new balance is $',+ checking + '\n' ));
}
function isWithdraw(amt){
	var broke = amt > checking;
		if(broke){
			checking = checking;
			log(chalk.red('Insufficient funds! We cannot withdraw $', amt, '\n'));
		}
		else{
			checking = checking - amt;
			log(chalk.yellow('Your withdraw was $', + amt,'Your new balance is $' + checking + '\n'));
		}		
log(chalk.blue('Thank you for your purchase\n'));
}

isDeposit(1000);
isWithdraw(900);
isDeposit(125);
isWithdraw(400);
isDeposit(230);
isWithdraw(432);
isDeposit(876);
isWithdraw(1100);
isDeposit(600);
isWithdraw(650);
isDeposit(100);
isWithdraw(350);




