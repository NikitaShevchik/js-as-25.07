"use strict"
// const imageBlock = document.querySelector('.imageblock');
// const button = document.querySelector('button')

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

// let subsribers = {
//     'func1': [1, 2, 3],
//     // 'имя события 2': [массив коллбэков события],
//     // 'имя события 3': [массив коллбэков события],
// };


// setTimeout(function () {
//     emit('hover', [1, 2, 3, 4, 5, 6, 7]);
// }, 3000);

// on('loaded', function (arr) {
//     console.log(`Данные из [${arr}] получены`)
//     // выведем в #message сообщение о том, что данные получены
//     // тут код из func1
// });

// on('loaded', function (arr) {
//     // тут код из func2
//     const list = document.querySelector('#list');
//     list.innerHTML = '';
//     for (let e of arr) {
//         list.innerHTML += `<li>${e}</li>`
//     }
//     // добавим в #list элементы массива в качестве тегов li
// });

// on('loaded', function (arr) {
//     // тут код из func3
//     const amount = document.querySelector('#amount');
//     amount.innerHTML = `Количество элементов - ${arr.length}`;
//     // выведем в #amount количество элементов в массиве
// });

// on('loaded', function (arr) {
//     // тут код из func4
//     const result = document.querySelector('#result');
//     let sum = 0;
//     for (let e of arr) {
//         sum = sum + e;
//     }
//     result.innerHTML = `Сумма всех элементов = ${sum}`;
//     // выведем в #result сумму элементов массива
// });

// // Функция для испускания события:
// // function emit('имя события', 'данные события') {
// // }
// // Функция для подписки на событие:
// // function on('имя события', 'обработчик события') {
// // }
// function emit(name, data) {
//     if (subsribers[name]) {
//         for (let callback of subsribers[name]) {
//             callback(data);
//         }
//     }
// }
// function on(name, callback) {
//     if (!subsribers[name]) {
//         subsribers[name] = [];
//     }
//     subsribers[name].push(callback);
// }

/*------------------------Введение в промисы в JavaScript------------------------*/

function promiseFunctionFirst() {

    let promise = new Promise(function (resolve) {
        let sum = 10;
        console.log(sum)
        resolve()
    })
    promise.then(function () {
        console.log('12')
    })

    // let promise2 = new Promise(function (resolve) {
    //     setTimeout(function () {
    //         let result = [1, 2, 3, 4, 5];
    //         resolve(result);
    //     }, 2000)
    // })

    let promise2 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve([1, 2, 3, 4, 5]);
        }, 2000)
    })

    promise2.then(function (result) {
        console.log(result)
    })


    const list = document.querySelector('#list');

    let promise3 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Nikita fuck eeeeee')
        }, 5000)
    })

    promise3.then(function (result) {
        list.innerHTML = result;
    })
}

// Исключительные ситуации
function exceptionalSituations() {
    let promise4 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let isError = false;
            if (!isError) {
                resolve([1, 2, 3, 4, 5]);   // данные промиса
            } else {
                reject('error in promise'); // ваш текст ошибки
            }
        }, 10000);
    });

    promise4.then(function (result) {
        console.log(result); // выведет результат промиса
    }, function (error) {
        console.log(error);  // выведет текст ошибки
    });

    let promiseRandom = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let rand = (Math.random() * 5).toFixed(0);
            let res;
            if (rand != 0) {
                res = 1 / rand;
                resolve(res)
            } else {
                reject('Случайное число = 0; На ноль нельзя делить')
            }
        }, 1000)
    })

    promiseRandom.then(function (result) {
        console.log(result);
    }, function (error) {
        console.log(error)
    })

    // Использование объекта с ошибкой

    // reject(new Error('error in promise')); // объект с ошибкой
    // throw new Error('error in promise'); // эквивалентно reject


    // Только обработка ошибок
    promiseRandom.catch(
        function (error) {
            console.log(error);
        }
    );

    // Состояния промиса
    // При создании промис находится в ожидании (pending)
    // затем может стать исполненным (fulfilled), вернув полученный результат, или отклоненным (rejected)
}

/*---------------------Цепочки промисов в JavaScript---------------------*/

function chainPromise() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('string');
        }, 1000);
    });

    // promise.then(
    //     function (result) {
    //         console.log(result); // выведет 'string'
    //     }
    // )

    promise.then(
        function (result) {
            return result + '!';
        }
    ).then(
        function (result) {
            console.log(result); // выведет 'string!'
        }
    ).catch(
        function (error) {
            console.log(error)// попадем сюда в случае ошибки
        }
    );
    // Как правило, все ошибки цепочки перехватываются в одном месте: в конце цепочки размещается catch
}

/*---------------------Работа с массивами промисов в JavaScript---------------------*/

function arrayFunctionPromise() {

    let promises = [
        new Promise(resolve => setTimeout(() => resolve(1), 1000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 3000)),
    ]

    Promise.all(promises).then(function (res) {
        console.log(res)
    }).catch(function (err) {
        console.log(err);
    });

    // загрузка первого
    Promise.race(promises).then(function (res) {
        console.log(res)
    })
}
function practiceAllPromise() {
    function rndm() {
        let rand = (Math.random() * 10000).toFixed(0)
        return rand
    }
    let promisesArray = [];
    for (let i = 0; i < 10; i++) {
        let time = Number(rndm());
        promisesArray.push(new Promise(resolve => setTimeout(() => resolve(time), time)))
    }
    Promise.race(promisesArray).then(function (res) {
        console.log(res)
    })

    Promise.all(promisesArray).then(function (res) {
        return res;
    }).then(function (res) {
        let sum = 0;
        for (let i of res) {
            sum = sum + Number(i);
        }
        console.log(sum)
    })
}

/*---------------------Создание сработавших промисов в JavaScript---------------------*/
function createResolvePromise() {
    // Promise.resolve
    // Promise.reject

    function func(num) {
        if (num > 0) {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(num * num);
                }, 1000);
            });
        } else if (num === 0) {
            return Promise.resolve(0);
        } else {
            return Promise.reject('incorrect number'); // вернем отклоненный промис
        }
    }
    // Результатом функции сверху мы возвращаем промис, поэтому можно делать then
    func(1).then(function (res) {
        console.log(res)
    })
}
/*---------------------Промисификация асинхронного кода в JavaScript---------------------*/
function promisification() {
    function loadImage(name) {
        return new Promise(function (resolve, reject) {
            let image = document.createElement('img');
            image.src = `/img/${name}`;

            image.addEventListener('load', function () {
                resolve(image);
            });

            image.addEventListener('error', function () {
                reject(new Error(`image ${name} load error`));
            });
        })
    }

    // loadImage('img.png').then(function (image) {
    //     document.body.appendChild(image);
    // }).catch(function (error) {
    //     console.log(error)
    // });

    let images = ['img.png', 'img2.png', 'img3.png', 'img4.png']

    for (let i of images) {
        loadImage(i).then(function (image) {
            document.body.appendChild(image);
        }).catch(function (error) {
            console.log(error)
        });
    }

    // Выполните его промисификацию.

    function promisDOMLoad() {
        return new Promise(function (resolve, reject) {
            window.addEventListener('DOMContentLoaded', function () {
                resolve('dom загружен')
            });
        })
    }
    promisDOMLoad().then(function (result) {
        console.log(result)
    }).catch(function (error) {
        console.log(error)
    })
}

/*---------------------Промисы в синхронном стиле в JavaScript---------------------*/
function promiseInSync() {
    function getSmth(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num * num), 1000)
        });
    }
    // function func() {
    //     let res = getSmth(2);
    //     console.log(res); // выведет 4
    // }
    // func()

    // СВЕРХУ НИЧЕГО НЕ ПОЛУЧИТСЯ, ТАК КАК КОНСОЛЬ ЛОГ НЕ ЖДЕТ АСИНХРОННУЮ ФУНКЦИЮ. РЕШЕНИЕ:

    async function func(num, num2, num3) {
        let res = await getSmth(num);
        console.log(res)
        let res2 = await getSmth(num2);
        console.log(res2)
        let res3 = await getSmth(num3)
        console.log(res3)
    }
    func(4, 5, 7);

    // А теперь будем вызывать getSmth в цикле:

    async function func2() {
        let arr = [1, 10];
        let sum = 0;
        for (let elem of arr) {
            sum += await getSmth(elem);
        }
        console.log(sum);
    }

    func2();
}
function practiceAsync() {
    function getSmth(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num * num), 1000)
        });
    }
    function getSmth2(num) {
        return new Promise((resolve, reject) => {
            reject('Error not actual :)')
        });
    }
    // Перепишите его через синхронный синтаксис промисов.
    async function func() {
        let res1 = await getSmth(2);
        let res2 = await getSmth(3);
        let res3 = await getSmth(4);
        console.log(res1 + res2 + res3);
    }

    func();

    // Обработка исключительных ситуаций
    async function func2() {
        try {
            let res = await getSmth2(2);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    func2();
}