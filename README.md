# Payment Gateway - PayOS & Dio

Ứng dụng cổng thanh toán hiện đại cho các gói dịch vụ Locket, tích hợp với hệ thống thanh toán PayOS & Dio. Ứng dụng cung cấp thanh toán nhanh chóng và bảo mật thông qua mã QR với trải nghiệm thân thiện trên cả desktop và mobile.

## 🚀 Tính năng

- **Thanh toán QR Code**: Thanh toán nhanh chóng và bảo mật thông qua quét mã QR
- **Thông tin chuyển khoản**: Chi tiết ngân hàng đầy đủ với tính năng sao chép nhanh
- **Quản lý đơn hàng**: Kiểm tra trạng thái đơn hàng theo thời gian thực và hủy đơn
- **Thiết kế responsive**: Tối ưu cho cả desktop và mobile
- **Thông báo Toast**: Thông báo thân thiện cho mọi hành động
- **Giao diện hiện đại**: Xây dựng với TailwindCSS cho giao diện sạch sẽ, hiện đại

## 🛠️ Công nghệ sử dụng

- **Frontend Framework**: React v19
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Icons**: Lucide React
- **Loading Animations**: LDRS

## 📁 Cấu trúc dự án

```
src/
├── App.jsx                 # Cấu hình router, layout, trang 404
├── main.jsx                # Điểm khởi tạo ứng dụng
├── config/
│   └── axios.js            # Cấu hình axios (dự phòng cho tương lai)
├── constants/
│   └── urlAPI.js           # Biến môi trường URL API
├── services/
│   └── PaymentServices.js  # Dịch vụ giao tiếp API
├── components/
│   ├── Header/             # Component header
│   ├── Toast/              # Component thông báo toast
│   ├── Loading/            # Component loading animation
│   └── NotFoundPage/       # Component trang lỗi 404
├── layout/
│   └── default.jsx         # Layout mặc định (Header + Main)
├── pages/
│   ├── Home/               # Trang chủ
│   └── PayPage/            # Trang thanh toán (QR code, thông tin chuyển khoản)
└── routes/
    └── index.js            # Định nghĩa các route
```

## 🎯 Chức năng chính

### Trang chủ (`/`)
- Giới thiệu về cổng thanh toán
- Thông tin thương hiệu PayOS & Dio

### Trang thanh toán (`/web/:orderId`)
- **Lấy thông tin đơn hàng**: Gọi API để lấy chi tiết đơn hàng theo `orderId`
- **Hiển thị mã QR**: Tạo và hiển thị mã QR để thanh toán
- **Chi tiết chuyển khoản**: Hiển thị thông tin ngân hàng, số tài khoản, số tiền và nội dung chuyển khoản
- **Kiểm tra trạng thái thanh toán**: Xác minh trạng thái đơn hàng theo thời gian thực
- **Hủy đơn hàng**: Cho phép người dùng hủy đơn hàng đang chờ
- **Sao chép nhanh**: Tính năng sao chép nhanh cho thông tin chuyển khoản

### Dịch vụ API (`src/services/PaymentServices.js`)
- `GetInfoOrder(orderId)`: Lấy thông tin đơn hàng từ API
- `CancelToOrder(orderId, orderCode)`: Gửi yêu cầu hủy đơn hàng

## 🚦 Bắt đầu

### Yêu cầu hệ thống
- Node.js (v16 trở lên)
- npm hoặc yarn

### Cài đặt

1. Clone repository
```bash
git clone https://github.com/doi2523/payment-gateway.git
cd payment-gateway
```

2. Cài đặt dependencies
```bash
npm install
```

3. Tạo file environment
```bash
cp .env.example .env
```

4. Cấu hình biến môi trường trong `.env`
```env
VITE_PAYMENT_API_URL=your_api_endpoint_here
```

### Phát triển

```bash
# Khởi chạy development server
npm run dev

# Build cho production
npm run build

# Chạy linting
npm run lint

# Xem trước production build
npm run preview
```

## 🔧 Biến môi trường

| Biến | Mô tả | Bắt buộc |
|------|-------|----------|
| `VITE_PAYMENT_API_URL` | API endpoint cho dịch vụ thanh toán | Có |

## 📱 Cách sử dụng

1. **Truy cập trang chủ**: Điều hướng đến `/` để xem giới thiệu cổng thanh toán
2. **Thực hiện thanh toán**: Truy cập `/web/{orderId}` để xử lý thanh toán
3. **Quét mã QR**: Sử dụng ứng dụng ngân hàng để quét mã QR hiển thị
4. **Chuyển khoản thủ công**: Sao chép thông tin ngân hàng để chuyển khoản thủ công
5. **Kiểm tra trạng thái**: Sử dụng nút kiểm tra trạng thái để xác minh thanh toán
6. **Hủy đơn hàng**: Hủy đơn hàng đang chờ nếu cần

## 🎨 Thành phần giao diện

- **Layout responsive**: Thích ứng với các kích thước màn hình khác nhau
- **Trạng thái loading**: Animation loading mượt mà sử dụng LDRS
- **Thông báo Toast**: Thông báo thành công, lỗi, cảnh báo và thông tin
- **Tính năng sao chép**: Sao chép một cú nhấp cho thông tin chuyển khoản
- **Thiết kế hiện đại**: Giao diện sạch sẽ và trực quan

## 🔮 Cải tiến trong tương lai

- Nâng cao cấu hình axios trong `src/config/axios.js`
- Tích hợp thêm phương thức thanh toán
- Chức năng lịch sử đơn hàng
- Hỗ trợ đa ngôn ngữ
- Xử lý lỗi nâng cao

## 👨‍💻 Tác giả

**Đào Văn Đôi (Dio)**
- GitHub: [@doi2523](https://github.com/doi2523)
- Repository: [payment-gateway](https://github.com/doi2523/payment-gateway)

## 📄 Giấy phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/TinhNangMoi`)
3. Commit thay đổi (`git commit -m 'Thêm tính năng mới'`)
4. Push lên branch (`git push origin feature/TinhNangMoi`)
5. Tạo Pull Request

## 📞 Hỗ trợ

Để được hỗ trợ và đặt câu hỏi, vui lòng liên hệ với nhóm phát triển hoặc tạo issue trong repository.

## 🌟 Đánh giá

Nếu dự án này hữu ích cho bạn, hãy cho một ⭐ trên GitHub!

---

**Được xây dựng với ❤️ cho trải nghiệm thanh toán liền mạch**
