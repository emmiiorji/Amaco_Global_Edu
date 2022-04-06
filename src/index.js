import './style.css'
import renderUniversities from './universities'
import interSectionObserver from './animation.js'
import logoIcon from './assets/img/amaco-logo1.jpg'
import aboutIcon from './assets/img/amaco-logo2.png'
import aboutIntroIcon from './assets/img/our-history.jpg'
import historyIcon from './assets/img/history.jpg'
import missionIcon from './assets/img/mission.jpg'
import visionIcon from './assets/img/vision.jpg'

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

const openModal = () => {
	const modalButtons = Array.from(document.querySelectorAll('.popup'))
	const moreBtn = Array.from(document.querySelectorAll('.open'))
	const modals = Array.from(document.querySelectorAll('.modal'))
	const popups = Array.from(document.querySelectorAll('.modal-popups'))

	const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

	const moreBtnZip = moreBtn.map((button, i) => [button, popups[i]])
	modalButtonZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})

	moreBtnZip.forEach(pair => {
		pair[0].addEventListener('click', () => {
			pair[1].style.display = 'block'
		})
	})
}
openModal()

const closeModal = () => {
	document.querySelectorAll('.cancel').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.modal').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})
}
closeModal()

const showHomePage = () => {
	document.querySelectorAll('.section').forEach(section => {
		section.style.display = 'none'
	})
	document.querySelector('.home').style.display = 'block'
}

showHomePage()

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
				className = className.split(' ')[1]
				if (className === list) {
					activeSection.style.display = 'block'
				}
			})
		})
	})
}

navigatePages()
