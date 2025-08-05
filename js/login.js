document.getElementById("loginButton").onclick = function () {
  // 获取用户输入的用户名和密码
  var username = document.getElementById("username").value;
  var pwd = document.getElementById("pwd").value;
  // localStorage获取本地存储的userInfo信息
  var userInfo =JSON.parse(localStorage.getItem("userInfo"));
  //判断用户名和密码与存储的用户名和密码是否一致，如果不一致返回false
  if (username!= userInfo.username || pwd!= userInfo.pwd) {
	  //提示你输入的用户名和密码有误
      alert("用户名或密码错误");
      //如果不一致返回false
      return false;
  }
  //sessionStorage获取存储的session会话信息
  var session = JSON.parse(sessionStorage.getItem("session"));
  if (session!=null) {
    //提示XX用户已登录
    alert(username+"已登录");
    //1秒后跳转到主页面
      setTimeout(function(){
          window.location.href = "index.html";
      },1000);
  } else {
    //sessionStorage保存该账号的登录状态
    sessionStorage.setItem("userInfo", JSON.stringify(localStorage.getItem("userInfo")));
    //提示登录成功
    alert("登录成功");
    //跳转到主页面
    window.location.href = "index.html";
  }
};