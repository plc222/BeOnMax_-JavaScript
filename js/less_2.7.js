let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};




for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && b!= '' && a.length < 50) {
			alert("DONE!!");
			appData.expenses[a] = b;
		}else {
			alert("Введите корректные данные");
			a = prompt("Введите обязательную статью расходов в этом месяце", '');
			b = prompt("Во сколько обойдется?", '');
		}
		
}
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay <= 100) {
	alert("Да Вы бомж, батенька - у Вас минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
	alert("У Вас средний уровень достатка");
} else if (appData.moneyPerDay > 1000) {
	alert("У Вас неплохой уровень достатка");
} else {
	alert("ALARM!!!")
}