import React, {Component} from 'react';
import Methods from './ApiMethods';
import Cookies from 'js-cookie';

export const Context = React.createContext({});

export class Provider extends Component {
    
    constructor() {
        super();
        this.apiMethods = new Methods();
        this.cookie = Cookies.get('authenticatedUser');
        this.state = {
            authenticatedUser: this.cookie ? JSON.parse(this.cookie) : null,
            shopsList: [],
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

    searchAdvanced = async (query) => {
        return await this.apiMethods.searchAdvanced(query);
    }

    deleteShop = async (id) => {
        return await this.apiMethods.deleteShop(id);
    }

    updateShop = async (id, shop) => {
        return await this.apiMethods.updateShop(id, shop);
    }

    signIn = async (username, password) => {
        const user = await this.apiMethods.getUser(username, password);
        if (user !== null) {
            user.password = password;
            this.setState(() => {
                return {
                    authenticatedUser: user,
                };
            });
            Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
        } else {
            console.log('Username not found')
        }
        return user;
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
            authenticatedUser: this.state.authenticatedUser,
            actions: {
                createShop: this.createShop,
                getShop: this.getShop,
                getShopsByPlace: this.getShopsByPlace,
                setShopsList: this.setShopsList,
                searchShops: this.searchShops,
                searchAdvanced: this.searchAdvanced,
                deleteShop: this.deleteShop,
                updateShop: this.updateShop,
                signIn: this.signIn
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