import './style.css'

const createImages = async () => {
	const datas = await userServices.getUser()
	const profilePic = datas.profilePicture

	const logo = document.createElement('img')
	logo.setAttribute('src', logoIcon)
	document.querySelector('.main-header-logo').appendChild(logo)

	const title = document.createElement('img')
	title.setAttribute('src', `${profilePic || avatarIcon}`)
	document.querySelector('.main-header-avatar').appendChild(title)

	const navProfile = document.createElement('img')
	navProfile.setAttribute('src', `${profilePic || avatarIcon}`)
	document.querySelector('#nav-profile').appendChild(navProfile)
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

	document.querySelectorAll('.cancelled').forEach(close => {
		close.addEventListener('click', () => {
			document.querySelectorAll('.modal-popups').forEach(modal => {
				modal.style.display = 'none'
			})
		})
	})

	document.querySelector('#close-recovery').addEventListener('click', () => {
		document.querySelector('.modals').style.display = 'none'
	})
}
closeModal()

const showHomePage = () => {
	document.querySelectorAll('.section').forEach(section => {
		section.style.display = 'none'
	})
	document.querySelector('main').style.display = 'block'
}

showHomePage()

const navigatePages = () => {
	document.querySelectorAll('.list').forEach(navList => {
		navList.addEventListener('click', e => {
			const list = e.target.id
			const activeSection = document.querySelector(`.${list}`)
			const navList = document.querySelectorAll('.list i')
			const activeList = document.querySelector(`#${list}`)

			document.querySelectorAll('section').forEach(section => {
				section.style.display = 'none'
				let { className } = section
				if (className === list) {
					navList.forEach(list => {
						list.style.color = '#ce6a10'
					})
					activeList.style.color = 'white'
				}
			})
			activeSection.style.display = 'block'
		})
	})
}

navigatePages()