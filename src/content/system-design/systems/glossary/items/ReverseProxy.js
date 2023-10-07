function ReverseProxy() {
  return (
    <div className="section-sub-content">
      <img
        alt="reverse-proxy"
        className="section-img"
        src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/n41Azff.png"
      />
      <div>
        A reverse proxy is a web server that centralizes internal services and
        provides unified interfaces to the public. Requests from clients are
        forwarded to a server that can fulfill it before the reverse proxy
        returns the server's response to the client.
      </div>
      <div>Additional benefits include:</div>
      <ul>
        <li>
          Increased security - Hide information about backend servers, blacklist
          IPs, limit number of connections per client
        </li>
        <li>
          Increased scalability and flexibility - Clients only see the reverse
          proxy's IP, allowing you to scale servers or change their
          configuration
        </li>
        <li>
          SSL termination - Decrypt incoming requests and encrypt server
          responses so backend servers do not have to perform these potentially
          expensive operations
        </li>
        <li>Compression - Compress server responses</li>
        <li>Caching - Return the response for cached requests</li>
        <li>Static content - Serve static content directly (HTML/CSS/JS)</li>
      </ul>
    </div>
  );
}

export default ReverseProxy;
