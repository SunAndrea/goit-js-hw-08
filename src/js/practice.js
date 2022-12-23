// Перепешіть функцію fetchUserFromServer з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс

// Зараз функція fetchUserFromServer() знає занадто багато про той код, який буде використовувати результат її роботи.
//  Вона очікує колбеки і відповідає за їх виклик за певних умов.Тобто ми передаємо щось всередину функції(колбеки) і
// сподіваємося, що воно відпрацює правильно - це недобре.

// Краще, якщо функція не зважає на той код, який буде використовувати її результат. Вона просто виконує якусь операцію
// і повертає результат своєї роботи у зовнішній код.Для того щоб повернути результат асинхронної операції, з функції необхідно повернути проміс.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer('Mango', onFetchSuccess, onFetchError);

function fetchUserFromServer(username) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);
    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = false;

      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
}
console.log(fetchUserFromServer(`Andrii`));
fetchUserFromServer(`Andrii`)
  .then(res => {
    console.log(res);
    console.log(fetchUserFromServer(`Andrii`));
  })
  .catch(rej => {
    console.log(rej);
  });
//-------------------------------------------------------------------------//
// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2');
//   }, 0);
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1');
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2');
//   });
// }, 0);

// console.log('end');
//-------------------------------------------------------------------------//
// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2');
//   }, 0);
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1');
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2');
//   });
// }, 0);

// console.log('end');
// setTimeout(() => {
//   console.log('timer3');
// }, 0);

// setTimeout(() => {
//   console.log('timer4');
// }, 0);
