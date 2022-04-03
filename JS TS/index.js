
//Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
// которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать
// отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное
// значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

const sequence = (start = 0, step = 1) => () => (start += step) - step;


//Также, нужна функция take(fn, count) которая вызвает функцию fn заданное число (count) раз и возвращает массив
// с результатами вызовов. Она нам пригодится для отладки:

const take = (fn, count) => {
    const results = [];
    while(count > 0){
        const result = fn();
        results.push(result);
        count--;
    }

    return results;
}


//Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива
// этой функцией, возвращая новый массив

const map = (fn, array) => {
    const results = [];
    for (const el of array){
        const result = fn(el);
        results.push(result);
    }

    return results;
}


//Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той,
// что была в первом задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее
// значение из gen и пропускает его через функцию a

const fmap = (a, gen) => (...args) => {
    const copy = [];
    for (const arg of args){
        copy.push(arg);
    }

    return a(gen.apply(null, copy));
}


//Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции

const partial = (func, ...args) => (...args2) => func(...args, ...args2);


//Наша функция partial позволяет фиксировать только первые аргументы. Усовершенствуй ее, чтобы зафиксировать можно было
// любые аргументы, пропущенные аргументы обозначаются с помощью undefined

const partialAny = (func, ...args) => (...args2) =>
    func(...args.map(arg => arg === undefined ? args2.shift() : arg), ...args2);


//Напиши функцию bind, которая позволяет привязать контекст (значение this) к функции

const bind = (fn, context, ...args) => (...args2) => {
    const field = Date.now().toString();
    context[field] = fn;
    const result = context[field](...args, ...args2);
    delete context[field];

    return result;
}


//Напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля

const pluck = (objects, fieldName) => objects.map(obj => obj[fieldName]);


//Напиши функцию filter(), которая принимает функцию-предикат и массив. Возвращает она массив значений,
// для которых предикат вернет true.

const filter = (arr, fn) => {
    const filtered = [];
    for (const el of arr){
        if (fn(el)) {
            filtered.push(el);
        }
    }

    return filtered;
}


//Напиши функцию, считающую число свойств в объекте

const count = obj => {
    let count = 0;
    for (const key in obj){
        count++;
    }

    return count;
}
