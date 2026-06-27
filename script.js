const STORE_KEY = "freelanceGearLearning_v01";

const categories = ["全部", "連絡", "図解", "開発", "納品", "書庫", "AI指揮"];

const gears = [
  {
    id: "slack",
    icon: "💬",
    name: "Slack",
    label: "作業現場の無線",
    category: "連絡",
    summary: "チームの会話、連絡、共有、確認を流す場所。メールより現場っぽい。",
    why: "フリーランスは一人でも、相手の現場に入ると連絡経路が必要になる。Slackを知っているだけで、チーム語の入口に立てる。",
    first: "まずは公式アプリを入れる。次に、自分だけの練習用メモとして『#今日の作業』みたいなチャンネルの意味を理解する。",
    usecase: "納品URL、スクショ、質問、修正依頼、進捗を短く投げる。長文作品ではなく現場の無線として使う。",
    mission: "5分だけ公式ページを開き、チャンネル、DM、スレッド、リアクションの4語だけ見る。",
    links: [
      ["Slack iOS公式", "https://slack.com/downloads/ios"],
      ["Slack Mac公式", "https://slack.com/downloads/mac"],
      ["Slack Windows公式", "https://slack.com/downloads/windows"]
    ]
  },
  {
    id: "miro",
    icon: "🧱",
    name: "Miro",
    label: "壁一面の作戦ボード",
    category: "図解",
    summary: "付箋、矢印、図解で頭の中を他人が見える板にする道具。",
    why: "ヒデロック脳内の配線を、相手が見える地上図面に変換する場所。AI時代の共同作戦机。",
    first: "空白ボードを1枚作り、付箋を6枚置く。誰が困る、何に困る、押すボタン、AIに渡すもの、返るもの、完了形。",
    usecase: "AIリモコンや訪看トリセツを1枚の流れにする。相手に『これです』と見せるための作戦図。",
    mission: "今日のアプリ案を6付箋だけにする。きれいに作らない。置けたら勝ち。",
    links: [
      ["Miro公式アプリ", "https://miro.com/apps/"],
      ["Miroデスクトップヘルプ", "https://help.miro.com/hc/en-us/articles/360017572854-Desktop-app"]
    ]
  },
  {
    id: "github",
    icon: "🐙",
    name: "GitHub",
    label: "作品の倉庫と作業日誌",
    category: "開発",
    summary: "コードを置き、変更履歴を残し、GitHub Pagesで公開URLにする場所。",
    why: "作品がURLになると、人に見せられる。コミットは保存ボタンではなく制作日誌。",
    first: "新しいリポジトリを1つ作る。index.html、style.css、script.jsを置く。Pagesをオンにする。",
    usecase: "URL、README、履歴、公開ページを納品パックに入れる。iPhone確認とChromePC編集を分ける。",
    mission: "READMEに『これは何のための道具か』を3行で書く。",
    links: [
      ["GitHub公式", "https://github.com/"],
      ["GitHub Desktop公式", "https://desktop.github.com/download/"],
      ["GitHub iOS公式", "https://apps.apple.com/jp/app/github/id1477376905"]
    ]
  },
  {
    id: "vscode",
    icon: "🧑‍💻",
    name: "VS Code",
    label: "コード作業机",
    category: "開発",
    summary: "HTML/CSS/JSを編集するための作業机。AI、Git、拡張機能も使える。",
    why: "全部を手打ちするためではなく、AIが作ったファイルを確認して直すための机として使う。",
    first: "まず開く対象を1フォルダに絞る。index.htmlを開いてタイトルだけ変更して保存する。",
    usecase: "GitHubに上げる前の微修正、文言変更、CSS調整、ファイル確認。",
    mission: "index.htmlのtitleを変更して、ブラウザで見た目が変わるか確認する。",
    links: [
      ["VS Code公式ダウンロード", "https://code.visualstudio.com/download"]
    ]
  },
  {
    id: "slides",
    icon: "📊",
    name: "Google Slides",
    label: "成果物の紙芝居",
    category: "納品",
    summary: "提案、説明、発表を3枚から作れる紙芝居。仕事語へ翻訳する場所。",
    why: "動くアプリだけでは伝わらない時に、相手の理解用に順番を作れる。",
    first: "3枚だけ作る。1枚目は問題、2枚目は画面、3枚目は渡すもの。",
    usecase: "営業資料、提案、進捗報告、納品説明。Miroより整った見せ方。",
    mission: "自分のアプリを3枚にする。問題、解決、URL。これだけでいい。",
    links: [
      ["Google Slides公式", "https://workspace.google.com/products/slides/"],
      ["Google Slidesを作成", "https://docs.google.com/presentation/create"]
    ]
  },
  {
    id: "canva",
    icon: "🎨",
    name: "Canva",
    label: "見せる紙芝居工房",
    category: "納品",
    summary: "サムネ、LP画像、スライド、説明カードを作る道具。見た目の包装係。",
    why: "初見の人には、構造だけでなく入口の見た目も必要。Geminiの外向き説明と相性がいい。",
    first: "テンプレを1つ選んで、タイトル、スクショ、3行説明だけ入れる。作り込みすぎない。",
    usecase: "noteサムネ、提案スライド、アプリ紹介カード、SNS用画像。",
    mission: "アプリ名、スクショ、1行説明だけ入れた紹介カードを作る。",
    links: [
      ["Canva公式ダウンロード", "https://www.canva.com/download/windows/"],
      ["Canva iOS公式", "https://apps.apple.com/us/app/canva-ai-video-photo-editor/id897446215"]
    ]
  },
  {
    id: "figma",
    icon: "🧩",
    name: "Figma",
    label: "画面設計図",
    category: "図解",
    summary: "UI画面、部品、コメント、プロトタイプを共有するデザイン道具。",
    why: "本格デザイナーにならなくても、画面の構造をチームに見せる時に強い。",
    first: "1画面だけ再現する。ボタン、見出し、説明文。全部ではなく1枚。",
    usecase: "UI案、画面遷移、コメント相談、デザイン共有。",
    mission: "今のアプリのトップ画面を四角と文字だけで再現する。",
    links: [
      ["Figma公式ダウンロード", "https://www.figma.com/downloads/"],
      ["Figma iOS公式", "https://apps.apple.com/us/app/figma/id1152747299"]
    ]
  },
  {
    id: "drive",
    icon: "🗄️",
    name: "Google Drive",
    label: "書庫",
    category: "書庫",
    summary: "資料、スクショ、PDF、スライド、納品物を置くクラウド書庫。",
    why: "部屋で一人で作るほど、ファイルが散らばる。書庫があると納品時に迷子が減る。",
    first: "案件ごとに1フォルダを作る。01_素材、02_スクショ、03_納品、の3つで十分。",
    usecase: "相手に共有リンクを渡す。スクショやPDFをまとめる。AIに見せる材料置き場にする。",
    mission: "『装備庫_練習』フォルダを作り、今日のスクショを1枚入れる。",
    links: [
      ["Google Drive公式", "https://www.google.com/drive/download/"],
      ["Google Drive iOS公式", "https://apps.apple.com/jp/app/google-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96-%E5%AE%89%E5%85%A8%E3%81%AA%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3-%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8/id507874739"]
    ]
  },
  {
    id: "ai-team",
    icon: "🤖",
    name: "AI制作班",
    label: "指揮と翻訳",
    category: "AI指揮",
    summary: "ChatGPT、Gemini、Copilot、Claudeを役割で使い分ける。全部に同じ質問をしない。",
    why: "AIに作らせる時代でも、役割分担がないとAIちゃんこ鍋になる。誰に何を頼むかが仕事の芯。",
    first: "明智君で構造、Geminiで外向き説明、Copilotで実装相談、Claudeで監査。この順番を1回だけ回す。",
    usecase: "企画、仕様、コード、レビュー、納品説明の分業。ユーザーはプロトタイプ指揮者。",
    mission: "同じアプリを4AIに投げず、まず明智君に『構造だけ』頼む。",
    links: [
      ["ChatGPT", "https://chatgpt.com/"],
      ["Gemini", "https://gemini.google.com/"],
      ["GitHub Copilot", "https://github.com/features/copilot"],
      ["Claude", "https://claude.ai/"]
    ]
  }
];


const roadmapSteps = [
  {
    id: "step0",
    icon: "🏗️",
    num: "0",
    title: "地下1階：入口",
    body: "AIと仕事する前の準備。iPhone操作、道具名、共有＝鍵の概念を知る。",
    view: "viewTour"
  },
  {
    id: "step1",
    icon: "👁️",
    num: "1",
    title: "見学",
    body: "ホワイトカラーAI仕事の1日の流れを知る。",
    view: "viewTour"
  },
  {
    id: "step2",
    icon: "🔑",
    num: "2",
    title: "共有",
    body: "閲覧権限、コメント権限、編集権限、公開URL、スクショ共有、画面共有を理解する。",
    view: "viewShare"
  },
  {
    id: "step3",
    icon: "🧰",
    num: "3",
    title: "装備",
    body: "Slack、Miro、Google Slides、GitHub Pages、Google Driveなどの役割を理解する。",
    view: "viewGear"
  },
  {
    id: "step4",
    icon: "📍",
    num: "4",
    title: "今日",
    body: "iPhoneだけでできる小ミッションを実行する。",
    view: "viewToday"
  },
  {
    id: "step5",
    icon: "📦",
    num: "5",
    title: "納品",
    body: "URL、スクショ、README、説明文、共有権限、作業ログをまとめる。",
    view: "viewDelivery"
  },
  {
    id: "step6",
    icon: "🕵️",
    num: "6",
    title: "監督",
    body: "AIの出力を貼る前に、完全版か差分か、上書きか貼り足しか、どのファイルかを確認する。",
    view: "viewPrompt"
  },
  {
    id: "step7",
    icon: "🎯",
    num: "7",
    title: "ゴール",
    body: "説明できて、再現できて、納品できる人になる。",
    view: "viewPrompt"
  }
];

const tourSlides = [
  {
    time: "AM 9:00",
    title: "朝：Slackで連絡を見る",
    body: "チームのチャットで、今日の連絡、質問、修正依頼を確認する。メールの山ではなく、現場の無線を見る時間。",
    tools: ["Slack"],
    relatedGearIds: ["slack"],
    note: "ここで覚える概念：連絡、共有、確認。"
  },
  {
    time: "AM 10:30",
    title: "午前：Miroで作戦ボードを見る",
    body: "付箋、矢印、図で、頭の中の流れを見える場所に置く。チームで見る黒板、ひとりでも使える作戦机。",
    tools: ["Miro"],
    relatedGearIds: ["miro"],
    note: "ここで覚える概念：図にする、流れを見せる。"
  },
  {
    time: "PM 1:00",
    title: "昼：仕様や説明文を見る",
    body: "Googleドキュメントのような文書で、何を作るか、誰の何を軽くするか、確認してほしい点を読む。",
    tools: ["Google Docs", "Google Drive"],
    relatedGearIds: ["drive"],
    note: "ここで覚える概念：文書、仕様、共有リンク。"
  },
  {
    time: "PM 3:00",
    title: "午後：スライドで順番に説明する",
    body: "Google SlidesやCanvaで、問題、画面、渡すものを紙芝居にする。相手の脳に順番通り見せる時間。",
    tools: ["Google Slides", "Canva"],
    relatedGearIds: ["slides", "canva"],
    note: "ここで覚える概念：プレゼン、説明、見せ方。"
  },
  {
    time: "PM 5:00",
    title: "夕方：URLで成果物を共有する",
    body: "GitHub Pagesの公開URLやGoogle Driveのリンクを送る。ファイルを投げるより、見える場所への入口を渡す感覚。",
    tools: ["GitHub", "Google Drive"],
    relatedGearIds: ["github", "drive"],
    note: "ここで覚える概念：URL、閲覧、共有。"
  },
  {
    time: "PM 6:00",
    title: "最後：納品パックにまとめる",
    body: "公開URL、スクショ3枚、README 3行、説明文をセットにする。作品を仕事っぽく渡すための最小核。",
    tools: ["GitHub", "Google Drive", "Slack"],
    relatedGearIds: ["github", "drive", "slack"],
    note: "ここで覚える概念：納品、確認、次の修正。"
  }
];


const shareModes = [
  {
    id: "private",
    icon: "🔒",
    title: "自分だけ",
    body: "相手は見られない。リンクを知っていても、権限がなければ部屋の外で止まる。",
    example: "Google DriveやDocsで『制限付き』になっている状態。まず自分だけで作る時の鍵。",
    demoUrl: "https://example.com/freelance-gear/private"
  },
  {
    id: "view",
    icon: "👀",
    title: "閲覧権限",
    body: "相手は見るだけ。中身を勝手に直せない。確認してほしい時のいちばん基本の共有。",
    example: "『これ見ておいてください』の鍵。納品前の確認、資料の共有、スライドの確認に使う。",
    demoUrl: "https://example.com/freelance-gear/view"
  },
  {
    id: "comment",
    icon: "💬",
    title: "コメント権限",
    body: "本文は直せないけど、付箋やコメントを残せる。相手の意見をもらうための鍵。",
    example: "『ここだけ確認してください』『修正点をコメントください』の時に使う。",
    demoUrl: "https://example.com/freelance-gear/comment"
  },
  {
    id: "edit",
    icon: "✏️",
    title: "編集権限",
    body: "相手も中身を直接編集できる。共同作業向けだが、渡す相手は選ぶ。",
    example: "チームで同じGoogleスライドやDocsを直す時の鍵。クライアントに渡す時は慎重に。",
    demoUrl: "https://example.com/freelance-gear/edit"
  },
  {
    id: "screen",
    icon: "📺",
    title: "画面共有",
    body: "ファイルを渡すのではなく、今見ている画面を相手に映す。会議中の実況中継。",
    example: "Zoom、Google Meet、Teamsで『今この画面です』と見せながら説明する。",
    demoUrl: "https://example.com/freelance-gear/screen"
  },
  {
    id: "public",
    icon: "🌐",
    title: "公開URL",
    body: "URLを開けば見られる状態。GitHub PagesのアプリURLはこの感覚に近い。",
    example: "『このURLで動きます』と渡せる。作品が仕事の入口になる瞬間。",
    demoUrl: "https://example.com/freelance-gear/public"
  },
  {
    id: "screenshot",
    icon: "📸",
    title: "スクショ共有",
    body: "画面を画像として送る。速いが、相手はクリックも編集もできない。",
    example: "iPhoneで今の画面を撮って『ここです』と伝える時の最短共有。",
    demoUrl: "https://example.com/freelance-gear/screenshot"
  }
];

let currentTourIndex = 0;


const deliveryItems = [
  { id: "url", title: "公開URL", text: "GitHub Pagesや試作URL。まず相手が開けること。" },
  { id: "screens", title: "スクショ3枚", text: "入口、操作中、結果画面。スマホ確認が強い。" },
  { id: "readme", title: "README 3行", text: "これは何か、誰の何を軽くするか、どう使うか。" },
  { id: "board", title: "1枚作戦ボード", text: "誰が困る、押すボタン、AIに渡すもの、完了形。" },
  { id: "slides", title: "3枚スライド", text: "問題、解決、渡すもの。仕事語への翻訳。" },
  { id: "handoff", title: "納品メモ", text: "URL、使い方、確認してほしい点、次に直す点。" }
];

const conditions = [
  { id: "iphone", label: "📱 iPhoneだけ", title: "iPhoneだけならリンク装備", text: "1つだけ公式リンクを開き、ブックマークかホーム画面に置く。今日は深く覚えない。" },
  { id: "pc", label: "💻 ChromePCあり", title: "PCありならファイル装備", text: "GitHubかVS Codeを開き、index.htmlのタイトルだけ変更する。変更できたら勝ち。" },
  { id: "five", label: "⏱️ 5分だけ", title: "5分なら用語1個", text: "Slackならチャンネル、Miroならボード、GitHubならリポジトリ。1語だけ意味を見る。" },
  { id: "fifteen", label: "🧪 15分できる", title: "15分なら小ミッション", text: "Miro風6問か、スライド3枚の骨だけ作る。完成度は見ない。" },
  { id: "heavy", label: "🛌 しんどい", title: "しんどい日は確認だけ", text: "装備カードを1枚開く。リンクは踏まなくていい。今日の脳に道具の名前を置く。" },
  { id: "deliver", label: "📦 納品に寄せたい", title: "納品なら3点セット", text: "URL、スクショ1枚、1行説明。この3つだけ作る。仕事っぽさの最小核。" }
];

const promptTemplates = {
  akechikun: "このアプリ案を、誰の何を軽くする道具なのか、入力、処理、出力、納品物に分けてください。抽象ではなく、今日押せる一手まで落としてください。",
  gemini: "このアプリ案を、初見ユーザーに伝わる説明文、3枚スライド構成、LPの見出しに整理してください。専門用語を減らし、仕事で見せられる言葉にしてください。",
  copilot: "このWebアプリをGitHub Pagesで動かす前提で、index.html、style.css、script.jsの構成、UIフロー、localStorageの使い方、実装順をレビューしてください。",
  claude: "以下の仕様を、実装者が迷わない短い仕様書に圧縮し、足りない状態、バグりそうな箇所、最小実装の優先順位を出してください。"
};

let state = loadState();
let currentFilter = "全部";
let selectedCondition = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    return saved || { gear: {}, delivery: {}, missionsDone: 0 };
  } catch {
    return { gear: {}, delivery: {}, missionsDone: 0 };
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  renderProgress();
}

function gearStatus(id) {
  return state.gear[id] || { installed: false, understood: false, used: false };
}

function setGearStatus(id, key) {
  const status = gearStatus(id);
  status[key] = !status[key];
  state.gear[id] = status;
  saveState();
  renderGear();
}

function doneCount() {
  let total = 0;
  for (const gear of gears) {
    const s = gearStatus(gear.id);
    total += Number(s.installed) + Number(s.understood) + Number(s.used);
  }
  total += Object.values(state.delivery || {}).filter(Boolean).length;
  total += state.missionsDone || 0;
  return total;
}

function maxCount() {
  return gears.length * 3 + deliveryItems.length + 5;
}

function renderProgress() {
  const done = doneCount();
  const max = maxCount();
  const pct = Math.min(100, Math.round((done / max) * 100));
  document.getElementById("progressText").textContent = `${done}/${max} 装備ポイント`;
  document.getElementById("progressBar").style.width = `${pct}%`;
}



function renderRoadmap() {
  const container = document.getElementById("roadmapContainer");
  if (!container) return;
  container.innerHTML = `
    <section class="roadmap-hero">
      <p class="eyebrow">Roadmap</p>
      <h3>フリーランスAI仕事ロードマップ</h3>
      <p>このアプリは、道具名の暗記ではなく、見学、共有、装備、今日の一手、納品、監督の順で「仕事の型」を装備する訓練場です。</p>
    </section>
    <div class="roadmap-grid">
      ${roadmapSteps.map(step => `
        <article class="roadmap-card">
          <div class="roadmap-title"><span class="roadmap-number">${step.num}</span><span>${step.icon} ${step.title}</span></div>
          <p class="roadmap-body">${step.body}</p>
          <button class="roadmap-button" type="button" data-roadmap-goto="${step.view}">対応タブを見る</button>
        </article>
      `).join("")}
    </div>
  `;
  container.querySelectorAll("[data-roadmap-goto]").forEach(button => {
    button.addEventListener("click", () => switchView(button.dataset.roadmapGoto));
  });
}

function renderTour() {
  renderRoadmap();
  const slide = tourSlides[currentTourIndex];
  const box = document.getElementById("tourSlide");
  if (!box) return;
  document.getElementById("tourCounter").textContent = `${currentTourIndex + 1}/${tourSlides.length}`;
  box.innerHTML = `
    <span class="tour-time">${slide.time}</span>
    <h3>${slide.title}</h3>
    <p>${slide.body}</p>
    <div class="tour-tools">
      ${slide.tools.map(tool => `<span class="pill">${tool}</span>`).join("")}
    </div>
    <p class="tour-note">${slide.note}</p>
  `;
  document.getElementById("tourPrevBtn").disabled = currentTourIndex === 0;
  document.getElementById("tourNextBtn").textContent = currentTourIndex === tourSlides.length - 1 ? "最初へ" : "次へ";
}


function renderShare() {
  const container = document.getElementById("shareContainer");
  if (!container) return;
  container.innerHTML = shareModes.map(mode => `
    <article class="share-card">
      <div class="share-card-head">
        <span class="share-icon">${mode.icon}</span>
        <div>
          <p class="eyebrow">Share key</p>
          <h3 class="share-title">${mode.title}</h3>
        </div>
      </div>
      <p class="share-body">${mode.body}</p>
      <p class="share-example">${mode.example}</p>
      <div class="share-actions">
        <button class="share-copy-button" type="button" data-share-copy="${mode.demoUrl}">🔗 ダミーURLをコピー</button>
        <button class="share-copy-button secondary" type="button" data-share-ai="${mode.id}">🤖 AIに聞く文をコピー</button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll("[data-share-copy]").forEach(button => {
    button.addEventListener("click", () => copyText(button.dataset.shareCopy));
  });

  container.querySelectorAll("[data-share-ai]").forEach(button => {
    const mode = shareModes.find(item => item.id === button.dataset.shareAi);
    button.addEventListener("click", () => copyText(`共有の「${mode.title}」について、初心者向けに、何ができるか、何ができないか、仕事ではいつ使うか、iPhoneだけでどう練習するかを短く分けてください。`));
  });
}

function switchView(viewId) {
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === viewId));
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === viewId));
  if (viewId === "viewShare") renderShare();
}

function goToTourRelatedGear() {
  const slide = tourSlides[currentTourIndex];
  const firstGearId = slide.relatedGearIds.find(id => gears.some(g => g.id === id));
  switchView("viewGear");
  if (firstGearId) {
    const gear = gears.find(g => g.id === firstGearId);
    showToast(`${gear.name}の装備へ移動`);
  }
}


function renderFilters() {
  const row = document.getElementById("filterRow");
  row.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip ${category === currentFilter ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      currentFilter = category;
      renderFilters();
      renderGear();
    });
    row.appendChild(button);
  });
}

function renderGear() {
  const grid = document.getElementById("gearGrid");
  grid.innerHTML = "";
  const list = currentFilter === "全部" ? gears : gears.filter(g => g.category === currentFilter);
  list.forEach(gear => {
    const s = gearStatus(gear.id);
    const card = document.createElement("article");
    card.className = "gear-card";
    card.innerHTML = `
      <div class="gear-head">
        <span class="gear-icon">${gear.icon}</span>
        <span class="pill">${gear.category}</span>
      </div>
      <h3>${gear.name}</h3>
      <p>${gear.label}。${gear.summary}</p>
      <div class="gear-meta">
        <span class="pill ${s.installed ? "done" : ""}">入れた</span>
        <span class="pill ${s.understood ? "done" : ""}">何に使うかわかった</span>
        <span class="pill ${s.used ? "done" : ""}">1回使った</span>
      </div>
      <div class="card-actions">
        <button type="button" data-open="${gear.id}">説明を見る</button>
        <button type="button" data-toggle="${gear.id}" data-key="understood" class="${s.understood ? "done" : ""}">${s.understood ? "理解済み" : "わかった"}</button>
      </div>
    `;
    card.querySelector("[data-open]").addEventListener("click", () => openGearDialog(gear.id));
    card.querySelector("[data-toggle]").addEventListener("click", event => {
      setGearStatus(event.currentTarget.dataset.toggle, event.currentTarget.dataset.key);
    });
    grid.appendChild(card);
  });
}

function openGearDialog(id) {
  const gear = gears.find(g => g.id === id);
  const s = gearStatus(id);
  const dialog = document.getElementById("gearDialog");
  const content = document.getElementById("dialogContent");
  content.innerHTML = `
    <div class="dialog-inner">
      <div class="dialog-title">
        <span class="gear-icon">${gear.icon}</span>
        <div>
          <p class="eyebrow">${gear.category}</p>
          <h2>${gear.name}</h2>
          <p>${gear.label}</p>
        </div>
      </div>
      <div class="button-row">
        <button class="ghost-button" type="button" data-status="installed">${s.installed ? "入れた済み" : "入れた"}</button>
        <button class="ghost-button" type="button" data-status="understood">${s.understood ? "理解済み" : "何に使うかわかった"}</button>
        <button class="ghost-button" type="button" data-status="used">${s.used ? "使用済み" : "1回使った"}</button>
      </div>
      <section class="dialog-section">
        <h3>これは何？</h3>
        <p>${gear.summary}</p>
      </section>
      <section class="dialog-section">
        <h3>なぜ必要？</h3>
        <p>${gear.why}</p>
      </section>
      <section class="dialog-section">
        <h3>最初の一手</h3>
        <p>${gear.first}</p>
      </section>
      <section class="dialog-section">
        <h3>使用例</h3>
        <p>${gear.usecase}</p>
      </section>
      <section class="dialog-section">
        <h3>今日の小ミッション</h3>
        <p>${gear.mission}</p>
      </section>
      <section class="dialog-section">
        <h3>公式リンク</h3>
        <div class="dialog-links">
          ${gear.links.map(link => `<a href="${link[1]}" target="_blank" rel="noopener noreferrer">${link[0]} ↗</a>`).join("")}
        </div>
      </section>
      <section class="dialog-section">
        <h3>AIに聞く文</h3>
        <p>私は${gear.name}をフリーランス装備として覚えたいです。目的、最初に押す場所、1回目の練習、納品での使い方を短く分けてください。</p>
        <button class="primary-button" type="button" data-copy-gear="${gear.id}">この文をコピー</button>
      </section>
    </div>
  `;
  content.querySelectorAll("[data-status]").forEach(button => {
    button.addEventListener("click", event => {
      setGearStatus(id, event.currentTarget.dataset.status);
      openGearDialog(id);
    });
  });
  content.querySelector("[data-copy-gear]").addEventListener("click", () => {
    copyText(`私は${gear.name}をフリーランス装備として覚えたいです。目的、最初に押す場所、1回目の練習、納品での使い方を短く分けてください。`);
  });
  dialog.showModal();
}

function renderConditions() {
  const box = document.getElementById("conditionButtons");
  box.innerHTML = "";
  conditions.forEach(condition => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = selectedCondition === condition.id ? "active" : "";
    button.textContent = condition.label;
    button.addEventListener("click", () => {
      selectedCondition = condition.id;
      document.getElementById("todayOutputTitle").textContent = condition.title;
      document.getElementById("todayOutputText").textContent = condition.text;
      renderConditions();
    });
    box.appendChild(button);
  });
}

function renderDelivery() {
  const box = document.getElementById("deliveryChecklist");
  box.innerHTML = "";
  deliveryItems.forEach(item => {
    const done = Boolean(state.delivery?.[item.id]);
    const row = document.createElement("article");
    row.className = `check-item ${done ? "done" : ""}`;
    row.innerHTML = `
      <div class="check-dot">✓</div>
      <div><h3>${item.title}</h3><p>${item.text}</p></div>
    `;
    row.addEventListener("click", () => {
      state.delivery = state.delivery || {};
      state.delivery[item.id] = !state.delivery[item.id];
      saveState();
      renderDelivery();
    });
    box.appendChild(row);
  });
}

function currentMissionText() {
  const condition = conditions.find(c => c.id === selectedCondition);
  if (!condition) return "今日の地上条件をまだ選んでいません。まず iPhoneだけ、ChromePCあり、5分だけ、しんどい、などを1つ選びます。";
  return `今日の地上条件は「${condition.label}」。次の一手は「${condition.title}」。内容：${condition.text} この条件で、今から5分でできる手順を1、2、3で出してください。`;
}

function copyDeliveryText() {
  const text = `納品パック\n1. 公開URL\n2. スクショ3枚：入口、操作中、結果\n3. README 3行：これは何か、誰の何を軽くするか、どう使うか\n4. Miro風1枚作戦ボード：誰が困る、何に困る、押すボタン、AIに渡すもの、返るもの、完了形\n5. 3枚スライド：問題、解決、渡すもの\n6. 納品メモ：確認してほしい点、次に直す点`;
  copyText(text);
}

function copyAllGearText() {
  const next = gears.find(g => {
    const s = gearStatus(g.id);
    return !s.understood || !s.used;
  }) || gears[0];
  copyText(`今日の装備：${next.name}\n目的：${next.label}\n最初の一手：${next.first}\n小ミッション：${next.mission}`);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("コピーした");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast("コピーした");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1300);
}

function bindTabs() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });
}

function bindButtons() {
  document.getElementById("tourPrevBtn").addEventListener("click", () => {
    currentTourIndex = Math.max(0, currentTourIndex - 1);
    renderTour();
  });
  document.getElementById("tourNextBtn").addEventListener("click", () => {
    currentTourIndex = currentTourIndex >= tourSlides.length - 1 ? 0 : currentTourIndex + 1;
    renderTour();
  });
  document.getElementById("tourGearBtn").addEventListener("click", goToTourRelatedGear);

  document.getElementById("resetBtn").addEventListener("click", () => {
    state = { gear: {}, delivery: {}, missionsDone: 0 };
    saveState();
    renderGear();
    renderDelivery();
    showToast("リセットした");
  });
  document.getElementById("copyAllBtn").addEventListener("click", copyAllGearText);
  document.getElementById("copyMissionBtn").addEventListener("click", () => copyText(currentMissionText()));
  document.getElementById("completeMissionBtn").addEventListener("click", () => {
    state.missionsDone = Math.min(5, (state.missionsDone || 0) + 1);
    saveState();
    showToast("今日やった。勝ち");
  });
  document.getElementById("copyDeliveryBtn").addEventListener("click", copyDeliveryText);
  document.querySelectorAll(".copy-prompt").forEach(button => {
    button.addEventListener("click", () => copyText(promptTemplates[button.dataset.prompt]));
  });
}

function init() {
  renderProgress();
  renderTour();
  renderShare();
  renderFilters();
  renderGear();
  renderConditions();
  renderDelivery();
  bindTabs();
  bindButtons();
}

init();
