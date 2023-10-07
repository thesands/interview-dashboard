function DesignApi() {
  return (
    <div className="section-sub-content">
      <h3 className="section-header">How to design an API</h3>
      <h3 className="section-header">Representational State Transfer (REST)</h3>
      <div>
        REST is an architectural style enforcing a client/server model where the
        client acts on a set of resources managed by the server. The server
        provides a representation of resources and actions that can either
        manipulate or get a new representation of resources. All communication
        must be stateless and cacheable.
      </div>
      <div>There are four qualities of a RESTful interface:</div>
      <ul>
        <li>
          Identify resources (URI in HTTP) - use the same URI regardless of any
          operation.
        </li>
        <li>
          Change with representations (Verbs in HTTP) - use verbs, headers, and
          body.
        </li>
        <li>
          Self-descriptive error message (status response in HTTP) - Use status
          codes, don't reinvent the wheel.
        </li>
        <li>
          HATEOAS (HTML interface for HTTP) - your web service should be fully
          accessible in a browser.
        </li>
      </ul>
      <h3>Sample REST Calls</h3>
      <table className="http-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>REST</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Signup</td>
            <td>
              <strong>POST</strong> /persons
            </td>
          </tr>
          <tr>
            <td>Resign</td>
            <td>
              <strong>DELETE </strong> /persons/1234
            </td>
          </tr>
          <tr>
            <td>Read a person</td>
            <td>
              <strong>GET</strong> /persons/1234
            </td>
          </tr>
          <tr>
            <td>Read a person's items list</td>
            <td>
              <strong>POST</strong> /persons/1234/items
            </td>
          </tr>
          <tr>
            <td>Add an item to a person's items</td>
            <td>
              <div>
                <strong>POST</strong> /persons/1234/items
              </div>
              <pre>{`{ "itemId": "456" }`}</pre>
            </td>
          </tr>
          <tr>
            <td>Update an item</td>
            <td>
              <div>
                <strong>PUT</strong> /items/456
              </div>
              <pre>{`{ "key": "value" }`}</pre>
            </td>
          </tr>
          <tr>
            <td>Delete an item</td>
            <td>
              <strong>DELETE</strong> /items/456
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DesignApi;
