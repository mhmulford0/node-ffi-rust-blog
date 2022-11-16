use node_math::fibonacci;

fn benchmark() {
    let iterations = 100_000_000;

    for _i in 1..=iterations {
        fibonacci(90);
    }
}
fn main() {
    benchmark()
}
