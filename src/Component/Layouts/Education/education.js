import React from "react";

export default function education() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="home-education-section">
      <div id="education-section-box">
        <div className="container">
          <div className="heading-horizontal text-center">
            <h5>Education Background</h5>
            <h2>My Education</h2>
            <div className="border-horizontal">&nbsp;</div>
          </div>
          <div className="educationDetails">
            <div className="selectBox">
              <div
                className="clgBox"
                onClick={() =>
                  openInNewTab("https://www.lambtoncollege.ca/toronto/")
                }
              >
                <img src="/mkportfolio/Photos/appicon.png" alt="" />
                <h3>Lambton College</h3>
              </div>
              <div
                className="clgBox"
                onClick={() => openInNewTab("http://socet.edu.in/socet/")}
              >
                <img src="/mkportfolio/Photos/vnsgu.jpg" alt="" />
                <h3>Siver oak Collage of engineering</h3>
              </div>
            </div>
            <div className="education-right-box">
              <div className="detailHeader">
                <img src="/mkportfolio/Photos/appicon.png" alt="" />
                <div>
                  <h4> Lambton College </h4>
                  <span>(Jan 2022 - August 2023)</span>
                </div>
              </div>
              <div className="detailBody">
                <h3>Computer Software and Database Development</h3>
                <h5>topics</h5>
                <div className="topic">
                  <div className="topicDiv">
                    <span>Web Technology (MERN)</span>
                  </div>
                  <div className="topicDiv">
                    <span>Database development</span>
                  </div>
                  <div className="topicDiv">
                    <span>Java</span>
                  </div>
                  <div className="topicDiv">
                    <span>Python</span>
                  </div>
                  <div className="topicDiv">
                    <span>Javascript</span>
                  </div>
                  <div className="topicDiv">
                    <span>Cloud Computing</span>
                  </div>
                  <div className="topicDiv">
                    <span>DevOps Tools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
