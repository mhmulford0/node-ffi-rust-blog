use node_math::fibonacci;

fn benchmark() {
    let iterations = 100;

    for i in 1..=iterations {
        println!("iteration {}", i);
        let data = fibonacci(900_000_000);
        println!("data is {}", data)
    }
}
fn main() {
    benchmark()
}
