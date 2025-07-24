export default function VietQRImage({ qrcode }) {
  if (!qrcode) return null;

  const { bank_info, info_order } = qrcode;
  const { bin, accountNumber } = bank_info;
  const { description, amount } = info_order;

  const src = `https://api.vietqr.io/image/${bin}-${accountNumber}-vietqr_pro.jpg?addInfo=${encodeURIComponent(description)}&amount=${amount}`;

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative">
        <img
          className="w-80 h-80 sm:w-70 sm:h-70 object-contain rounded-xl shadow-md border border-gray-200"
          src={src}
          alt="QR Code thanh toán"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-xl border-2 border-blue-200 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700">
          Quét mã để thanh toán nhanh
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Sử dụng app ngân hàng hoặc ví điện tử
        </p>
      </div>
    </div>
  );
}
