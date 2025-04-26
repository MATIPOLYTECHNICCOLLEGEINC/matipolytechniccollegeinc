function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.right === '0px') {
    sidebar.style.right = '-150px';
  } else {
    sidebar.style.right = '0px';
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
    sidebar.style.right = '0px';
  }
}
