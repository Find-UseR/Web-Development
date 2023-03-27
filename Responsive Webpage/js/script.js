let icons = document.querySelector('.iconOpen')
let navlist = document.querySelector('.list');

icons.onclick = () => {
	navlist.classList.toggle('open');
	icons.classList.toggle('active');
};
