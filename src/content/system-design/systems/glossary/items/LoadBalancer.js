function LoadBalancer() {
  return (
    <div className="section-sub-content">
      <div>
        Load balancers distribute incoming client requests to computing
        resources such as application servers and databases. In each case, the
        load balancer returns the response from the computing resource to the
        appropriate client. Load balancers are effective at:
      </div>
      <ul>
        <li>Preventing requests from going to unhealthy servers</li>
        <li>Preventing overloading resources</li>
        <li>Helping to eliminate a single point of failure</li>
      </ul>
    </div>
  );
}

export default LoadBalancer;
