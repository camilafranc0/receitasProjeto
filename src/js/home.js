let sidebar = document.getElementById('sidebar');
let closeBtn = document.getElementById('closeBtn');
let openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', function() {
    sidebar.classList.remove("-translate-x-full");

    sidebar.classList.add('flex');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.add("-translate-x-full");
});