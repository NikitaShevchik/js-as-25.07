"use strict"
// const imageBlock = document.querySelector('.imageblock');
const button = document.querySelector('button')

// let image = document.createElement('img')
// image.src = '/img/img.png'

// image.addEventListener('load', function () {
//     imageBlock.appendChild(image)
//     console.log('Picture loaded')
// })
// image.addEventListener('error', function () {
//     console.log('Picture not loaded')
// })

//image.src = '/img/img.png'
// try {
//     if () {
//         image.addEventListener('load', function () {
//             imageBlock.appendChild(image)
//             console.log('Picture loaded')
//         })
//     } else {
//         throw { name: 'LoadImageError', message: 'Image not found' }
//     }
// } catch (error) {
//     console.log(error.message)
// }


// function make() {
//     setTimeout(function () {
//         console.log('done')
//     }, 2000)
// }
// make()
// console.log('Well')


// try {
//     setTimeout(function () {
//         throw { name: 'TimeOutError', message: 'Timout threw error' }
//     }, 2000)
// } catch (error) {

// }

// try {
//     setTimeout(function () {
//         throw (new Error); // исключение не будет поймано
//     }, 1000);
// } catch (error) {
//     console.log(error);
// }

// try {
//     button.addEventListener('click', function () {
//         throw (new Error); // исключение не будет поймано
//     });
// } catch (error) {
//     console.log(error);
// }


/*---------------------Асинхронный код с коллбэками в JavaScript---------------------*/

// function make() {
//     setTimeout(function () {
//         console.log('1')
//     }, 1000)
// }

// function make(callback) {
//     setTimeout(function () {
//         console.log('1'); // некая асинхронная операция, может не одна
//         callback();       // затем наш коллбэк
//     }, 1000);
// }
// make(function () {
//     console.log('2')
// })

// Передача результата в коллбэк

// function make2(a, b, callback) {
//     setTimeout(function () {
//         let res = [1, 2, 3, 4, 5]; // массив с результатом
//         callback(res[a], res[b])
//     }, 500);
// }
// Допишите код коллбэка так, чтобы он находил сумму элементов массива с результатом.
// make2(function (res) {
//     console.log(res)
//     let sum = 0;
//     for (let i of res) {
//         sum = sum + i;
//     }
//     console.log(sum)
// })

// Сделайте так, чтобы функция make принимала два параметра: номер одного и другого элемента массива.
// Пусть результатом асинхронной операции эта функция возвращает сумму указанных элементов.

// make2(0, 2, function (res1, res2) {
//     console.log(res1 + res2)
// })

// Обработка исключений в коллбэках

// function make3(num, callback) {
//     setTimeout(function () {
//         let arr = [1, 2, 3, 4, 5];

//         let err;
//         if (arr[num] === undefined) {
//             err = 'elem not exists'; // текст ошибки
//         } else {
//             err = null; // ошибки нет
//         }

//         callback(arr[num], err);
//     }, 800);
// }


// make3(10, function (res, err) {
//     if (!err) {
//         console.log(res); // ошибки не возникло, выведем результат
//     } else {
//         console.log(err); // ошибка возникла, выведем ее текст
//     }
// });



// Практическая задача

// const imageBlock = document.querySelector('.imageblock');
// let image = document.createElement('img');

// function loadImage(img, callback) {
//     setTimeout(function () {
//         let image = document.createElement('img')
//         image.src = `/img/${img}`
//         let err;
//         image.addEventListener('error', function () {
//             err = 'loadImageError';
//             callback(image, err)
//         })
//         image.addEventListener('load', function () {
//             callback(image, err)
//         })
//     }, 1000)
// }

// loadImage('img.png', function (imagebl, err) {
//     if (!err) {
//         imageBlock.append(imagebl)
//     } else {
//         console.log('Error ' + err)
//     }
// })

// Перепишите приведенный код так, чтобы в нем была загрузка 10 картинок плюс обработка исключений.
// loadImage('img1.png', function (image1, err1) {
//     document.body.append(image1);

//     loadImage('img2.png', function (image2, err2) {
//         document.body.append(image2);

//         loadImage('img3.png', function (image3, err3) {
//             document.body.append(image3);

//             loadImage('img4.png', function (image4, err4) {
//                 document.body.append(image4);

//                 loadImage('img5.png', function (image5, err5) {
//                     document.body.append(image5);

//                     loadImage('img6.png', function (image6, err6) {
//                         document.body.append(image6);

//                         loadImage('img7.png', function (image7, err7) {
//                             document.body.append(image7);

//                             loadImage('img8.png', function (image8, err8) {
//                                 document.body.append(image8);

//                                 loadImage('img9.png', function (image9, err9) {
//                                     document.body.append(image9);

//                                     loadImage('img10.png', function (image10, err10) {
//                                         document.body.append(image10);
//                                         console.log('все картинки загружены');
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

/*--------------------------------Асинхронный код через подписки в JavaScript--------------------------------*/

// setTimeout(function () {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // массив с результатом
//     func1(arr);
//     func2(arr);
//     func3(arr);
//     func4(arr);
// }, 3000);
// function func1(arr) {
//     console.log(`Данные из [${arr}] получены`)
//     // выведем в #message сообщение о том, что данные получены
// }

// function func2(arr) {
//     const list = document.querySelector('#list');
//     list.innerHTML = '';
//     for (let e of arr) {
//         list.innerHTML += `<li>${e}</li>`
//     }
//     // добавим в #list элементы массива в качестве тегов li
// }

// function func3(arr) {
//     const amount = document.querySelector('#amount');
//     amount.innerHTML = `Количество элементов - ${arr.length}`;
//     // выведем в #amount количество элементов в массиве
// }

// function func4(arr) {
//     const result = document.querySelector('#result');
//     let sum = 0;
//     for (let e of arr) {
//         sum = sum + e;
//     }
//     result.innerHTML = `Сумма всех элементов = ${sum}`;
//     // выведем в #result сумму элементов массива
// }


// Решение через подписки

let subsribers = {
    'func1': [1, 2, 3],
    // 'имя события 2': [массив коллбэков события],
    // 'имя события 3': [массив коллбэков события],
};


setTimeout(function () {
    emit('hover', [1, 2, 3, 4, 5, 6, 7]);
}, 3000);

on('loaded', function (arr) {
    console.log(`Данные из [${arr}] получены`)
    // выведем в #message сообщение о том, что данные получены
    // тут код из func1
});

on('loaded', function (arr) {
    // тут код из func2
    const list = document.querySelector('#list');
    list.innerHTML = '';
    for (let e of arr) {
        list.innerHTML += `<li>${e}</li>`
    }
    // добавим в #list элементы массива в качестве тегов li
});

on('loaded', function (arr) {
    // тут код из func3
    const amount = document.querySelector('#amount');
    amount.innerHTML = `Количество элементов - ${arr.length}`;
    // выведем в #amount количество элементов в массиве
});

on('loaded', function (arr) {
    // тут код из func4
    const result = document.querySelector('#result');
    let sum = 0;
    for (let e of arr) {
        sum = sum + e;
    }
    result.innerHTML = `Сумма всех элементов = ${sum}`;
    // выведем в #result сумму элементов массива
});

// Функция для испускания события:
// function emit('имя события', 'данные события') {
// }
// Функция для подписки на событие:
// function on('имя события', 'обработчик события') {
// }
function emit(name, data) {
    if (subsribers[name]) {
        for (let callback of subsribers[name]) {
            callback(data);
        }
    }
}
function on(name, callback) {
    if (!subsribers[name]) {
        subsribers[name] = [];
    }
    subsribers[name].push(callback);
}

/*------------------------Введение в промисы в JavaScript------------------------*/
