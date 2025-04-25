function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.right === '0px') {
    sidebar.style.right = '-150px';
  } else {
    sidebar.style.right = '0px';
  }
}

document.body.addEventListener('click', function (event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleBtn');
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnButton = toggleBtn.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnButton) {
    sidebar.style.right = '-200px';
  }
});
