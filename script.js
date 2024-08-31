document.getElementById('searchInput').addEventListener('input', function() {
    // Lấy giá trị nhập vào từ ô tìm kiếm
    let searchValue = this.value.toLowerCase();

    // Lấy tất cả các thẻ div cần lọc
    let divs = document.querySelectorAll('div[class]');

    divs.forEach(function(div) {
        // Lấy danh sách class của thẻ div và kiểm tra nếu có class chứa giá trị tìm kiếm
        let classList = div.className.toLowerCase();

        // Hiển thị hoặc ẩn thẻ div dựa trên kết quả tìm kiếm
        if (classList.includes(searchValue)) {
            div.style.display = "";
        } else {
            div.style.display = "none";
        }
    });
});
