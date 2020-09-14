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
                // console.log(res)

                renderAvatar(res.data)
            },
            // 不论post还是get, 请求完成的时候都会调用compelit
            complete: function (res) {
                if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败") {
                    localStorage.removeItem('token')
                    location.href = '/login.html'
                }
            }
        })
    }

    // 封装渲染用户数据的函数,把登录用户的数据渲染到页面
    function renderAvatar(user) {
        //   判断一下用户有没有头像
        var name = user.username || user.nickname
        $("#welcome").html("欢迎&nbsp&nbsp" + name)
        // 判断用户有没有头像信息
        if (user.user_pic == "") {
            // 如果没有头像则拿取用户昵称的首个字母为头像
            var first = name[0].toUpperCase()
            $(".text-avatar").show().html(first)
            $("#userhead").hide()

        } else {

            $(".text-avatar").hide()
            // 获取用户头像,并且把用户的头像设为头像
            $("#userhead").attr("src", user.user_pic).show()

        }
    }

    // // 右上角退出按钮,实现退出功能
    // 1.清除主页用户token
    // // 2.跳转登录页面
    var layer = layui.layer
    $("#icon-tuichu").on("click", function (e) {
        console.log(111)
        e.preventDefault()
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/login.html'

        })
    })



})