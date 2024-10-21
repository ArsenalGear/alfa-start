import axios from 'axios';

export const jsonCreate = async (data: any) => {
  console.log('createPost', 777, data);
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
    throw error;
  }
};

// export const jsonUpdate = async (data: any) => {
//   try {
//     const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', data);
//     return response.data;
//   } catch (error) {
//     console.error('Ошибка при отправке данных:', error);
//     throw error;
//   }
// };
