import React, {Component} from 'react';
import Methods from './ApiMethods';

export const Context = React.createContext({});

export class Provider extends Component {
    
    constructor() {
        super();
        this.apiMethods = new Methods();
        this.state = {
            shopsList: []
        }
    }

    createShop = async (shop) => {
        return await this.apiMethods.createShop(shop);
    }

    getShop = async (id) => {
        return await this.apiMethods.getShop(id);
    }

    getShopsByPlace = async (place) => {
        return await this.apiMethods.getShopsByPlace(place);
    }

    searchShops = async (query) => {
        return await this.apiMethods.searchShops(query);
    }

    searchAdvanced = async (shop) => {
        return await this.apiMethods.searchAdvanced(shop);
    }

    setShopsList = (list) => {
        this.setState(() => {
            return {
                shopsList: list
            }
        })
    }

    render() {

        const value = {
            shopsList: this.state.shopsList,
            actions: {
                createShop: this.createShop,
                getShop: this.getShop,
                getShopsByPlace: this.getShopsByPlace,
                setShopsList: this.setShopsList,
                searchShops: this.searchShops,
                searchAdvanced: this.searchAdvanced
            }
        }

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}