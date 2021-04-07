import React from 'react';
import './ProductPage.scss';
import { Link } from 'react-router-dom';
import { ProductFilter } from '../../cmps/ProductFilter';
import { ShopingList } from '../../cmps/ShopingList';
import { ProductService } from '../../services/ProductService';

export class ProductPage extends React.Component {
    state = {
        Products: null,
        filterBy: null,
        cartItems: [],
        user: {
            fullName: 'Tsvikush',
            balance: 90,
            address: 'Jerus',
        },
    };
    componentDidMount() {
        this.loadProducts();
    }
    async loadProducts() {
        const Products = await ProductService.getProducts(this.state.filterBy);
        this.setState({ Products });
    }
    addToCart(item) {
        this.setState(
            (prevState) => ({
                cartItems: [...prevState.cartItems, item],
                user: {
                    ...prevState.user,
                    balance: prevState.user.balance - item.price,
                },
            }),
            () => {
                console.log(this.state.cartItems);
            }
        );
    }
    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadProducts);
    };
    componentDidUpdate() {}
    componentWillUnmount() {}
    render() {
        const { Products } = this.state;
        return (
            <div>
                <ProductFilter onChangeFilter={this.onChangeFilter} />
                <Link to='/Product/edit'>Add Product</Link>
                <ShopingList Products={Products} addToCart={this.addToCart} />
            </div>
        );
    }
}
