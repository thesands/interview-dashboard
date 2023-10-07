import './Glossary.css';

import React, { useState, useEffect } from 'react';
import LoadBalancer from './items/LoadBalancer';
import Asynchronism from './items/Asynchronism';
import Caching from './items/Caching';
import Databases from './items/Databases';
import ObjectStore from './items/ObjectStore';
import ContentDeliveryNetwork from './items/ContentDeliveryNetwork';
import DomainNameSystem from './items/DomainNameSystem';
import ReverseProxy from './items/ReverseProxy';
import Communication from './items/Communication';
import ApplicationLayer from './items/ApplicationLayer';

function GlossaryItem({ item }) {
  return (
    <div className="section-item">
      <h3 className="section-header">{item.header}</h3>
      <div className="section-content">{item.content}</div>
    </div>
  );
}

function Glossary() {
  const [glossaryItems, setGlossaryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const GLOSSARY_ITEMS = [
      {
        header: 'Domain Name System (DNS)',
        content: <DomainNameSystem />,
      },
      {
        header: 'Content Delivery Network (CDN)',
        content: <ContentDeliveryNetwork />,
      },
      {
        header: 'Load Balancer',
        content: <LoadBalancer />,
      },
      {
        header: 'Reverse Proxy',
        content: <ReverseProxy />,
      },
      {
        header: 'Application Layer',
        content: <ApplicationLayer />,
      },
      {
        header: 'Databases',
        content: <Databases />,
      },
      {
        header: 'Caching',
        content: <Caching />,
      },
      {
        header: 'Asynchronism',
        content: <Asynchronism />,
      },
      {
        header: 'Object Store',
        content: <ObjectStore />,
      },
      {
        header: 'Communication',
        content: <Communication />,
      },
    ];

    setGlossaryItems(GLOSSARY_ITEMS);
    setSelectedItem(GLOSSARY_ITEMS[0]);
  }, []);

  return (
    <div className="glossary section">
      <h3 className="section-header">Glossary</h3>
      <div className="section-buttons">
        {glossaryItems.map((item) => {
          return (
            <button
              key={`${item.header}-button`}
              className={
                selectedItem.header === item.header
                  ? 'section-button button-selected'
                  : 'section-button'
              }
              onClick={() => {
                setSelectedItem(item);
              }}>
              {item.header}
            </button>
          );
        })}
      </div>
      <GlossaryItem item={selectedItem} />
    </div>
  );
}

export default Glossary;
