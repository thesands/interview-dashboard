function ContentDeliveryNetwork() {
  return (
    <div className="section-sub-content">
      <img
        alt="cdn-example"
        className="section-img"
        src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/h9TAuGI.jpg"
      />
      <div>
        A content delivery network (CDN) is a globally distributed network of
        proxy servers, serving content from locations closer to the user.
        Generally, static files such as HTML/CSS/JS, photos, and videos are
        served from CDN, although some CDNs such as Amazon's CloudFront support
        dynamic content. The site's DNS resolution will tell clients which
        server to contact.
      </div>
      <div>
        Serving content from CDNs can significantly improve performance in two
        ways:
      </div>
      <ul>
        <li>Users receive content from data centers close to them</li>
        <li>
          Your servers do not have to serve requests that the CDN fulfills
        </li>
      </ul>
    </div>
  );
}

export default ContentDeliveryNetwork;
