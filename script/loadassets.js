// navbar 불러오기
fetch('assetHtml/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    // sidebar 열고 닫는 버튼 이벤트 연결 (navbar가 불러와진 후에)
    document.getElementById('openTeams').addEventListener('click', function() {
    document.getElementById('teamSidebar').classList.add('open');
    });
});

// sidebar 불러오기
fetch('assetHtml/sidebar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('sidebar-container').innerHTML = data;

    // 사이드바 닫기 버튼 이벤트 연결 (sidebar가 불러와진 후에)
    document.getElementById('closeSidebar').addEventListener('click', function() {
    document.getElementById('teamSidebar').classList.remove('open');
    });
});