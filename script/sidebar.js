document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openTeams');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('teamSidebar');

    //자동 어둡게게
    const dim = document.createElement('div');
    dim.classList.add('dim-overlay');
    document.body.appendChild(dim);

    //탐 선탹창창 열기
    openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    dim.classList.add('active');
    });

    //닫기
    function closeSidebar() {
    sidebar.classList.remove('open');
    dim.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeSidebar);

    //외부 누르면 닫기
    dim.addEventListener('click', closeSidebar);

    // ESC 누르면 닫기
    document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
    }
    });

});