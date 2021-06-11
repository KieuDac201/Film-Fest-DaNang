

const btns = document.querySelectorAll('.btn-group h5')
const formElement = document.querySelector('.register-form #form')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        btns.forEach(b => {
            b.classList.remove('active')
        })
        let className = btn.getAttribute('class')
        if(className == 'new-register'){
            formElement.innerHTML = strNewRegister
        }else{
            formElement.innerHTML = strRegistered
        }
        btn.classList.add('active')
        
    })
})





var strNewRegister = `<h4>Thông tin tác phẩm dự thi</h4>
<div class="form-group">
  <div class="form-input">
    <h5>
      Tác phẩm của bạn được thực hiện bởi một nhóm hay một cá nhân?
      <span>*</span>
    </h5>
    <label for="" class="radio">
      <input type="radio" name="teamOrPersonal" id="team" />
      <p>Nhóm</p>
    </label>
    <label for="" class="radio">
      <input type="radio" name="teamOrPersonal" id="personal" />
      <p>Cá nhân</p>
    </label>
  </div>
</div>

<div class="form-group">
  <div class="form-input text">
    <label for="">
      <h5>
          Tên đơn vị/cá nhân dự thi 
          <span>*</span>
      </h5>
      <input type="text" placeholder="Câu trả lời của bạn" />
    </label>
    <label for="">
      <h5>
          Số lượng thành viên
          <span>*</span>
      </h5>
      <input type="text" placeholder="Câu trả lời của bạn" />
    </label>
  </div>
</div>

<div class="form-group">
  <div class="form-input text">
    <label for="" >
      <h5>
          Tên tác phẩm
          <span>*</span>
      </h5>
      <input type="text" placeholder="Câu trả lời của bạn" />
    </label>
    <label for="">
      <h5>
          Thời lượng tác phẩm (vui lòng chuyền về đơn vị giây)
          <span>*</span>
      </h5>
      <input type="text" placeholder="Câu trả lời của bạn" />
    </label>
  </div>
</div>

<div class="form-group">
  <div class="form-input">
    <h5>Thể loại <span>*</span></h5>
    <label for="" class="radio">
      <input type="radio" name="type"  />
      <p>MV ca nhạc</p>
    </label>
    <label for="" class="radio">
      <input type="radio" name="type"  />
      <p>Phim ngắn</p>
    </label>
    <label for="" class="radio">
      <input type="radio" name="type"  />
      <p>Phóng sự</p>
    </label>
    <label for="" class="radio">
      <input type="radio" name="type"  />
      <p>Viral clip</p>
    </label>
  </div>
</div>

<div class="form-group">
  <div class="form-input">
    <label for="">
      <h5>
          Tóm tắt nội dung 
          <span>*</span>
      </h5>
      <textarea placeholder="Câu trả lời của bạn"></textarea>
    </label>
  </div>
</div>

<div class="form-group">
  <div class="form-input">
      
    <label for="">
      <h5>
          Upload bài dự thi
          <span>*</span>
      </h5>
      
      <input type="file" id="baithi"/>
    </label>
    <label for="baithi" class="btn">Thêm tệp</label>
  </div>
</div>

<div class="form-group">
  <div class="form-input">
    <label for="">
      <h5>
          Thumbnail bài dự thi
          <span>*</span>
      </h5>
      <input type="file" id="thumbnail"/>
    </label>
    <label for="thumbnail" class="btn">Thêm tệp</label>
  </div>
</div>

<div class="form-group">
  <div class="form-input text">
    <label for="">
      <h5>
          Link hình ảnh/video hậu trường sản xuất (nếu có)
          <span>*</span>
      </h5>
      
      <input type="text" placeholder="Câu trả lời của bạn"/>
    </label>
  </div>
</div>
<div class="form-group">
  <div class="form-input">
    <label for="" class="radio">
      <input type="checkbox" />
      <p>
        Đơn vị/cá nhân xác nhận tham gia Cuộc thi đồng nghĩa với việc
        đồng ý với các Điều lệ và Quyết định cuối cùng của Ban tổ chức
        trong mọi vấn đề phát sinh trong quá trình diễn ra và sau khi
        kết thúc cuộ thi. *
      </p>
    </label>
  </div>
</div>

<div class="btn-group">
    <div class="btn btn-disable">Quay lại</div>
    <div class="btn btn-fill">Gửi</div>
</div>`;
var strRegistered = `<div class="form-group">
<div class="form-input text">
  <label for="">
    <h5>
        Tên đơn vị / cá nhân dự thi 
        <span>*</span>
    </h5>
    <input type="text" placeholder="Câu trả lời của bạn" />
</label>
</div>
</div>
<div class="btn-group">
<div class="btn btn-fill">Tiếp tục</div>
</div>`


