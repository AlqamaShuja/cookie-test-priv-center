/**
 * Demo helper only (clients do not need this): prints the notice section currently in the page URL
 * (e.g. privacy.html#your-rights-4 -> "your-rights-4") into <code id="current-notice-section">.
 * noticeEmbed.js updates that fragment with replaceState, which does not fire the browser's
 * "hashchange" event, so we also poll.
 */

/* ---------- Plain JavaScript version ---------- */
function showCurrentNoticeSection() {
    var indicator = document.getElementById('current-notice-section')
    if (indicator) {
        indicator.textContent = decodeURIComponent(window.location.hash.replace(/^#/, '')) || '(none)'
    }
}

window.addEventListener('hashchange', showCurrentNoticeSection) // footer links, back/forward
setInterval(showCurrentNoticeSection, 300) // section clicks inside the notice (replaceState)
showCurrentNoticeSection()

/* ---------- jQuery version (same behaviour; use INSTEAD of the block above on a site that loads jQuery) ----------
$(function () {
    function showCurrentNoticeSection() {
        $('#current-notice-section').text(decodeURIComponent(window.location.hash.replace(/^#/, '')) || '(none)')
    }

    $(window).on('hashchange', showCurrentNoticeSection) // footer links, back/forward
    setInterval(showCurrentNoticeSection, 300) // section clicks inside the notice (replaceState)
    showCurrentNoticeSection()
})
*/
