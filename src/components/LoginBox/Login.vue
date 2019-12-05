<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="login-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="ruleForm.name"
        placeholder="请输入密码"
        show-password
      />
    </el-form-item>
    <el-form-item class="t-right">
      <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
      <el-button @click="handleCancel('ruleForm')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class Login extends Vue {
  private FormData: any;
  private ruleForm = {
    name: "",
    password: ""
  };
  private rules = {
    name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };

  @Emit("onOk")
  private submitForm(formName: string): object {
    this.FormData = this.$refs[formName];

    return new Promise((resolve, reject) => {
      this.FormData.validate((valid: boolean) => {
        if (valid) {
          this.cancelForm(formName);
          resolve("submit!");
        } else {
          reject("error submit!!");
        }
      });
    });
  }

  private cancelForm(formName: string): void {
    this.FormData = this.$refs[formName];
    this.FormData.resetFields();
  }

  @Emit("onCancel")
  private handleCancel(formName: string): void {
    this.cancelForm(formName);
  }
}
</script>

<style scoped></style>
