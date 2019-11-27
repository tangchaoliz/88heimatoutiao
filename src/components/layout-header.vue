<template>
  <!-- 头部组件 -->
  <el-row type='flex' justify="space-between">
      <!-- 左侧 -->
      <el-col :span="12" class="left">
        <!-- 图标 -->
        <i class='el-icon-s-unfold'></i>
        <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="3" class="right">
        <!-- 头像 -->
        <img src="../assets/img/avatar.jpg" alt="">
          <!-- 下拉菜单 -->
        <el-dropdown trigger="click">
          <span>举个栗子</span>
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

      </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.left {
    display: flex;
    align-items: center;
    i {
        font-size: 25px;
    }
    span {
        margin-left:4px;
    }
}
.right {
    display: flex;
    align-items: center;
    img {
        margin-right: 5px;
        border-radius: 50%;
    }
}
</style>
