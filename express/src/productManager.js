import fs from "fs";
// import fs from "fs";

class productManager {
    #path="./src/productos.json";
    #acumulator = 0;
    
    constructor(path) {
        this.#path = path;
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        const products = await this.getProducts();

        const productExistentes = products.find((p) => p.code === code);
        if (productExistentes) {
            throw new Error(`Producto con codigo${code} existe`);
        }

        const newProduct = {
            id: this.#acumulator,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        const updatedProduct = [...products, newProduct];

        await fs.promises.writeFile(this.#path, JSON.stringify(updatedProduct));

        this.#acumulator++;

        return newProduct;
    }
    async getProducts() {
        try {
            const productJSON = await fs.promises.readFile(this.#path);
            return JSON.parse(productJSON);
        } catch (err) {
            return [];
        }
    }

    async getProductsById(id) {
        const products = await this.getProducts();
        const product = products.find((p) => p.id === id);

        if (!product) {
            throw new Error(`Not Found ${id}`);
        }
        return product;
    }

    async updateProduct(id, data) {
        const products = await this.getProducts();
        const updatedProducts = products.map((p) => {
            if (p.id === id) {
                return {
                    ...p,
                    ...data,
                    id,
                };
            }
            return p;
        });

        await fs.promises.writeFile(this.#path, JSON.stringify(updatedProducts));
    }
    async deleteProduct(id) {
        const products = await this.getProducts();
        const updatedProducts = products.filter((p) => {
            return p.id !== id;
        });
        await fs.promises.writeFile(this.#path, JSON.stringify(updatedProducts));
    }
}
// async function main() {
// }
// main()


export default productManager;

// import  fs from "fs";


// class productManager {
//   #path=""
//   constructor(path) {
//     this.path = path;
//   }
//   #accumulator = 0;

//   async getProducts() {
//     //Obtener productos
//     try {
//       const products = await fs.promises.readFile(this.#path,'utf-8');
//       return JSON.parse(products);
//     } catch (e) {
//       return 'error!';
//     }
//   }
//   async addProducts(title, description, price, thumbnail, code, stock) {
//     //Agregar producto sin repetir el code
//     const newProduct = {
//       id: this.#accumulator,
//       title,
//       description,
//       price,
//       thumbnail,
//       code,
//       stock,
//     };
//     const prod = await this.getProducts();
//     let cd = prod.find((p) => p.code === code);
//     if (!cd) {
//       fs.promises.writeFile(path, JSON.stringify([...prod, newProduct]));
//       this.#accumulator += 1;
//     } else {
//       throw new Error(`El código ${code} ya esta registrado.`);
//     }
//   }
//  async  getProductsById(id) {
//     // Producto por ID
//     const prod =  await this.getProducts()
//     let element = prod.find((p) => p.id === id);
//     if (element) {
//       //fs.promises.appendFile(`Producto con ID ${id}: ${JSON.stringify(element)}`)
//       return element;
//     } else {
//       return `<h2>Product with ID: ${id} Not Found</h2>`;
//     }
//   }

//   async updateProduct(id, title, description, price, thumbnail, code, stock) {
//     // Actualiza producto
//     let actual = [];
//     const prod = await this.getProducts();
//     actual = prod.find((p) => p.id === id);

//     if (title === undefined) {
//       title = prod[id - 1].title;
//     } else {
//       actual.title = title;
//     }
//     if (description === undefined) {
//       title = prod[id - 1].description;
//     } else {
//       actual.description = description;
//     }
//     if (price === undefined || price !== Number) {
//       price = prod[id - 1].price;
//     } else {
//       actual.price = price;
//     }
//     if (thumbnail === undefined) {
//       thumbnail = prod[id - 1].thumbnail;
//     } else {
//       actual.thumbnail = thumbnail;
//     }
//     if (code === undefined) {
//       code = prod[id - 1].code;
//     } else {
//       actual.code = code;
//     }
//     if (stock === undefined || stock !== Number) {
//       stock = prod[id - 1].stock;
//     } else {
//       actual.stock = stock;
//     }
//     fs.promises.appendFile(
//       this.path,
//       `Listado de productos actualizados: ${JSON.stringify(prod)}`
//     );
//   }

//   async deleteProduct(id) {
//     // Elimina producto por ID
//     const prod = await this.getProducts();
//     let checkId = prod.find((p) => p.id === id);
//     if (checkId) {
//       let rest = prod.filter((p) => p.id !== id);
//       fs.promises.appendFile(
//         "./productos.json",
//         `Productos actuales:  ${JSON.stringify(rest)}`
//       );
//     } else {
//       throw new Error(` No se encuentra ningún objeto con id: ${id}`);
//     }
//   }
// }


// export default productManager;
