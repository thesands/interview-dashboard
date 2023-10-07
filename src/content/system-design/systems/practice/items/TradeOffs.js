function TradeOffs() {
  return (
    <div className="section-sub-content">
      <h3 className="section-header">Performance vs scalability</h3>
      <div>
        A service is scalable if it results in increased performance in a manner
        proportional to resources added. Generally, increasing performance means
        serving more units of work, but it can also be to handle larger units of
        work, such as when datasets grow.
      </div>
      <div>Another way to look at performance vs scalability:</div>
      <ul>
        <li>
          If you have a <strong>performance</strong> problem, your system is
          slow for a single user.
        </li>
        <li>
          If you have a <strong>scalability</strong> problem, your system is
          fast for a single user but slow under heavy load.
        </li>
      </ul>
      <h3 className="section-header">Latency vs throughput</h3>
      <div>
        Latency is the time to perform some action or to produce some result.
      </div>
      <div>
        Throughput is the number of such actions or results per unit of time.
      </div>
      <div>
        Generally, you should aim for maximal throughput with acceptable
        latency.
      </div>
      <h3 className="section-header">Availability vs consistency</h3>
      <h3 className="section-header">CAP theorem</h3>
      <img
        alt="cap-theorem"
        className="section-img"
        src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/bgLMI2u.png"
      />
      <div>
        In a distributed computer system, you can only support two of the
        following guarantees:
      </div>
      <ul>
        <li>
          <strong>Consistency</strong> - Every read receives the most recent
          write or an error
        </li>
        <li>
          <strong>Availability</strong> - Every request receives a response,
          without guarantee that it contains the most recent version of the
          information
        </li>
        <li>
          <strong>Partition Tolerance</strong> - The system continues to operate
          despite arbitrary partitioning due to network failures
        </li>
      </ul>
      <div>
        <em>
          Networks aren't reliable, so you'll need to support partition
          tolerance. You'll need to make a software tradeoff between consistency
          and availability.
        </em>
      </div>
      <h3 className="section-header">
        CP - consistency and partition tolerance
      </h3>
      <div>
        Waiting for a response from the partitioned node might result in a
        timeout error. CP is a good choice if your business needs require atomic
        reads and writes.
      </div>
      <h3 className="section-header">
        AP - availability and partition tolerance
      </h3>
      <div>
        Responses return the most readily available version of the data
        available on any node, which might not be the latest. Writes might take
        some time to propagate when the partition is resolved.
      </div>
      <div></div>
    </div>
  );
}

export default TradeOffs;
