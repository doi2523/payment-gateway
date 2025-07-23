import PoweredByPayOS from "../pages/Home";
import PayPage from "../pages/PayPage";

const APP_NAME = "Locket Dio - Checkout";
// 📌 Các route yêu cầu đăng nhập
const authRoutes = [
  { path: "/", component: PoweredByPayOS, title: `${APP_NAME}` },
  { path: "/web/:orderId", component: PayPage, title: `${APP_NAME}` },
];
export { authRoutes };
