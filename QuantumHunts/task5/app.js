const cele = document.querySelector('.header .nav-bar .nav-list .celebrity');

const header = document.querySelector('.header.container');

celebrity.addEventListener('click', () => {
	celebrity.classList.toggle('active');
	
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		celebrity.classList.toggle('active');
			});
});
