import React from 'react';
import { Tabs } from '@mantine/core';
import LayerTab from './LayerTab';

export default function TabContainer() {
    return (
        <div className="tab">
            <Tabs className="tab__container" color="white" defaultValue="first">
                <Tabs.List className="tab__list">
                    <Tabs.Tab className="tab__item" value="first">
                        Layers
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel className="tab__panel" value="first" pt="xs">
                    <LayerTab />
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}
