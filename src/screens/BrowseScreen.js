import React from 'react';
import BrowseNav from 'components/design/BrowseNav';
import Map from 'components/Map';
export default function BrowseScreen() {
    return (
        <div className="browse">
            <BrowseNav />
            <Map />
        </div>
    );
}
