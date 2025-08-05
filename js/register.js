document.getElementById("btn").onclick = function () {  
  // 获取用户输入的用户名、邮箱地址、密码和重复密码  
  var username = document.getElementById("username").value;  
  var email = document.getElementById("email").value;  
  var pwd = document.getElementById("pwd").value;  
  var repwd = document.getElementById("repwd").value;  
  
  function checkEmail() {  
    var email = document.getElementById("email").value;  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(email)) {  
      alert("请输入有效的邮箱地址！");  
      return false;  
    }  
    return true;  
  }
  // 使用正则表达式验证邮箱格式  
  if (!checkEmail()) {  
    return false;
  }  
  
  // 比较两次密码是否一致  
  if (pwd !== repwd) {  
    // 如果密码不一致警告提示  
    alert("两次密码输入不一致，请重新输入！");  
    return false; 
  }  
  
  // 验证通过，将输入的用户名、密码和邮箱存在userInfo对象中  
  var userInfo = {  
    username: username,  
    email: email,  
    pwd: pwd  
  };  
  
  // 使用localStorage存储userInfo对象的信息，注意要将userInfo转成字符串  
  localStorage.setItem("userInfo", JSON.stringify(userInfo));  
  
  // alert提示注册成功，并跳转到登录页  
  alert("注册成功！");  
  // 注册成功后1秒跳转到登录页  
  setTimeout(function () {  
    location.href = "login.html";
  }, 1000);  
};