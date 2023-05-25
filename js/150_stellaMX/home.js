const directoryTheme = drupalSettings.path.themeUrl

window.addEventListener('DOMContentLoaded', () => {
    eventListeners()
})

async function eventListeners() {
    // Funcionalidad de lasanimaciones AOS
    AOS.init({
		easing: 'ease',
        once: true,
    });

    // Funcionalidad del Swiper
    try {
        let script = await loadDynamic(`${directoryTheme}/dist/lib/swiper/swiper-bundle.min.js`)
        if(script.loaded) {
            //swiperBanner()
            //productsSwiper()
        }
    } catch (error) { console.error('Error:', error) }

    // Function Particles
    particlesFunction()
}

function particlesFunction() {
	particlesJS('particles-js',
		{
		"particles": {
			"number": {
				"value": 100,
				"density": {
					"enable": true,
					"value_area": 1000
				}
			},
			"color": {
				"value": "#BF9B5F",
				"width": 1
			},
			"shape": {
				"type": ["circle"],
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				// "image": {
				// 	"src": "https://mxvickys.dp150.xyz/sites/default/files/mxvickys/files/2022-05/Vector_0.png",
				// 	"width": 1000,
				// 	"height": 1000
				// }
			},
			"opacity": {
				"value": 1,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 7,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 20,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "center",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
					"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
			"retina_detect": false
		}

	);
	particlesJS('particles-js2',
		{
		"particles": {
			"number": {
				"value": 100,
				"density": {
					"enable": true,
					"value_area": 1000
				}
			},
			"color": {
				"value": "#BF9B5F",
				"width": 1
			},
			"shape": {
				"type": ["circle"],
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				// "image": {
				// 	"src": "https://mxvickys.dp150.xyz/sites/default/files/mxvickys/files/2022-05/Vector_0.png",
				// 	"width": 1000,
				// 	"height": 1000
				// }
			},
			"opacity": {
				"value": 1,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 7,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 20,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "center",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
					"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
			"retina_detect": false
		}

	);
}

const swiperBanner = new Swiper(".swiperBanner", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});
const productsSwiper = new Swiper(".productsSwiper", {
    slidesPerView: 2.5,
    spaceBetween: 160,
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1.2,
        spaceBetween: 60,
        direction: "horizontal"
      },
      1199: {
        slidesPerView: 2.2,
        spaceBetween: 30,
        direction: "horizontal"
      },
      1600: {
        slidesPerView: 3.2,
        spaceBetween: 30,
        direction: "horizontal"
      },
    },
});
