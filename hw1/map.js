// let order = new Map ([
//     ["Виктор", "Пицца"],
//     ["Ольга", "Суши"],
//     ["Дмитрий", "Десерты"],
// ]);

// for (let cook of order.keys()){
//     console.log(cook);
// }

// for (let specialization of order.values()){
//     console.log(specialization);
// }

// for (let entry of order){
//     console.log(entry);
// }

// order.forEach((value, key, map) => {
//     console.log(`Повар ${key}, специализация - ${value}`);
// });


// let dish = new Map ([
//     ["пицца1", "Маргарита"],
//     ["пицца2", "Пепперони"],
//     ["суши1", "Филадельфия"],
//     ["суши2", "Калифорния"],
//     ["десерт1", "Тирамису"],
//     ["десерт2", "Чизкейк"]
// ]);

// for (let cooks of dish.keys()){
//     console.log(cooks);
// }

// for (let course of dish.values()){
//     console.log(course);
// }

// for (let entry of dish){
//     console.log(entry);
// }

// dish.forEach((value, key, map) => {
//     console.log(`${key}, блюдо - ${value}`);
// });


// let booking = new Map ([
//     ["клиент1", "Алексей"],
//     ["клиент2", "Мария"],
//     ["клиент3", "Ирина"],
// ]);

// for (let client of booking.keys()){
//     console.log(client);
// }

// for (let name of booking.values()){
//     console.log(name);
// }

// for (let entry of booking){
//     console.log(entry);
// }

// booking.forEach((value, key, map) => {
//     console.log(`клиент - ${value}`);
// });



const order = new Map();
order.set("Пицца", "Виктор");
order.set("Суши", "Ольга");
order.set("Десерт", "Дмитрий");

const orderAlex = new Set().add('Пицца')
                           .add('Десерт');

const booking =new Map();
booking.set('Alex', orderAlex);

console.log(`Повара заказа ${order.get("Пицца")} и ${order.get("Десерт")} `);
console.log(`Заказ Алексея - ${[...booking.get("Alex")]}`);


// ?! но я не понимаю как передавать по несколько вариантов, ведь map двойников зачищает.