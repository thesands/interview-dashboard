import './Communication.css';

function Communication() {
  return (
    <div className="section-sub-content">
      <h3 className="section-header">Hypertext Transfer Protocol (HTTP)</h3>
      <div>
        HTTP is a method for encoding and transporting data between a client and
        a server. It is a request/response protocol: clients issue requests and
        servers issue responses with relevant content and completion status info
        about the request. HTTP is self-contained, allowing requests and
        responses to flow through many intermediate routers and servers that
        perform load balancing, caching, encryption, and compression.
      </div>
      <div>
        A basic HTTP request consists of a verb (method) and a resource
        (endpoint). Below are common HTTP verbs:
      </div>
      <table className="http-table">
        <thead>
          <tr>
            <th>Verb</th>
            <th>Description</th>
            <th>Idempotent*</th>
            <th>Safe</th>
            <th>Cacheable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>Reads a resource</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>Creates a resource or trigger a process that handles data</td>
            <td>No</td>
            <td>No</td>
            <td>Yes if response contains freshness info</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>Creates or replace a resource</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>Partially updates a resource</td>
            <td>No</td>
            <td>No</td>
            <td>Yes if response contains freshness info</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>Deletes a resource</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
      <div>*Can be called many times without different outcomes.</div>
      <div>
        HTTP is an application layer protocol relying on lower-level protocols
        such as TCP and UDP.
      </div>
    </div>
  );
}

export default Communication;
