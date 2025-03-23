// メンズ外見コンサルLP JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニューの制御
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // ナビゲーションのスムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ハンバーガーメニューが開いている場合は閉じる
            if (navList.classList.contains('active')) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // ヘッダーの高さ分を引く
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // GSAPアニメーション
    // GSAPとScrollTriggerの初期化
    gsap.registerPlugin(ScrollTrigger);
    
    // ヒーローセクションのアニメーション
    const heroTl = gsap.timeline();
    heroTl.from('.hero-title-main', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.hero-title-sub', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5');
    
    // ヘッダーのスクロールアニメーション
    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'bottom top',
            toggleActions: 'play none none reverse'
        },
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        duration: 0.3
    });
    
    // セクションタイトルのアニメーション
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // ABOUTセクションのテキストアニメーション
    const aboutTexts = document.querySelectorAll('.about-text p');
    aboutTexts.forEach((text, index) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // サービスアイテムのアニメーション
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // ビフォーアフターのアニメーション
    const beforeAfterItems = document.querySelectorAll('.before-after-item');
    beforeAfterItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // フローアイテムのアニメーション
    const flowItems = document.querySelectorAll('.flow-item');
    flowItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.3,
            ease: 'power3.out'
        });
    });
    
    // フロー矢印のアニメーション
    const flowArrows = document.querySelectorAll('.flow-arrow');
    flowArrows.forEach((arrow, index) => {
        gsap.from(arrow, {
            scrollTrigger: {
                trigger: arrow,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: -20,
            duration: 0.5,
            delay: index * 0.3 + 0.2,
            ease: 'power3.out'
        });
    });
    
    // お客様の声のアニメーション
    const voiceItems = document.querySelectorAll('.voice-item');
    voiceItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // コンタクトフォームのアニメーション
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.2 + index * 0.1,
            ease: 'power3.out'
        });
    });
    
    gsap.from('.form-policy, .form-submit', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    // スクロールインジケーターのアニメーション
    gsap.to('.scroll-indicator i', {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
});
