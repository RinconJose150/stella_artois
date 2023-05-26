window.addEventListener('DOMContentLoaded', () => {
    eventListeners()
})

function eventListeners(params) {
    swiperGeneralStyles

    frequestQuestionsFuntions()

    // Funcionalidad de lasanimaciones AOS
    AOS.init({
		easing: 'ease',
        once: true,
    });
}
const swiperGeneralStyles = new Swiper(".swiperGeneralStyles", {
    slidesPerView: 1.9,
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});

function frequestQuestionsFuntions() {
    const toggle = document.querySelectorAll('.toggle');
    // console.log(toggle);
    if(toggle) {
        const delegatedTo = '.toggle__show';
        document.querySelectorAll('.toggle').forEach(e => {
            e.addEventListener('click', (e) => {
                let clicked = e.target;
                if(clicked.closest(delegatedTo)) toggleFAQ(clicked.closest(delegatedTo), 'enable')
            })
        })
    
        const toggleFAQ = (element, type) => {
            if(!element) return;
            const {nextElementSibling: descriptionBlock} = element;
    
            switch (type) {
                case 'enable':
                    if(element.classList.contains('active')) return toggleFAQ(element, 'disable')
    
                    toggleFAQ(document.querySelector(`${delegatedTo}.active`), 'disable')
    
                    element.classList.add('active');
                    if(descriptionBlock) descriptionBlock.style.height = descriptionBlock.scrollHeight + 20 + "px";
                    setTimeout(() => {
                        descriptionBlock.classList.add('borderGold')
                    }, 300);
                    break;
                    
                case 'disable':
                    element.classList.remove('active');
                    if(descriptionBlock) descriptionBlock.style.height = '0';
                    setTimeout(() => {
                        descriptionBlock.classList.remove('borderGold')
                    }, 300);
                    break;
            }
        }
    }
}

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