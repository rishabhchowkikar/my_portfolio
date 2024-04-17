import "./skills.scss";

const circles = document.querySelectorAll(".circle");
circles.forEach((item) => {
  let dots = item.getAttribute("data-dots");
  let marked = item.getAttribute("data-percent");
  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg;"></div>`;
    console.log(points);
  }
  item.innerHTML = points;

  const pointsMarked = item.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

const Skills = () => {
  return (
    <div className="skills">
      <div className="main-text">
        <h1>My Skills</h1>
        <span>Technical and Professional</span>
      </div>

      <div className="skills-main">
        <div className="skill-left">
          <h3>Technical Skills</h3>

          <div className="skill-bar">
            <div className="info">
              <p>HTML</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>CSS</p>
              <p>63%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>Javascript</p>
              <p>85%</p>
            </div>
            <div className="bar">
              <span className="javascript"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>React Js</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <span className="react-js"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>Node Js</p>
              <p>45%</p>
            </div>
            <div className="bar">
              <span className="node-js"></span>
            </div>
          </div>
        </div>

        <div className="skill-right">
          <h3>Professional Skills</h3>

          <div className="professional">
            <div className="box">
              <div className="circle" data-dots="80" data-percent="90"></div>
              <div className="text">
                <big>90%</big>
                <small>Team Work</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots="80" data-percent="80"></div>
              <div className="text">
                <big>80%</big>
                <small>Creativity</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots="80" data-percent="55"></div>
              <div className="text">
                <big>55%</big>
                <small>Project Management</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots="80" data-percent="70"></div>
              <div className="text">
                <big>70%</big>
                <small>Communication</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
