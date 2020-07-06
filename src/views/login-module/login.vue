<!--
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-02 13:44:50
 * @LastEditTime : 2020-07-06 15:17:05
 * @LastEditors  : zhuxiaodong
 * @Description  : login
 * @FilePath     : /easy-mock-demo/src/views/login-module/login.vue
-->
<template>
  <div class="login-container">
    <img class="bg-box" />
    <div class="login-box">
      <el-row>
        <el-col :span="12" class="title-box">
          <div style="margin-top:50px;margin-left:30px">欢迎使用</div>
          <div style="margin-top:48px;margin-left:30px">国家医保开放平台</div>
          <img class="img-box" :src="require('@/assets/login_bg1.png')" />
        </el-col>
        <el-col :span="12" class="input-box">
          <div class="input-content">
            <div class="login-title">登录</div>
            <el-form
              @submit.native.prevent
              ref="loginForm"
              :model="loginForm"
              :rules="loginRules"
              class="login-form"
              label-position="left"
            >
              <el-form-item prop="acct">
                <el-input
                  :class="[userBlur ? 'input-el-box-focus' : 'input-el-box']"
                  @focus="changeIcon('userBlur', true)"
                  @blur="changeIcon('userBlur', false)"
                  @keyup.enter.native="handleLogin"
                  placeholder="请输入账号"
                  auto-complete="true"
                  clearable
                  v-model="loginForm.acct"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="pwd">
                <el-input
                  :class="[pwdBlur ? 'input-el-box-focus' : 'input-el-box']"
                  @focus="changeIcon('pwdBlur', true)"
                  @blur="changeIcon('pwdBlur', false)"
                  placeholder="请输入密码"
                  auto-complete="true"
                  type="password"
                  @keyup.enter.native="handleLogin"
                  v-model="loginForm.pwd"
                  clearable
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="codeVerify">
                <el-input
                  :class="[imgCodeBlur ? 'input-el-box-focus' : 'input-el-box']"
                  style="width:200px;float:left;display:inline-block;box-sizing:border-box"
                  @focus="changeIcon('imgCodeBlur', true)"
                  @blur="changeIcon('imgCodeBlur', false)"
                  placeholder="请输入验证码"
                  v-model="loginForm.codeVerify"
                  @keyup.enter.native="handleLogin"
                  clearable
                >
                </el-input>
                <div
                  style="width:100px;display:inline-block;float:left;height:40px;cursor:pointer"
                >
                  <img
                    :src="imgCode"
                    style="width:100%;height:100%"
                    @click="getCodeImg()"
                  />
                </div>
              </el-form-item>
              <!-- <el-form-item>
                <el-checkbox
                  style="margin-left:10px;color:#303133;font-size:14px"
                  v-model="checked"
                >记住密码</el-checkbox>
              </el-form-item> -->
              <el-form-item>
                <el-button
                  style="width:100%;background:#1b65b9;color:#fff"
                  :loading="loading"
                  @click="handleLogin"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { login,user } from "@/apis";
import { setToken } from "@/utils/token";
// import { sha256 } from "js-sha256";
export default {
  name: "login",
  data() {
    return {
      userBlur: false,
      pwdBlur: false,
      imgCodeBlur: false,
      refreshCode: false,
      loginForm: {
        acct: "",
        pwd: "",
        codeVerify: "",
      },
      loginRules: {
        acct: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
        codeVerify: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      loading: false,
      imgCode: "",
      imgUid: "",
      checked: false,
    };
  },
  methods: {
    changeIcon(key, val) {
      this[key] = val;
    },
    async getCodeImg() {
      let result = await login.getCodeImage();
      console.log(result);
      if (result && result.code == 0) {
        this.imgCode = result.data.imgCode;
        this.imgUid = result.data.imgUid;
      } else if (result.code) {
        this.$message({
          type: "error",
          message: `验证码获取失败！${result.message}`,
        });
        this.imgCode = "";
        this.imgUid = "";
      }
    },
    async getUserInfo() {
      let data = await user.getUserInfo();
      if (data && data.code == 0) {
        this.account = data.data.userAccount.account;
        this.changeUserInfo(data.data);
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          let params = {
            pwd: this.loginForm.pwd,
            acct: this.loginForm.acct,
            imgCode: this.loginForm.codeVerify,
            imgUid: this.imgUid,
          };

          this.loading = true;
          let result = await login.login(params);
          this.loading = false;
          if (result && result.code == 0) {
            this.$message({
              type: "success",
              message: "登录成功！",
            });
            // if (this.checked) {
            //   setCookie("acct", this.loginForm.acct, 7);
            //   setCookie("pwd", this.loginForm.pwd, 7);
            // }
            this.loginForm.acct = "";
            this.loginForm.pwd = "";
            this.loginForm.codeVerify = "";
            setToken(result.data.accessToken);
            this.$router.push({ path: "/" });
          } else {
            this.$message({
              type: "error",
              message: result.message,
            });
            this.loginForm.codeVerify = "";
            this.getCodeImg();
          }
        } else {
          this.$message({
            type: "error",
            message: "请输入正确帐号、密码与验证码",
          });
          return false;
        }
      });
    },
  },
  mounted() {
    this.getCodeImg();
    this.getUserInfo()
  },
};
</script>

<style lang="scss" scoped>
$bg: #1b65b9;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .bg-box {
    position: absolute;
    width: 100%;
  }
  .login-box {
    width: 1100px;
    height: 660px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    position: absolute; /*脱离文档流*/
    top: 50%; /*偏移*/
    margin-top: -330px;
    left: 50%;
    margin-left: -550px;
  }
  .title-box {
    width: 550px;
    height: 660px;
    border-radius: 30px 0 0 30px;
    background: linear-gradient(
      136deg,
      rgba(59, 113, 232, 1) 0%,
      rgba(27, 101, 185, 1) 100%
    );
    font-size: 40px;
    line-height: 40px;
    font-family: HuXiaoBo-NanShen, HuXiaoBo;
    padding: 58px 53px;
    color: #fff;
    .img-box {
      width: 444px;
      height: 344px;
      margin-top: 62px;
    }
  }
  .input-box {
    .input-content {
      width: 300px;
      margin-left: 122px;
      margin-top: 178px;
    }
    .login-title {
      width: 45px;
      height: 25px;
      text-align: center;
      font-size: 18px;
      font-family: SourceHanSansSC-Medium, SourceHanSansSC;
      font-weight: 500;
      color: rgba(48, 49, 51, 1);
      line-height: 25px;
      border-bottom: 2px solid $bg;
    }
    .login-form {
      margin-top: 38px;
      .input-el-box {
        /deep/ .el-input__inner {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #cecece;
        }
      }
      .input-el-box-focus {
        /deep/ .el-input__inner {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid $bg;
        }
      }
    }
    .padding-10 {
      padding-left: 10px;
    }
    .margin-8 {
      margin-top: 8px;
    }
    .wh-24 {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
