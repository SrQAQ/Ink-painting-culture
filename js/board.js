// 生成1-15间的随机数 [0,1),作为图片的名称
var num = Math.floor(Math.random() * 12);
// 设置随机头像
document.querySelector("#avatar").setAttribute("src", "images/" + num + ".jpg");

document.getElementById("btn").onclick = function () {
  // 获取目前有的评论信息
  var replyDivs = document.querySelectorAll("div.reply-item");
  // 创建新评论的div
  var reply_div = document.createElement("div");
  // 设置div的class样式
  reply_div.setAttribute("class", "reply-item");
  //获取昵称
  var userName = document.querySelector("#name").value;
  //获取内容
  var content = document.querySelector("#txt").value;
  // 设置div的内容
  // 为了减少字符串的拼接，此处使用了ES6的增强字符串：使用反引号表示字符串
  // 在字符串中可以通过"${变量名}"方式引用变量
  reply_div.innerHTML = `        
            <div class="user">
              <div class="user-face">
                <img src="images/${num}.jpg" alt="" />
              </div>
              <div class="user-name">${userName}</div>
              <p>${content}</p>
            </div>
            <div>
              <span>${showTime()}</span>
              <span><a class="remove" href="#">删除</a></span>
            </div>
      `;

  replyDivs[0].parentNode.appendChild(reply_div);
  // 清空文本框内容
  document.querySelector("#name").value = "";
  document.querySelector("#txt").value = "";
  // 重新获取删除链接，将新增的删除链接添加到removes中
  removes = document.querySelectorAll("a.remove");
  removeInfo();
};
// 用于生成当前时间
function showTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  if (hour < 10) hour = "0" + hour;
  minute = minute < 10 ? "0" + minute : minute;
  return year + "-" + month + "-" + date + " " + hour + ":" + minute;
}

// 实现删除功能
// 将removes定义成全局变量
var removes = document.querySelectorAll("a.remove");
function removeInfo() {
  for (var i = 0; i < removes.length; i++) {
    removes[i].onclick = function () {
      this.parentNode.parentNode.parentNode.parentNode.removeChild(
        this.parentNode.parentNode.parentNode
      );
    };
  }
}
// 调用删除函数
removeInfo();
