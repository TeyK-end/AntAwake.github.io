// Dữ liệu contentMap (sao chép từ Main.js)
const contentMap = {
    "Địa Điểm": {
        mainContent: {
            imageSrc: "image/tu.png",
            title: "Khám phá địa điểm nổi bật tại Việt Nam",
            description: "Các địa danh nổi tiếng và phong cảnh tuyệt đẹp đang chờ bạn khám phá."
        },
        imgtilte2_1: {
            imageSrc: "image/chùa.png",
            title: "Chùa Ông Bổn",
            description: "Chùa Ông Bổn tại quận 5, TP.HCM, là ngôi chùa lâu đời của người Hoa."
        },
        imgtilte2_2: {
            imageSrc: "image/hoguom.png",
            title: "Hồ Gươm",
            description: "Hồ Gươm, biểu tượng của Hà Nội với Tháp Rùa và cầu Húc."
        },
        imgtilte3_1: {
            imageSrc: "image/halong.png",
            title: "Vịnh Hạ Long",
            description: "Vịnh Hạ Long, di sản UNESCO với hàng ngàn đảo đá vôi."
        },
        imgtilte3_2: {
            imageSrc: "image/hoian.png",
            title: "Phố Cổ Hội An",
            description: "Phố cổ Hội An với đèn lồng rực rỡ và kiến trúc cổ kính."
        }
    },
    "Văn Hóa": {
        mainContent: {
            imageSrc: "image/vanhoa.png",
            title: "Nét đẹp văn hóa Việt Nam",
            description: "Tìm hiểu truyền thống và phong tục tập quán đa dạng trên khắp đất nước."
        },
        imgtilte2_1: {
            imageSrc: "image/aodai.png",
            title: "Áo Dài",
            description: "Áo dài, trang phục truyền thống biểu tượng của phụ nữ Việt Nam."
        },
        imgtilte2_2: {
            imageSrc: "image/festival.png",
            title: "Lễ Hội",
            description: "Các lễ hội dân gian mang đậm bản sắc văn hóa Việt."
        },
        imgtilte3_1: {
            imageSrc: "image/nharong.png",
            title: "Nhà Rông",
            description: "Nhà Rông, kiến trúc đặc trưng của người Tây Nguyên."
        },
        imgtilte3_2: {
            imageSrc: "image/music.png",
            title: "Nhạc Dân Tộc",
            description: "Âm nhạc dân tộc với các nhạc cụ truyền thống độc đáo."
        }
    },
    "Ẩm Thực": {
        mainContent: {
            imageSrc: "image/amthuc.png",
            title: "Ẩm thực phong phú ba miền",
            description: "Những món ăn đặc sản đặc trưng của từng vùng miền Việt Nam."
        },
        imgtilte2_1: {
            imageSrc: "image/pho.png",
            title: "Phở",
            description: "Phở, món ăn quốc hồn quốc túy của Việt Nam."
        },
        imgtilte2_2: {
            imageSrc: "image/banhmi.png",
            title: "Bánh Mì",
            description: "Bánh mì Việt Nam, món ăn đường phố nổi tiếng thế giới."
        },
        imgtilte3_1: {
            imageSrc: "image/bunbo.png",
            title: "Bún Bò Huế",
            description: "Bún bò Huế với hương vị cay nồng đặc trưng."
        },
        imgtilte3_2: {
            imageSrc: "image/comtam.png",
            title: "Cơm Tấm",
            description: "Cơm tấm Sài Gòn, món ăn dân dã đậm đà."
        }
    }
};

// Dữ liệu tĩnh cho PostCard, WebBlog, Video (giả lập từ index.html)
const staticContent = {
    PostCard: [
        { title: "Chào mừng đến với PostCard", description: "Thiết kế và gửi những tấm bưu thiếp độc đáo để chia sẻ cảm xúc!", imageSrc: "image/postcard1.png" },
        { title: "PostCard 2", description: "Nội dung PostCard", imageSrc: "image/postcard2.png" }
    ],
    WebBlog: [
        { title: "Tiêu đề bài viết 1", description: "Đoạn trích của bài viết blog 1...", imageSrc: "image/default.png" },
        { title: "Tiêu đề bài viết 2", description: "Đoạn trích của bài viết blog 2...", imageSrc: "image/default.png" }
    ],
    Video: [
        { title: "Tiêu đề Video 1", description: "Nội dung Video 1", imageSrc: "image/video1.jpg" },
        { title: "Tiêu đề Video 2", description: "Nội dung Video 2", imageSrc: "image/video2.jpg" }
    ]
};

// Xử lý hamburger menu
const list = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".Menu");

list.addEventListener("click", () => {
    list.classList.toggle("active");
    menu.classList.toggle("active");
});

// Xử lý tìm kiếm
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar .search-btn');
const clearButton = document.querySelector('.search-bar .clear-search');
const resultsList = document.querySelector('.results-list');

function performSearch(keyword) {
    keyword = keyword.trim().toLowerCase();
    resultsList.innerHTML = '';

    if (!keyword) {
        resultsList.innerHTML = '<p>Vui lòng nhập từ khóa tìm kiếm.</p>';
        return;
    }

    let results = [];

    // Tìm trong contentMap
    for (const menuItem in contentMap) {
        const content = contentMap[menuItem];
        const fields = [
            { ...content.mainContent, type: 'main', menu: menuItem, section: 'mainContent' },
            { ...content.imgtilte2_1, type: 'imgtilte2', menu: menuItem, section: 'imgtilte2_1' },
            { ...content.imgtilte2_2, type: 'imgtilte2', menu: menuItem, section: 'imgtilte2_2' },
            { ...content.imgtilte3_1, type: 'imgtilte3', menu: menuItem, section: 'imgtilte3_1' },
            { ...content.imgtilte3_2, type: 'imgtilte3', menu: menuItem, section: 'imgtilte3_2' }
        ];

        fields.forEach(field => {
            if (field.title.toLowerCase().includes(keyword) || (field.description && field.description.toLowerCase().includes(keyword))) {
                results.push({
                    title: field.title,
                    description: field.description,
                    imageSrc: field.imageSrc,
                    menu: field.menu,
                    type: field.type,
                    section: field.section
                });
            }
        });
    }

    // Tìm trong staticContent
    for (const menuItem in staticContent) {
        staticContent[menuItem].forEach(item => {
            if (item.title.toLowerCase().includes(keyword) || (item.description && item.description.toLowerCase().includes(keyword))) {
                results.push({
                    title: item.title,
                    description: item.description,
                    imageSrc: item.imageSrc,
                    menu: menuItem,
                    type: menuItem.toLowerCase(),
                    section: menuItem.toLowerCase()
                });
            }
        });
    }

    // Loại bỏ trùng lặp
    results = [...new Set(results.map(r => JSON.stringify(r)))].map(r => JSON.parse(r));

    // Hiển thị kết quả
    if (results.length === 0) {
        resultsList.innerHTML = '<p>Không tìm thấy kết quả phù hợp.</p>';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <img src="${result.imageSrc || 'image/default.png'}" alt="${result.title}" onerror="this.src='image/default.png'" />
                <div class="result-content">
                    <h2>${result.title}</h2>
                    <p>${result.description || 'Không có mô tả'}</p>
                    <a href="bao.html?menu=${encodeURIComponent(result.menu)}&section=${result.section}&title=${encodeURIComponent(result.title)}" class="result-link">Xem chi tiết</a>
                </div>
            `;
            resultsList.appendChild(resultItem);
        });
    }
}

// Lấy từ khóa từ URL
const urlParams = new URLSearchParams(window.location.search);
const initialKeyword = urlParams.get('q') || '';
searchInput.value = initialKeyword;
performSearch(initialKeyword);

// Sự kiện input để hiển thị/ẩn nút xóa
searchInput.addEventListener('input', () => {
    if (searchInput.value) {
        clearButton.classList.add('visible');
    } else {
        clearButton.classList.remove('visible');
    }
});

// Sự kiện xóa tìm kiếm
clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.classList.remove('visible');
    window.location.href = 'index.html';
});

// Sự kiện click nút tìm kiếm
searchButton.addEventListener('click', () => {
    performSearch(searchInput.value);
});
searchButton.addEventListener('touchstart', () => {
    performSearch(searchInput.value);
});

// Sự kiện nhấn Enter trong input
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
    }
});