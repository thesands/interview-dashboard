import './InterviewDashboard.css';
import WebDevelopment from './content/web-development/WebDevelopment';
import PracticeProblems from './content/practice-problems/PracticeProblems';
import MiniApps from './content/mini-apps/MiniApps';
import FetchApi from './content/fetch-api/FetchApi';
import SystemDesign from './content/system-design/SystemDesign';

import React, { useState, useEffect } from 'react';

function InterviewDashboard() {
  const [dashboardItems, setDashboardItems] = useState([]);

  useEffect(() => {
    const DASHBOARD_ITEMS = [
      {
        header: 'Practice Problems',
        content: <PracticeProblems />,
        collapsed: true,
      },
      {
        header: 'Web Development',
        content: <WebDevelopment />,
        collapsed: true,
      },
      { header: 'Mini Apps', content: <MiniApps />, collapsed: true },
      { header: 'Fetch API', content: <FetchApi />, collapsed: true },
      { header: 'System Design', content: <SystemDesign />, collapsed: true },
    ];

    setDashboardItems(DASHBOARD_ITEMS);
  }, []);

  function collapseItem(updatedItem) {
    updatedItem.collapsed = !updatedItem.collapsed;

    const newItems = dashboardItems.map((item) => {
      return item.header === updatedItem.header ? updatedItem : item;
    });

    setDashboardItems(newItems);
  }

  return (
    <div className="interview-dashboard">
      {dashboardItems.map((item) => {
        return (
          <div key={item.header} className="dashboard-item">
            <h2 className="dashboard-header">
              <span>{item.header}</span>
              <button
                className="header-button"
                onClick={() => {
                  collapseItem(item);
                }}>
                {item.collapsed ? 'Expand' : 'Collapse'}
              </button>
            </h2>
            {!item.collapsed ? (
              <div className="dashboard-content">{item.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default InterviewDashboard;
