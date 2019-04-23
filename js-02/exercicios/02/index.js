var result = "";

for (var i = 1; i <= 1000; i += 2) {
  result += i;
  if (i < 1000) {
    result += " - ";
  }
}

alert(result);
