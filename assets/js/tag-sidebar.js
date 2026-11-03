/* eslint-env browser */

/**
 * Metal Coder: collapsible Topics list (partials/tag-sidebar.hbs).
 *
 * Below the desktop breakpoint the CSS limits a collapsible list to two rows.
 * This script marks the list collapsible, shows the "Show all" toggle only
 * when some topics are actually hidden, and expands the list if keyboard
 * focus moves to a topic that is clipped away.
 */
(function (window, document) {
    var sidebar = document.querySelector('.tag-sidebar');
    if (!sidebar) return;

    var list = sidebar.querySelector('.tag-sidebar-list');
    var toggle = sidebar.querySelector('.tag-sidebar-toggle');
    if (!list || !toggle) return;

    sidebar.classList.add('is-collapsible');

    function isExpanded() {
        return sidebar.classList.contains('is-expanded');
    }

    function setExpanded(expanded) {
        sidebar.classList.toggle('is-expanded', expanded);
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.textContent = expanded ? 'Show less' : 'Show all';
    }

    function update() {
        if (isExpanded()) {
            toggle.hidden = false;
            return;
        }
        // Collapsed: only offer the toggle if some topics don't fit
        toggle.hidden = list.scrollHeight <= list.clientHeight + 1;
    }

    toggle.addEventListener('click', function () {
        setExpanded(!isExpanded());
        update();
    });

    list.addEventListener('focusin', function (event) {
        if (isExpanded()) return;
        // Compare layout position, not on-screen position: focusing a clipped
        // item scrolls the overflow:hidden list, which would hide the overflow.
        var item = event.target.closest('li');
        if (item && item.offsetTop + item.offsetHeight > list.clientHeight) {
            list.scrollTop = 0;
            setExpanded(true);
            update();
        }
    });

    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(update, 100);
    });

    update();
})(window, document);
