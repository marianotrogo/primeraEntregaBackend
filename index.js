class ProductManager {
    products = [];
    #acumulator = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = this.products.find((prod) => prod.code === code);
        if (!product) {
            const newProduct = {
                id: this.#acumulator,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products = [...this.products, newProduct];
            this.#acumulator ++

        } else {
            throw new Error(`Error el producto code ${code} exists`);
        }
    }

    getProducts() {
        return this.products;
    }

    getProductsById(idProduct) {
        const product = this.products.find((prod) => prod.id === idProduct);
        if (!product) {
            throw new Error(`Not Found`);
        } else {
            console.log(`El producto con ${product.id} existe`)
            return product
        }
    }
}

const manager = new ProductManager();
console.log(manager.getProducts());

manager.addProduct(
    "FIfa 23",
    "PS4",
    59,
    "img Fifa23",
    "1234",
    15
)

manager.addProduct(
    "God of War Ragnarok",
    "PS5",
    69,
    "img GOW Ragnarok",
    "4321",
    14
)

manager.addProduct(
    "Halo 5",
    "XBOX SERIES",
    99,
    "img Halo5",
    "1425",
    16
)

console.log(manager.getProducts());

manager.getProductsById(2);
manager.getProducts(20);
