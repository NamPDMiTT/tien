function kiemTra() {
    var flag = true;
    // check mã sinh viên
    var msv = document.getElementById("msv");
    var title_msv = document.getElementById("title-msv");
    if (msv.value == "" || msv.value.length > 10) {
        msv.style.borderColor = "red";
        title_msv.innerHTML = "Mã sinh viên không được để trống và không được vượt quá 10 ký tự";
        msv.focus();
        flag = false;
    } else {
        msv.style.borderColor = "";
        title_msv.innerHTML = "";
    }

    // check họ tên sinh viên
    var hoten = document.getElementById("name");
    var title_hoten = document.getElementById("title-name");
    if (hoten.value == "" || hoten.value.length > 50) {
        hoten.style.borderColor = "red";
        title_hoten.innerHTML = "Họ tên không được để trống và không được vượt quá 50 ký tự";
        hoten.focus();
        flag = false;
    } else {
        hoten.style.borderColor = "";
        title_hoten.innerHTML = "";
    }

    // check email sinh viên
    var email = document.getElementById("email");
    var title_email = document.getElementById("title-email");
    var required = /\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    if (email.value == "" || email.value.length > 50) {
        email.style.borderColor = "red";
        title_email.innerHTML = "Email không được để trống và không được vượt quá 50 ký tự";
        email.focus();
        flag = false;
    } else if (!required.test(email.value)) {
        title_email.innerHTML = "Kiểm tra lại định dạng ! ";
        email.style.background = "red";
        email.focus();
        flag = false;
    } else {
        email.style.borderColor = "";
        title_email.innerHTML = "";
    }

    //check giới tính 
    var gender = document.getElementsByName('gender');
    var male = document.getElementById('male');
    var title_gender = document.getElementById('title-gender');
    if (!gender[0].checked && !gender[1].checked) {
        male.style.borderColor = "red";
        title_gender.innerHTML = " Vui lòng chọn giới tính !";
        flag = false;
    } else {
        male.style.borderColor = "";
        title_gender.innerHTML = "";
        flag = true;
    }

    // check sở thích
    var hobby = document.getElementsByName('checkbox');
    var boxhobby = document.getElementById('box-hobby');
    var title_hobby = document.getElementById('title-hobby');
    for (var i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            flag = true;
            break;
        } else {
            flag = false;
            boxhobby.style.borderColor = "red";
            title_hobby.innerHTML = "Vui lòng chọn sở thích";
        }
    }

    // check quốc tịch
    var nationality = document.getElementById("nationality");
    var title_nationality = document.getElementById("title-nationality");
    if (nationality.value == '0') {
        nationality.style.borderColor = "red";
        title_nationality.innerHTML = "Vui lòng chọn quốc tịch";
        flag = false;
    } else {
        nationality.style.borderColor = "";
        title_nationality.innerHTML = "";
    }


    //check ghi chú
    var note = document.getElementById("note");
    var title_note = document.getElementById("title-note");
    if (note.value == "" || note.value.length > 50) {
        note.style.background = "red";
        title_note.innerHTML = "Ghi chú không được để trống và không được vượt quá 50 ký tự";
        note.focus();
        flag = false;
    } else {
        note.style.background = "";
        title_note.innerHTML = "";
    }

    if (flag) {
        alert("Đăng kí thành công");
    }
    return flag;
}