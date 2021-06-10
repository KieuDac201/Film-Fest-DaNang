const btnSpecial = document.querySelector(".btn-special");
const btnGold = document.querySelector(".btn-gold");
const btnDigital = document.querySelector(".btn-digital");
const content = document.querySelector(".banner .content");
const btns = document.querySelectorAll(".banner .btn");





btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.getAttribute("data-award") === "digital") {
      content.innerHTML = strDigital;
    }
    if (btn.getAttribute("data-award") === "gold") {
      content.innerHTML = strGold;
    }
    if (btn.getAttribute("data-award") === "special") {
      content.innerHTML = strSpecial;
    }

    btns.forEach((b) => {
      b.classList.remove("btn-fill");
      b.classList.add("btn-disable");
    });

    btn.classList.remove("btn-disable");
    btn.classList.add("btn-fill");
  });
});
var strGold = `<div class="image">
                <img src="./assets/images/image-6.png" alt="" />
                </div>
                <div class="banner-text">
                <h5>1 giải đặc biệt - Giải Sông Hàn</h5>
                <p class="yellow">100.000.000.000 VNĐ (một trăm triệu đồng)</p>
                <p>
                Vé máy bay khứ hồi và Voucher lưu trú khách sạn (tiêu chuẩn 4 - 5
                sao) dành cho ekip sản xuất (không quá 5 người)
                </p>
                <p>
                Biểu tượng Cuộc thi Phim ngắn Đà Nẵng Lần thứ I – 2021 “KHÁM PHÁ ĐÀ
                NẴNG TUYỆT VỜI - WOW DA NANG”
                </p>
                </div>`;
var strDigital = `<div class="image">
                <img src="./assets/images/img-digital.png" alt="" />
                </div>
                <div class="banner-text">
                <h5>5 giải Digital</h5>
                <p class="yellow">10.000.000 VNĐ (mười triệu đồng)</p>
                <p>
                Có lượt tương tác nhiều nhất trên các nền tảng số: Website, Mobile
                App, Youtube, Fanpage, Tik Tok,…
                </p>
                <p>
                Biểu tượng Cuộc thi Phim ngắn Đà Nẵng Lần thứ I – 2021 “KHÁM PHÁ
                ĐÀ NẴNG TUYỆT VỜI - WOW DA NANG”
                </p>
                </div>`;
var strSpecial = `<ul class="banner-list">
<li>
  <div class="image">
    <img src="./assets/images/award/gold-1.png" alt="" />
  </div>
  <div class="banner-text">
    <h5>1 giải Cầu Rồng</h5>
    <p class="yellow">30.000.000 VNĐ (ba mươi triệu đồng)</p>
    <p>
      Vé máy bay khứ hồi và Voucher lưu trú khách sạn (tiêu chuẩn 4
      - 5 sao) dành cho ekip sản xuất (không quá 5 người)
    </p>
    <p>
      Biểu tượng Cuộc thi Phim ngắn Đà Nẵng Lần thứ I – 2021 “KHÁM
      PHÁ ĐÀ NẴNG TUYỆT VỜI - WOW DA NANG”
    </p>
  </div>
</li>
<li>
  <div class="image">
    <img src="./assets/images/award/gold-2.png" alt="" />
  </div>
  <div class="banner-text">
    <h5>1 giải Sông Hàn</h5>
    <p class="yellow">30.000.000 VNĐ (ba mươi triệu đồng)</p>
    <p>
      Vé máy bay khứ hồi và Voucher lưu trú khách sạn (tiêu chuẩn 4
      - 5 sao) dành cho ekip sản xuất (không quá 5 người)
    </p>
    <p>
      Biểu tượng Cuộc thi Phim ngắn Đà Nẵng Lần thứ I – 2021 “KHÁM
      PHÁ ĐÀ NẴNG TUYỆT VỜI - WOW DA NANG”
    </p>
  </div>
</li>
<li>
  <div class="image">
    <img src="./assets/images/award/gold-3.png" alt="" />
  </div>
  <div class="banner-text">
    <h5>1 giải Cầu Thuận Phước</h5>
    <p class="yellow">30.000.000 VNĐ (ba mươi triệu đồng)</p>
    <p>
      Vé máy bay khứ hồi và Voucher lưu trú khách sạn (tiêu chuẩn 4
      - 5 sao) dành cho ekip sản xuất (không quá 5 người)
    </p>
    <p>
      Biểu tượng Cuộc thi Phim ngắn Đà Nẵng Lần thứ I – 2021 “KHÁM
      PHÁ ĐÀ NẴNG TUYỆT VỜI - WOW DA NANG”
    </p>
  </div>
</li>
</ul>`;
