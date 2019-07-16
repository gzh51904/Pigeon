<template>
  <div class="login-container">
    <div class="my-header">
      <a href="#">
        <i @click="back()" class="lr-icon-back"></i>
      </a>
      <span class="header-name">登录/注册</span>
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
            id="password"
            class="input-default"
            placeholder="请输入密码"
            maxlength="11"
            name="password"
            type="password"
            v-model="userFrom.password"
          />
          <span id="eye-control">
            <i class="eye-close" ref="eye" @click="changeState()"></i>
          </span>
        </div>
        <div class="password-input-box input-box">
          <input
            id="passCheck"
            class="input-default"
            placeholder="请再次输入密码"
            maxlength="11"
            name="pass"
            type="password"
            v-model="userFrom.pass"
          />
          <span id="eye-control">
            <i class="eye-close" ref="eye1" @click="changeState1()"></i>
          </span>
        </div>
      </div>
      <div class="remember-forget">
        <router-link to="login">去登陆&gt;&gt;</router-link>
      </div>
      <div class="lr-login-btn">
        <button class="login" @click="submitForm">注册</button>
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
        password: "",
        pass: ""
      },
      rules: {
        regExp4Phone
      },
      eyeState: false,
      eyeState: false
    };
  },
  methods: {
    submitForm() {
      let mask = this.$refs.mask;
      if (this.userFrom.phoneNum) {
        let { regExp4Phone } = this.rules;
        if (regExp4Phone.test(this.userFrom.phoneNum)) {
          if (this.userFrom.pass == this.userFrom.password) {
            console.log(1);

            let { phoneNum: username, password, pass } = this.userFrom;
            this.$axios
              .get("http://localhost:1904/reg/check", {
                params: {
                  username,
                  password
                }
              })
              .then(({ data }) => {
                if (data.code == 1000) {
                  this.$router.replace({ name: "Login" });
                }
              });
          }
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
    },
    back() {
      window.history.back();
    },
    changeState() {
      let temp = document.getElementById("password");
      if (!this.eyeState) {
        this.$refs.eye.classList.remove("eye-open");
        this.eyeState = true;
        temp.setAttribute("type", "password");
      } else {
        this.$refs.eye.classList.add("eye-open");
        temp.setAttribute("type", "text");
        this.eyeState = false;
      }
    },
    changeState1() {
      let temp = document.getElementById("passCheck");
      if (!this.eyeState1) {
        this.$refs.eye1.classList.remove("eye-open");
        this.eyeState1 = true;
        temp.setAttribute("type", "password");
      } else {
        this.$refs.eye1.classList.add("eye-open");
        temp.setAttribute("type", "text");
        this.eyeState1 = false;
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
    .input-box {
      .input-default {
        margin: 30px 0;
      }
      #eye-control {
        float: right;
        margin-top: 30px;
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
