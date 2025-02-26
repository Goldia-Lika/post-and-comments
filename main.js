// const apiPost = "https://jsonplaceholder.typicode.com/posts";
// const apiComment = 'https://jsonplaceholder.typicode.com/comments';

// // Функция для отображения постов
// function displayPosts(posts) {
//     const postsContainer = document.getElementById('posts');
//     const limitedPosts = posts.slice(0, 5); // Берем первые 5 постов

//     limitedPosts.forEach(post => {
//         const postBlock = document.createElement('div');
//         postBlock.style.marginBottom = '100px'; // Отступ между блоками
//         postBlock.style.border = '1px solid #ccc'; // Граница для визуального разделения
//         postBlock.style.borderRadius = '50px'; // Закругленные углы

//         const postElement = document.createElement('section'); // Создаем элемент для поста
//         postElement.style.marginBottom = '20px';

//         postElement.innerHTML = `
//             <h2 class="apiPost">${post.title}</h2>
//             <p>${post.body}</p>
//             <hr>
//         `;
//         postsContainer.appendChild(postElement); // Добавляем пост в контейнер
//     });
// }

// // Функция для отображения комментариев
// function displayComments(comments) {
//     const commentsContainer = document.getElementById('comments');
//     const limitedComments = comments.slice(0, 10); // Берем первые 10 комментариев

//     limitedComments.forEach(comment => {
//         const commentElement = document.createElement('div'); // Создаем элемент для комментария
//         commentElement.style.marginBottom = '20px';

//         commentElement.innerHTML = `
//             <h2 class="commentStil">${comment.name}</h2>
//             <p>${comment.email}</p>
//             <p>${comment.body}</p>
//             <hr>
//         `;
//         commentsContainer.appendChild(commentElement); // Добавляем комментарий в контейнер
//     });
// }

// // Функция для отображения постов и комментариев вместе
// async function displayPostsWithComments(posts, comments) {
//     const postsContainer = document.getElementById('posts');
//     const limitedPosts = posts.slice(0, 5); // Берем первые 5 постов
//     let commentIndex = 0; // Индекс для отслеживания текущего комментария

//     limitedPosts.forEach(post => {
//         // Создаем элемент для поста
//         const postElement = document.createElement('section');
//         postElement.style.marginBottom = '20px';

//         postElement.innerHTML = `
//         <hr>
//             <h2 class="apiPost">${post.title}</h2>
//             <p>${post.body}</p>
//             <hr>
//         `;
//         postsContainer.appendChild(postElement); // Добавляем пост в контейнер

//         // Добавляем два комментария после каждого поста
//         for (let i = 0; i < 2; i++) {
//             if (commentIndex < comments.length) {
//                 const comment = comments[commentIndex];
//                 const commentElement = document.createElement('div');
//                 commentElement.style.marginBottom = '20px';

//                 commentElement.innerHTML = `
//                     <h2 class="commentStil">${comment.name}</h2>
//                     <p>${comment.email}</p>
//                     <p>${comment.body}</p>
                   
//                 `;
//                 postsContainer.appendChild(commentElement); // Добавляем комментарий в контейнер
//                 commentIndex++; // Переходим к следующему комментарию
//             }
//         }
//         postsContainer.appendChild(postBlock);
//     });
// }

// // Функция для получения постов и комментариев
// async function getData() {
//     try {
//         // Получаем посты
//         const postsResponse = await fetch(apiPost);
//         const posts = await postsResponse.json();

//         // Получаем комментарии
//         const commentsResponse = await fetch(apiComment);
//         const comments = await commentsResponse.json();

//         // Отображаем посты и комментарии вместе
//         displayPostsWithComments(posts, comments);
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//     }
// }

// // Запускаем функцию для получения и отображения данных
// getData();



// const apiPost = "https://jsonplaceholder.typicode.com/posts";
// const apiComment = 'https://jsonplaceholder.typicode.com/comments';

// // Функция для отображения постов и комментариев
// function displayPostsAndComments(posts, comments) {
//     const postsContainer = document.getElementById('posts');
//     const limitedPosts = posts.slice(0, 5); // Берем первые 5 постов
//     let commentIndex = 0; // Индекс для отслеживания текущего комментария

//     limitedPosts.forEach(post => {
//         // Создаем общий блок для поста и комментариев
//         const postBlock = document.createElement('div');
//         postBlock.style.marginBottom = '40px'; 
//         postBlock.style.padding = '20px'; 
//         postBlock.style.border = '1px solid #ccc'; 
//         postBlock.style.borderRadius = '20px'; 
//         postBlock.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; 
//         postBlock.style.backgroundColor = '#D3D3D3'; 
        
//         // Добавляем текст поста
//         // Создаем элемент для поста
//         const postElement = document.createElement('section');
//         postElement.innerHTML = `
//             <h1 class="apiPost">${post.title}</h1>
//             <p class="apiPostP">${post.body}</p>
//             <hr class="hr">
//         `;
//         postBlock.appendChild(postElement); // Добавляем пост в блок

//         // Добавляем два комментария после поста
//         for (let i = 0; i < 2; i++) {
//             if (commentIndex < comments.length) {
//                 const comment = comments[commentIndex];
//                 const commentElement = document.createElement('div');
//                 commentElement.style.marginTop = '10px'; // Отступ между комментариями

//                 commentElement.innerHTML = `
//                     <h3 class="commentStil">${comment.name}</h3>
//                     <p>${comment.email}</p>
//                     <p>${comment.body}</p>
//                 `;
//                 postBlock.appendChild(commentElement); // Добавляем комментарий в блок
//                 commentIndex++; // Переходим к следующему комментарию
//             }
//         }

//         // Добавляем блок с постом и комментариями в контейнер
//         postsContainer.appendChild(postBlock);
//     });
// }

// // Функция для получения постов и комментариев
// async function getData() {
//     try {
//         // Получаем посты
//         const postsResponse = await fetch(apiPost);
//         const posts = await postsResponse.json();

//         // Получаем комментарии
//         const commentsResponse = await fetch(apiComment);
//         const comments = await commentsResponse.json();

//         // Отображаем посты и комментарии
//         displayPostsAndComments(posts, comments);
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//     }
// }

// // Запускаем функцию для получения и отображения данных
// getData();
const apiPost = "https://jsonplaceholder.typicode.com/posts"; 
const apiComment = 'https://jsonplaceholder.typicode.com/comments'; 

// Функция для отображения постов и комментариев
function displayPostsAndComments(posts, comments) {
    // Находим контейнер на странице, куда будем добавлять посты и комментарии
    const postsContainer = document.getElementById('posts');

    // Ограничиваем количество постов до 5
    const limitedPosts = posts.slice(0, 5);

    // Ограничиваем количество комментариев до 10
    const limitedComments = comments.slice(0, 10);

    // Переменная для отслеживания текущего индекса комментария
    let commentIndex = 0;

    // Проходим по каждому посту из массива limitedPosts
    limitedPosts.forEach(post => {
        // Создаем общий блок для поста и его комментариев
        const postBlock = document.createElement('div');

        // Добавляем стили для блока
        postBlock.style.marginBottom = '40px'; 
        postBlock.style.padding = '20px'; 
        postBlock.style.border = '1px solid #ccc'; 
        postBlock.style.borderRadius = '20px'; 
        postBlock.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; 
        postBlock.style.backgroundColor = '#D3D3D3'; 

        // Создаем элемент для поста
        const postElement = document.createElement('section');

        // Заполняем элемент данными из поста
        postElement.innerHTML = `
            <h1 class="apiPost">${post.title}</h1> <!-- Заголовок поста -->
            <p class="apiPostP">${post.body}</p> <!-- Текст поста -->
            <hr class="hr"> <!-- Горизонтальная линия для разделения -->
        `;

        // Добавляем пост в общий блок
        postBlock.appendChild(postElement);

        // Добавляем два комментария после поста
        for (let i = 0; i < 2; i++) {
            // Проверяем, чтобы не выйти за пределы массива limitedComments
            if (commentIndex < limitedComments.length) {
                // Берем текущий комментарий
                const comment = limitedComments[commentIndex];

                // Создаем элемент для комментария
                const commentElement = document.createElement('div');

                // Добавляем отступ между комментариями
                commentElement.style.marginTop = '20px';

                // Заполняем элемент данными из комментария
                commentElement.innerHTML = `
                    <h3 class="commentStil">${comment.name}</h3> <!-- Имя автора комментария -->
                    <p>${comment.email}</p> <!-- Email автора -->
                    <p>${comment.body}</p> <!-- Текст комментария -->
                `;

                // Добавляем комментарий в общий блок
                postBlock.appendChild(commentElement);

                // Переходим к следующему комментарию
                commentIndex++;
            }
        }

        // Добавляем общий блок с постом и комментариями в контейнер на странице
        postsContainer.appendChild(postBlock);
    });
}

// Функция для получения данных с API
async function getData() {
    try {
        // Получаем посты с API
        const postsResponse = await fetch(apiPost); // Отправляем запрос к API
        const posts = await postsResponse.json(); // Преобразуем ответ в JSON

        // Получаем комментарии с API
        const commentsResponse = await fetch(apiComment); // Отправляем запрос к API
        const comments = await commentsResponse.json(); // Преобразуем ответ в JSON

        // Отображаем посты и комментарии на странице
        displayPostsAndComments(posts, comments);
    } catch (error) {
        // Если произошла ошибка, выводим её в консоль
        console.error('Ошибка при получении данных:', error);
    }
}

// Запускаем функцию для получения и отображения данных
getData();