import './DomainNameSystem.css';

function DomainNameSystem() {
  return (
    <div className="domain-name-system section-sub-content">
      <img
        alt="domain-name-system"
        className="section-img"
        src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/IOyLj4i.jpg"
      />
      <div>
        A Domain Name System (DNS) translates a domain name such as
        www.example.com to an IP address.
      </div>
      <div>
        DNS is hierarchical, with a few authoritative servers at the top level.
        Your router or ISP provides information about which DNS server(s) to
        contact when doing a lookup. Lower level DNS servers cache mappings,
        which could become stale due to DNS propagation delays. DNS results can
        also be cached by your browser or OS for a certain period of time,
        determined by the time to live (TTL).
      </div>
      <ul>
        <li>
          NS record (name server) - Specifies the DNS servers for your
          domain/subdomain.
        </li>
        <li>
          MX record (mail exchange) - Specifies the mail servers for accepting
          messages.
        </li>
        <li>A record (address) - Points a name to an IP address.</li>
        <li>
          CNAME (canonical) - Points a name to another name or CNAME
          (example.com to www.example.com) or to an A record.
        </li>
      </ul>
      <div>
        Services such as CloudFlare and Route 53 provide managed DNS services.
        Some DNS services can route traffic through various methods:
      </div>
      <ul>
        <li>Weighted round robin</li>
        <li>Latency-based</li>
        <li>Geolocation-based</li>
      </ul>
    </div>
  );
}

export default DomainNameSystem;
