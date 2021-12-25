const menu = [
	{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити.',
		icon: 'payment'
	},
	{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді.',
		icon: 'extract'
	},
	{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата.',
		icon: 'settings'
	}
];

class Dashboard {
	constructor(menu) {
		this.menu = menu
	}

	getTab() {
		let tab = menu
			.map(item => {
				return `<b class="tab" id="${item.icon}"><input type="button" value="${item.tab.toUpperCase()}"></b>`
			})
			.join(``)
		return tab
	}

	getInfoBody() {
		let infoBody = menu
			.map(item => {
				return `<div class="${item.icon}">
								<div class="icon">
									<img src="icons/${item.icon}.svg" height="30">
								</div>
								<h2 class="title">${item.title}</h2>
								<p class="description">${item.description}</p>
							</div>`
			})
			.join(``)
		return infoBody
	}

	getRender() {
		return `<div class="info-block"><form class="navigation">${this.getTab()}</form><div class="info-block">${this.getInfoBody()}</div></div>`
	}

}

let infoBlock = new Dashboard(menu)
document.write(infoBlock.getRender())

const payment = document.querySelector('#payment')
const divPayment = document.querySelector('.payment')
const extract = document.querySelector('#extract')
const divExtract = document.querySelector('.extract')
const settings = document.querySelector('#settings')
const divSettings = document.querySelector('.settings')

divPayment.classList.add('active')
payment.classList.add('colored')

const activeElement = (id, element) => {	

	currentActive = document.querySelector('div.active')
	currentActive && currentActive.classList.remove('active')

	currentColored = document.querySelector('.colored')
	currentColored && currentColored.classList.remove('colored')

	element.classList.add('active')
	id.classList.add('colored')
}

payment.onclick = () => activeElement(payment, divPayment);
extract.onclick = () => activeElement(extract, divExtract);
settings.onclick = () => activeElement(settings, divSettings);





