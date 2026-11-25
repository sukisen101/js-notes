const user = { name: "高", address: null };

console.log(user.address?.city);            // ？报错
console.log(user.address?.city ?? "未知");   // ？"未知"
console.log(0 || 10);                       // ？10
console.log(0 ?? 10);                       // ？0
console.log("" || "默认");                   // ？"默认"
console.log("" ?? "默认");                   // ？""
console.log(false ?? true);                 // ？false

function getCity(user) {
  return user?.address?.city ?? "未知";
}

console.log(getCity({}));                            // "未知"
console.log(getCity({ address: null }));             // "未知"
console.log(getCity({ address: { city: "郑州" } }));   // "郑州"
console.log(getCity({ address: { city: "" } }));      // ？  ← 新增

function getCity2(user) {
  return user?.address?.city || "未知";
}

console.log(getCity2({ address: { city: "" } }));   // ？"未知"