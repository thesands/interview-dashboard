function InterviewProcess() {
  return (
    <div className="section-sub-content">
      <h3 className="section-header">
        How to approach a system design interview question
      </h3>
      <div>
        <h4>Step 1: Outline use cases, constraints, and assumptions</h4>
        <div>
          Gather requirements and scope the problem. Ask questions to clarify
          use cases and constraints. Discuss assumptions.
        </div>
        <ul>
          <li>Who is going to use it?</li>
          <li>How are they going to use it?</li>
          <li>How many users are there?</li>
          <li>What does the system do?</li>
          <li>What are the inputs and outputs of the system?</li>
          <li>How much data do we expect to handle?</li>
          <li>How many requests per second do we expect?</li>
          <li>What is the expected read to write ratio?</li>
        </ul>
      </div>
      <div>
        <h4>Step 2: Create a high level design</h4>
        <div>Outline a high level design with all important components.</div>
        <ul>
          <li>Sketch the main components and connections</li>
          <li>How are they going to use it?</li>
          <li>Justify your ideas</li>
        </ul>
      </div>
      <div>
        <h4>Step 3: Design core components</h4>
        <div>
          Dive into details for each core component. For example, if you were
          asked to design a url shortening service, discuss:
        </div>
        <ul>
          <li>Generating and storing a hash of the full url</li>
          <ul>
            <li>MD5 and Base62</li>
            <li>Hash collisions</li>
            <li>SQL or NoSQL</li>
            <li>Database schema</li>
          </ul>
          <li>Translating a hashed url to the full url</li>
          <ul>
            <li>Database lookup</li>
          </ul>
          <li>API and object-oriented design</li>
        </ul>
      </div>
      <div>
        <h4>Step 4: Scale the design</h4>
        <div>
          Identify and address bottlenecks, given the constraints. For example,
          do you need the following to address scalability issues?
        </div>
        <ul>
          <li>Load balancer</li>
          <li>Horizontal scaling</li>
          <li>Caching</li>
          <li>Database sharding</li>
        </ul>
        <div>
          Discuss potential solutions and trade-offs. Everything is a trade-off.
          Address bottlenecks using principles of scalable system design.
        </div>
      </div>
    </div>
  );
}

export default InterviewProcess;
