function MessageQueueProducts() {
  return (
    <ul>
      <li>
        Redis is useful as a simple message broker but messages can be lost.
      </li>
      <li>
        RabbitMQ is popular but requires you to adapt to the 'AMQP' protocol and
        manage your own nodes.
      </li>
      <li>
        Amazon SQS is hosted but can have high latency and has the possibility
        of messages being delivered twice.
      </li>
    </ul>
  );
}

function MessageQueues() {
  return (
    <div>
      <h3 className="section-header">Message Queues</h3>
      <div>
        Message queues receive, hold, and deliver messages. If an operation is
        too slow to perform inline, you can use a message queue with the
        following workflow:
      </div>
      <ul>
        <li>
          An application publishes a job to the queue, then notifies the user of
          job status
        </li>
        <li>
          A worker picks up the job from the queue, processes it, then signals
          the job is complete
        </li>
      </ul>
      <div>
        The user is not blocked and the job is processed in the background.
        During this time, the client might optionally do a small amount of
        processing to make it seem like the task has completed. For example, if
        posting a tweet, the tweet could be instantly posted to your timeline,
        but it could take some time before your tweet is actually delivered to
        all of your followers.
      </div>
      <div>
        All Message Queues must include:
        <ul>
          <li>Facilitate asynchronous messaging</li>
          <li>Store, deliver, and delete messages</li>
          <li>Document communication information</li>
          <li>Allow administrative control over messaging permissions</li>
        </ul>
      </div>
      <MessageQueueProducts />
    </div>
  );
}

export default MessageQueues;
