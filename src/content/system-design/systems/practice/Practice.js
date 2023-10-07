import './Practice.css';
import InterviewProcess from './items/InterviewProcess';
import TradeOffs from './items/TradeOffs';
import DesignApi from './items/DesignApi';
import Resources from './items/Resources';

import React, { useState, useEffect } from 'react';

function PracticeItem({ item }) {
  return (
    <div className="section-item">
      <h3 className="section-header">{item.header}</h3>
      <div className="section-content">{item.content}</div>
    </div>
  );
}

function Practice() {
  const [practiceItems, setPracticeItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const PRACTICE_ITEMS = [
      {
        header: 'Interview Process',
        content: <InterviewProcess />,
      },
      {
        header: 'Trade-offs',
        content: <TradeOffs />,
      },
      {
        header: 'Design API',
        content: <DesignApi />,
      },
      {
        header: 'Resources',
        content: <Resources />,
      },
    ];

    setPracticeItems(PRACTICE_ITEMS);
    setSelectedItem(PRACTICE_ITEMS[0]);
  }, []);

  return (
    <div className="practice section">
      <h3 className="section-header">Practice</h3>
      <div className="section-buttons">
        {practiceItems.map((item) => {
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
      <PracticeItem item={selectedItem} />
    </div>
  );
}

export default Practice;
