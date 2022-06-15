// 用户模型 示例代码
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    __v: { type: Number, select: false },
    name: { type: String, required: true },  // 用户名
    password: { type: String, required: true, select: false },  // 密码
    avatar_url: { type: String },  // 头像
    gender: {  //   性别
      type: String,
      enum: ["male", "female"],
      default: "male",
      required: true
    },
    headline: { type: String },  // 座右铭
    locations: {  // 居住地
      type: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
      select: false
    },
    business: { type: Schema.Types.ObjectId, ref: "Topic", select: false },  // 职业
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
