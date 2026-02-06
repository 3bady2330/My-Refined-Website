document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        });
    });
});
