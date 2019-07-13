<template>
  <div class="login-container">
    <div class="my-header">
      <a href="#">
        <i class="lr-icon-back"></i>
      </a>
      <span class="header-name">密码登录</span>
    </div>
    <div class="lr-content">
      <div class="welcome-top">
        <img class="welcome-img" src="../assets/login-reg/welcome.gif" alt />
      </div>
      <div class="user-input-box">
        <div class="phone-input-box input-box">
          <input
            id="username"
            class="input-default"
            placeholder="请输入11位手机号"
            maxlength="11"
            name="tel"
            type="tel"
            v-model="userFrom.phoneNum"
          />
        </div>
        <div class="password-input-box input-box">
          <input
            id="username"
            class="input-default"
            placeholder="请输入11位手机号"
            maxlength="11"
            name="tel"
            type="tel"
            v-model="userFrom.password"
          />
          <span id="eye-control">
            <i class="eye-close"></i>
          </span>
        </div>
      </div>
      <div class="remember-forget">
        <div>
          <input id="rememberPwdCheck" class="checkbox hidden" type="checkbox" checked="checked" />
          <span>记住账号密码</span>
        </div>
        <a href="#">忘记密码？</a>
      </div>
      <div class="lr-login-btn">
        <button class="login" @click="submitForm">登录</button>
      </div>
      <div></div>
    </div>
    <!-- 遮罩提示 -->
    <div class="login-tip-dialog" style="display: none;" ref="mask">
      <div class="dialog-inner">
        <div class="dialog-content" id="dContent">请输入正确的手机号~</div>
      </div>
    </div>
    <!-- 遮罩提示 -->
  </div>
</template>
<script>
export default {
  data() {
    let regExp4Phone = new RegExp("^[1][3-9]\\d{9}");
    return {
      userFrom: {
        phoneNum: "",
        password: ""
      },
      rules: {
        regExp4Phone
      }
    };
  },
  methods: {
    submitForm() {
      let mask = this.$refs.mask;
      if (this.userFrom.phoneNum) {
        let { regExp4Phone } = this.rules;
        if (regExp4Phone.test(this.userFrom.phoneNum)) {
          let { phoneNum: username, password } = this.userFrom;
          this.$axios
            .get("http://localhost:1904/login", {
              params: {
                username,
                password
              }
            })
            .then(res => {
              let { data, headers } = res;
              console.log(res);
              if (data.code == 250) {
                alert("用户名或密码错误！");
              } else if (data.code === 1000) {
                // 保存登录信息
                localStorage.setItem("Authorization", data.data);

                let temp = username.slice(0, 3) + "****" + username.slice(-4);

                localStorage.setItem("phoneNum", temp);
                this.$store.state.phoneNum = temp;

                // 获取目标路径
                let targetPath = this.$route.query.redirectTo;

                this.$router.replace(targetPath ? targetPath : "/mine");
              }
            });
        } else {
          mask.style.display = "block";
          setTimeout(() => {
            mask.style.display = "none";
          }, 3000);
        }
      } else {
        mask.style.display = "block";
        setTimeout(() => {
          mask.style.display = "none";
        }, 3000);
      }
    }
  }
};
</script>
<style lang="scss">
.login-container {
  .my-header {
    display: flex;
    padding: 0 4.4vw;
    justify-content: space-between;
    border-bottom: 1px solid #dedede;

    .lr-icon-back {
      display: block;
      width: 88px;
      height: 88px;
      background: url(../../src/assets/login-reg/back.png) no-repeat left center;
      background-size: 16px 25px;
    }

    .header-name {
      font-size: 36px;
      line-height: 88px;
      color: #666666;
    }
  }
  .my-header::after {
    display: block;
    width: 88px;
    height: 88px;
    content: "";
  }
  .lr-content {
    overflow: hidden;
    .welcome-top {
      margin-top: 50px;
      height: 118px;
      .welcome-img {
        width: 501px;
        height: 100%;
      }
    }
    .user-input-box {
      margin-top: 80px;
      .input-box {
        width: 620px;
        height: 100px;
        margin: 0 auto;
        border-bottom: 1px solid #f0f0f0;
        .eye-close {
          display: inline-block;
          width: 36px;
          height: 36px;
          vertical-align: middle;
          background: url(../assets/login-reg/eye_close.png);
          background-size: 100% 100%;
        }
        .eye-open {
          display: inline-block;
          width: 36px;
          height: 36px;
          vertical-align: middle;
          background: url(../assets/login-reg/eye_open.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .remember-forget {
      display: flex;
      justify-content: space-between;
      margin: 30px 60px 0;
      font-size: 24px;
      color: #666666;
    }
    .lr-login-btn {
      margin-top: 90px;
      .login {
        margin: 0 auto;
        display: block;
        width: 630px;
        height: 100px;
        font-size: 35px;
        color: #ffffff;
        background-color: #4d72e2;
        border-radius: 5px;
      }
    }
  }
  .login-tip-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* display: none; */
    .dialog-inner {
      transform: translateY(600px);
      text-align: center;
      .dialog-content {
        display: inline-block;
        padding: 30px 45px;
        max-width: 65%;
        font-size: 28px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 16px;
        opacity: 0.8;
      }
    }
  }
}
</style>
