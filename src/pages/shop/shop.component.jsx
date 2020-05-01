import React from 'react';
import SHOP_DATA from './shop_data'
import CollectionsPreview from '../../components/collections-preview/collections-preview.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        console.log(SHOP_DATA)

        this.state ={
            shopData:SHOP_DATA,

        } 
    }
    render(){
        const collection = this.state.shopData;  //unpacking our json
        return(
            <div className="shop-page">
                {console.log("Collection",collection)}
            { 
                collection.map(({ id, ...otherprops})=>(
                    <CollectionsPreview key={id} {...otherprops}/> 
                ))
            }
            </div>
        );
    }
}

export default ShopPage;