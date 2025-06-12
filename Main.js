const list = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".Menu");
const items = document.querySelectorAll(".choosecontent li");
const highlight = document.querySelector(".choosecontent span");

// Object mapping cho các mục menu
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
    },
};

// Hàm khởi tạo nội dung ban đầu
function initializeContent() {
    const defaultMenuItem = "Địa Điểm";
    const defaultItem = items[0];

    // Đặt active cho mục ban đầu
    defaultItem.classList.add("active");

    // Đặt vị trí highlight
    const rect = defaultItem.getBoundingClientRect();
    const parentRect = defaultItem.parentElement.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    highlight.style.left = `${left}px`;
    highlight.style.width = `${rect.width}px`;

    // Lấy các container
    const mainContent = document.querySelector('#mainContent');
    const imgtilte2Container = document.querySelector('.imgtilte-2-container');
    const imgtilte3Container = document.querySelector('.imgtilte-3-container');
    const postCardContent = document.querySelector('#postCardContent');
    const webBlogContent = document.querySelector('#webBlogContent');
    const videoContent = document.querySelector('#videoContent');
    const backgroundText = document.querySelector('.background-text'); // Thêm: Container bao quanh mainContent
    const backgroundText2 = document.querySelector('.background-text-2'); // Thêm: Container bao quanh imgtilte-2
    const hrElements = document.querySelectorAll('main hr');

    // Ẩn tất cả container trước và hiển thị <hr>
    mainContent.style.display = 'none';
    imgtilte2Container.style.display = 'none';
    imgtilte3Container.style.display = 'none';
    if (postCardContent) postCardContent.style.display = 'none';
    if (webBlogContent) webBlogContent.style.display = 'none';
    if (videoContent) videoContent.style.display = 'none';
    if (backgroundText) backgroundText.style.display = 'none'; // Thêm: Ẩn background-text
    if (backgroundText2) backgroundText2.style.display = 'none'; // Thêm: Ẩn background-text-2
    hrElements.forEach(hr => hr.style.display = 'block');

    // Lấy dữ liệu từ contentMap
    const content = contentMap[defaultMenuItem] || {
        mainContent: {
            imageSrc: "image/tu.png",
            title: "Tiêu đề mặc định",
            description: "Nội dung mặc định hiển thị khi không có lựa chọn cụ thể."
        },
        imgtilte2_1: {
            imageSrc: "image/default.png",
            title: "Mặc định 2-1",
            description: "Nội dung mặc định cho imgtilte-2."
        },
        imgtilte2_2: {
            imageSrc: "image/default.png",
            title: "Mặc định 2-2",
            description: "Nội dung mặc định cho imgtilte-2."
        },
        imgtilte3_1: {
            imageSrc: "image/default.png",
            title: "Mặc định 3-1",
            description: "Nội dung mặc định cho imgtilte-3."
        },
        imgtilte3_2: {
            imageSrc: "image/default.png",
            title: "Mặc định 3-2",
            description: "Nội dung mặc định cho imgtilte-3."
        }
    };

    // Cập nhật mainContent
    document.getElementById("mainImage").src = content.mainContent.imageSrc;
    document.getElementById("mainTitle").innerText = content.mainContent.title;
    document.getElementById("mainDescription").innerText = content.mainContent.description;

    // Cập nhật imgtilte-2
    const imgtilte2Blocks = imgtilte2Container.querySelectorAll('.imgtilte-2');
    imgtilte2Blocks[0].querySelector('.text-content img').src = content.imgtilte2_1.imageSrc;
    imgtilte2Blocks[0].querySelector('.text-content h1').innerText = content.imgtilte2_1.title;
    imgtilte2Blocks[0].querySelector('.text-content p').innerText = content.imgtilte2_1.description;
    imgtilte2Blocks[1].querySelector('.text-content img').src = content.imgtilte2_2.imageSrc;
    imgtilte2Blocks[1].querySelector('.text-content h1').innerText = content.imgtilte2_2.title;
    imgtilte2Blocks[1].querySelector('.text-content p').innerText = content.imgtilte2_2.description;

    // Cập nhật imgtilte-3
    const imgtilte3Blocks = imgtilte3Container.querySelectorAll('.imgtilte-3');
    imgtilte3Blocks[0].querySelector('.tilt-3 img').src = content.imgtilte3_1.imageSrc;
    imgtilte3Blocks[0].querySelector('.tilt-3 h1').innerText = content.imgtilte3_1.title;
    imgtilte3Blocks[0].querySelector('.tilt-3 p').innerText = content.imgtilte3_1.description;
    imgtilte3Blocks[1].querySelector('.tilt-3 img').src = content.imgtilte3_2.imageSrc;
    imgtilte3Blocks[1].querySelector('.tilt-3 h1').innerText = content.imgtilte3_2.title;
    imgtilte3Blocks[1].querySelector('.tilt-3 p').innerText = content.imgtilte3_2.description;

    // Hiển thị các container cho mục ban đầu
    mainContent.style.display = 'flex';
    imgtilte2Container.style.display = 'flex';
    imgtilte3Container.style.display = 'flex';
    if (backgroundText) backgroundText.style.display = 'block'; // Thêm: Hiển thị background-text
    if (backgroundText2) backgroundText2.style.display = 'block'; // Thêm: Hiển thị background-text-2
    hrElements.forEach(hr => hr.style.display = 'block');

    // Thêm hiệu ứng fadeIn
    [mainContent, imgtilte2Container, imgtilte3Container].forEach(el => {
        el.classList.remove('active');
        void el.offsetWidth;
        el.classList.add('active');
    });
}

// Gọi hàm khởi tạo khi trang tải
window.addEventListener('DOMContentLoaded', initializeContent);

// Xử lý hamburger menu
list.addEventListener("click", () => {
    if (list.classList.contains("active")) {
        list.classList.remove("active");
        menu.classList.remove("active");
        menu.classList.add("closing");
        setTimeout(() => menu.classList.remove("closing"), 500);
    } else {
        list.classList.add("active");
        menu.classList.add("active");
    }
});

// Xử lý sự kiện nhấp vào menu
items.forEach((item) => {
    item.addEventListener("click", () => {
        // Bỏ active cũ
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        // Highlight di chuyển
        const rect = item.getBoundingClientRect();
        const parentRect = item.parentElement.getBoundingClientRect();
        const left = rect.left - parentRect.left;
        highlight.style.left = `${left}px`;
        highlight.style.width = `${rect.width}px`;

        // Lấy các container
        const mainContent = document.querySelector('#mainContent');
        const imgtilte2Container = document.querySelector('.imgtilte-2-container');
        const imgtilte3Container = document.querySelector('.imgtilte-3-container');
        const postCardContent = document.querySelector('#postCardContent');
        const webBlogContent = document.querySelector('#webBlogContent');
        const videoContent = document.querySelector('#videoContent')
        const backgroundText = document.querySelector('.background-text'); // Thêm: Container bao quanh mainContent
        const backgroundText2 = document.querySelector('.background-text-2'); // Thêm: Container bao quanh imgtilte-2
        const hrElements = document.querySelectorAll('main hr');

        // Ẩn tất cả container trước
        mainContent.style.display = 'none';
        imgtilte2Container.style.display = 'none';
        imgtilte3Container.style.display = 'none';
        if (postCardContent) postCardContent.style.display = 'none';
        if (webBlogContent) webBlogContent.style.display = 'none';
        if (videoContent) videoContent.style.display = 'none';
        if (backgroundText) backgroundText.style.display = 'none'; // Thêm: Ẩn background-text
        if (backgroundText2) backgroundText2.style.display = 'none'; // Thêm: Ẩn background-text-2

        // Lấy dữ liệu từ contentMap
        const text = item.textContent.trim();

        if (text == "PostCard") {
            if (postCardContent) {
                postCardContent.style.display = 'block';
                hrElements.forEach(hr => hr.style.display = 'none');
                postCardContent.classList.remove('active');
                void postCardContent.offsetWidth;
                postCardContent.classList.add('active');
            }
        } else if (text == "WebBlog") {
            if (webBlogContent) {
                webBlogContent.style.display = 'block';
                hrElements.forEach(hr => hr.style.display = 'none');
                webBlogContent.classList.remove('active');
                void webBlogContent.offsetWidth;
                webBlogContent.classList.add('active');
            }
        }   else if (text == "Video"){
            if (videoContent){
                videoContent.style.display = 'block';
                hrElements.forEach(hr => hr.style.display = 'none' );
                videoContent.classList.remove('active');
                void videoContent.offsetWidth;
                videoContent.classList.add('active');
            }
        }
             
        else {
            // Xử lý các mục khác
            const content = contentMap[text] || {
                mainContent: {
                    imageSrc: "image/tu.png",
                    title: "Tiêu đề mặc định",
                    description: "Nội dung mặc định hiển thị khi không có."
                },
                imgtilte2_1: {
                    imageSrc: "image/default.png",
                    title: "Mặc định 2-1",
                    description: "Nội dung mặc định cho imgtilte-2."
                },
                imgtilte2_2: {
                    imageSrc: "image/default.png",
                    title: "Mặc định 2-2",
                    description: "Nội dung mặc định cho imgtilte-2."
                },
                imgtilte3_1: {
                    imageSrc: "image/default.png",
                    title: "Mặc định",
                    description: "Nội dung mặc định cho imgtilte-3."
                },
                imgtilte3_2: {
                    imageSrc: "image/default.png",
                    title: "Mặc định",
                    description: "Nội dung mặc định cho imgtilte-3."
                }
            };

            // Cập nhật mainContent
            document.getElementById("mainImage").src = content.mainContent.imageSrc;
            document.getElementById("mainTitle").innerText = content.mainContent.title;
            document.getElementById("mainDescription").innerText = content.mainContent.description;

            // Cập nhật imgtilte-2
            const imgtilte2Blocks = imgtilte2Container.querySelectorAll('.imgtilte-2');
            imgtilte2Blocks[0].querySelector('.text-content img').src = content.imgtilte2_1.imageSrc;
            imgtilte2Blocks[0].querySelector('.text-content h1').innerText = content.imgtilte2_1.title;
            imgtilte2Blocks[0].querySelector('.text-content p').innerText = content.imgtilte2_1.description;
            imgtilte2Blocks[1].querySelector('.text-content img').src = content.imgtilte2_2.imageSrc;
            imgtilte2Blocks[1].querySelector('.text-content h1').innerText = content.imgtilte2_2.title;
            imgtilte2Blocks[1].querySelector('.text-content p').innerText = content.imgtilte2_2.description;

            // Cập nhật imgtilte-3
            const imgtilte3Blocks = imgtilte3Container.querySelectorAll('.imgtilte-3');
            imgtilte3Blocks[0].querySelector('.tilt-3 img').src = content.imgtilte3_1.imageSrc;
            imgtilte3Blocks[0].querySelector('.tilt-3 h1').innerText = content.imgtilte3_1.title;
            imgtilte3Blocks[0].querySelector('.tilt-3 p').innerText = content.imgtilte3_1.description;
            imgtilte3Blocks[1].querySelector('.tilt-3 img').src = content.imgtilte3_2.imageSrc;
            imgtilte3Blocks[1].querySelector('.tilt-3 h1').innerText = content.imgtilte3_2.title;
            imgtilte3Blocks[1].querySelector('.tilt-3 p').innerText = content.imgtilte3_2.description;

            // Hiển thị các container và <hr>
            mainContent.style.display = 'flex';
            imgtilte2Container.style.display = 'flex';
            imgtilte3Container.style.display = 'flex';
            if (backgroundText) backgroundText.style.display = 'block'; // Thêm: Hiển thị background-text
            if (backgroundText2) backgroundText2.style.display = 'block'; // Thêm: Hiển thị background-text-2
            hrElements.forEach(hr => hr.style.display = 'block');

            // Thêm hiệu ứng fadeIn
            [mainContent, imgtilte2Container, imgtilte3Container].forEach(el => {
                el.classList.remove('active');
                void el.offsetWidth;
                el.classList.add('active');
            });
        }
    });
});