import '../css/style.css'
import renderUniversities from './modules/universities.service.js'
import interSectionObserver from './modules/animation.js'
import logoIcon from '../assets/img/amaco-logo1.jpg'
import aboutIcon from '../assets/img/amaco-logo2.jpg'
import aboutIntroIcon from '../assets/img/our-history.jpg'
import missionIcon from '../assets/img/mission.jpg'
import visionIcon from '../assets/img/vision.jpg'
import { countries } from 'countries-list'

interSectionObserver()
renderUniversities()

const createImages = async () => {
	const logo = document.createElement('img')
	logo.setAttribute('src', logoIcon)
	document.querySelector('.logo-wrapper').appendChild(logo)

	const about = document.createElement('img')
	about.setAttribute('src', aboutIcon)
	document.querySelector('.about-img').appendChild(about)

	const history = document.createElement('img')
	history.setAttribute('src', aboutIntroIcon)
	document.querySelector('.our-history-img').appendChild(history)

	const drive = document.createElement('img')
	drive.setAttribute('src', missionIcon)
	document.querySelector('.our-mission-img').appendChild(drive)

	const vision = document.createElement('img')
	vision.setAttribute('src', visionIcon)
	document.querySelector('.our-vision-img').appendChild(vision)
}

createImages()

function toggleMenu() {
	document.querySelectorAll('.menu-bar').forEach(element =>
		element.addEventListener('click', () => {
			document.querySelector('.mobile-menu').classList.toggle('active')
		}),
	)
}

toggleMenu()

const showHomePage = () => {
	document.querySelectorAll('.section').forEach(section => {
		section.style.display = 'none'
	})
	document.querySelector('.home').style.display = 'block'
}

showHomePage()

const showAboutPage = () => {
	document.querySelectorAll('.show-more').forEach(btn => {
		btn.addEventListener('click', () => {
			document.querySelectorAll('.section').forEach(section => {
				section.style.display = 'none'
			})
			document.querySelector('.about').style.display = 'block'
		})
	})
}

showAboutPage()

const navigatePages = () => {
	document.querySelectorAll('.list').forEach(navList => {
		navList.addEventListener('click', e => {
			const list = e.target.id
			const activeSection = document.querySelector(`.${list}`)
			const navList = document.querySelectorAll('.list')
			const activeList = document.querySelector(`#${list}`)

			document.querySelectorAll('.section').forEach(section => {
				section.style.display = 'none'
				let { className } = section

				// section.classList.contains(list)
				className = className.split(' ')[1]
				if (className === list) {
					activeSection.style.display = 'block';
					const overlay = activeSection.querySelector('.overlay')
					const boxShadow = activeSection.classList.contains('home')?
															'inset 200px 0px 200px 0px #000' : 'none'
					overlay.style['box-shadow'] = boxShadow;
					
				}
			})
		})
	})
}

navigatePages()

const disableCheck = () => {
	let checkboxes = Array.from(document.querySelectorAll(`.checkbox input[type=checkbox]`))
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('click', e => {
			e.preventDefault()
			e.stopPropagation()
		})
	})
}

disableCheck()

const countryList = () => {
	for (const country in countries) {
		const list = countries[country].name
		document.querySelector('#country').innerHTML += `<option value=${list} id="interest">${list}</option>`
	} 

	for (const country in countries) {
		const list = countries[country].name
		document.querySelector(
			'#residence',
		).innerHTML += `<option value=${list} id="homeland">${list}</option>`
	}
}
countryList()
