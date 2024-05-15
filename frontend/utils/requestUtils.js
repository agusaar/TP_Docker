const baseURL = 'http://localhost:3000/items';

// Función para obtener todos los items
/*export async function getAllProducts() {
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
}*/

export const getAllProducts = async (path) => {
  //let url = `${urlGateway}${path}`;

  let options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
      }
  }

  try {
      const res = await fetch(baseURL, options);
      if (!res.ok) {
          throw new Error(`Error! status: ${res.status}`);
      }

      return await res.json();
  } catch (err) {
      console.log('GET Request fallida');
  }
}

export const postProduct = async (path, item) => {
  //let url = `${urlGateway}${path}`;
  let options = {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
          'Accept':'application/json' 
      },
      body: JSON.stringify(item)
  }

  try {
      const res = await fetch(baseURL, options);
      if (!res.ok) {
          throw new Error(`Error! status: ${res.status}`);
      }
  } catch (err) {
      console.log('POST Request fallida');
  }

}