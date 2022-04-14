num = prompt("Please enter a number for a multiplication table")
  document.write(`<center>Multiplication Table of ${num} by ${num}`);
document.write("<center><table border='1px'>");
for (var a = 1; a <= num; a++) {
  document.write("<tr style='height:25px'>");
  for (var b = 1; b <= num; b++) {
    document.write("<td style='width:25px'><center><font size='4'>" + a * b + "</center></font></td>");
  }
  document.write("</tr>");
}
document.write("</table></center>");
