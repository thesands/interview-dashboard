import './TabbedContent.css';

function TabbedContentItem({ item }) {
  return (
    <div className="tabbed-content-item">
      <h3 className="tabbed-content-item-header">{item.header}</h3>
      <div className="tabbed-content-item-content">{item.content}</div>
    </div>
  );
}

function TabbedContent({ tabbedContent }) {
  const [tabbedItems, setTabbedItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState({});

  useEffect(() => {
    setTabbedItems(tabbedContent.items);
    setSelectedTab(tabbedItems[0]);
  }, []);

  return (
    <div className="tabbed-content">
      <h3 className="tabbed-content-header">{tabbedContent.title}</h3>
      <div className="tabbed-content-tabs">
        {tabbedItems.map((item) => {
          return (
            <button
              key={`${item.title}-button`}
              className={
                tabbedItems.title === item.title
                  ? 'tabbed-content-tab-selected'
                  : 'tabbed-content-tab-unselected'
              }
              onClick={() => {
                setTabbedItems(item);
              }}>
              {item.title}
            </button>
          );
        })}
      </div>
      <TabbedContentItem item={selectedTab} />
    </div>
  );
}

export default TabbedContent;
