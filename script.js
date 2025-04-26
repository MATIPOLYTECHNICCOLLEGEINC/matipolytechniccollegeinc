//function toggleSidebar() {
 // const sidebar = document.getElementById('sidebar');
 // if (sidebar.style.right === '0px') {
   // sidebar.style.right = '-150px';
 // } else {
  //  sidebar.style.right = '0px';
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isOpen = sidebar.style.right === '0px';

  if (isOpen) {
    sidebar.style.right = '-150px';
    document.removeEventListener('click', outsideClickListener);
  } else {
    sidebar.style.right = '0px';
    setTimeout(() => {
      document.addEventListener('click', outsideClickListener);
    }, 0);
  }

  function outsideClickListener(event) {
    if (!sidebar.contains(event.target)) {
      sidebar.style.right = '-150px';
      document.removeEventListener('click', outsideClickListener);
    }
  }
}
