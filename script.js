document.addEventListener("DOMContentLoaded", () => {
  const topics = {
    plagiarism: {
      title: "我這樣寫算抄襲嗎？",
      steps: [
        {
          q: "是否有使用他人文章或句子但未註明出處？",
          y: "構成抄襲，請補上正確引用格式。📖 根據《著作權法》第91條，未經同意重製他人著作，可能構成侵權行為。",
          n: 1
        },
        {
          q: "是否僅替換部分詞語，保留原句架構？",
          y: "屬於偽改寫，仍視為抄襲。📖 根據《學術倫理案件處理原則》第3條，改寫內容若未註明仍屬不當使用。",
          n: 2
        },
        {
          q: "是否使用AI生成內容，但未註明來源？",
          y: "建議標註AI協助並依教師規範處理。📖 多數校規視未註明AI內容為資料來源不明，屬學術不誠信。",
          n: 3
        },
        {
          q: "是否使用了圖表或數據，未標註來源？",
          y: "屬於圖像/數據抄襲，請加上資料出處。📖 根據《著作權法》第9～10條，圖表亦屬保護範圍。",
          n: 4
        },
        {
          q: "是否有與他人提交的作業極為相似？",
          y: "可能涉及抄襲，建議主動說明並重寫。📖 根據《學生獎懲辦法》，雷同作業可記過或退選。",
          n: "safe"
        }
      ]
    },
    // 其餘主題可依照此格式繼續補上 ghostwriting, reuse, falsification, citation
  };

  const topicSelect = document.getElementById("topic-select");
  const home = document.getElementById("home");
  const questions = document.getElementById("questions");
  const result = document.getElementById("result");

  topicSelect.addEventListener("change", () => {
    const topic = topicSelect.value;
    if (!topics[topic]) return;

    let stepIndex = 0;
    home.style.display = "none";
    result.innerHTML = "";

    const renderStep = (index) => {
      const step = topics[topic].steps[index];
      questions.innerHTML = `
        <div class="question">
          <p><strong>${topics[topic].title}</strong></p>
          <p>${step.q}</p>
          <button onclick="nextStep(true)">是</button>
          <button onclick="nextStep(false)">否</button>
          <div style="margin-top:20px;">
            <button onclick="goHome()">🔙 回首頁</button>
          </div>
        </div>
      `;
    };

    window.nextStep = (isYes) => {
      const step = topics[topic].steps[stepIndex];
      if (isYes) {
        questions.innerHTML = "";
        result.innerHTML = `🔔 建議：${step.y}<br><br><button onclick="goHome()">🔙 回首頁</button>`;
      } else {
        if (step.n === "safe") {
          questions.innerHTML = "";
          result.innerHTML = `✅ 初步看來沒有明顯違規，但仍建議自我檢查。<br><br><button onclick="goHome()">🔙 回首頁</button>`;
        } else {
          stepIndex = step.n;
          renderStep(stepIndex);
        }
      }
    };

    window.goHome = () => {
      questions.innerHTML = "";
      result.innerHTML = "";
      home.style.display = "block";
      topicSelect.value = "";
    };

    questions.style.display = "block";
    renderStep(stepIndex);
  });
});

