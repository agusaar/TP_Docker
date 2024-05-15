const baseURL = 'http://localhost:3000/items';

// Función para obtener todos los items
export async function getAllProducts() {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw error;
    }
}

// Función para crear un nuevo producto
export async function postProduct( product ) {
    try {
      const response = await axios.post(baseURL, product);
      return response.data;
    } catch (error) {
      console.error('Error al crear el item:', error);
      throw error;
    }
}