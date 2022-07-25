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

function make(callback) {
    setTimeout(function () {
        console.log('1'); // некая асинхронная операция, может не одна
        callback();       // затем наш коллбэк
    }, 1000);
}
make(function () {
    console.log('2')
})

// Передача результата в коллбэк

function make2(callback) {
    setTimeout(function () {
        let res = [1, 2, 3, 4, 5]; // массив с результатом
        callback(res)
    }, 3000);
}
// Допишите код коллбэка так, чтобы он находил сумму элементов массива с результатом.
make2(function (res) {
    console.log(res)
    let sum = 0;
    for (let i of res) {
        sum = sum + i;
    }
    console.log(sum)
})