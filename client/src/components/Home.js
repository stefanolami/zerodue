import React, {useState, useEffect} from "react";
import italia from '../geography';

import ShopsList from './ShopsList';

import withContext from '../Context';

const ShopsListWithContext = withContext(ShopsList)

const Home = (props) => {
    // eslint-disable-next-line
    const [regioni, setRegioni] = useState(italia);
    const [province, setProvince] = useState([]);

    const showCities = (reg, index) => {
        setProvince(regioni.italia[reg]);
    }

    const showShops = (prov) => {
        props.context.actions.getShopsByPlace(prov)
            .then(res => props.context.actions.setShopsList(res))
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        props.context.actions.setShopsList([]) // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="reg">
                {
                    Object.keys(regioni.italia).map((reg, index) => {
                        return (
                            <button onClick={() => showCities(reg, index)} key={index}>{reg}</button>
                        )
                    })
                }
            </div>
            <div className="prov">
                {
                    province ? (
                        province.map((prov, index) => {
                            return (
                                <button onClick={() => showShops(prov)} key={index}>{prov}</button>
                            )
                        })
                    ) : (
                        <React.Fragment></React.Fragment>
                    )
                }
            </div>
            <ShopsListWithContext />
        </div>
    );
};

export default Home;