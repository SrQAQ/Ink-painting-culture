window.onload=function(){
    //localStorage将获取的userInfo转换为JSON对象
    var userInfo=localStorage.getItem("userInfo");
    userInfo=JSON.parse(userInfo);
    console.log(userInfo);
    //如果userInfo不为空，innerHTML赋值：用户，欢迎您
    if( userInfo!=null ){
      document.getElementById("welcome").innerHTML=""+userInfo.username+",欢迎您";
    }
  };
  function updateTime() {  
      var currentTime = new Date(); // 创建一个 Date 对象，它自动设置为当前日期和时间  
      var hours = currentTime.getHours(); // 获取小时数  
      var minutes = currentTime.getMinutes(); // 获取分钟数  
      var seconds = currentTime.getSeconds(); // 获取秒数  

      // 格式化时间，如果小于10，则在前面补0  
      hours = (hours < 10) ? "0" + hours : hours;  
      minutes = (minutes < 10) ? "0" + minutes : minutes;  
      seconds = (seconds < 10) ? "0" + seconds : seconds;  

      // 拼接时间字符串  
      var formattedTime = hours + ":" + minutes + ":" + seconds;  

      // 获取显示时间的 div 元素  
      var currentTimeElement = document.querySelector(".time");  
      // 更新 div 元素的内容  
      currentTimeElement.textContent = formattedTime;  
  }  

  // 立即执行一次，并在每秒更新一次时间  
  updateTime();  
  setInterval(updateTime, 1000);  