// Beijing 5-Day High-Upvote & Local Endorsed Routes Dataset
const beijingRoutesData = [
  {
    id: 1,
    theme: "classic",
    themeText: "🔥 知乎万赞爆款",
    title: "路线一：【知乎万赞爆款】帝都皇城中轴经典 5天4晚",
    subtitle: "天安门广场 · 故宫博物院 · 景山落日俯瞰紫禁城 · 八达岭/慕田峪长城 · 颐和园 · 圆明园 · 天坛 · 什刹海",
    highlights: ["【知乎10W+赞】首次访京路线", "【皇家中轴】故宫紫禁城全景", "【景山万春亭】紫禁城落日大片", "【长城雄关】八达岭/慕田峪长城", "【饕餮美食】四季民福烤鸭 & 聚宝源"],
    budgetPerPerson: "1,800 - 3,200",
    itinerary: [
      { day: "Day 1", title: "初识京城 · 天安门 ➔ 故宫博物院 ➔ 景山公园看紫禁城落日", distance: "市区步行/地铁", desc: "游天安门广场与毛主席纪念堂；深入故宫博物院三大殿与御花园；登景山万春亭360度俯瞰紫禁城金碧辉煌落日。", food: "四季民福烤鸭、老北京炸酱面" },
      { day: "Day 2", title: "雄关壮丽 · 八达岭/慕田峪长城 ➔ 奥林匹克公园双辉夜景", distance: "高铁/专线 45m", desc: "搭高铁20分钟直达长城打卡好汉坡；下午返回市区游奥林匹克公园看鸟巢水立方美轮美奂夜景。", food: "聚宝源铜锅涮肉、簋街麻辣小龙虾" },
      { day: "Day 3", title: "皇家水乡 · 颐和园 ➔ 圆明园 ➔ 清华/北大校门打卡", distance: "地铁4号线", desc: "游颐和园东宫门进北宫门出看佛香阁与昆明湖十七孔桥；游圆明园福海湖畔与大水法遗址；清华北大正门合影。", food: "老北京烤鸭、中关村美食" },
      { day: "Day 4", title: "古树盛境 · 天坛公园 ➔ 恭王府 ➔ 什刹海胡同水系", distance: "地铁2号线/8号线", desc: "游天坛祈年殿与百年古柏森林；游恭王府打卡康熙御笔福字碑；漫步什刹海烟袋斜街看银锭观山落日。", food: "烤肉季芝麻酱烧饼、护国寺小吃" },
      { day: "Day 5", title: "文化大满贯 · 中国国家博物馆 ➔ 前门大栅栏 ➔ 返程", distance: "市区散步", desc: "朝圣中国国家博物馆观赏古代中国国宝展；逛前门大栅栏鲜鱼口小吃街，随后前往机场/高铁站返程。", food: "爆肚冯、豆汁儿焦圈" }
    ]
  },
  {
    id: 2,
    theme: "trending",
    themeText: "📸 小红书爆款潮玩",
    title: "路线二：【小红书爆款潮玩】环球影城与网红地标 5天4晚",
    subtitle: "北京环球度假区全天 · 798艺术区 · 三里屯太古里 · 故宫清装写真 · 鼓楼红墙 · 什刹海摇橹船",
    highlights: ["【小红书5W+收藏】潮人出片推荐", "【魔法世界】环球影城哈利波特落日飞车", "【清装写真】故宫红墙飞檐汉服大片", "【潮流前线】798艺术区与三里屯太古里", "【民谣水乡】什刹海古风摇橹船"],
    budgetPerPerson: "2,100 - 3,800",
    itinerary: [
      { day: "Day 1", title: "潮流首站 · 798艺术区 ➔ 三里屯太古里夜生活", distance: "打车/地铁", desc: "游798艺术区打卡LOFT工业风包豪斯建筑与涂鸦墙；晚上逛三里屯太古里体验潮流街拍与时尚酒吧。", food: "三里屯网红西餐、泰餐" },
      { day: "Day 2", title: "沉浸式狂欢 · 北京环球度假区全天畅玩", distance: "地铁7号线/1号线", desc: "全天畅玩环球影城：哈利波特禁忌之旅、霸天虎过山车、小黄人乐园，傍晚拍摄城堡落日飞车与灯光秀。", food: "哈利波特黄油啤酒、侏罗纪餐厅" },
      { day: "Day 3", title: "古风写真 · 故宫清装大片 ➔ 景山落日 ➔ 王府井", distance: "市区步行", desc: "前往故宫拍摄清装/汉服宫廷写真大片；登景山看紫禁城全景；拍角楼倒影，晚上逛王府井大街。", food: "局气京味菜、王府井喜茶" },
      { day: "Day 4", title: "网红打卡 · 鼓楼红墙 ➔ 什刹海摇橹船 ➔ 恭王府", distance: "骑行/步行", desc: "打卡鼓楼红墙（《赵雷-鼓楼》同款地标）；在什刹海乘坐古风摇橹船；游恭王府花园沾福气。", food: "后海民谣酒吧餐、烤肉季" },
      { day: "Day 5", title: "颐和园画中游 ➔ 前门鲜鱼口 ➔ 返程", distance: "地铁4号线", desc: "游览颐和园打卡画中游建筑群；前往前门大栅栏品尝局气/四季民福烤鸭后返程。", food: "老北京炸酱面、驴打滚" }
    ]
  },
  {
    id: 3,
    theme: "foodie",
    themeText: "🥢 北京本地人私藏",
    title: "路线三：【老北京人私藏】胡同烟火与牛街美食 5天4晚",
    subtitle: "牛街清真美食 · 雍和宫祈福 · 国子监700年古柏 · 五道营胡同 · 智化寺明代古乐 · 北海荡双桨",
    highlights: ["【本地人极力推荐】避开大团拥挤", "【饕餮牛街】聚宝源/白记年糕/奶酪魏", "【明代活化石】智化寺二十八代宫廷古乐", "【文艺胡同】五道营胡同独立咖啡馆", "【古柏森林】国子监700年儒家学府"],
    budgetPerPerson: "1,550 - 2,800",
    itinerary: [
      { day: "Day 1", title: "胡同老街 · 东交民巷 ➔ 前门大栅栏 ➔ 中山公园", distance: "市区步行", desc: "漫步北京最长洋楼老街东交民巷；游中山公园社稷坛五色土与古柏林；晚上吃南门涮肉鲜切羊肉。", food: "南门涮肉、秘制麻酱" },
      { day: "Day 2", title: "古刹祈福与学府古树 · 雍和宫 ➔ 国子监 ➔ 五道营胡同", distance: "地铁2号线/5号线", desc: "朝圣雍和宫领免费香祈福看18米整木白檀大佛；游国子监看700年古柏；漫步五道营胡同文艺小店。", food: "雍和宫素斋、护国寺小吃" },
      { day: "Day 3", title: "饕餮盛宴 · 智化寺明代古乐 ➔ 琉璃厂 ➔ 牛街正宗美食", distance: "市区打车", desc: "游智化寺现场聆听明代宫廷音乐；漫步琉璃厂古玩街；傍晚直奔牛街吃聚宝源涮肉、白记年糕与奶酪魏。", food: "牛街聚宝源、白记年糕、奶酪魏、吐鲁番羊肉串" },
      { day: "Day 4", title: "水乡胡同 · 北海公园荡双桨 ➔ 什刹海西海湿地 ➔ 护国寺", distance: "市区散步", desc: "游北海公园划小船看白塔；漫步西海湿地公园木栈道看荷花与水鸟；逛护国寺胡同吃传统小吃。", food: "爆肚宛、老北京豆汁儿" },
      { day: "Day 5", title: "天坛公园看大爷晨练 ➔ 返程", distance: "地铁5号线", desc: "漫步天坛公园看老北京大爷大妈打太极、踢毽子、拉二胡，体验地道京味烟火气后返程。", food: "南门涮肉、烧饼" }
    ]
  },
  {
    id: 4,
    theme: "museum",
    themeText: "🏛️ 文博学霸大满贯",
    title: "路线四：【文博学霸大满贯】国家级博物馆人文深度 5天4晚",
    subtitle: "中国国家博物馆 · 故宫珍宝钟表馆 · 中国科技馆 · 军事博物馆 · 首都博物馆 · 运河博物馆",
    highlights: ["【文博巅峰】中国国家博物馆全天沉浸", "【宫廷奇珍】故宫珍宝馆与自动机械钟表馆", "【大国重器】军事博物馆歼20与导弹展", "【科学探索】中国科技馆与火车头大展", "【运河美学】北京大运河博物馆"],
    budgetPerPerson: "1,450 - 2,600",
    itinerary: [
      { day: "Day 1", title: "大国气象 · 天安门 ➔ 中国国家博物馆全天", distance: "地铁1号线", desc: "全天深度游览中国国家博物馆（提前7天抢票），看《古代中国》后母戊鼎、四羊方尊等国宝。", food: "四季民福烤鸭、老北京面馆" },
      { day: "Day 2", title: "科技与重器 · 中国科技馆 ➔ 鸟巢水立方", distance: "地铁8号线", desc: "游中国科技馆探索与发现展厅；游中国电影博物馆或铁道博物馆东郊展馆看巨大蒸汽火车头。", food: "奥体中心餐饮、铜锅涮肉" },
      { day: "Day 3", title: "宫廷珍宝 · 故宫钟表馆/珍宝馆 ➔ 首都博物馆", distance: "地铁1号线", desc: "游故宫珍宝馆与钟表馆看清代宫廷机械钟表；下午游首都博物馆了解老北京建城建都史。", food: "老北京烤肉、小吃" },
      { day: "Day 4", title: "军事大国 ➔ 军事博物馆 ➔ 北京天文馆", distance: "地铁9号线/4号线", desc: "游军事博物馆看歼-20模型、东风导弹与功勋坦克；游北京天文馆球幕影院观看浩瀚宇宙。", food: "西单美食、老北京爆肚" },
      { day: "Day 5", title: "大运河文化 · 北京大运河博物馆 ➔ 返程", distance: "地铁6号线", desc: "前往通州游览北京大运河博物馆，感受古运河文化与现代建筑美学结合后返程。", food: "通州小吃、烤鸭" }
    ]
  },
  {
    id: 5,
    theme: "gubei",
    themeText: "🌌 京郊长城度假",
    title: "路线五：【京郊长城度假】古北水镇与司马台夜景 5天4晚",
    subtitle: "古北水镇无人机秀 · 司马台长城夜景 · 怀柔雁栖湖 · 慕田峪长城滑道 · 龙庆峡",
    highlights: ["【长城脚下水乡】古北水镇夜景与孔明灯秀", "【最陡长城】司马台长城晨曦与缆车", "【APEC会址】怀柔雁栖湖湖光山色", "【滑道体验】慕田峪长城高速下山", "【北方小桂林】延庆龙庆峡峡谷舟行"],
    budgetPerPerson: "2,200 - 4,200",
    itinerary: [
      { day: "Day 1", title: "抵京 ➔ 密云【古北水镇】夜游无人机秀", distance: "自驾/专线 1.5h", desc: "前往密云区古北水镇，夜游水乡石板路，观赏望京楼水舞秀与数百架无人机孔明灯夜空秀。", food: "古北水镇古北烤鸭、水镇小吃" },
      { day: "Day 2", title: "司马台长城缆车 ➔ 怀柔【雁栖湖】", distance: "60 km / 1h", desc: "搭缆车登司马台长城看晨雾中陡峭雄姿；驱车前往怀柔雁栖湖游览APEC会址湖光山色。", food: "怀柔虹鳟鱼三吃、烤羊腿" },
      { day: "Day 3", title: "怀柔【慕田峪长城】滑道 ➔ 红螺山", distance: "45 km / 50m", desc: "游览慕田峪长城体验特色滑道下山；游红螺山/红螺寺漫步紫竹林与古松林。", food: "怀柔板栗烧鸡、农家菜" },
      { day: "Day 4", title: "延庆百里山水画廊 ➔ 龙庆峡 / 野鸭湖", distance: "70 km / 1.2h", desc: "驾车行驶在延庆百里山水画廊自驾公路；游龙庆峡乘船穿行悬崖峡谷或野鸭湖湿地。", food: "延庆柳沟火盆锅" },
      { day: "Day 5", title: "延庆【玉渡山】高山草甸 ➔ 市区返程", distance: "90 km / 1.5h", desc: "游览玉渡山自然风景区，漫步高山草甸与忘忧湖，午后驶回市区机场/车站返程。", food: "宫廷糕点" }
    ]
  }
];

// App Init
document.addEventListener("DOMContentLoaded", () => {
  renderBeijingRoutes(beijingRoutesData);
  initBeijingFiltersAndSearch();
  initBeijingModal();
  initBeijingCalculator();
});

// Render Beijing Route Cards
function renderBeijingRoutes(routes) {
  const container = document.getElementById("bjRoutesContainer");
  if (!container) return;

  if (routes.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">没有找到符合搜索条件的北京路线</div>`;
    return;
  }

  container.innerHTML = routes.map(route => `
    <div class="route-card" onclick="openBeijingModal(${route.id})">
      <div>
        <div class="route-badge-row">
          <span class="tag-badge duration">⏱️ 5 天 4 晚</span>
          <span class="tag-badge theme">${route.themeText}</span>
          <span class="tag-badge season">👍 高赞推荐</span>
        </div>
        <h3 class="route-title">${route.title}</h3>
        <div class="route-meta-row">
          <span class="meta-item">📍 北京全域</span>
          <span class="meta-item">🚆 地铁 / 自驾 / 包车</span>
        </div>
        <div class="route-stops">
          📍 <strong>核心打卡路线：</strong><br>${route.subtitle}
        </div>
      </div>
      <div class="route-card-footer">
        <div class="budget-estimate">人均预估: <span class="budget-num">¥${route.budgetPerPerson}</span></div>
        <button class="btn-detail">查看 5 日行程明细 ➔</button>
      </div>
    </div>
  `).join('');
}

// Filter and Search Logic
function initBeijingFiltersAndSearch() {
  const searchInput = document.getElementById("bjSearchInput");
  const filterBtns = document.querySelectorAll(".bj-filter-btn");

  let currentTheme = "all";
  let searchText = "";

  function applyFilters() {
    const filtered = beijingRoutesData.filter(r => {
      const matchTheme = currentTheme === "all" || r.theme === currentTheme;
      const matchSearch = !searchText || 
        r.title.includes(searchText) || 
        r.subtitle.includes(searchText) || 
        r.highlights.some(h => h.includes(searchText));
      return matchTheme && matchSearch;
    });

    renderBeijingRoutes(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchText = e.target.value.trim();
      applyFilters();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTheme = btn.dataset.theme;
      applyFilters();
    });
  });
}

// Modal View
function openBeijingModal(id) {
  const route = beijingRoutesData.find(r => r.id === id);
  if (!route) return;

  const modal = document.getElementById("routeModal");
  const modalHeader = document.getElementById("modalHeader");
  const modalBody = document.getElementById("modalBody");

  modalHeader.innerHTML = `
    <h2 class="modal-title">${route.title}</h2>
    <p class="modal-subtitle">${route.subtitle}</p>
    <div style="display: flex; gap: 16px; margin-top: 14px; font-size: 13px; color: var(--primary);">
      <span>📍 行程天数: 5 天 4 晚</span>
      <span>🏷️ 人均预估: ¥${route.budgetPerPerson}</span>
      <span>👍 来源: 知乎/小红书高赞 & 本地人认可</span>
    </div>
  `;

  modalBody.innerHTML = `
    <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 20px; color: var(--text-main);">🗓️ Day 1 至 Day 5 详细行程规划</h3>
    <div class="timeline">
      ${route.itinerary.map(item => `
        <div class="timeline-item">
          <div class="timeline-day">${item.day}</div>
          <div class="timeline-content">
            <div class="tl-title">${item.title}</div>
            <div class="tl-meta">🚗 交通/用时: ${item.distance}</div>
            <div class="tl-desc">${item.desc}</div>
            <div class="tl-food">🍜 推荐地道餐饮: ${item.food}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function initBeijingModal() {
  const modal = document.getElementById("routeModal");
  const closeBtn = document.getElementById("modalClose");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById("routeModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Beijing Budget Calculator Logic
function initBeijingCalculator() {
  const selectRoute = document.getElementById("bjCalcRoute");
  const selectTrans = document.getElementById("bjCalcTransport");
  const inputPeople = document.getElementById("bjCalcPeople");
  const selectHotel = document.getElementById("bjCalcHotel");
  const selectFood = document.getElementById("bjCalcFood");

  const elements = [selectRoute, selectTrans, inputPeople, selectHotel, selectFood];
  elements.forEach(el => {
    if (el) {
      el.addEventListener("change", calculateBeijingBudget);
      if (el.tagName === "INPUT") el.addEventListener("input", calculateBeijingBudget);
    }
  });

  calculateBeijingBudget();
}

function calculateBeijingBudget() {
  const selectTrans = document.getElementById("bjCalcTransport");
  const inputPeople = document.getElementById("bjCalcPeople");
  const selectHotel = document.getElementById("bjCalcHotel");
  const selectFood = document.getElementById("bjCalcFood");

  if (!selectTrans) return;

  const days = 5;
  const people = Math.max(1, parseInt(inputPeople.value) || 2);
  const transType = selectTrans.value;
  const hotelRate = parseFloat(selectHotel.value) || 480;
  const foodRate = parseFloat(selectFood.value) || 200;

  // Transport Cost
  let transCost = 0;
  if (transType === "rental") transCost = 250 * days + 400; // car + fuel/tolls
  else if (transType === "subway") transCost = 60 * people * days;
  else if (transType === "charter") transCost = 600 * days;

  // Accommodation Cost (2 people per room)
  const rooms = Math.ceil(people / 2);
  const hotelCost = rooms * hotelRate * (days - 1); // 4 nights

  // Food Cost
  const foodCost = people * foodRate * days;

  // Ticket Cost
  const ticketCost = 120 * people * days;

  const totalCost = transCost + hotelCost + foodCost + ticketCost;
  const perPerson = totalCost / people;

  document.getElementById("bjTotalAmount").innerText = `¥ ${Math.round(totalCost).toLocaleString()}`;
  document.getElementById("bjPerPersonAmount").innerText = `¥ ${Math.round(perPerson).toLocaleString()}`;
  document.getElementById("bjPeopleCountText").innerText = people;

  document.getElementById("bjBdTrans").innerText = `¥ ${Math.round(transCost).toLocaleString()}`;
  document.getElementById("bjBdHotel").innerText = `¥ ${Math.round(hotelCost).toLocaleString()}`;
  document.getElementById("bjBdFood").innerText = `¥ ${Math.round(foodCost).toLocaleString()}`;
  document.getElementById("bjBdTickets").innerText = `¥ ${Math.round(ticketCost).toLocaleString()}`;
}
