window.onload = () => {
    const loader = {
        init:function(){
            this.loading();
        },
        loading:function(){
            const loader = document.querySelector('.loader');
            function hide(){
                loader.classList.add('active');
            }
            setTimeout(hide, 1000);
        }
    }
    loader.init();
    const nav = {
        init:function(){
            this.menu();
            this.nav();
        },
        menu:function(){
            const menu = document.querySelector('.nav__menu');
            const btn = document.querySelector('.nav__button');

            btn.addEventListener('click', () => {
                menu.classList.toggle('active');
                btn.classList.toggle('active');
            })
        },
        nav:function(){
            const link = document.querySelectorAll('.nav__menu .nav__link');
            
            link.forEach((item, index) => {
                if (index == 0 || index == 5) {
                    item.href = "#home";
                }
                else if (index == 1 || index == 6) {
                    item.href = "#about";
                }
                else if (index == 2 || index == 7) {
                    item.href = "#career";
                }
                else if (index == 3 || index == 8) {
                    item.href = "#projects";
                }
                else if (index == 4 || index == 9) {
                    item.href = "#contact";
                }
            })
        }
    }
    nav.init();
    const slider = {
        init:function(){
            this.slide();
        },
        slide:function(){
            const next = document.querySelector('.banner__next');
            const slides = document.querySelectorAll('.banner__item');
            const currentSlide = document.querySelector('#currentSlide');
            const allSlides = document.querySelector('#slides');
            var index = 0;
            allSlides.innerHTML = slides.length;
            currentSlide.innerHTML = 1;

            function update(index){
                currentSlide.innerHTML = index + 1;
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
            }

            next.addEventListener('click', () => {
                index++;
                if (index > slides.length - 1) index = 0;
                update(index);
            })

            function autoSlide(){
                index++;
                if (index > slides.length - 1) index = 0;
                update(index);
            }

            setInterval(autoSlide, 5000);
        }
    }
    slider.init();
    const language = {
        init:function(){
            this.change();
        },
        change:function(){
            const languageBtn = document.querySelectorAll('.language img');
            const vi = document.querySelectorAll('.vi');
            const usa = document.querySelectorAll('.usa');

            vi.forEach(lang => lang.style.display = 'none')
            
            languageBtn.forEach(btn => btn.addEventListener('click', () => {
                if (btn.dataset.lang == 'vi') {
                    vi.forEach(lang => lang.style.display = 'none')
                    usa.forEach(lang => lang.style.display = 'inherit')
                }
                else if (btn.dataset.lang == 'usa') {
                    usa.forEach(lang => lang.style.display = 'none');
                    vi.forEach(v => v.style.display = 'inherit');
                }
            }))
        }
    }
    language.init();
    const wow = {
        init:function(){
            this.wowJS();
        },
        wowJS:function(){
            const items = document.querySelectorAll('.wow');

            options = {
                threshold: 0.2,
                rootMargin: '0px 0px 0px 0px'
            }

            function wowEffect(entry){
                entry.style.visibility = 'visible';

                let animationName = entry.dataset.animate;
                let durations = entry.dataset.duration || 1;
                let timingFunction = entry.dataset.timing || 'ease-out';
                let animationIterations = entry.dataset.type || 'forwards';
                let delays = entry.dataset.delay || 0;
                
                entry.style.animation = `${animationName} ${durations}s ${timingFunction} ${animationIterations} ${delays}s`;
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    else {
                        wowEffect(entry.target);
                        observer.unobserve(entry.target);
                    }
                })
            }, options)

            items.forEach(item => {
                item.style.visibility = 'hidden';
                observer.observe(item);
            })
        }
    }
    wow.init();
}