import axios from 'axios';
import { revalidatePath } from 'next/cache';

const fetchGetAllTodos = async () => {
  try {
    const response = await axios.get<TodoModelResponse>(
      'http://localhost:5007/products'
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const fetchAddNewTodo = async (
  data: Partial<TodoModelObject>
): Promise<void> => {
  try {
    await axios.post('http://localhost:5007/products', data);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const fetchDeleteTodo = async (data: Omit<TodoModelObject, 'note'>) => {
  try {
    await axios.delete(`http://localhost:5007/products/${data.id}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { fetchGetAllTodos, fetchAddNewTodo, fetchDeleteTodo };
