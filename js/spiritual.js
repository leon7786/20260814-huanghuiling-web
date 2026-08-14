// Indian Spiritual Practice 7 Stages Dataset & Interactive Logic
const spiritualStagesData = [
  {
    stage: 1,
    name: "第一阶：身心基石 (Yama & Niyama — 道德持戒与律己)",
    subtitle: "扎根物质与心理世界的道德基石，建立情绪稳定防线",
    realm: "【心灵状态】身体行为与内心欲望的冲突消除。外部干扰减少，情绪不再轻易大起大落，内心少嗔少怨，获得基本的心理安全感与秩序感。",
    concepts: [
      "外在持戒 (Yama)：非暴力 (Ahimsa)、真实 (Satya)、不盗 (Asteya)、节制 (Brahmacharya)、不贪 (Aparigraha)",
      "内在遵行 (Niyama)：清净 (Saucha)、知足 (Santosha)、苦行律己 (Tapas)、自我研读 (Svadhyaya)、顺应自然 (Ishvarapranidhana)"
    ],
    practices: [
      "<strong>非暴力言语练习：</strong>在日常沟通中觉察对抗情绪，戒除无意义的批判与愤怒，使用温和建设性语言；",
      "<strong>知足日记：</strong>每日记录 3 件感恩事项，主动减少消费主义攀比与不必要的物质执念；",
      "<strong>自我研读 (Svadhyaya)：</strong>每天抽出 20 分钟阅读经典哲学、心理学书籍，进行深刻的自我反思。"
    ]
  },
  {
    stage: 2,
    name: "第二阶：调身与调息 (Asana & Pranayama — 体位与能量调控)",
    subtitle: "稳定身体气血，通过呼吸节奏直接重塑神经系统平衡",
    realm: "【心灵状态】身体姿态端正无痛无麻，植物神经系统从“战或逃”交感神经主导转向“休息与消化”副交感神经主导。大脑杂念减少50%以上。",
    concepts: [
      "体位法 (Asana)：安定、舒适的身体姿势，为长时间盘腿静坐打下生理基础",
      "调息法 (Pranayama)：控制生命能量 (Prana) 的呼吸延长与暂停技术"
    ],
    practices: [
      "<strong>每日体位拉伸：</strong>练习猫牛式、下犬式与开髋姿势 20 分钟，保持脊柱挺直端正；",
      "<strong>4-4-6 腹式深呼吸：</strong>吸气 4 秒使腹部自然鼓起，屏息 4 秒，呼气 6 秒放松神经，每日 10 分钟；",
      "<strong>交替鼻孔调息 (Nadi Shodhana)：</strong>用手指交替按压左右鼻孔进行吸气与呼气，平衡左右脑电波。"
    ]
  },
  {
    stage: 3,
    name: "第三阶：感官收摄 (Pratyahara — 摄心内观)",
    subtitle: "切断外部噪声滋扰，将注意力从外界彻底撤回内心",
    realm: "【心灵状态】外部的声光色相、手机消息与社会喧嚣不再能牵动情绪。注意力如同乌龟缩回四肢般完全收回体内，进入“心如止水”的内观状态。",
    concepts: [
      "感官撤回：断绝感官对外部刺激对象的习惯性索求与依赖",
      "内在察觉：将眼耳鼻舌身意转化为向内的探针"
    ],
    practices: [
      "<strong>数字断舍离 (Digital Detox)：</strong>每天固定 1-2 小时完全关闭手机与所有电子屏，远离信息过载；",
      "<strong>感官隔离练习：</strong>闭眼戴上耳塞，将全副注意力锁定在体内的心跳声、血液流动感或呼吸微流上；",
      "<strong>正念身体扫描 (Body Scan)：</strong>从脚趾到头顶逐一感知身体各部位的放松感，不作任何好恶评价。"
    ]
  },
  {
    stage: 4,
    name: "第四阶：凝神集中 (Dharana — 一点专注)",
    subtitle: "约束散乱意识，将心念牢牢锁定于特定的物理或意象焦点",
    realm: "【心灵状态】思维不再像野马般跳跃。意识形成一股强大的聚焦束，杂念被显著压制，大脑呈现出高度敏锐、清澈而集中的洞察力。",
    concepts: [
      "单点专注 (Single-pointed focus)：将所有精神能量汇聚于一处",
      "克服心乱：克服掉举（散乱）与昏沉（困倦）两大冥想障碍"
    ],
    practices: [
      "<strong>观烛法 (Trataka)：</strong>暗室中凝视前方 1 米处燃烧的烛光，不眨眼直至流泪，闭眼后在眉心观想烛光点；",
      "<strong>数息观 (Anapanasati)：</strong>默数自己的呼吸，从 1 数到 10，若中途产生杂念则立即重新从 1 开始；",
      "<strong>曼陀罗唱诵 (Mantra Chanting)：</strong>重复默念或轻唱稳定平和的音节（如 'OM' 或 'So Hum'）。"
    ]
  },
  {
    stage: 5,
    name: "第五阶：禅定冥想 (Dhyana — 持续流动的意识)",
    subtitle: "专注变为无须努力的自然流动，主客体界面开始模糊",
    realm: "【心灵状态】专注不再需要强加控制，心念如同源源不断、平滑无缝的油流般持续观照。主观观察者与观照对象融合，产生高深沉浸的“心流”与大宁静。",
    concepts: [
      "无间断流转：无杂念介入的深度冥想状态",
      "时间感淡化：体验到超越过去与未来的纯粹“当下”"
    ],
    practices: [
      "<strong>无相观照 (Silent Awareness)：</strong>放弃特定关注点，纯粹作为觉察者（Observer），观照念头的生起与消逝而不随之起舞；",
      "<strong>慈心观 (Metta Meditation)：</strong>从内心向自己、家人乃至全宇宙所有生命发出无条件平和与慈爱的祝福；",
      "<strong>定时深度静坐：</strong>固定早晚各 30-45 分钟静坐，保持脊柱挺直，进入不迎不随的明觉状态。"
    ]
  },
  {
    stage: 6,
    name: "第六阶：深度三昧 (Samadhi — 极喜与主客融合)",
    subtitle: "小我执念溶解，体验与宇宙客体合一的无上极喜与明觉",
    realm: "【心灵状态】小我执念（Ego）暂时溶解，修行者与冥想的对象完全融为一体。体验到超越物质世界的极度宁静、无条件喜乐（Ananda）与纯粹意识。",
    concepts: [
      "有相三昧 (Samprajnata Samadhi)：仍带有微细的觉察与思考",
      "无相三昧 (Asamprajnata Samadhi)：超越一切微细念头与潜意识种子执着"
    ],
    practices: [
      "<strong>长期修习与自我融化：</strong>在前五阶极其扎实的基础上，不强求、自然而然地进入；",
      "<strong>自性提问 (Self-Inquiry)：</strong>反复追问“我是谁？”（Who am I?），剥离身体、情绪、身份等外层假象，触及本觉；",
      "<strong>常在觉知：</strong>将定境中的明觉延伸至日常起居动静之中。"
    ]
  },
  {
    stage: 7,
    name: "第七阶：终极解脱与纯觉 (Kaivalya / Moksha — 梵我合一与活解脱)",
    subtitle: "断绝一切无明烦恼，个体灵魂与宇宙终极实体完美合一",
    realm: "【心灵状态】彻底断绝无明（Avidya）与烦恼根源，实现“活解脱”（Jivanmukti）。体验到自己的灵魂本性（Atman）与宇宙终极实体（Brahman）毫无二致，处于永久的绝对自由、纯觉与大乐中。",
    concepts: [
      "梵我合一 (Aham Brahmasmi)：个体与宇宙实体同体无二",
      "绝对自由 (Kaivalya)：超越生老病死与二元对立的终极自由"
    ],
    practices: [
      "<strong>智慧洞照 (Jnana Yoga)：</strong>彻底看破物质与现象界的无常（Maya），直下顿悟纯粹觉性；",
      "<strong>无执行动 (Karma Yoga)：</strong>在日常生活中全心奉献尽责，但不计较个人得失与结果；",
      "<strong>全然臣服与合一：</strong>接纳当下的一切，与万物同体，活在无条件的爱与觉知中。"
    ]
  }
];

// Page Init
document.addEventListener("DOMContentLoaded", () => {
  renderLadderNav();
  renderStages(spiritualStagesData);
  initBreathWidget();
});

// Render Ladder Nav
function renderLadderNav() {
  const container = document.getElementById("ladderNav");
  if (!container) return;

  container.innerHTML = spiritualStagesData.map(item => `
    <div class="ladder-step" onclick="scrollToStage(${item.stage})">
      <div style="display: flex; align-items: center; gap: 16px;">
        <span class="stage-number-badge">${item.stage}</span>
        <div>
          <div class="ladder-title">${item.name}</div>
          <div class="ladder-desc">${item.subtitle}</div>
        </div>
      </div>
      <span style="color: var(--accent-purple); font-weight: 800;">查看实修 ➔</span>
    </div>
  `).join('');
}

// Render Detailed Stage Cards
function renderStages(data) {
  const container = document.getElementById("stagesContainer");
  if (!container) return;

  container.innerHTML = data.map(item => `
    <div class="route-card" id="stage-card-${item.stage}" style="cursor: default; margin-bottom: 24px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <span class="tag-badge theme" style="font-size: 13px;">第 ${item.stage} 阶修持</span>
        <span class="tag-badge season">印度古典八支瑜伽</span>
      </div>
      
      <h3 class="route-title" style="font-size: 22px; color: var(--text-main);">${item.name}</h3>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">${item.subtitle}</p>

      <div class="realm-box">
        <strong>境界与心灵状态：</strong>
        <p style="font-size: 14px; color: var(--text-main); margin-top: 4px; line-height: 1.6;">${item.realm}</p>
      </div>

      <div class="practice-box">
        <strong>核心概念与理论：</strong>
        <ul style="margin-left: 20px; font-size: 14px; color: var(--text-muted); margin-top: 6px;">
          ${item.concepts.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-top: 16px;">
        <strong style="font-size: 15px; color: var(--text-main);">🧘 具体实现方式与练习：</strong>
        <ul class="method-list">
          ${item.practices.map(p => `<li>🔹 ${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function scrollToStage(stage) {
  const el = document.getElementById(`stage-card-${stage}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Interactive Breath Timer Widget
function initBreathWidget() {
  const btn = document.getElementById("startBreathBtn");
  const circle = document.getElementById("breathCircle");
  const status = document.getElementById("breathStatus");

  let isRunning = false;
  let timer = null;
  let timeout1 = null;
  let timeout2 = null;

  if (!btn) return;

  btn.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(timer);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      isRunning = false;
      btn.innerText = "▶️ 启动调息练习";
      status.innerText = "练习已暂停";
      circle.className = "breath-circle";
      circle.innerText = "准备开始";
    } else {
      isRunning = true;
      btn.innerText = "⏹️ 停止调息练习";
      runBreathCycle();
      timer = setInterval(runBreathCycle, 14000);
    }
  });

  function runBreathCycle() {
    if (!isRunning) return;
    // Inhale 4s
    circle.className = "breath-circle inhale";
    circle.innerText = "缓慢吸气...";
    status.innerText = "第 1 步：腹式深吸气 4 秒，感受能量升起";

    // Hold 4s
    timeout1 = setTimeout(() => {
      if (!isRunning) return;
      circle.innerText = "保持屏息...";
      status.innerText = "第 2 步：稳定屏息 4 秒，凝神专注于心轮";
    }, 4000);

    // Exhale 6s
    timeout2 = setTimeout(() => {
      if (!isRunning) return;
      circle.className = "breath-circle exhale";
      circle.innerText = "平静呼气...";
      status.innerText = "第 3 步：缓慢呼气 6 秒，释放全身杂念与紧张";
    }, 8000);
  }
}
