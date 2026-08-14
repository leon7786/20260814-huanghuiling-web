// Beijing 5-Day Nature & Authentic Heritage Routes Dataset
const beijingRoutesData = [
  {
    id: 1,
    theme: "wild",
    themeText: "🏔️ 奇山野长城",
    title: "路线一：京郊奇山秀水与野长城自然风光 5日游",
    subtitle: "司马台野长城 · 延庆百里山水画廊 · 玉渡山 · 野鸭湖湿地 · 香山樱桃沟",
    highlights: ["【明代原貌】司马台长城险峰落日", "【最美公路】百里山水画廊自驾", "【北京小瑞士】玉渡山高山草甸", "【鸟类天堂】野鸭湖国家湿地", "【水杉森林】国家植物园樱桃沟"],
    budgetPerPerson: "1,800 - 3,200",
    itinerary: [
      { day: "Day 1", title: "北京市区 ➔ 密云【司马台长城】看落日星空", distance: "130 km / 2h", desc: "驾车前往密云区，攀登保留明代原貌的司马台长城，登望京楼看陡峭长城与群山连绵落日。", food: "密云水库豆腐宴、柴鸡炖蘑菇" },
      { day: "Day 2", title: "密云 ➔ 延庆【百里山水画廊】自驾公路 ➔ 硅化木公园", distance: "110 km / 2.5h", desc: "行驶在百里山水画廊，途经滴水壶瀑布与黑白河，游览侏罗纪时代硅化木国家地质公园。", food: "延庆柳沟火盆锅米粮黄糕" },
      { day: "Day 3", title: "延庆【玉渡山自然风景区】➔ 野鸭湖湿地公园", distance: "50 km / 1h", desc: "漫步玉渡山高山草甸、忘忧湖与忘忧溪流，下午前往野鸭湖国家湿地公园看万亩芦苇荡与水鸟。", food: "延庆全鱼宴、野鸭湖农家菜" },
      { day: "Day 4", title: "延庆 ➔ 香山公园 ➔ 国家植物园樱桃沟", distance: "90 km / 1.5h", desc: "登上香山香炉峰俯瞰西山山脉，游览国家植物园深入樱桃沟水杉森林木栈道。", food: "西山春饼、老北京铜锅涮肉" },
      { day: "Day 5", title: "西山国家森林公园（鬼笑石俯瞰北京）➔ 返程", distance: "市区散步", desc: "游览西山国家森林公园，登上鬼笑石俯瞰北京城区全景，随后前往机场/高铁站返程。", food: "宫廷豌豆黄、烤鸭" }
    ]
  },
  {
    id: 2,
    theme: "imperial",
    themeText: "👑 皇家园林水系",
    title: "路线二：皇家园林与自然山水人文深游 5日游",
    subtitle: "颐和园昆明湖 · 圆明园遗址 · 故宫景山中轴全景 · 天坛古树群 · 什刹海水系",
    highlights: ["【园林巅峰】颐和园昆明湖与十七孔桥", "【遗址水域】圆明园福海湖畔", "【中轴俯瞰】景山万春亭俯瞰紫禁城", "【百年古柏】天坛森林氧吧公园", "【自然水系】什刹海银锭观山"],
    budgetPerPerson: "1,600 - 2,900",
    itinerary: [
      { day: "Day 1", title: "皇家山水理水巅峰 · 颐和园 ➔ 圆明园遗址", distance: "市区轨道/打车", desc: "游览世界文化遗产颐和园，漫步昆明湖与西堤六桥；下午游览圆明园福海湖畔与西洋楼遗址。", food: "老北京烤鸭、宫廷糕点" },
      { day: "Day 2", title: "古都中轴与山水俯瞰 · 故宫博物院 ➔ 景山公园", distance: "市区步行", desc: "游览故宫博物院紫禁城三大殿与御花园；下午登景山万春亭360度俯瞰紫禁城全景与北海水系。", food: "老北京铜锅涮肉、炙子烤肉" },
      { day: "Day 3", title: "古树群与祈天圣地 · 天坛公园 ➔ 陶然亭", distance: "市区轨道", desc: "游览天坛祈年殿与皇穹宇，漫步数千株百年古柏树林；下午游览陶然亭公园水系与名亭群。", food: "南门涮肉、爆肚冯" },
      { day: "Day 4", title: "皇家水上长廊 · 北海公园 ➔ 什刹海水系", distance: "市区步行", desc: "游览北海公园白塔与琼华岛；漫步什刹海前海、后海、西海水系，打卡银锭观山看西山余脉。", food: "烤肉季芝麻酱烧饼、护国寺小吃" },
      { day: "Day 5", title: "中山公园古柏林与社稷坛 ➔ 顺利返程", distance: "市区散步", desc: "游览中山公园社稷坛五色土与古柏林，沿着护城河水系散步后前往车站/机场返程。", food: "老北京炸酱面" }
    ]
  },
  {
    id: 3,
    theme: "meadow",
    themeText: "🌿 峡谷高山草甸",
    title: "路线三：太行京西峡谷与高山草甸生态探秘 5日游",
    subtitle: "门头沟百花山高山草甸 · 爨底下明清古村 · 石花洞地下溶洞 · 十渡拒马河峡谷",
    highlights: ["【华北植物宝库】百花山高山草甸", "【太行深山】爨底下明清四合院古村", "【地下奇观】石花洞7层大溶洞", "【喀斯特峡谷】十渡拒马河竹筏漂流", "【京西小武当】圣莲山奇峰"],
    budgetPerPerson: "1,750 - 3,100",
    itinerary: [
      { day: "Day 1", title: "北京市区 ➔ 门头沟【爨底下明清古村】", distance: "90 km / 2h", desc: "前往门头沟太行山余脉游览爨底下古村，登观景台俯瞰依山而建的明清四合院金元宝格局。", food: "爨底下压饸饹面、炸槐花" },
      { day: "Day 2", title: "门头沟【百花山高山草甸自然保护区】", distance: "50 km / 1h", desc: "全天游览海拔2000米的百花山，徒步木栈道穿越高山云海与千亩野花高山草甸避暑。", food: "高山烤全羊、柴鸡蛋" },
      { day: "Day 3", title: "门头沟 ➔ 房山【石花洞地下大溶洞】", distance: "70 km / 1.5h", desc: "游览石花洞国家地质公园地下7层溶洞，观赏天然形成的石花、石柱、石竹与地下暗河。", food: "房山饸饹面、磨盘柿干" },
      { day: "Day 4", title: "房山【十渡国家地质公园】➔ 拒马河峡谷", distance: "60 km / 1.2h", desc: "游览十渡北方喀斯特峰林峡谷，沿着拒马河峡谷自驾，体验清凉峡谷竹筏漂流。", food: "十渡拒马河虹鳟鱼、烤山羊腿" },
      { day: "Day 5", title: "圣莲山风景区 ➔ 返程", distance: "80 km / 1.5h", desc: "游览高耸入云的圣莲山峰林与天然莲花山谷地貌，下午返程。", food: "京味小吃" }
    ]
  },
  {
    id: 4,
    theme: "forest",
    themeText: "🌲 森林氧吧长城",
    title: "路线四：长城森林与氧吧四季风光 5日游",
    subtitle: "慕田峪长城 · 喇叭沟门原始森林 · 怀柔雁栖湖 · 红螺山银杏 · 银山塔林",
    highlights: ["【长城最美段】慕田峪长城（森林覆盖率96%）", "【北京北极】喇叭沟门白桦原始森林", "【山水湖光】怀柔雁栖湖环湖步道", "【松柏古塔】昌平银山塔林奇峰", "【森林公园】奥林匹克森林公园吸氧"],
    budgetPerPerson: "1,900 - 3,300",
    itinerary: [
      { day: "Day 1", title: "北京 ➔ 怀柔【慕田峪长城】", distance: "80 km / 1.5h", desc: "前往英国泰晤士报评选为中国最美长城的慕田峪段，乘缆车游览正关台与敌楼巨龙姿态。", food: "怀柔虹鳟鱼三吃、栗子焖肉" },
      { day: "Day 2", title: "怀柔【喇叭沟门原始森林公园】", distance: "110 km / 2h", desc: "游览被称为北京北极的喇叭沟门原始森林，徒步白桦林保护区、南猴顶与千亩枫叶谷。", food: "满族二八席、烤野兔" },
      { day: "Day 3", title: "怀柔【红螺山风景区】➔ 雁栖湖", distance: "45 km / 1h", desc: "游览红螺山漫步紫竹林与千亩古银杏林；下午游览雁栖湖环湖步道看水光山色。", food: "雁栖湖小鱼小虾、怀柔板栗" },
      { day: "Day 4", title: "怀柔 ➔ 昌平【银山塔林风景区】", distance: "60 km / 1.2h", desc: "驶往昌平铁壁银山，游览耸立于悬崖与松柏林间的辽代古塔群与松涛阵阵。", food: "昌平十三陵王家梯子峪烙糕宴" },
      { day: "Day 5", title: "奥林匹克森林公园 ➔ 顺利返程", distance: "市区散步", desc: "游览市区最大的天然森林氧吧公园奥林匹克森林公园湿地湖泊与仰山，随后返程。", food: "老北京炸酱面" }
    ]
  },
  {
    id: 5,
    theme: "heritage",
    themeText: "🏯 胡同历史古迹",
    title: "路线五：历史古迹与老北京胡同原汁原味 5日游",
    subtitle: "故宫博物院 · 雍和宫大佛 · 国子监古树 · 智化寺明代宫廷音乐 · 法海寺明代壁画",
    highlights: ["【绝版壁画】石景山法海寺570年明代壁画", "【宫廷音律】智化寺明代宫廷音乐活化石", "【千古学府】国子监与700年古柏树群", "【真老胡同】五道营/菊儿胡同原汁原味", "【藏传名刹】雍和宫18米整木白檀大佛"],
    budgetPerPerson: "1,550 - 2,800",
    itinerary: [
      { day: "Day 1", title: "明清帝都核心 · 正阳门 ➔ 故宫博物院 ➔ 景山", distance: "市区步行", desc: "游览天安门、正阳门与故宫博物院紫禁城；登景山万春亭看紫禁城金碧辉煌落日。", food: "四季民福烤鸭、老北京炸酱面" },
      { day: "Day 2", title: "古树古刹与儒释道 · 雍和宫 ➔ 国子监 ➔ 智化寺", distance: "市区轨道", desc: "朝圣雍和宫18米整木白檀大佛；游览国子监700年古柏；打卡智化寺聆听明代宫廷音乐。", food: "雍和宫素斋、护国寺小吃" },
      { day: "Day 3", title: "真正民俗胡同水系 · 五道营胡同 ➔ 什刹海", distance: "市区步行", desc: "漫步五道营与雨儿胡同感受老北京生活；沿什刹海水系散步看银锭观山。", food: "爆肚宛、老北京豆汁儿、铜锅涮肉" },
      { day: "Day 4", title: "明代壁画巅峰 · 石景山【法海寺】➔ 翠微山", distance: "30 km / 50m", desc: "参观法海寺沥粉贴金明代宫廷金丝壁画；游览八大处翠微山古刹森林。", food: "石景山京味小吃、烤肉" },
      { day: "Day 5", title: "天坛古柏树群 ➔ 顺利返程", distance: "市区散步", desc: "游览天坛公园回音壁与百年古柏林，感受古代祭天礼仪人文哲学后顺利返程。", food: "南门涮肉" }
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
          <span class="tag-badge duration">⏱️ 5 天精选</span>
          <span class="tag-badge theme">${route.themeText}</span>
          <span class="tag-badge season">🍃 少人造·多自然</span>
        </div>
        <h3 class="route-title">${route.title}</h3>
        <div class="route-meta-row">
          <span class="meta-item">📍 北京及京郊</span>
          <span class="meta-item">🚘 建议自驾/包车</span>
        </div>
        <div class="route-stops">
          📍 <strong>路线核心看点：</strong><br>${route.subtitle}
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
      <span>📍 行程天数: 5 天</span>
      <span>🏷️ 费用预估: ¥${route.budgetPerPerson} / 人</span>
      <span>🍃 风格: 纯自然风光 & 真历史古迹</span>
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
            <div class="tl-meta">🚗 交通/里程: ${item.distance}</div>
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
  const hotelCost = rooms * hotelRate * days;

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
