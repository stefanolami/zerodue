import React, {Component} from 'react';
import Methods from './ApiMethods';
import Cookies from 'js-cookie';

export const Context = React.createContext({});

export class Provider extends Component {
    
    constructor() {
        super();
        this.apiMethods = new Methods();
        this.userCookie = Cookies.get('authenticatedUser');
        this.lastAddedCookie = Cookies.get('lastAdded');
        this.state = {
            authenticatedUser: this.userCookie ? JSON.parse(this.userCookie) : null,
            shopsListByPlace: null,
            lastAdded: this.lastAddedCookie ? JSON.parse(this.lastAddedCookie) : []
        }
    }

    createShop = async (shop) => {
        const newShop = await this.apiMethods.createShop(shop);
        console.log(newShop)
        if (this.state.lastAdded.length > 5) {
            let newArray = this.state.lastAdded;
            newArray.shift();
            newArray.push(shop);
            this.setState(() => {
                return {
                    lastAdded: newArray
                }
            });
            Cookies.set('lastAdded', JSON.stringify(newArray), {expires: 360});
        } else {
            let newArray = this.state.lastAdded;
            newArray.push(shop);
            this.setState(() => {
                return {
                    lastAdded: newArray
                }
            });
            Cookies.set('lastAdded', JSON.stringify(newArray), {expires: 360});
        }
        return newShop;
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
            Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 30});
        } else {
            console.log('Username not found')
        }
        return user;
    }

    setShopsListByPlace = (list) => {
        this.setState(() => {
            return {
                shopsListByPlace: list
            }
        })
    }

    render() {

        const value = {
            shopsListByPlace: this.state.shopsListByPlace,
            authenticatedUser: this.state.authenticatedUser,
            lastAdded: this.state.lastAdded,
            actions: {
                createShop: this.createShop,
                getShop: this.getShop,
                getShopsByPlace: this.getShopsByPlace,
                setShopsListByPlace: this.setShopsListByPlace,
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