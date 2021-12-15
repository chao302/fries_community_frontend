import router from "./router";
import store from "./store";
import getPageTitle from "@/utils/get-page-title";

import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth"; // 进度条样式

NProgress.configure({ showSpinner: false }); // NProgress配置

router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start();
  // 设置页面标题
  document.title = getPageTitle(to.meta.title);
  // 判断用户是否已登录
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      // 登录，跳转首页
      next({ path: "/" });
      NProgress.done();
    } else {
      // 获取用户信息
      await store.dispatch("user/getInfo");
      next();
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
