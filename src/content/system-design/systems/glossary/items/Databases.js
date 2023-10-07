import './Databases.css';

function RelationalDatabase() {
  return (
    <div className="databases-relational">
      <h3 className="section-header">
        Relational Database Management System (RDBMS)
      </h3>
      <div>
        A relational database like SQL is a collection of data items organized
        in tables.
      </div>
      <div>
        ACID is a set of properties of relational database transactions.
      </div>
      <ul>
        <li>
          <strong>Atomicity</strong> - Each transaction is all or nothing
        </li>
        <li>
          <strong>Consistency</strong> - Any transaction will bring the database
          from one valid state to another
        </li>
        <li>
          <strong>Isolation</strong> - Executing transactions concurrently has
          the same results as if the transactions were executed serially
        </li>
        <li>
          <strong>Durability</strong> - Once a transaction has been committed,
          it will remain so
        </li>
      </ul>
    </div>
  );
}

function NoSql() {
  return (
    <div className="databases-nosql">
      <h3 className="section-header">NoSQL</h3>
      <div>
        NoSQL is a collection of data items represented in a key-value store,
        document store, wide column store, or a graph database. Data is
        denormalized, and joins are generally done in the application code. Most
        NoSQL stores lack true ACID transactions and favor eventual consistency.
      </div>
      <div>
        BASE is often used to describe the properties of NoSQL databases. In
        comparison with the CAP Theorem, BASE chooses availability over
        consistency.
      </div>
      <ul>
        <li>Basically available - the system guarantees availability.</li>
        <li>
          Soft state - the state of the system may change over time, even
          without input.
        </li>
        <li>
          Eventual consistency - the system will become consistent over a period
          of time, given that the system doesn't receive input during that
          period.
        </li>
      </ul>
    </div>
  );
}

function SqlVsNoSql() {
  return (
    <div className="sql-vs-nosql">
      <div className="reasons-list">
        <h3 className="section-header">Reasons for SQL</h3>
        <ul>
          <li>Structured data</li>
          <li>Strict schema</li>
          <li>Relational data</li>
          <li>Need for complex joins</li>
          <li>Transactions</li>
          <li>Clear patterns for scaling</li>
          <li>More established: developers, community, code, tools, etc</li>
          <li>Lookups by index are very fast</li>
        </ul>
      </div>
      <div className="reasons-list">
        <h3 className="section-header">Reasons for NoSQL</h3>
        <ul>
          <li>Semi-structured data</li>
          <li>Dynamic or flexible schema</li>
          <li>Non-relational data</li>
          <li>No need for complex joins</li>
          <li>Store many TB (or PB) of data</li>
          <li>Very data intensive workload</li>
          <li>Very high throughput for IOPS</li>
        </ul>
      </div>
      <div className="reasons-list nosql-sample-data">
        <h3 className="section-header">Sample data well-suited for NoSQL</h3>
        <ul>
          <li>Rapid ingest of clickstream and log data</li>
          <li>Leaderboard or scoring data</li>
          <li>Temporary data, such as a shopping cart</li>
          <li>Frequently accessed ('hot') tables</li>
          <li>Metadata/lookup tables</li>
        </ul>
      </div>
    </div>
  );
}

function Databases() {
  return (
    <div className="section-sub-content">
      <div className="databases-types">
        <RelationalDatabase />
        <NoSql />
      </div>
      <SqlVsNoSql />
    </div>
  );
}

export default Databases;
