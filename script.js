document.getElementById("topic-select").addEventListener("change", function () {
  const topic = this.value;
  const container = document.getElementById("questions");
  const result = document.getElementById("result");
  const home = document.getElementById("home");
  container.innerHTML = "";
  result.innerHTML = "";
  home.style.display = "none";
  container.style.display = "block";

  if (!topics[topic]) return;

  let current = 0;
  const steps = topics[topic].steps;

  const renderStep = (index) => {
    container.innerHTML = `
      <div class="question">
        <p><strong>${topics[topic].title}</strong></p>
        <p>${steps[index].q}</p>
        <button onclick="nextStep('${topic}', ${index}, true)">是</button>
        <button onclick="nextStep('${topic}', ${index}, false)">否</button>
        <div style="margin-top:20px;">
          <button onclick="goHome()">🔙 回首頁</button>
        </div>
      </div>
    `;
  };

  window.nextStep = (topicKey, stepIndex, isYes) => {
    const step = topics[topicKey].steps[stepIndex];
    if (isYes) {
      result.innerHTML = `🔔 建議：${step.y}<br /><button onclick=\"goHome()\">🔙 回首頁</button>`;
      container.innerHTML = "";
    } else {
      if (step.n === "safe") {
        result.innerHTML = "✅ 初步看來沒有明顯違規，但仍建議自我檢查。<br /><button onclick=\"goHome()\">🔙 回首頁</button>";
        container.innerHTML = "";
      } else {
        renderStep(step.n);
      }
    }
  };

  window.goHome = () => {
    document.getElementById("home").style.display = "block";
    document.getElementById("questions").style.display = "none";
    result.innerHTML = "";
    document.getElementById("topic-select").value = "";
  };

  renderStep(current);
});
