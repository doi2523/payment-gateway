import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">
      <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold text-base-content mb-2">404 - Không tìm thấy trang</h1>
      <p className="text-base-content/80 mb-6">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xoá.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 text-white bg-primary hover:bg-primary/90 rounded-full transition"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
