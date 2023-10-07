import MessageQueues from './MessageQueues';

function Asynchronism() {
  return (
    <div className="section-sub-content">
      <img
        alt="asychronism"
        className="section-img"
        src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/54GYsSx.png"
      />
      <div>
        Asynchronous workflows help reduce request times for expensive
        operations that would otherwise be performed in-line. They can also help
        by doing time-consuming work in advance, such as periodic aggregation of
        data.
      </div>
      <MessageQueues />
      <h3 className="section-header">Task Queues</h3>
      <div>
        Tasks queues receive tasks and their related data, runs them, then
        delivers their results. They can support scheduling and can be used to
        run computationally-intensive jobs in the background.
      </div>
      <h3 className="section-header">Disadvantages of Asychronism</h3>
      <ul>
        <li>
          Use cases such as inexpensive calculations and realtime workflows
          might be better suited for synchronous operations, as introducing
          queues can add delays and complexity.
        </li>
      </ul>
    </div>
  );
}

export default Asynchronism;
