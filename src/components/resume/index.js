import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Olga Smolyakov</h2>
          <ul>
            <li>
              If you are interested to know more about me, please download my resume here:
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/olga-s-9724921b4/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/smolyakova30/my-app/blob/main/src/components/resume/Olga_Smolyakova%20-%20with%20linkedIn.DOCX?raw=true"
            class="link"
          >
            Click here to download
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;