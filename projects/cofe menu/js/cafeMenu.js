function changeSection(title) {
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) {
        sectionTitle.textContent = title;
    }
}

document.querySelectorAll('.menu__box-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        const section = this.getAttribute('data-section');
        document.querySelectorAll('.section-content').forEach(content => {
            content.style.display = 'none'; // مخفی کردن همه بخش‌ها
        });
        document.getElementById(section).style.display = 'block'; // نمایش بخش انتخاب شده
        changeSection(this.textContent); // تغییر عنوان
    });
});

// نمایش محتوای پیش‌فرض (بار سرد)
document.getElementById('cold-bar').style.display = 'block';