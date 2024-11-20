function initializeMobile() {
    console.log('Mobile JS loaded');
    
    if (window.innerWidth > 480) {
        console.log('Not mobile environment');
        return;
    }

    const projectList = document.querySelector('.project-list');
    if (!projectList) {
        console.error('Project list not found');
        return;
    }
    console.log('Project list found');

    // project-wheel 요소 생성 및 추가
    projectList.innerHTML = `
        <div class="selection-box"></div>
        <div class="project-wheel"></div>
    `;

    const projectWheel = document.querySelector('.project-wheel');
    if (!projectWheel) {
        console.error('Project wheel not found');
        return;
    }
    console.log('Project wheel found');

    // 카테고리별 프로젝트 데이터 분리
    const projectsData = {
        digital: [
            { id: 1, title: 'Ready to play the GAME?', author: '김민경', image: 'images/works/김민경A.png', link: 'https://dibi00.github.io/2301110137_kimmingyeong_zolzak/' },
            { id: 2, title: '쌩쌩몰 웹사이트 리디자인', author: '김민경', image: 'images/works/김민경B.png', link: 'https://www.figma.com/proto/7A258HOdGLDcEQ0ElQo095/%EC%8C%A9%EC%8C%A9%EB%AA%B0?page-id=275%3A2496&node-id=275-2497&node-type=frame&viewport=792%2C679%2C0.09&t=b7Z8ttguyi1IH6GR-1&scaling=scale-down&content-scaling=fixed' },
            { id: 3, title: '폴리의 아이', author: '김수빈', image: 'images/works/김수빈.jpg', link: 'https://drive.google.com/file/d/13naI6wg_H3sXl6C4aWDBW9sUWvtsdc2Q/view?usp=sharing' },
            { id: 4, title: 'WELAAA 2.0 프로모션 웹', author: '김수아', image: 'images/works/김수아.jpg', link: 'https://suakim1021.github.io/2024-graduate-portfolio/web_welaaa.html' },
            { id: 5, title: 'Portfolio', author: '김승찬', image: 'images/works/김승찬.jpg', link: 'https://yellowgrow.github.io/webportfolio/' },
            { id: 6, title: 'Portfolio', author: '김준희', image: 'images/works/김준희.png', link: 'https://mangoismycat.github.io/port/' },
            { id: 7, title: 'Portfolio', author: '김태호', image: 'images/works/김태호.png', link: 'https://kimtaehh.github.io/kkth1234/' },
            { id: 8, title: 'RYU Summary', author: '류시은', image: 'images/works/류시은.png', link: 'https://ryu-sieun.github.io/2301110153_RYU/' },
            { id: 9, title: 'I WILL MAKE MY DESIGN PATH', author: '박가람', image: 'images/works/박가람.png', link: 'https://1220asc.github.io/test1113_c/' },
            { id: 10, title: 'Communicative Designer', author: '심재정', image: 'images/works/심재정.png', link: 'https://simpsonii.github.io/shimjaejeong-Portfolio-Sites/' },
            { id: 11, title: 'A NEW Encounter with Ohui', author: '양성우', image: 'images/works/양성우.jpg', link: 'https://yangseongwoo.github.io/ohuiwebsite/' },
            { id: 12, title: '그린피스 웹사이트 리디자인', author: '우수지', image: 'images/works/우수지.jpg', link: 'https://wsj6328.github.io/green/' },
            { id: 13, title: '그리드와 소금', author: '원세연', image: 'images/works/원세연.png', link: 'https://seyeonwon.github.io/web__portfolio/' },
            { id: 14, title: 'What’s on my desk', author: '유지수', image: 'images/works/유지수.jpg', link: 'https://wltn510.github.io/1107/' },
            { id: 15, title: '서울 자전거 따릉이', author: '윤 비', image: 'images/works/윤비.png', link: 'https://drive.google.com/file/d/1lYo49TlrjjIXF-Ev-oR05J9aIZa0Ygw8/view?usp=sharing' },
            { id: 16, title: '카카오뱅크 웹사이트 리디자인', author: '이세윤', image: 'images/works/이세윤1.jpg', link: 'https://leeeseyoon.github.io/kakaobank_2/' },
            { id: 17, title: '위홈 앱 리디자인', author: '이세윤', image: 'images/works/이세윤2.jpg', link: 'https://drive.google.com/file/d/13hy-fX0RTd7LBDh5lOAvT34jYPpwB-FR/view?usp=sharing' },
            { id: 18, title: 'Portfolio', author: '이지우', image: 'images/works/이지우.jpg', link: 'https://jiwooyoooooo.github.io/portfolio/#works' },
            { id: 19, title: '광염 소나타 책 표지', author: '임 율', image: 'images/works/임율.jpg', link: 'https://drive.google.com/file/d/10WNQMcpWPJCUxRxZ1LAAWGT8Wj2dJjef/view?usp=sharing' },
            { id: 20, title: '유튜브 앱 리디자인', author: '임현준', image: 'images/works/임현준.png', link: 'https://drive.google.com/file/d/1GzokKcUFusyRB9sxcCd2erSKArgJD_2h/view?usp=sharing' },
            { id: 21, title: 'Portfolio', author: '장천수', image: 'images/works/장천수.png', link: 'https://1000soo.github.io/cs_work/' },
            { id: 22, title: 'Portfolio', author: '최은지', image: 'images/works/최은지.jpg', link: 'https://choieunjiji.github.io/port/' },
            { id: 23, title: '프라임 비디오 앱', author: '최훈석', image: 'images/works/최훈석.png', link: 'https://drive.google.com/file/d/1d0Hjt6WTWM_oZm4IKAXztCFNDly1bO60/view?usp=sharing' },
            { id: 24, title: '크린나라 앱 리디자인', author: '황세희', image: 'images/works/황세희.png', link: 'https://drive.google.com/file/d/1j2KgnJsLtmfSR2nEsCLlLPtj3R-u2nWt/view?usp=sharing' }
        ],
        visual: [
            { id: 25, title: 'ANAKNE(굿즈디자인)', author: '강찬우', image: 'images/works/강찬우.jpg', link: 'https://drive.google.com/file/d/1-5p2puEUfejx0NdwvQJxGycwxog3qRJb/view?usp=sharing' },
            { id: 26, title: '제주여행', author: '김승빈', image: 'images/works/김승빈.png', link: 'https://drive.google.com/file/d/1QDHBKdcCQEl1Hz57p1gNmFfiEW_wFBVI/view?usp=sharing' },
            { id: 27, title: '하이트 100주년', author: '박경호', image: 'images/works/박경호.jpg', link: 'https://drive.google.com/file/d/1JYEX7Bb5MKqITndgL7u1z4ZebisUwOf2/view?usp=sharing' },
            { id: 28, title: 'Portfolio', author: '박윤민', image: 'images/works/박윤민.jpg', link: 'https://drive.google.com/file/d/1GHANHtrOuKIimBnNvmxxaisrj8jZWoqR/view?usp=sharing' },
            { id: 29, title: 'Graphic Design', author: '송다은', image: 'images/works/송다은.jpg', link: 'https://drive.google.com/file/d/1TGk503galsrlou9JpzQZFfuclXPf5lGH/view?usp=sharing' },
            { id: 30, title: '여우의 하루', author: '송민서', image: 'images/works/송민서.jpg', link: 'https://drive.google.com/file/d/1-WOBK5PiuGfcgHSMhsClkyd0uP1L-w55/view?usp=sharing' },
            { id: 31, title: 'portfolio', author: '윤혜원', image: 'images/works/윤혜원.jpg', link: 'https://drive.google.com/file/d/1YFjJnD5ciFTtqYTzta2BL_8t7-Xp0rOF/view?usp=sharing' },
            { id: 32, title: 'portfolio', author: '이동현', image: 'images/works/이동현.jpg', link: 'https://drive.google.com/file/d/1CVCFoFOQ5fOGc9yDPeYqnqYB5LsA6tmY/view?usp=sharing' },
            { id: 33, title: 'Portfolio', author: '이연지', image: 'images/works/이연지.jpg', link: 'https://drive.google.com/file/d/1SsdhXXvdTcAYCNwNaOJkCKaeZ4ZlWVVW/view?usp=sharing' },
            { id: 34, title: '앨범 리디자인', author: '이영은', image: 'images/works/이영은.jpg', link: 'https://drive.google.com/file/d/1TP5jZgFGUddZTncCX4OYllb-6rPLeLFc/view?usp=sharing' },
            { id: 35, title: '브랜드 B.I디자인', author: '이재원', image: 'images/works/이재원.jpg', link: 'https://drive.google.com/file/d/1pAGVclxw72Iv2w8pRNQhFIkzO-XoFMy7/view?usp=sharing' },
            { id: 36, title: '월인석봉에디션', author: '임재형', image: 'images/works/임재형.jpg', link: 'https://drive.google.com/file/d/1r_Nc5pBIytnpiUyiO30-uzF3cxF7tlr8/view?usp=sharing' },
            { id: 37, title: '킹부각 (패키지 디자인)', author: '정회강', image: 'images/works/정회강.jpg', link: 'https://drive.google.com/file/d/1ZtJoyxB2d-WY2_Z2Z-FHbLpusA1pg8ti/view?usp=sharing' },
            { id: 38, title: '바라의 하루', author: '최민주', image: 'images/works/최민주.jpg', link: 'https://drive.google.com/file/d/149bOHSebmTfuqB5cDmzQu0a0oVgRa3ER/view?usp=sharing' },
            { id: 39, title: '자수롭게(로고, 굿즈디자인)', author: '한병헌', image: 'images/works/한병헌.jpg', link: 'https://drive.google.com/file/d/1Z9zKmaU519uUduZqhRglceRT5Zp2GRty/view?usp=sharing' },
            { id: 40, title: 'Portfolio', author: '허준우', image: 'images/works/허준우.jpg', link: 'https://drive.google.com/file/d/1O03MhrdLF11GXe7JPpNPPtUOCfKKBzN6/view?usp=sharing' }
        ]
    };

    let currentCategory = 'digital';
    let projects = projectsData['digital'];

    let activeProjectId = null;

    // 프로젝트 카드 클릭 시 상태 업데이트
    function handleProjectClick(id) {
        activeProjectId = id;
        updateUI();
    }

    // UI 업데이트 함수
    function updateUI() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            const cardId = parseInt(card.id.split('-')[1], 10);
            if (cardId === activeProjectId) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // 스택과 리스트의 다른 부분도 업데이트
        updateStackView();
        updateListView();
    }

    // 스택 뷰 업데이트
    function updateStackView() {
        // activeProjectId를 사용하여 스택 뷰 업데이트
    }

    // 리스트 뷰 업데이트
    function updateListView() {
        // activeProjectId를 사용하여 리스트 뷰 업데이트
    }

    // 프로젝트 카드 생성 시 클릭 이벤트 추가
    function createProjectCards() {
        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.id = `project-${project.id}`; // 고유 ID 사용
            card.innerHTML = `
                <a href="${project.link}" target="_blank" class="project-link">
                    <div class="project-image" style="background-image: url('${project.image}')"></div>
                    <div class="project-info">
                        <p>${project.author}</p>
                    </div>
                </a>
            `;
            card.addEventListener('click', () => handleProjectClick(project.id));
            projectStack.appendChild(card);
        });

        // 첫 번째 카드를 활성화
        updateCards(0);
    }

    // 카테고리 변경 함수 수정
    function updateProjectsList(category) {
        // data-category 값으로 프로젝트 데이터 선택
        currentCategory = category;
        projects = projectsData[category];

        // 프로젝트 휠 초기화 및 업데이트
        projectWheel.innerHTML = '';
        initializeWheel();
        
        // 프로젝트 스택 초기화 및 업데이트
        projectStack.innerHTML = '';
        createProjectCards();
        
        // 현재 인덱스와 위치 초기화
        currentIndex = 0;
        currentTranslate = 0;
        updateWheel();
    }

    const ITEM_HEIGHT = 50;
    let currentIndex = 0;
    let startY = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;

    // 프로젝트 아이템 생성
    function initializeWheel() {
        // 클론된 항목을 포한 총 항목 수
        const totalItems = projects.length + 2; // 두 개의 복사본 추가
        
        // 클론된 항목 추가
        const firstClone = document.createElement('div');
        firstClone.className = 'project-item';
        firstClone.textContent = projects[projects.length - 1].title; // 마지막 항목 클론

        const lastClone = document.createElement('div');
        lastClone.className = 'project-item';
        lastClone.textContent = projects[0].title; // 첫 번째 항목 클론

        projectWheel.appendChild(firstClone); // 맨 앞에 클론 추가

        for (let i = 0; i < projects.length; i++) {
            const item = document.createElement('div');
            item.className = 'project-item';
            item.textContent = projects[i].title;
            projectWheel.appendChild(item);
        }

        projectWheel.appendChild(lastClone); // 맨 뒤에 클론 추가

        // 초기 위치 설정을 0으로 변경
        currentTranslate = 0; // -ITEM_HEIGHT에서 0으로 변경
        projectWheel.style.transform = `translateY(${currentTranslate}px)`;
    }

    // 휠 업데이트 함수 수정
    function updateWheel() {
        const items = document.querySelectorAll('.project-item');
        const centerOffset = (projectList.offsetHeight - ITEM_HEIGHT) / 2;

        if (currentTranslate > ITEM_HEIGHT) {
            projectWheel.style.transition = 'none';
            currentTranslate -= (projects.length + 1) * ITEM_HEIGHT;
        } else if (currentTranslate < -(projects.length + 1) * ITEM_HEIGHT) {
            projectWheel.style.transition = 'none';
            currentTranslate += (projects.length + 1) * ITEM_HEIGHT;
        }

        const centerPosition = -currentTranslate + centerOffset;

        items.forEach((item, index) => {
            const itemPosition = index * ITEM_HEIGHT;
            const distance = Math.abs(itemPosition - centerPosition);
            
            item.classList.remove('active', 'nearby', 'far');

            // 실제 프로젝트 데이터의 인덱스 계산
            const realIndex = (index - 1 + projects.length) % projects.length;
            
            // 현재 카테고리의 프로젝트 데이터 사용
            if (index > 0 && index < items.length - 1) {
                const project = projectsData[currentCategory][realIndex];
                item.textContent = project.title;
            }

            if (Math.abs(itemPosition - centerPosition) < ITEM_HEIGHT / 2) {
                item.classList.add('active');
                currentIndex = realIndex;
            } else if (
                (index === 1 && currentIndex === projects.length - 1) ||
                (index === projects.length + 1 && currentIndex === 0) ||
                Math.abs(itemPosition - (centerPosition - ITEM_HEIGHT)) < ITEM_HEIGHT / 2 ||
                Math.abs(itemPosition - (centerPosition + ITEM_HEIGHT)) < ITEM_HEIGHT / 2
            ) {
                item.classList.add('nearby');
            } else {
                item.classList.add('far');
            }
        });

        projectWheel.style.transform = `translateY(${currentTranslate}px)`;
        projectWheel.offsetHeight;
        projectWheel.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';

        updateCards(currentIndex);
    }

    function handleTouchStart(e) {
        startY = e.touches[0].clientY;
        isDragging = true;
        prevTranslate = currentTranslate;
    }

    function handleTouchMove(e) {
        if (!isDragging) return;

        const currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        currentTranslate = prevTranslate + diff;

        requestAnimationFrame(updateWheel);
    }

    function handleTouchEnd() {
        isDragging = false;

        // 가장 가까운 항목으로 스냅
        const itemOffset = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;

        // 경계 지점에서의 이동인지 확인
        const isAtBoundary = 
            currentTranslate > ITEM_HEIGHT || 
            currentTranslate < -(projects.length + 1) * ITEM_HEIGHT;

        if (!isAtBoundary) {
            projectWheel.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
        } else {
            projectWheel.style.transition = 'none';
        }

        currentTranslate = itemOffset;

        requestAnimationFrame(() => {
            updateWheel();
            if (!isAtBoundary) {
                setTimeout(() => {
                    projectWheel.style.transition = '';
                }, 300);
            }
        });
    }

    projectList.addEventListener('touchstart', handleTouchStart);
    projectList.addEventListener('touchmove', handleTouchMove);
    projectList.addEventListener('touchend', handleTouchEnd);

    // 초기화
    initializeWheel();
    updateWheel();

    // 프로젝트 스택 관련 코드 추가
    const projectStack = document.querySelector('.project-stack');
    
    function createProjectCards() {
        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <a href="${project.link}" target="_blank" class="project-link">
                    <div class="project-image" style="background-image: url('${project.image}')"></div>
                    <div class="project-info">
                        <p>${project.author}</p>
                    </div>
                </a>
            `;
            projectStack.appendChild(card);
        });
    
        // 첫 번째 카드를 활성화
        updateCards(0);
    }

    function updateCards(activeIndex) {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach((card, index) => {
            card.classList.remove('active', 'next');
            
            if (index === activeIndex) {
                card.classList.add('active');
            } else if (index === (activeIndex + 1) % projects.length) {
                card.classList.add('next');
            }
        });
    }

    // 초기화 시 카드 생성 추가
    createProjectCards();

    // Grid View와 List View 버튼에 SVG 추가
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');

    if (gridViewBtn) {
        gridViewBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <rect width="7" height="7" fill="currentColor" rx="1"/>
                <rect width="7" height="7" y="9" fill="currentColor" rx="1"/>
                <rect width="7" height="7" x="9" fill="currentColor" rx="1"/>
                <rect width="7" height="7" x="9" y="9" fill="currentColor" rx="1"/>
            </svg>
        `;
    }

    if (listViewBtn) {
        listViewBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <rect width="16" height="10" fill="currentColor" rx="1"/>
                <rect width="16" height="4" y="12" fill="currentColor" rx="1"/>
            </svg>
        `;
    }

    // 버튼 활성화/비활성화 기능 추가
    function setActiveView(viewType) {
        if (viewType === 'grid') {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        } else {
            gridViewBtn.classList.remove('active');
            listViewBtn.classList.add('active');
        }
    }

    // 클릭 이벤트 리스너 추가
    gridViewBtn.addEventListener('click', () => setActiveView('grid'));
    listViewBtn.addEventListener('click', () => setActiveView('list'));

    // 초기 상태 설정 (그리드 뷰를 기본값으로)
    setActiveView('list');

    // 카테고리 전환 기능 수정
    const categoryTexts = document.querySelectorAll('.category-text');
    const projectGridDigital = document.querySelector('.project-grid.digital');
    const projectGridVisual = document.querySelector('.project-grid.visual');

    // 그리드 표시/숨김 함수
    function toggleGrids(category) {
        if (category === 'digital') {
            projectGridDigital.style.cssText = 'display: grid; position: relative;';
            projectGridVisual.style.cssText = 'display: none; position: absolute;';
        } else {
            projectGridDigital.style.cssText = 'display: none; position: absolute;';
            projectGridVisual.style.cssText = 'display: grid; position: relative;';
        }
    }

    // 카테고리 클릭 이벤트 리스너 수정
    categoryTexts.forEach(text => {
        text.addEventListener('click', () => {
            if (text.classList.contains('active')) return;
            
            // 카테고리 활성화 상태 변경
            categoryTexts.forEach(t => t.classList.remove('active'));
            text.classList.add('active');
            
            // data-category 속성값으로 프로젝트 데이터 업데이트
            const category = text.dataset.category;
            toggleGrids(category);
            updateProjectsList(category);
        });
    });

    // 뷰 전환 함수
    function setActiveView(viewType) {
        const projectGridView = document.querySelector('.project-grid-view');
        const projectListView = document.querySelector('.project-list-view');
        const gridViewBtn = document.querySelector('.grid-view');
        const listViewBtn = document.querySelector('.list-view');

        if (viewType === 'grid') {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            projectGridView.style.display = 'block';
            projectListView.style.display = 'none';
            
            // 현재 선택된 카테고리에 맞는 그리드 표시
            const currentCategory = document.querySelector('.category-text.active').textContent.toLowerCase();
            toggleGrids(currentCategory);
        } else {
            gridViewBtn.classList.remove('active');
            listViewBtn.classList.add('active');
            projectGridView.style.display = 'none';
            projectListView.style.display = 'block';
        }
    }

    // 초 상태 설정
    document.addEventListener('DOMContentLoaded', () => {
        const initialCategory = document.querySelector('.category-text.active').textContent.toLowerCase();
        toggleGrids(initialCategory);
    });

    // 초기화 시 기본 카테고리(Digital) 데이터로 시작
    projects = projectsData.digital;
}

// DOMContentLoaded 이벤트에서 초기화
document.addEventListener('DOMContentLoaded', initializeMobile);

// resize 이벤트에서도 초기화
let resizeTimer;
window.addEventListener('resize', () => {
    // 디바운싱 적용
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initializeMobile();
    }, 250); // 250ms 딜레이
});


// 뷰 전환 함수
function setActiveView(viewType) {
    const projectGridView = document.querySelector('.project-grid-view');
    const projectListView = document.querySelector('.project-list-view');
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');

    if (viewType === 'grid') {
        // 버튼 상태 변경
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        
        // 뷰 전환
        projectGridView.style.display = 'grid';
        projectListView.style.display = 'none';
        
        // 그리드 뷰 초기화
        initializeGridView();
    } else {
        // 버튼 상태 변경
        gridViewBtn.classList.remove('active');
        listViewBtn.classList.add('active');
        
        // 뷰 전환
        projectGridView.style.display = 'none';
        projectListView.style.display = 'block';
        
        // 리스트 뷰 초기화
        initializeListView();
    }
}

// 리스트 뷰 초기화 함수
function initializeListView() {
    projectWheel.innerHTML = '';
    initializeWheel();
    projectStack.innerHTML = '';
    createProjectCards();
}

// 뷰 전환 버튼 이벤트 리스너
const gridViewBtn = document.querySelector('.grid-view');
const listViewBtn = document.querySelector('.list-view');

gridViewBtn.addEventListener('click', () => setActiveView('grid'));
listViewBtn.addEventListener('click', () => setActiveView('list'));


