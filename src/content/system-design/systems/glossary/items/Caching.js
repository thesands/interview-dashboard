function Caching() {
  return (
    <div className="section-sub-content">
      <img
        alt="caching-example"
        className="section-img"
        src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/Q6z24La.png"
      />
      <div>
        Caching improves page load times and can reduce the load on your servers
        and databases. In this model, the dispatcher will first lookup if the
        request has been made before and try to find the previous result to
        return, in order to save the actual execution.
      </div>
      <div>
        Databases often benefit from a uniform distribution of reads and writes
        across its partitions. Popular items can skew the distribution, causing
        bottlenecks. Putting a cache in front of a database can help absorb
        uneven loads and spikes in traffic.
      </div>
    </div>
  );
}

export default Caching;
