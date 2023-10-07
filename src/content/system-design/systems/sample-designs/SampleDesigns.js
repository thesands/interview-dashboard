import './SampleDesigns.css';
import globysSystemDesign from './globys-system-design.jpg';
import globysSystemComponents from './globys-system-components.jpg';

import React, { useState, useEffect } from 'react';

function SampleDesignItem({ item }) {
  return (
    <div className="section-item">
      <h3 className="section-header">{item.header}</h3>
      <div className="section-content">
        {item.source?.map((source, index) => {
          return (
            <img
              key={`${item.header}-${index}}`}
              alt={item.header}
              className="section-img"
              src={source}
            />
          );
        })}
      </div>
    </div>
  );
}

function SampleDesigns() {
  const [sampleDesigns, setSampleDesigns] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    const SAMPLE_DESIGNS = [
      {
        header: 'Generic',
        source: [
          'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/jrUBAF7.png',
        ],
      },
      {
        header: 'Globys',
        source: [globysSystemDesign, globysSystemComponents],
      },
      {
        header: 'URL Shortener',
        source: [
          'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/4edXG0T.png',
        ],
      },
      {
        header: 'News Feed',
        source: [
          'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/jrUBAF7.png',
        ],
      },
      {
        header: 'Web Crawler',
        source: [
          'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/bWxPtQA.png',
        ],
      },
      {
        header: 'Social Network',
        source: [
          'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/cdCv5g7.png',
        ],
      },
      {
        header: 'Sales Ranking',
        source: [
          'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/MzExP06.png',
        ],
      },
      {
        header: 'Scalable System',
        source: [
          'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/jj3A5N8.png',
        ],
      },
    ];

    setSampleDesigns(SAMPLE_DESIGNS);
    setSelectedItem(SAMPLE_DESIGNS[0]);
  }, []);

  return (
    <div className="sample-designs section">
      <h3 className="section-header">Sample Designs</h3>
      <div className="section-buttons">
        {sampleDesigns.map((item) => {
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
      <SampleDesignItem item={selectedItem} />
    </div>
  );
}

export default SampleDesigns;
