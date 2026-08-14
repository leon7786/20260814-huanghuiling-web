// TOP 6 Zhuhai Departure Self-Driving Routes Data
const routesData = [
  {
    id: 1,
    title: "路线一：粤西滨海与海南岛风情自驾线",
    subtitle: "侨乡碉楼 · 海陵岛海鲜 · 湛江赤坎古街 · 琼州海峡轮渡 · 海南滨海旅游公路",
    duration: "short",
    durationText: "6 - 8 天",
    theme: "coastal",
    themeText: "滨海风光",
    seasonText: "10月 - 次年4月",
    distance: 1500,
    tolls: 550,
    stops: "珠海 ➔ 开平碉楼 ➔ 海陵岛 ➔ 湛江赤坎 ➔ 徐闻菠萝的海 ➔ 轮渡过海 ➔ 海口/三亚",
    highlights: ["开平碉楼群", "海陵岛南海Ⅰ号", "湛江生蚝夜市", "徐闻菠萝的海", "海南环岛公路"],
    budgetPerPerson: "3,000 - 4,750",
    itinerary: [
      { day: "Day 1", title: "珠海 ➔ 江门开平 ➔ 阳江海陵岛", distance: "240 km / 3h", desc: "早上沿西部沿海高速前往开平打卡自力村碉楼与立园，享用黄鳝饭，下午驶入海陵岛在马尾岛看落日。", food: "开平黄鳝饭、阳江一夜蚝、海陵岛海鲜" },
      { day: "Day 2", title: "海陵岛深度游 ➔ 湛江市区", distance: "230 km / 2.5h", desc: "参观南海Ⅰ号宋代沉船博物馆，打卡北洛秘境悬崖栈道，下午驶往湛江逛赤坎老街。", food: "湛江炭烤生蚝、湛江白切鸡、沙虫粥" },
      { day: "Day 3", title: "湛江 ➔ 徐闻菠萝的海 ➔ 乘船过海 ➔ 海口", distance: "160 km + 轮渡2h", desc: "打卡徐闻万亩七彩菠萝田与风力发电机群，前往徐闻港乘大轮渡跨越琼州海峡抵达海口。", food: "海南清补凉、海南粉、糟粕醋火锅" },
      { day: "Day 4", title: "海口 ➔ 文昌环岛公路 ➔ 琼海博鳌", distance: "150 km / 2h", desc: "驶上文昌段滨海旅游公路，打卡木兰湾灯塔、铜鼓岭俯瞰月亮湾全景。", food: "文昌鸡、抱罗粉、嘉积鸭" },
      { day: "Day 5", title: "琼海 ➔ 万宁日月湾 ➔ 三亚", distance: "180 km / 2.5h", desc: "打卡万宁日月湾冲浪圣地与石梅湾最美公路，下午驶达三亚观赏落日晚霞。", food: "三亚海鲜大排档、冲浪椰子水" },
      { day: "Day 6-7", title: "三亚深度游 / 自驾返程珠海", distance: "根据选择", desc: "选择在三亚托运车辆搭飞机回，或沿环岛高速与沈海高速自驾返程珠海。", food: "文昌鸡、海鲜烧烤" }
    ]
  },
  {
    id: 2,
    title: "路线二：粤东山海与潮汕美食史诗线",
    subtitle: "双月湾海龟湾 · 汕尾风车岛 · 潮汕牛肉火锅 · 南澳跨海大桥 · 漳州火山岛",
    duration: "short",
    durationText: "5 - 7 天",
    theme: "food",
    themeText: "饕餮美食",
    seasonText: "全年皆宜",
    distance: 1200,
    tolls: 600,
    stops: "珠海 ➔ 惠州双月湾 ➔ 汕尾遮浪角 ➔ 汕头小公园 ➔ 潮州牌坊街 ➔ 南澳岛 ➔ 厦门",
    highlights: ["双月湾观景台", "红海湾风车岛", "潮汕牛肉火锅/生腌", "南澳大桥", "广济桥灯光秀"],
    budgetPerPerson: "2,470 - 4,225",
    itinerary: [
      { day: "Day 1", title: "珠海 ➔ 惠州双月湾 / 海龟湾", distance: "230 km / 3h", desc: "经深中通道/虎门大桥驶往双月湾，游览海龟湾网红悬崖栈道，登上观景台看双湾奇观。", food: "惠东海鲜、窑鸡、海胆炒饭" },
      { day: "Day 2", title: "双月湾 ➔ 汕尾风车岛 ➔ 汕头", distance: "250 km / 3.5h", desc: "游览汕尾遮浪角与风车岛海上风车公路，下午驶往汕头打卡小公园骑楼，晚上大吃潮汕牛肉火锅。", food: "潮汕牛肉火锅、生腌膏蟹、汕尾菜茶" },
      { day: "Day 3", title: "汕头 ➔ 南澳跨海大桥 ➔ 南澳岛环岛", distance: "70 km / 环岛60km", desc: "飞驰在11公里南澳大桥上，打卡长山尾红灯塔、青澳湾自然之门与三眼井。", food: "南澳海胆包、紫菜炒饭、白灼鱿鱼" },
      { day: "Day 4", title: "南澳岛 ➔ 潮州古城（牌坊街/广济桥）", distance: "90 km / 1.5h", desc: "驱车前往潮州，逛牌坊街22座明清石牌坊，游开元寺与广济桥，晚上看江边灯光秀。", food: "潮州卤鹅、官塘牛肉火锅、鸭母捻" },
      { day: "Day 5-6", title: "潮州 ➔ 漳州火山岛 ➔ 厦门 / 返程", distance: "220 km / 2.5h", desc: "驶入福建游览漳州火山岛粉色城堡与厦门环岛路，随后走沈海高速返回珠海。", food: "厦门沙茶面、漳州卤面、海蛎煎" }
    ]
  },
  {
    id: 3,
    title: "路线三：桂林山水与黔东南风情史诗线",
    subtitle: "黄姚古镇 · 兴坪漓江竹筏 · 柳州螺蛳粉夜市 · 肇兴侗寨鼓楼 · 荔波小七孔 · 千户苗寨",
    duration: "medium",
    durationText: "7 - 9 天",
    theme: "karst",
    themeText: "山水民族",
    seasonText: "4月 - 10月",
    distance: 1800,
    tolls: 900,
    stops: "珠海 ➔ 肇庆七星岩 ➔ 贺州黄姚 ➔ 阳朔/桂林 ➔ 柳州 ➔ 肇兴侗寨 ➔ 小七孔 ➔ 苗寨 ➔ 贵阳",
    highlights: ["20元人民币取景地", "柳州螺蛳粉夜市", "肇兴侗族大歌", "荔波翡翠小七孔", "千户苗寨万家灯火"],
    budgetPerPerson: "3,575 - 5,900",
    itinerary: [
      { day: "Day 1", title: "珠海 ➔ 肇庆七星岩 ➔ 贺州黄姚古镇", distance: "340 km / 4h", desc: "早上驶往肇庆游览七星岩，下午直达黄姚古镇，漫步青石板路与百年龙爪榕。", food: "肇庆裹蒸粽、黄姚豆豉鸡、黄精酒" },
      { day: "Day 2", title: "黄姚古镇 ➔ 阳朔兴坪古镇 ➔ 十里画廊", distance: "120 km / 1.5h", desc: "体验漓江竹筏打卡20元人民币图景，自驾阳朔十里画廊与遇龙河，晚上逛阳朔西街。", food: "阳朔啤酒鱼、荔浦芋头扣肉、田螺酿" },
      { day: "Day 3", title: "阳朔 ➔ 桂林象鼻山 ➔ 柳州螺蛳粉夜市", distance: "160 km / 2h", desc: "打卡桂林象鼻山，午餐吃正宗卤菜米粉，下午驶往柳州登上马鞍山看夜景，夜市连吃螺蛳粉。", food: "正宗桂林米粉、柳州螺蛳粉、鸭脚煲" },
      { day: "Day 4", title: "柳州 ➔ 贵州肇兴侗寨", distance: "220 km / 3h", desc: "驶入贵州黔东南，游览全国最大侗寨，打卡五座大鼓楼与风雨桥，晚听侗族大歌。", food: "侗家酸汤鱼、烤香猪、油茶" },
      { day: "Day 5", title: "肇兴侗寨 ➔ 荔波小七孔自然保护区", distance: "180 km / 2.5h", desc: "游览地球绿宝石小七孔古桥、拉雅瀑布与卧龙潭翡翠蓝水。", food: "荔波豆花烤鱼、水族酸汤鱼" },
      { day: "Day 6", title: "荔波 ➔ 西江千户苗寨", distance: "200 km / 2.5h", desc: "抵达千户苗寨体验长桌宴与高山流水敬酒，观景台看万家灯火闪耀山谷。", food: "苗家酸汤牛肉、鼓藏肉、竹筒饭" },
      { day: "Day 7-8", title: "西江苗寨 ➔ 贵阳甲秀楼 ➔ 返程珠海", distance: "根据选择", desc: "前往贵阳游览甲秀楼与黔灵山看猕猴，随后走厦蓉高速返回珠海。", food: "贵阳丝娃娃、肠旺面" }
    ]
  },
  {
    id: 4,
    title: "路线四：粤北峰林与湘赣丹霞奇观线",
    subtitle: "英西峰林 · 连州地下河 · 丹霞山日出 · 郴州高椅岭 · 东江湖雾漫 · 赣州客家围屋",
    duration: "short",
    durationText: "4 - 6 天",
    theme: "karst",
    themeText: "山水民族",
    seasonText: "3月 - 11月",
    distance: 1200,
    tolls: 650,
    stops: "珠海 ➔ 清远英德 ➔ 连州地下河 ➔ 韶关丹霞山 ➔ 郴州高椅岭 ➔ 东江湖 ➔ 赣州围屋",
    highlights: ["英西峰林走廊", "连州地下河溶洞", "丹霞山阳元石/日出", "高椅岭巨龙脊背", "东江湖雾漫小东江"],
    budgetPerPerson: "2,325 - 3,750",
    itinerary: [
      { day: "Day 1", title: "珠海 ➔ 清远英德英西峰林 ➔ 黄花镇", distance: "260 km / 3.5h", desc: "前往清远英德游览洞天仙境天坑溶洞，自驾英西峰林公路打卡茶园落日。", food: "清远麻鸡、九龙豆腐、英德红茶宴" },
      { day: "Day 2", title: "英德 ➔ 连州地下河 ➔ 韶关丹霞山", distance: "220 km / 3h", desc: "游览连州地下河奇观，下午驶往韶关丹霞山打卡阳元山自然奇观。", food: "连州东陂腊味、韶关爆炒山坑螺" },
      { day: "Day 3", title: "丹霞山日出 ➔ 郴州高椅岭奇观", distance: "150 km / 2h", desc: "清晨登长老峰看丹霞云海日出，下午驶往湖南郴州徒步高椅岭巨龙脊背。", food: "郴州栖凤渡鱼粉、东江湖游水三文鱼" },
      { day: "Day 4", title: "雾漫小东江 ➔ 赣州龙南客家围屋", distance: "200 km / 2.5h", desc: "清晨观赏渔夫撒网与雾漫小东江仙境，下午前往江西赣州参观关西新围客家城堡。", food: "龙南客家酿豆腐、赣州小炒鱼" },
      { day: "Day 5-6", title: "赣州江南宋城 ➔ 沿大广高速返程珠海", distance: "450 km / 5h", desc: "游览赣州宋代古城墙与古浮桥，走大广高速直达返回珠海。", food: "客家黄黄酒、三杯鸡" }
    ]
  },
  {
    id: 5,
    title: "路线五：珠海直达彩云之南与滇藏史诗线",
    subtitle: "洱海环海路 · 束河古城 · 独克宗转经筒 · 梅里雪山日照金山 · 怒江72拐 · 羊湖 · 拉萨",
    duration: "long",
    durationText: "12 - 16 天",
    theme: "epic",
    themeText: "史诗进藏",
    seasonText: "4-6月 / 9-11月",
    distance: 3800,
    tolls: 950,
    stops: "珠海 ➔ 百色 ➔ 昆明滇池 ➔ 大理洱海 ➔ 丽江 ➔ 香格里拉 ➔ 德钦梅里 ➔ 怒江72拐 ➔ 林芝 ➔ 拉萨",
    highlights: ["洱海环海东路", "独克宗全球最大转经筒", "梅里雪山日照金山", "怒江72拐天路", "拉萨布达拉宫 & 羊湖"],
    budgetPerPerson: "8,200 - 13,500",
    itinerary: [
      { day: "Day 1", title: "珠海 ➔ 广西百色市", distance: "720 km / 8h", desc: "第一天跨省长途拉练，沿广昆高速途径梧州与南宁直达百色。", food: "南宁老友粉、百色卷筒粉" },
      { day: "Day 2", title: "百色 ➔ 云南昆明（滇池/海埂大坝）", distance: "550 km / 6.5h", desc: "跨越云南省界抵达春城昆明，游览滇池海埂大坝享用过桥米线。", food: "云南过桥米线、汽锅鸡" },
      { day: "Day 3", title: "昆明 ➔ 大理（环洱海东路 / 双廊古镇）", distance: "330 km / 4h", desc: "驶达大理，驾车自驾环海东路与理想邦，在双廊古镇看洱海晚霞。", food: "大理酸辣鱼、喜洲破酥粑粑" },
      { day: "Day 4", title: "大理 ➔ 丽江大研/束河古镇", distance: "180 km / 2.5h", desc: "前往丽江漫步束河古镇与木府，晚上打卡四方街与腊排骨火锅。", food: "丽江腊排骨火锅、黑山羊火锅" },
      { day: "Day 5", title: "丽江 ➔ 香格里拉（松赞林寺/独克宗）", distance: "180 km / 3.5h", desc: "途经虎跳峡抵达香格里拉（3300m），游览松赞林寺与转动独克宗大转经筒。", food: "藏式牦牛肉火锅、酥油茶" },
      { day: "Day 6", title: "香格里拉 ➔ 德钦飞来寺（看梅里雪山）", distance: "170 km / 3.5h", desc: "翻越白马雪山垭口（4290m），抵达飞来寺入住观景酒店等日照金山。", food: "藏式松茸炖鸡、牦酸奶" },
      { day: "Day 7", title: "飞来寺日照金山 ➔ 芒康（入藏汇入318）", distance: "220 km / 5.5h", desc: "观赏卡瓦格博峰日照金山，进入西藏打卡盐井古盐田与加加面，抵达芒康。", food: "盐井加加面、藏式手抓羊肉" },
      { day: "Day 8", title: "芒康 ➔ 怒江72拐 ➔ 八宿", distance: "360 km / 7.5h", desc: "翻越东达山（5137m）与业拉山（4658m），挑战震惊世界的怒江72拐。", food: "川菜大排档、石锅鸡" },
      { day: "Day 9", title: "八宿 ➔ 然乌湖 ➔ 米堆冰川 ➔ 波密", distance: "220 km / 4.5h", desc: "游览然乌湖圣湖倒影与米堆冰川巨大冰瀑布，驶入波密岗云杉林。", food: "波密藏猪肉、野生菌炖鸡" },
      { day: "Day 10", title: "波密 ➔ 鲁朗小镇 ➔ 林芝（八一镇）", distance: "230 km / 4.5h", desc: "穿过通麦特大桥，在鲁朗享用墨脱石锅鸡，翻越色季拉山远眺南迦巴瓦峰。", food: "鲁朗石锅鸡、藏香猪" },
      { day: "Day 11-12", title: "林芝 ➔ 羊卓雍措 ➔ 终点拉萨", distance: "400 km / 4.5h", desc: "沿林拉高速驶达圣城拉萨，游览羊卓雍措碧蓝圣湖，在布达拉宫广场圆梦！", food: "光明港琼甜茶、藏家炸羊排" }
    ]
  },
  {
    id: 6,
    title: "路线六：珠海直达拉萨·珠峰·阿里30天终极环线",
    subtitle: "滇藏进/青藏出 · 布达拉宫 · 珠峰大本营 · 冈仁波齐/古格王朝 · 纳木措 · 可可西里 · 青海湖",
    duration: "epic30",
    durationText: "30 天大满贯",
    theme: "epic",
    themeText: "史诗进藏",
    seasonText: "5-6月 / 9-10月",
    distance: 8200,
    tolls: 2100,
    stops: "珠海 ➔ 滇藏线 ➔ 拉萨 ➔ 羊湖 ➔ 珠峰大本营 ➔ 冈仁波齐 ➔ 纳木措 ➔ 青藏线 ➔ 青海湖 ➔ 珠海",
    highlights: ["珠穆朗玛峰大本营", "神山冈仁波齐/扎达土林", "羊湖/纳木措/玛旁雍措", "可可西里无人区边缘", "青海湖/塔尔寺/甘南"],
    budgetPerPerson: "14,300 - 23,150",
    itinerary: [
      { day: "Day 1-7", title: "第一阶段：珠海出发 ➔ 滇藏线阶梯进藏拉练", distance: "2350 km", desc: "途径广西百色、昆明滇池、大理洱海、丽江古城、香格里拉独克宗、德钦飞来寺（看梅里日照金山），汇入芒康G318。", food: "云南过桥米线、大理酸辣鱼、藏式牦牛肉火锅、盐井加加面" },
      { day: "Day 8-12", title: "第二阶段：川藏/滇藏精华段 ➔ 圣城拉萨", distance: "1390 km", desc: "挑战怒江72拐，游览然乌湖、米堆冰川、波密岗云杉林，在鲁朗吃石锅鸡，沿林拉高速直达拉萨。", food: "鲁朗石锅鸡、波密藏香猪、拉萨甜茶" },
      { day: "Day 13-14", title: "第三阶段：拉萨朝圣 ➔ 羊卓雍措 ➔ 日喀则", distance: "350 km", desc: "游览布达拉宫、大昭寺、八廓街。次日翻越冈巴拉山口打卡羊湖与满拉水库，抵达日喀则。", food: "拉萨藏家炸羊排、酸奶蛋糕" },
      { day: "Day 15-16", title: "第四阶段：日喀则 ➔ 加乌拉山口 ➔ 珠峰大本营 ➔ 萨嘎", distance: "640 km", desc: "参观扎什伦布寺，翻越加乌拉山口远眺5座8000米雪山，宿珠峰大本营观日出星空，途径佩枯措至萨嘎。", food: "川菜大排档、高原石锅鸡" },
      { day: "Day 17-20", title: "第五阶段：阿里神山圣湖（冈仁波齐/古格王朝）", distance: "1790 km", desc: "游览圣湖玛旁雍措与鬼湖拉昂措，仰望神山冈仁波齐，穿越扎达土林探秘千古古格王朝遗址。", food: "藏式手抓羊肉、风干牦牛肉" },
      { day: "Day 21-25", title: "第六阶段：纳木措 ➔ 青藏线(G109) ➔ 可可西里 ➔ 青海湖", distance: "1860 km", desc: "游览纳木措，翻越唐古拉山口(5231m)，穿越可可西里无人区边缘看藏羚羊，打卡察尔汗与青海湖。", food: "手抓羊肉、青海酿皮、牦酸奶" },
      { day: "Day 26-30", title: "第七阶段：甘南拉卜楞寺 ➔ 成都 ➔ 荣耀返程珠海", distance: "2530 km", desc: "朝圣塔尔寺与拉卜楞寺，途径若尔盖草原降至成都吃火锅休整，走厦蓉与广珠西线高速回珠海。", food: "四川麻辣火锅、成都小吃、贵州丝娃娃" }
    ]
  }
];

// App Init
document.addEventListener("DOMContentLoaded", () => {
  renderRoutes(routesData);
  initFiltersAndSearch();
  initModal();
  initCalculator();
  initChecklist();
});

// Render Route Cards
function renderRoutes(routes) {
  const container = document.getElementById("routesContainer");
  if (!container) return;

  if (routes.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">没有找到符合搜索条件的自驾路线</div>`;
    return;
  }

  container.innerHTML = routes.map(route => `
    <div class="route-card" onclick="openRouteModal(${route.id})">
      <div>
        <div class="route-badge-row">
          <span class="tag-badge duration">⏱️ ${route.durationText}</span>
          <span class="tag-badge theme">🏷️ ${route.themeText}</span>
          <span class="tag-badge season">☀️ ${route.seasonText}</span>
        </div>
        <h3 class="route-title">${route.title}</h3>
        <div class="route-meta-row">
          <span class="meta-item">🛣️ 约 ${route.distance} 公里</span>
          <span class="meta-item">🚘 珠海离珠</span>
        </div>
        <div class="route-stops">
          📍 <strong>路线途经站点：</strong><br>${route.stops}
        </div>
      </div>
      <div class="route-card-footer">
        <div class="budget-estimate">人均预估: <span class="budget-num">¥${route.budgetPerPerson}</span></div>
        <button class="btn-detail">查看行程明细 ➔</button>
      </div>
    </div>
  `).join('');
}

// Filter and Search Logic
function initFiltersAndSearch() {
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let currentDuration = "all";
  let currentTheme = "all";
  let searchText = "";

  function applyFilters() {
    const filtered = routesData.filter(r => {
      const matchDuration = currentDuration === "all" || r.duration === currentDuration;
      const matchTheme = currentTheme === "all" || r.theme === currentTheme;
      const matchSearch = !searchText || 
        r.title.includes(searchText) || 
        r.subtitle.includes(searchText) || 
        r.stops.includes(searchText) || 
        r.highlights.some(h => h.includes(searchText));
      return matchDuration && matchTheme && matchSearch;
    });

    renderRoutes(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchText = e.target.value.trim();
      applyFilters();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const group = btn.dataset.filter;
      const val = btn.dataset.value;

      btn.parentElement.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (group === "duration") currentDuration = val;
      if (group === "theme") currentTheme = val;

      applyFilters();
    });
  });
}

// Modal View
function openRouteModal(id) {
  const route = routesData.find(r => r.id === id);
  if (!route) return;

  const modal = document.getElementById("routeModal");
  const modalHeader = document.getElementById("modalHeader");
  const modalBody = document.getElementById("modalBody");

  modalHeader.innerHTML = `
    <h2 class="modal-title">${route.title}</h2>
    <p class="modal-subtitle">${route.subtitle}</p>
    <div style="display: flex; gap: 16px; margin-top: 14px; font-size: 13px; color: var(--primary);">
      <span>📍 路线总长: 约 ${route.distance} km</span>
      <span>⏱️ 规划天数: ${route.durationText}</span>
      <span>🏷️ 费用预估: ¥${route.budgetPerPerson} / 人</span>
    </div>
  `;

  modalBody.innerHTML = `
    <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 20px; color: var(--text-main);">🗓️ 每日详细行程与地道美食指南</h3>
    <div class="timeline">
      ${route.itinerary.map(item => `
        <div class="timeline-item">
          <div class="timeline-day">${item.day}</div>
          <div class="timeline-content">
            <div class="tl-title">${item.title}</div>
            <div class="tl-meta">🚗 里程/车程: ${item.distance}</div>
            <div class="tl-desc">${item.desc}</div>
            <div class="tl-food">🍜 推荐体验美食: ${item.food}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function initModal() {
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

// Calculator Logic
function initCalculator() {
  const selectRoute = document.getElementById("calcRouteSelect");
  const selectEngine = document.getElementById("calcEngine");
  const inputPeople = document.getElementById("calcPeople");
  const selectHotel = document.getElementById("calcHotel");
  const selectFood = document.getElementById("calcFood");

  const elements = [selectRoute, selectEngine, inputPeople, selectHotel, selectFood];
  elements.forEach(el => {
    if (el) {
      el.addEventListener("change", calculateBudget);
      if (el.tagName === "INPUT") el.addEventListener("input", calculateBudget);
    }
  });

  calculateBudget();
}

function calculateBudget() {
  const selectRoute = document.getElementById("calcRouteSelect");
  const selectEngine = document.getElementById("calcEngine");
  const inputPeople = document.getElementById("calcPeople");
  const selectHotel = document.getElementById("calcHotel");
  const selectFood = document.getElementById("calcFood");

  if (!selectRoute) return;

  const selectedOpt = selectRoute.options[selectRoute.selectedIndex];
  let distance = parseFloat(selectRoute.value) || 1200;
  let tolls = parseFloat(selectedOpt.dataset.tolls) || 600;
  let days = parseFloat(selectedOpt.dataset.days) || 6;

  const people = Math.max(1, parseInt(inputPeople.value) || 2);
  const hotelRate = parseFloat(selectHotel.value) || 550;
  const foodRate = parseFloat(selectFood.value) || 220;
  const engineType = selectEngine.value;

  // Energy
  let fuelCost = 0;
  if (engineType === "gas") {
    fuelCost = (distance / 100) * 8.5 * 8.2;
  } else if (engineType === "ev") {
    fuelCost = (distance / 100) * 16.0 * 1.2;
  } else if (engineType === "phev") {
    fuelCost = (distance / 100) * 4.5 * 8.2;
  }

  // Hotel rooms (2 people per room)
  const rooms = Math.ceil(people / 2);
  const hotelCost = rooms * hotelRate * days;
  const foodCost = people * foodRate * days;

  const totalCost = fuelCost + tolls + hotelCost + foodCost;
  const perPerson = totalCost / people;

  // Render UI
  document.getElementById("totalAmount").innerText = `¥ ${Math.round(totalCost).toLocaleString()}`;
  document.getElementById("perPersonAmount").innerText = `¥ ${Math.round(perPerson).toLocaleString()}`;
  document.getElementById("peopleCountText").innerText = people;

  document.getElementById("bdFuel").innerText = `¥ ${Math.round(fuelCost).toLocaleString()}`;
  document.getElementById("bdTolls").innerText = `¥ ${Math.round(tolls).toLocaleString()}`;
  document.getElementById("bdHotel").innerText = `¥ ${Math.round(hotelCost).toLocaleString()}`;
  document.getElementById("bdFood").innerText = `¥ ${Math.round(foodCost).toLocaleString()}`;

  // Update Progress Bar
  const fuelPct = (fuelCost / totalCost) * 100;
  const tollsPct = (tolls / totalCost) * 100;
  const hotelPct = (hotelCost / totalCost) * 100;
  const foodPct = (foodCost / totalCost) * 100;

  document.getElementById("barFuel").style.width = `${fuelPct}%`;
  document.getElementById("barTolls").style.width = `${tollsPct}%`;
  document.getElementById("barHotel").style.width = `${hotelPct}%`;
  document.getElementById("barFood").style.width = `${foodPct}%`;
}

// Checklist LocalStorage Persistence
function initChecklist() {
  const checkboxes = document.querySelectorAll(".chk-item");
  
  checkboxes.forEach(chk => {
    const saved = localStorage.getItem(`zhuhai_chk_${chk.id}`);
    if (saved === "true") chk.checked = true;

    chk.addEventListener("change", () => {
      localStorage.setItem(`zhuhai_chk_${chk.id}`, chk.checked);
    });
  });
}
