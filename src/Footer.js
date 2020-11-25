import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-nav-grid">
          <div className="footer-update">
            <h3 className="footer-title">Latest Tweets</h3>
            <div className="footer-update-tweet">
              <p>
                <a href="#">@namehere </a>
                Justoid nonummy laoreet phasellent penatoque in antesque pellus
                elis eget tincidunt. Nequatdui laorem justo a non tellus. 1 day
                ago
              </p>
            </div>
            <div className="footer-update-tweet">
              <p>
                <a href="#">@namehere </a>
                Justoid nonummy laoreet phasellent penatoque in antesque pellus
                elis eget tincidunt. Nequatdui laorem justo a non tellus. 1 day
                ago
              </p>
            </div>
          </div>

          <div className="footer-link">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li>
                <a href="#">» Lorem ipsum dolor sit</a>
              </li>

              <li>
                <a href="#">» Amet consectetur</a>
              </li>

              <li>
                <a href="#">» Praesent vel sem id</a>
              </li>

              <li>
                <a href="#">» Curabitur hendrerit est</a>
              </li>

              <li>
                <a href="#">» Aliquam eget erat nec sapien</a>
              </li>

              <li>
                <a href="#">» Cras id augue nunc</a>
              </li>

              <li>
                <a href="#">» In nec justo non</a>
              </li>

              <li>
                <a href="#">» Vivamus mollis enim ut</a>
              </li>

              <li>
                <a href="#">» Curabitur hendrerit est</a>
              </li>

              <li>
                <a href="#">» Sed a nulla urna</a>
              </li>
            </ul>
          </div>

          <div className="footer-blog">
            <h3 className="footer-title">LATEST BLOG POSTS</h3>
            <div className="footer-blog-box">
              <h4>Post Title</h4>
              <div className="blog-box-title">
                <p>
                  <a href="#">Admin</a>, domainname.com <br></br>Friday, 6th
                  April 2000
                </p>
              </div>
              <div className="blog-box-detail">
                <p>
                  Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
                  feugiat mi a tellus consequat imperdiet.
                </p>
              </div>
              <div className="read-more">
                <a href="#">Read More »</a>
              </div>
            </div>
            <div className="footer-blog-box">
              <h4>Post Title</h4>
              <div className="blog-box-title">
                <p>
                  <a href="#">Admin</a>, domainname.com <br></br>Friday, 6th
                  April 2000
                </p>
              </div>
              <div className="blog-box-detail">
                <p>
                  Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
                  feugiat mi a tellus consequat imperdiet.
                </p>
              </div>
              <div className="read-more">
                <a href="#">Read More »</a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button>SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
