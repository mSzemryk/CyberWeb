// get app
document.addEventListener(
	'DOMContentLoaded',
	(getApp = () => {
		const getAppSection = document.getElementById('getApp')
		if (window.matchMedia('(min-width: 992px)')) {
			getAppSection.classList.add('d-none')
		} else {
			getAppSection.classList.remove('d-none')
		}
	})
)

getApp
