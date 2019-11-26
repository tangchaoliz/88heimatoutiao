<template>
  <div class='login'>
    <!-- element-ui card 卡片 组件-->
    <el-card class="login-card">
        <!-- 卡片内容 -->
        <div class='title'>
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 表单 -->
        <!-- model 属性 要绑定表单数据对象 -->
        <!-- rules 属性 要绑定的校验对象 -->
        <!-- ref 属性(属性名随便起) -->
        <el-form ref='formObj' style='margin-top:30px' :model='loginForm' :rules='loginRules'>
            <!-- 表单域 -->
            <el-form-item prop="mobile">
                <!-- 手机号 -->
                <el-input v-model="loginForm.mobile" placeholder='请输入您的手机号'></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <!-- 验证码 -->
                <el-input v-model="loginForm.code" style='width:230px' placeholder='请输入您的验证码'></el-input>
                <!-- 发送验证码按钮 -->
                <el-button style='float:right' plain>发送验证码</el-button>
            </el-form-item>
            <el-form-item prop="checked">
                <!-- 勾选同意框 -->
                <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item >
                <el-button @click='login' style='width:100%' type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      // 要校验的整个表单的数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 是否勾选协议
      },
      //   校验规则对象
      loginRules: {
        // key (要校验的字段名): value(数组 => 多条或者1条或者没有规则)
        // required 必填项
        // message 提示信息
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号'
        }],
        code: [{ required: true, message: '请输入您的验证码' }, {
          pattern: /^\d{6}$/, message: '请输入六位数字'
        }],
        checked: [{ validator: function (rule, value, callback) {
        // rule 代表当前的规则 没啥用
        // value 代表当前的值 => 表单字段checked的值
        // callback 回调函数
          if (value) {
            // 如果是true 就是选中了 通过校验
            callback() // 直接执行 callback 表示直接通过
          } else {
          // 没有选中 不通过校验
            callback(new Error('您需要勾选用户协议'))
          }
        } }]
      }
    }
  },
  methods: {
    login () {
      // 手动校验  就是校验你之前所有的规则
      this.$refs.formObj.validate((isOk) => {
        if (isOk) {
          // 如果为true 继续下一步 调用接口 登录
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          }).then(res => {
            console.log(res.data)
          })
        }
      })
    }
  }
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
