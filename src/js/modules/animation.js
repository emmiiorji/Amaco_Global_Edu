const interSectionObserver = () => {
	const header = document.querySelector('header')
	const introSection = document.querySelector('.wrapper')

	const options = {
		rootMargin: '260px',
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const modal = document.querySelector('.modal');
			if (!entry.isIntersecting || modal) {
				header.classList.add('header-active')
			} else {
				header.classList.remove('header-active')
			}
		})
	}, options)

	observer.observe(introSection)
}

export default interSectionObserver
