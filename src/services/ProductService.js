export const ProductService = {
    getProducts,
    getProductById,
    deleteProduct,
    saveProduct,
    getEmptyProduct,
};

const products = [
    {
        id: '101',
        name: 'Tape Double Cassete',
        price: 98,
        details: 'old Double cassete',
    },
    { id: '102', name: 'Radio', price: 23, details: 'old Double cassete' },
    {
        id: '103',
        name: 'Vinyl Record',
        price: 109,
        details: 'old Double cassete',
    },
];

function getProducts(filterBy = null) {
    return new Promise((resolve, reject) => {
        var productsToReturn = products;
        if (filterBy) {
            productsToReturn = filter(filterBy);
        }
        resolve(productsToReturn);
    });
}

function getProductById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((product) => product._id === id);
        product ? resolve(product) : reject(`Product id ${id} not found!`);
    });
}

function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((product) => product._id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }

        resolve(products);
    });
}

function _updateProduct(product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((c) => product._id === c._id);
        if (index !== -1) {
            products[index] = product;
        }
        resolve(product);
    });
}

function _addProduct(product) {
    return new Promise((resolve, reject) => {
        product._id = _makeId();
        products.push(product);
        resolve(product);
    });
}

function saveProduct(product) {
    console.log('product:', product);
    return product._id ? _updateProduct(product) : _addProduct(product);
}

function getEmptyProduct() {
    return {
        name: '',
        price: '',
        details: '',
    };
}

function filter({ term }) {
    console.log('term:', term);
    term = term.toLocaleLowerCase();
    return products.filter((product) => {
        return (
            product.name.toLocaleLowerCase().includes(term) ||
            product.phone.toLocaleLowerCase().includes(term) ||
            product.email.toLocaleLowerCase().includes(term)
        );
    });
}

function _makeId(length = 10) {
    var txt = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
