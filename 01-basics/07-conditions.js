function grade(score) {
  if (score >= 90) {
    return ("A");
  } else if (score >= 80) {
    return ("B");
  } else if (score >= 70) {
    return ("C");
  } else if (score >= 60) {
    return ("D");
  } else {
    return ("E")
  }
  // 90+ → "A"，80+ → "B"，70+ → "C"，60+ → "D"，其余 → "E"
}

console.log(grade(95));  // "A"
console.log(grade(90));  // "A"  ← 边界
console.log(grade(89));  // "B"
console.log(grade(60));  // "D"  ← 边界
console.log(grade(59));  // "E"

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  // 能被 4 整除但不能被 100 整除，或者能被 400 整除
}

console.log(isLeapYear(2024));  // true
console.log(isLeapYear(2023));  // false
console.log(isLeapYear(1900));  // false ← 坑
console.log(isLeapYear(2000));  // true  ← 坑

function canEdit(role) {
  switch (role) {
    case "admin":
      return "读写";
      break;
    case "editor":
      return "编辑";
      break
    case "viewer":
      return "只读";
      break;
    default:
      return "无权限"
  }
  // "admin" → "读写"，"editor" → "编辑"，"viewer" → "只读"，其他 → "无权限"
}

console.log(canEdit("admin"));   // "读写"
console.log(canEdit("editor"));  // "编辑"
console.log(canEdit("viewer"));  // "只读"
console.log(canEdit("guest"));   // "无权限"