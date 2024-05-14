import PouchDB from 'pouchdb';

const db = new PouchDB('http://localhost:8080/items', { 
  auto_compaction: true, 
  auth: { username: 'admin', password: 'admin' } 
});

const ProductsService = {
  
  async getAllProducts() {
    try {
      const result = await db.allDocs({ include_docs: true, attachments: true });
      const products = result.rows.map(row => row.doc);
      return {products};
    } catch (error) {
      throw new Error('Error fetching all items');
    }
  },
  
  async createProduct(product) {
    try {
      const result = await db.post(product);
      return {result};
    } catch (error) {
      throw new Error('Error creating item');
    }
  }

};

export default ProductsService;