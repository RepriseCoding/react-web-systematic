import React from "react";

function Section() {
  return (
    <section>
      <div className="container">
        <div className="main-content-grid">
          <div className="img-main-content">
            <img src="https://via.placeholder.com/400x440" />
          </div>
          <div className="text-main-content">
            <h1>
              A HUGE <br></br>TITLE HERE
            </h1>
            <p>
              Cursuspenatisaccum ut curabitur nulla tellus tor ames a in
              curabitur pede. Idet mollisi eros dis orci congue elis et
              curabitur consequam intesque. Curabiturpisametur in ante.
            </p>
            <div className="read-more">
              <a href="#">READ MORE » </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
