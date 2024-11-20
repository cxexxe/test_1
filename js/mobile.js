document.addEventListener('DOMContentLoaded', () => {
    // 카테고리 전환
    document.querySelectorAll('.category-text').forEach(text => {
        text.addEventListener('click', () => {
            const category = text.textContent.toLowerCase();
            
            // 카테고리 텍스트 활성화
            document.querySelectorAll('.category-text').forEach(t => t.classList.remove('active'));
            text.classList.add('active');
            
            // 프로젝트 리스트 전환
            document.querySelectorAll('.project-list').forEach(list => {
                list.classList.remove('active');
                if (list.classList.contains(category)) {
                    list.classList.add('active');
                }
            });
        });
    });

    // 뷰 전환 버튼
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const projectGridView = document.querySelector('.project-grid-view');
    const projectListView = document.querySelector('.project-list-view');

    gridViewBtn.addEventListener('click', () => {
        projectGridView.style.display = 'block';
        projectListView.style.display = 'none';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        projectGridView.style.display = 'none';
        projectListView.style.display = 'block';
        gridViewBtn.classList.remove('active');
        listViewBtn.classList.add('active');
    });
});


