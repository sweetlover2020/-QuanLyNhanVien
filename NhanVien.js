//Khai báo lớp đối tượng trong javascript Class (Prototype)
var NhanVien = function (maNV, tenNV, chucVu, heSoChucVu, luongCoBan, gioLamTrongThang) {
    this.maNhanVien = maNV;
    this.tenNhanVien = tenNV;
    this.chucVu = chucVu;
    this.heSoChucVu = heSoChucVu;
    this.luongCoBan = luongCoBan;
    this.gioLamTrongThang = gioLamTrongThang;

    this.tongLuong = function () {
        var tongLuong = 0;
        var luongCoBan = this.luongCoBan;
        var heSoChucVu = this.heSoChucVu;
        switch (this.chucVu) {
            case "Giám đốc":
                tongLuong = Number(luongCoBan) * heSoChucVu;
                break;
            case "Quản lý":
                tongLuong = Number(luongCoBan) * heSoChucVu;
                break;
            case "Nhân viên":
                tongLuong = Number(luongCoBan) * heSoChucVu;
                break;
        }
        return tongLuong;
    }

    this.xepLoaiNhanVien = function () {
        var gioLamTrongThang = this.gioLamTrongThang;
        if (gioLamTrongThang < 50) {
            return ('Nhân viên kém')
        } else if (gioLamTrongThang < 80) {
            return ('Nhân viên trung bình');
        } else if (gioLamTrongThang < 100) {
            return ('Nhân viên khá');
        } else if (gioLamTrongThang < 120) {
            return ('Nhân viên giỏi');
        } else {
            return ('Nhân viên xuất sắc');
        }
    }
}