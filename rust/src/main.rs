use node_math::fibonacci;

fn main() {
    let iterations = 100_000_000;

    for _i in 1..=iterations {
        fibonacci(90);
    }
}
