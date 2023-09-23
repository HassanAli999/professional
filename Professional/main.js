let submenu = document.getElementById("submenu");

function togglemenu() {
    submenu.classList.toggle("open-menu");
}

// إضافة مستمع للنقر على الوثيقة (الجزء خارج الصورة)
document.addEventListener("click", function(event) {
    if (!event.target.matches(".user-pic")) {
        submenu.classList.remove("open-menu");
    }
});

// منع انتشار النقرات داخل القائمة الفرعية
submenu.addEventListener("click", function(event) {
    event.stopPropagation();
});

function toggleDropdown(event) {
    event.stopPropagation(); // تمنع انتشار الحدث إلى العناصر الأخرى
    const dropdown = document.querySelector(".dropdown-menu");
    dropdown.classList.toggle("show");
}


// إغلاق القائمة المنسدلة عند النقر خارجها
document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown-menu");
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});

const stars = document.querySelectorAll('.rating input');

stars.forEach((star) => {
    star.addEventListener('change', (e) => {
        const rating = e.target.value;
        console.log(`Rating: ${rating}`);
        // هنا يمكنك أداء الإجراءات التي تريدها بناءً على التقييم المحدد
    });
});






