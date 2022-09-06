import { Buffer } from 'buffer';

export default class Methods {

    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
      const url = 'http://localhost:5000/api' + path;
    
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
  
      if (body !== null) {
        options.body = JSON.stringify(body);
      }
      
      if (requiresAuth) {
        const encodedCredentials = Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64'); 
        options.headers['Authorization'] = `Basic ${encodedCredentials}`;
      }

      return fetch(url, options);
    }

    async createShop(shop) {
        const response = await this.api('/create', 'POST', shop);
        if (response.status === 201) {
            return response;
        } else if (response.status === 400) {
          return response
            /* return response.json().then(data => {
                return data.validationErrors;
            }) */
        } else {
            throw new Error();
        }
    }

    async getShop(id) {
      const response = await this.api(`/shop/${id}`, 'GET');
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 404) {
        return null;
      }
      else {
        throw new Error();
      }
    }

    async getShopsByPlace(place) {
      const response = await this.api(`/shops/${place}`, 'GET');
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 404) {
        return null;
      }
      else {
        throw new Error();
      }
    }

    async searchShops(query) {
      const response = await this.api(`/search${query}`, 'GET');
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 404) {
        return null;
      }
      else {
        throw new Error();
      }
    }

    /* async searchAdvanced(shop) {
      const response = await this.api('/advsearch', 'POST', shop);
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 404) {
        return null;
      }
      else {
        throw new Error();
      }
    } */

    async searchAdvanced(query) {
      const response = await this.api(`/advsearch${query}`);
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 404) {
        return null;
      }
      else {
        throw new Error();
      }
    }

    async deleteShop(id) {
      const response = await this.api(`/shop/${id}`, 'DELETE');
      if (response.status === 204) {
        return true
      } else {
        throw new Error();
      }
    }

    async updateShop(id, shop) {
      const response = await this.api(`/shop/${id}`, 'PUT', shop);
      if (response.status === 201) {
        return true
    } else if (response.status === 400) {
      return response
    } else {
        throw new Error();
    }
    }

    /* async searchAdvanced(shop) {
      const response = await this.api(`/advsearch?nome=${shop.nome}&indirizzo=${shop.indirizzo}&cap=${shop.cap}&città=${shop.città}&provincia=${shop.provincia}&regione=${shop.regione}&telefono=${shop.telefono}&telefonoReferente=${shop.telefonoReferente}&email=${shop.email}&note=${shop.note}&compra=${shop.compra}&sfuso=${shop.sfuso}&imbustato=${shop.imbustato}&contattato=${shop.contattato}&riContattato=${shop.riContattato}`, 'GET');
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 404) {
        return null;
      }
      else {
        throw new Error();
      }
    } */
  
    async getUser(username, password) {
      const response = await this.api(`/user?username=${username}&password=${password}`, 'GET');
      if (response.status === 200) {
        return response.json().then(data => data);
      }
      else if (response.status === 401) {
        return null;
      }
      else {
        throw new Error();
      }
    }
    
    async createUser(user) {
      const response = await this.api('/users', 'POST', user);
      if (response.status === 201) {
        return true;
      }
      else if (response.status === 400) {
        return response.json().then(data => {
          return data.validationErrors;
        });
      }
      else {
        throw new Error();
      }
    }

    async createOrder(order) {
      const response = await this.api('/orders-history', 'POST', order)
      if (response.status === 201) {
        return response;
      } else if (response.status === 400) {
        return response;
      } else {
          throw new Error();
      }
    }

    async getOrders(id) {
      const response = await this.api(`/orders-history/${id}`, 'GET')
      if (response.status === 200) {
        return response.json().then(data => data);
      } else if (response.status === 404) {
        return null;
      } else {
        throw new Error();
      }
    }

    async getLastAdded(limit) {
      const response = await this.api(`/last-added/${limit}`, 'GET')
      if (response.status === 200) {
        return response.json().then(data => data);
      } else if (response.status === 404) {
        return null;
      } else {
        throw new Error();
      }
    }
  
  }