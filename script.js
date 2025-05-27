document.addEventListener("DOMContentLoaded", () => {
  const topics = {
    plagiarism: {
      title: "我這樣寫算抄襲嗎？",
      steps: [
        {
          q: "是否有使用他人文章或句子但未註明出處？",
          y: "構成抄襲，請補上正確引用格式。根據《著作權法》第91條，未經同意重製他人著作，可能構成侵權行為。",
          n: 1
        },
        {
          q: "是否僅替換部分詞語，保留原句架構？",
          y: "屬於偽改寫，仍視為抄襲。根據《學術倫理案件處理原則》第3條，改寫內容若未註明仍屬不當使用。",
          n: 2
        },
        {
          q: "是否使用AI生成內容，但未註明來源？",
          y: "建議標註AI協助並依教師規範處理。多數校規視未註明AI內容為資料來源不明，屬學術不誠信。",
          n: 3
        },
        {
          q: "是否使用了圖表或數據，未標註來源？",
          y: "屬於圖像或數據抄襲，請加上資料出處。根據《著作權法》第9～10條，圖表亦屬保護範圍。",
          n: 4
        },
        {
          q: "是否有與他人提交的作業極為相似？",
          y: "可能涉及抄襲，建議主動說明並重寫。根據《學生獎懲辦法》，雷同作業可記過或退選。",
          n: "safe"
        }
      ]
    },
    ghostwriting: {
      title: "幫忙寫作業或請別人代寫會怎樣？",
      steps: [
        {
          q: "是否由他人（朋友、家教、代寫網站）完成作業？",
          y: "屬於違規，恐面臨記過或退選處分。學術倫理案件處理原則第4條將其列為重大違規。",
          n: 1
        },
        {
          q: "是否請AI或工具完全取代撰寫？",
          y: "須依規定註明使用情況，否則視同代寫。未經教師允許使用AI工具，視同他人代寫。",
          n: 2
        },
        {
          q: "是否曾幫同學代交報告或上傳作業？",
          y: "涉及學術不誠信，雙方皆有責任。多所大專依學則處理代交行為。",
          n: 3
        },
        {
          q: "是否參與或提供代做服務給他人？",
          y: "違反學術規定，將被處分。根據高教倫理原則第5條，提供代做亦為違規。",
          n: 4
        },
        {
          q: "是否因時間壓力而非親自完成？",
          y: "建議尋求延長或討論協助，不應委託他人。學術誠信核心在於獨立完成。",
          n: "safe"
        }
      ]
    },
    reuse: {
      title: "舊報告改一改再交，可以嗎？",
      steps: [
        {
          q: "是否將前一門課的作業重交於另一課？",
          y: "未經教師同意屬違規，建議重新撰寫。根據學術倫理處理原則第3條，重複使用屬不當行為。",
          n: 1
        },
        {
          q: "是否只是改標題或內容稍微修改？",
          y: "屬形式更動，仍為重複使用。換皮重交仍可被視為抄襲行為。",
          n: 2
        },
        {
          q: "是否未向指導老師說明曾使用該作品？",
          y: "存有誤導之嫌，應主動說明。教育部推動原則強調明確揭露重用內容。",
          n: 3
        },
        {
          q: "是否在比賽或投稿中重複使用同一作品？",
          y: "恐涉及一稿多投，應查詢各單位規定。發表需揭露是否曾使用。",
          n: 4
        },
        {
          q: "是否引用自己舊作品卻未標註來源？",
          y: "建議加註註腳註明為自引，避免誤解。自我引用也需明確標示以維誠信。",
          n: "safe"
        }
      ]
    },
    falsification: {
      title: "我有沒有做假數據或亂編資料？",
      steps: [
        {
          q: "是否填寫未實際完成的問卷或實驗結果？",
          y: "屬於資料造假，須立即停止並說明原因。根據學術倫理案件處理原則第3條，虛構數據屬嚴重違規。",
          n: 1
        },
        {
          q: "是否刪除不符合預期的實驗數據？",
          y: "須在報告中說明理由，否則視為篡改。隱匿資料違反學術誠信。",
          n: 2
        },
        {
          q: "是否未實際訪談卻寫出假訪談內容？",
          y: "屬造假，違反研究倫理。捏造資料屬實質欺騙行為。",
          n: 3
        },
        {
          q: "是否使用網路統計數據但未註明來源？",
          y: "易被視為不實引用，請加上出處。所有數據皆應具可查證性。",
          n: 4
        },
        {
          q: "是否為了讓報告好看而改動分析方式？",
          y: "建議據實呈現所有資料，避免誤導。美化數據恐導致不實結論。",
          n: "safe"
        }
      ]
    },
    citation: {
      title: "我這樣引用算不當嗎？",
      steps: [
        {
          q: "是否未標註引用來源（書名、頁數、網址）？",
          y: "視為不當引用，需補充完整出處。根據《著作權法》第65條，合理引用需明確標示。",
          n: 1
        },
        {
          q: "是否只寫某某網路文章而無具體連結？",
          y: "建議補上明確來源與查閱時間。模糊來源無法查證，違反資料透明原則。",
          n: 2
        },
        {
          q: "是否過度引用某一資料，造成依賴？",
          y: "建議多元引用，展現自主思辨能力。學術寫作應避免偏誤與依賴。",
          n: 3
        },
        {
          q: "是否直接翻譯外文資料但未註明？",
          y: "視同間接引用，應註明原文出處。翻譯內容仍屬他人著作。",
          n: 4
        },
        {
          q: "是否將同學或報告群組的討論內容寫進報告？",
          y: "建議註明為共同討論成果，避免誤解為抄襲。他人貢獻應揭露。",
          n: "safe"
        }
      ]
    }
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
            <button onclick="goHome()">回首頁</button>
          </div>
        </div>
      `;
    };

    window.nextStep = (isYes) => {
      const step = topics[topic].steps[stepIndex];
      if (isYes) {
        questions.innerHTML = "";
        result.innerHTML = `${step.y}<br><br><button onclick="goHome()">回首頁</button>`;
      } else {
        if (step.n === "safe") {
          questions.innerHTML = "";
          result.innerHTML = `此情況基本無違規，但仍建議自我檢查。<br><br><button onclick="goHome()">回首頁</button>`;
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
