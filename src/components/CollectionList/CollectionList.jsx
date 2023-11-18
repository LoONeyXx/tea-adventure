import './CollectionList.sass';
import { collectionsList } from '../../constants/constants';
import CollectionItem from '../App/CollectionItem/CollectionItem';
import { useState } from 'react';
function CollectionList(props) {
    return (
        <ul className="collection-list">
            {collectionsList.map((collection, index) => (
                <CollectionItem key={index} collection={collection} />
            ))}
        </ul>
    );
}
export default CollectionList;
