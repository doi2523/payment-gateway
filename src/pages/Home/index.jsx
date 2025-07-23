import React from "react";

export default function PoweredByPayOS() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Cổng thanh toán
        </h2>
        <p className="text-lg text-gray-600">
          <span className="font-medium">Powered by </span>
          <span className="text-blue-600 font-semibold">PayOS</span>
          <span className="text-gray-400 font-medium mx-1">&</span>
          <span className="text-indigo-600 font-semibold">Dio</span>
        </p>
      </div>
    </div>
  );
}
