/**
 * Categorizes a person's age into one of four categories: Child, Teenager, Adult, or Senior.
 * @param {Object} person - The person object.
 * @param {number} person.age - The age of the person.
 * @return {string} - The age category.
 */
const teacher = {
    firstname: 'Remsey',
    lastname: 'Mailjard',
    age: 25,
};

function categorizeAge(person) {
    // Input validation
    if (!person || typeof person.age !== "number" || person.age < 0) {
        throw new Error("Invalid person object or age input");
    }

    switch (true) {
        case person.age >= 0 && person.age <= 12:
            return "Child";
        case person.age >= 13 && person.age <= 19:
            return "Teenager";
        case person.age >= 20 && person.age <= 59:
            return "Adult";
        default:
            return "Senior";
    }
}

categorizeAge(12);


/**
 * Calculate the new price including Taxes
 * @param {number} price - The price of the shoe
 * @return {number} - The price including taxes.
 */
function calculateTotal(price) {
    return price + price * TAX_RATE;
}
