import React, {Component} from 'react';
import Methods from './ApiMethods';

export const Context = React.createContext({});

export class Provider extends Component {
    
    constructor() {
        super();
        this.apiMethods = new Methods();
        this.state = {
            compra: true
        }
    }

    createShop = async (shop) => {
        return await this.apiMethods.createShop(shop);
    }

    getShop = async (id) => {
        return await this.apiMethods.getShop(id);
    }

    render() {

        const value = {
            compra: this.state.compra,
            actions: {
                createShop: this.createShop,
                getShop: this.getShop
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