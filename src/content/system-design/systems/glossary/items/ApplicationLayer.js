function ApplicationLayer() {
  return (
    <div className="section-sub-content">
      <img
        alt="application-layer"
        className="section-img"
        src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/yB5SYwm.png"
      />
      <div>
        Separating out the web layer from the application layer (also known as
        platform layer) allows you to scale and configure both layers
        independently. Adding a new API results in adding application servers
        without necessarily adding additional web servers. The single
        responsibility principle advocates for small and autonomous services
        that work together. Small teams with small services can plan more
        aggressively for rapid growth.
      </div>
      <div>Workers in the application layer also help enable asynchronism.</div>
      <h3 className="section-header">Microservices</h3>
      <div>
        Related to this discussion are microservices, which can be described as
        a suite of independently deployable, small, modular services. Each
        service runs a unique process and communicates through a well-defined,
        lightweight mechanism to serve a business goal. 1
      </div>
      <div>
        Pinterest, for example, could have the following microservices: user
        profile, follower, feed, search, photo upload, etc.
      </div>
      <h3 className="section-header">Disadvantages of Application Layer</h3>
      <ul>
        <li>
          Adding an application layer with loosely coupled services requires a
          different approach from an architectural, operations, and process
          viewpoint (vs a monolithic system).
        </li>
        <li>
          Microservices can add complexity in terms of deployments and
          operations.
        </li>
      </ul>
    </div>
  );
}

export default ApplicationLayer;
