import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collections-preview.styles.scss';


const CollectionsPreview = ({ title, items})=>(
    <div className="collections-preview">
        <div className="title">{ title.toUpperCase() }</div>
        <div className="preview">
            {
                items.filter((item,idx)=> idx<4).map(item =>(
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionsPreview; 