const baseURL = 'http://servidorweb:3000/items';

export async function getAllProducts() {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
}

export async function postProduct( product ) {
    try {
      const response = await axios.post(baseURL, product);
      return response.data;
    } catch (error) {
      console.error('Error al crear el item:', error);
    }
}