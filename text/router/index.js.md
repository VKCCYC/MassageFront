
// 假設這裡的 user.isLogin 是一個布林值，表示使用者是否已經登入
// to.path 表示即將前往的路徑

// 如果使用者已經登入且即將前往的路徑是 '/register' 或 '/login'
if (user.isLogin && ['/register', '/login'].includes(to.path)) {
  // 導航至根路徑 '/'
  next('/');
} else {
  // 如果使用者未登入或即將前往的路徑不是 '/register' 或 '/login'
  // 繼續正常的導航流程
  next();
}

這段程式碼的目的是檢查使用者是否已經登入，如果已經登入且即將前往的路徑是註冊 (/register) 或登入 (/login) 頁面，則將導向路徑改為根路徑 (/)，否則繼續正常的導航流程。這是一種保護機制，確保已登入的使用者無法再次進入註冊或登入頁面。