import { getAllProducts, postProduct } from "./utils/requestUtils.js";

document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productDescription = document.getElementById('productDescription').value;
  
    if (productName.trim() === '' || productPrice.trim() === '' || productDescription.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    
    var product = {
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription
    };
  
    await postProduct(product);

    
    cargarTabla();
    document.getElementById('productForm').reset();

});

const cargarTabla = async () => {
  let productos = await getAllProducts();

  let cuerpoTabla = document.querySelector('#cuerpo-tabla'); 
  if (cuerpoTabla) {
      cuerpoTabla.innerHTML = '';
  } else {
      cuerpoTabla = document.createElement('tbody');
      cuerpoTabla.id = 'cuerpo-tabla';
  }

  let tableContent = '';

  productos = productos.products;

  if( productos === undefined || productos.length === 0 || !productos ) {
      tableContent = `
          <tr>
              <td colspan="3">No hay productos cargados</td>
          </tr>`;
  }else {
    productos.forEach( (prod) => {
      let price = `$ ${prod.price}`;
      const fila = `
          <tr>
              <td>${prod.name}</td>
              <td>${price}</td>
              <td>${prod.description}</td>
          </tr>`;

      tableContent += fila;
    })
  }
  
  cuerpoTabla.innerHTML = tableContent;
};
  
cargarTabla();