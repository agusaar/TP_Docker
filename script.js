const urlGateway = 'http://localhost:3100';

document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productDescription = document.getElementById('productDescription').value;
  
    // Validar que los campos no estén vacíos
    if (productName.trim() === '' || productPrice.trim() === '' || productDescription.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Crear un objeto con los datos del producto
    var product = {
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription
    };
  
    // Aquí puedes enviar el objeto 'product' a tu backend para guardar los datos en la base de datos
    await postRequest('/addProduct',product);
    // Reiniciar el formulario
    cargarTabla();
    document.getElementById('productForm').reset();
  });

const cargarTabla = async () => {
  let cuerpoTabla = document.querySelector('#cuerpo-tabla'); 
  if (cuerpoTabla) {
      cuerpoTabla.innerHTML = '';
  } else {
      cuerpoTabla = document.createElement('tbody');
      cuerpoTabla.id = 'cuerpo-tabla';
  }

  const path = '/';

  const productos = await getRequest(path);
  console.log(productos);
  let tableContent = '';

  productos.forEach((prod) => {
      const fila = `
          <tr>
              <td>${prod.name}</td>
              <td>${prod.price}</td>
          </tr>`;

      tableContent += fila;
  })

  cuerpoTabla.innerHTML = tableContent;
};

const getRequest = async (path) => {
    let url = `${urlGateway}${path}`;

    let options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    }

    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
        }

        return await res.json();
    } catch (err) {
        console.log('GET Request fallida');
    }
}

const postRequest = async (path, item) => {
    let url = `${urlGateway}${path}`;
    console.log(url);
    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept':'application/json' 
        },
        body: JSON.stringify(item)
    }

    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
        }
    } catch (err) {
        console.log('POST Request fallida');
    }

}
  
cargarTabla();