// 入口函数
$(function () {
    // 刷新页面立马调用获取用户信息的函数
    getUserInfo()
    //    封装获取用户的函数
    function getUserInfo() {
        $.ajax({
            method: "GET",
            url: "/my/userinfo",
            headers: {
                Authorization: localStorage.getItem('token') || ''
            },
            success: function (res) {
                if (res.status !== 0) {
                    return "获取用户基本信息失败"
                }
                console.log(res)
                renderAvatar(res.data)
            }
        })
    }
    // 封装渲染用户数据的函数,把登录用户的数据渲染到页面
    function renderAvatar(user) {
        //   判断一下用户有没有头像
        var name = user.username || user.nickname
        // 判断用户有没有头像信息
        if (user.user_pic == "") {
            // 如果没有头像则拿取用户昵称的首个字母为头像
            var first = name[0].toUpperCase()
            $(".text-avatar").show().html(first)
            $("#userhead").hide()

        } else {

            $(".text-avatar").hide()
            // 获取用户头像,并且把用户的头像设为头像
            $("#userhead").att("src", user.user_pic).show()

        }
    }
})