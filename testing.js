const createPizza = async () => {
    // pizza.pizzaName = name;
    // pizza.numToppings = pizzaType;
    // window.location.href = "cus-topping.html";
    const body = {
        "isCauly":true,
        "numToppings":[]
    }
    const response = await fetch("http://localhost:5001/checkout", {
        method:"PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });
    alert("Database updated");
}

module.exports = {createPizza};
