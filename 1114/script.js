// 스크롤이 부드럽게 이동하도록 하는 코드
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 페이지 상단으로 스크롤하는 버튼을 나타내는 코드
const scrollTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// 반응형 네비게이션 메뉴 토글을 위한 코드
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
});

//푸터 
const footer = document.getElementById('page-footer');
const windowHeight = window.innerHeight;

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + windowHeight;
    const documentHeight = document.body.offsetHeight;

    if (scrollPosition >= documentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
