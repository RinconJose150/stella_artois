window.addEventListener('DOMContentLoaded', () => {
    eventListeners()
})

function eventListeners(params) {
    /* ========== Swiper ========== */
    swiperGeneralStyles

    // Funcionalidad de lasanimaciones AOS
    AOS.init({
		easing: 'ease',
        once: true,
    });
}

/* ========== Swiper ========== */
const swiperGeneralStyles = new Swiper(".swiperGeneralStyles", {
    slidesPerView: 1.9,
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});
/* ========== End Swiper ========== */

/* ========== Video Youtube ========== */
function onYouTubeIframeAPIReady() {
    const allVideos = document.querySelectorAll('.imgVideo')
    allVideos.forEach( video => {
        video.addEventListener('click', e => {
            e.preventDefault();
            const codevideo = video.dataset.codevideo;
            let popupVideo = document.createElement('DIV')
            popupVideo.classList.add('popupVideo');
            popupVideo.innerHTML = 
            `
            <div class="popupVideo__body">
                <div class="btnClose"></div>
                <div id="hola"></div>
            </div>
            `;
            const body = document.querySelector('body')
            body.appendChild(popupVideo);
            // instanceVideo(codevideo)

            window.player = new YT.Player('hola', {
                videoId: codevideo,
                events: {
                    'onReady': onPlayerReady,
                }
            });

            setTimeout(() => {
                popupVideo.classList.add('opaVisible');
            }, 100);

            closePopUPVideo(body,popupVideo)
        })
    })

}

function onPlayerReady(event) {
    const nameVideo = window.player.videoTitle;
    // window.dataLayer.push({
    //     'event': 'GAEvent',
    //     'event_category': 'Video',
    //     'event_action': 'Play',
    //     'event_label': nameVideo,
    //     'interaction': 'true'
    // });
    event.target.playVideo();
}

const closePopUPVideo = (body,popupVideo) => {
    const btnClose = document.querySelectorAll('.btnClose');
    btnClose.forEach( btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            popupVideo.classList.remove('opaVisible')
            setTimeout(() => {
                body.removeChild(popupVideo);
            }, 500);
        })
    })
}
/* ========== End Video Youtube ========== */
