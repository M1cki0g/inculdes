let i = 0;
let x;
let t = "";

do {
  let x = prompt("Enter 16 char");
  t += x.toLowerCase();
  console.log(t);
  i++;
} while (i < 3);

if (t.includes("insert") && t.includes("update") && t.includes("drop")) {
  console.log("Shutdown");
} else if (t.includes("insert") || t.includes("update") || t.includes("drop")) {
  console.log("Injection");
}
