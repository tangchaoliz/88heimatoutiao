<template>
  <div class='login'>
    <!-- element-ui card 卡片 组件-->
    <el-card class="login-card">
        <!-- 卡片内容 -->
        <div class='title'>
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 表单 -->
        <el-form style='margin-top:30px'>
            <el-form-item>
                <!-- 手机号 -->
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <!-- 验证码 -->
                <el-input style='width:230px'></el-input>
                <!-- 发送验证码按钮 -->
                <el-button style='float:right' plain>发送验证码</el-button>
            </el-form-item>
            <el-form-item>
                <!-- 勾选同意框 -->
                <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item>
                <el-button style='width:100%' type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .login {
      background: url('../../assets/img/login_bg.jpg');
      background-size: cover;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      .login-card {
          width: 400px;
          height: 350px;
          padding-left: 20px;
          padding-right: 20px;
          .title {
              text-align: center;
              img {
                  height: 45px;
              }
          }

      }
  }
</style>
