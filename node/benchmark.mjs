// This is the script used to determine exec time to compare against rust

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  let a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

function main() {
  let iterations = 100_000_000;

  for (let i = 0; i <= iterations; i++) {
    fibonacci(90);
  }
}

main();
