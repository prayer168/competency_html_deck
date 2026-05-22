const slides = [
  {t:'素養導向命題', k:'國小自然科評量設計 × AI 輔助應用', img:'slide01.webp', sub:'從「會背」走向「會用」', type:'cover', body:`讓題目成為學生展現理解、判斷與應用能力的舞台。`, chips:['國小自然','評量設計','AI 輔助','教師研習'], notes:'開場先讓老師知道：今天不是談艱深測驗理論，而是把課本、習作與課堂活動，轉成可以真正看見學生理解的題目。'},
  {t:'今天要解決的問題', k:'為什麼要重新談命題？', img:'slide02.webp', body:`很多題目能考出「記得多少」，卻不一定看得出學生是否真的理解自然現象。\n\n素養導向命題的核心，是把知識放回情境，讓學生用概念解釋、判斷與做決定。`, chips:['不只記憶','回到情境','看見思考'], notes:'可以請老師回想：學生考卷答對了，但實作或解釋時卻說不清楚的經驗。這就是素養題想處理的落差。'},
  {t:'傳統題目常見困境', k:'題目有分數，但未必有證據', img:'slide03.webp', layout:'cards', cards:[['只考名詞','學生背得出答案，卻不一定能解釋現象。'],['情境不足','題目脫離生活與實驗，無法連結課堂經驗。'],['判斷線索少','看不出學生如何觀察、比較、推論。'],['誘答選項弱','選項太明顯，無法診斷學生迷思概念。']], notes:'這頁可用現場語氣說：不是傳統題目不好，而是如果整份評量都只有記憶題，就很難反映自然科的探究精神。'},
  {t:'什麼是素養導向命題？', k:'一句話版本', img:'slide04.webp', quote:'把自然概念放進真實或類真實情境，讓學生根據資料、圖像或實驗結果，做出合理判斷。', body:'重點不是把題目變長，而是讓題目有「情境、任務、證據、推論」。', notes:'這一頁建立核心定義。可以提醒老師：素養題不是長題目，也不是國語閱讀測驗，而是自然概念的應用。'},
  {t:'素養題的四個關鍵', k:'命題檢查用', img:'slide05.webp', layout:'cards', cards:[['情境','生活、校園、實驗、自然現象。'],['任務','學生要判斷、解釋、比較、預測。'],['資料','圖片、表格、紀錄、圖表、觀察結果。'],['概念','回扣自然科學習重點，而不是憑感覺作答。']], notes:'可以把這四個詞當作老師設計題目的檢核表：有沒有情境？有沒有任務？有沒有資料？有沒有回到概念？'},
  {t:'傳統命題 vs 素養導向命題', k:'不是取代，而是升級', img:'slide06.webp', layout:'compare', left:['偏重記憶','題目短，情境少','單一知識點','答案常可直接背誦'], right:['強調理解與應用','有生活或探究情境','整合概念、資料判讀與推論','需要閱讀、分析與判斷'], notes:'這裡可以強調：基礎知識題仍然需要，但段考或課堂評量中，可以逐步增加應用與資料判讀題。'},
  {t:'改寫示範：植物生長', k:'從課本知識變成資料判讀', img:'slide10.webp', layout:'example', old:'植物需要哪些條件才能生長？', newq:'小明把綠豆放在四種不同環境觀察一週：有光有水、有光少水、無光有水、無光少水。根據紀錄，哪一組最適合綠豆健康生長？請選出答案並說明理由。', focus:['核心概念：植物生長需要陽光、水分等條件','任務：根據觀察資料判斷','能力：比較、資料判讀、解釋'], notes:'示範時可以說：我們沒有丟掉課本知識，而是多加了觀察資料，讓學生必須用概念去判斷。'},
  {t:'範例一：水溶液酸鹼', k:'從顏色變化推論性質', img:'slide11.webp', layout:'question', question:'老師用紫色植物汁液測試四杯液體，A 變紅、B 維持紫色、C 變綠、D 變藍綠。若想找出可能含酸性物質的液體，應優先觀察哪一杯？', options:['A','B','C','D'], answer:'答案：A', focus:['命題重點：指示劑顏色變化與酸鹼判斷','對應能力：觀察、推論、解釋現象'], notes:'這題可提醒：圖片或表格要和題幹一致，不要讓學生猜圖，而是讓學生根據觀察線索推論。'},
  {t:'範例二：電路', k:'用實驗結果判斷電路概念', img:'slide12.webp', layout:'question', question:'兩組學生都使用一顆電池、一個燈泡和導線。甲組燈泡會亮，乙組不會亮。觀察發現乙組導線沒有接到燈泡金屬接點。最合理的解釋是什麼？', options:['電池太小','電流沒有形成完整通路','燈泡一定壞掉','導線顏色不對'], answer:'答案：電流沒有形成完整通路', focus:['命題重點：閉合電路','對應能力：根據現象找原因'], notes:'選項設計要有誘答力。例如「燈泡壞掉」是學生常見猜測，但題目提供的證據指向通路不完整。'},
  {t:'範例三：天氣觀測', k:'讀懂資料再做判斷', img:'slide13.webp', layout:'question', question:'學校氣象站連續三天紀錄：氣溫上升、雲量增加、風向轉變，第三天下午開始下雨。哪一項資料最能支持「天氣正在改變」的判斷？', options:['只有氣溫','只有雲量','多項觀測資料一起比較','只看操場是否潮濕'], answer:'答案：多項觀測資料一起比較', focus:['命題重點：天氣觀測需整合多項資料','對應能力：資料整合、判斷'], notes:'自然科常見素養題可以從學生日常紀錄出發，讓孩子學會不是單看一個線索就下結論。'},
  {t:'範例四：校園生態', k:'從觀察紀錄形成解釋', img:'slide14.webp', layout:'question', question:'學生發現蝴蝶常出現在有開花植物的花圃，而很少停在水泥地。若要進一步研究原因，最適合記錄哪一項資料？', options:['花的數量與蝴蝶出現次數','花圃旁邊有幾張椅子','水泥地顏色深淺','同學喜歡哪種蝴蝶'], answer:'答案：花的數量與蝴蝶出現次數', focus:['命題重點：變因與觀察紀錄','對應能力：提出可觀察證據'], notes:'這題對國小老師很實用，因為校園生態就是最容易轉成素養題的素材。'},
  {t:'用課本與習作 PDF 命題', k:'把教材變成題目素材庫', img:'slide15.webp', body:'課本與習作不是只能拿來複製題目，而是可以提取：核心概念、實驗活動、圖片線索、生活情境與學生常見錯誤。', chips:['核心概念','實驗圖表','生活情境','習作題型','迷思概念'], notes:'提醒老師不要直接複製出版品題目。比較好的做法是整理重點後，重新設計情境與任務。'},
  {t:'PDF 轉素養題流程', k:'六步驟操作法', img:'slide17.webp', layout:'flow', steps:['PDF 教材','擷取重點','找出情境','設計任務','產生題目','檢查難度'], notes:'這頁是實作流程。可以請老師拿一頁課本，先圈出一個概念，再找一張圖或一個生活情境，最後改成學生要判斷的任務。'},
  {t:'AI 可以幫老師做什麼？', k:'加速初稿，但不取代專業', img:'slide06.webp', layout:'cards', cards:[['整理教材','摘要單元重點、學習目標與關鍵概念。'],['產生情境','把知識改寫成生活或探究情境。'],['設計題目','產生題幹、選項、答案與解析。'],['調整難度','改成三年級、高年級或進階挑戰。'],['生圖製表','產生實驗圖、觀察圖、示意圖與圖表。'],['協助審題','檢查題幹、選項、答案唯一性與閱讀負荷。']], notes:'這頁要強調 AI 的定位：它很適合產生初稿、提供變化，但最後仍要由老師判斷是否符合課程與學生程度。'},
  {t:'AI 命題提示詞範例', k:'讓 AI 先產生可修改的初稿', img:'slide07.webp', layout:'prompt', prompt:'請根據以下國小自然科單元內容，設計 5 題素養導向選擇題。\n題目需包含生活情境、資料判讀或實驗結果分析。\n每題包含：題幹、四個選項、正確答案、解析、命題重點與難度。\n對象為國小五年級學生，文字需簡單清楚。', notes:'可現場示範把課本一小段文字貼給 AI，要求它先產生 5 題，再由老師挑一題修。'},
  {t:'AI 生圖如何協助命題？', k:'題目需要清楚的視覺證據', img:'slide08.webp', layout:'cards', cards:[['實驗情境圖','例如植物生長、電路連接、酸鹼測試。'],['自然現象圖','例如天氣變化、磁力作用、影子方向。'],['觀察紀錄圖','例如表格、照片序列、比較圖。'],['科學漫畫圖','用故事情境引出問題。']], notes:'提醒老師：生圖不是裝飾，而是題目中的證據。圖片必須清楚、合理、沒有誤導。'},
  {t:'AI 生圖提示詞範例', k:'圖要服務題目，不只是好看', img:'slide09.webp', layout:'prompt', prompt:'請生成一張國小自然科評量用圖片：四盆綠豆放在不同條件下觀察，一盆有光有水、一盆有光少水、一盆無光有水、一盆無光少水。畫面要清楚呈現植物高度、葉片顏色與土壤濕潤差異，不要加入文字，風格適合國小學生。', notes:'生圖提示詞要說清楚：主題、條件差異、要看見的證據、不要文字、學生年齡與風格。'},
  {t:'AI 協助審題', k:'用第二個 AI 角色檢查第一版題目', img:'slide18.webp', layout:'prompt', prompt:'請你以國小自然科教師與試題審查委員的角度，檢查以下題目。\n請分析：\n1. 是否符合素養導向命題\n2. 題幹是否清楚\n3. 選項是否合理且有誘答力\n4. 是否只有一個正確答案\n5. 是否符合國小學生閱讀程度\n6. 圖片或表格是否與題目一致\n最後請提供修正版題目。', notes:'建議老師建立審題流程：AI 產生題目後，不要直接使用，先用審題提示詞檢查，再人工修正。'},
  {t:'10 分鐘教師實作', k:'把一小段教材改成一題素養題', img:'slide16.webp', layout:'activity', steps:['選一個課本概念','找一個生活或實驗情境','加入圖片、表格或觀察紀錄','設計一個判斷任務','寫出選項、答案與解析','用 AI 審題後再修正'], notes:'實作活動可讓老師兩人一組，一人負責找教材概念，一人負責改寫題目。最後請一組分享修改前後差異。'},
  {t:'結語：題目的品質，來自老師的判斷', k:'AI 加速，教師把關', img:'slide05.webp', quote:'素養導向命題不是把題目變長，\n而是讓學生在情境中展現理解、判斷與應用。', body:'AI 可以加速命題；但真正決定題目品質的，仍是教師對課程、學生與自然概念的專業判斷。', chips:['先改一題','再擴成題組','持續審題修題'], notes:'最後回到教師專業。鼓勵老師從一題開始，不需要一次改完整份考卷。'}
];
let current = 0;
const stage = document.getElementById('stage'), thumbs = document.getElementById('thumbs'), progressBar = document.getElementById('progressBar'), counter = document.getElementById('counter'), notesPanel = document.getElementById('notesPanel'), notesContent = document.getElementById('notesContent'), overviewModal = document.getElementById('overviewModal'), overviewGrid = document.getElementById('overviewGrid');
function img(i){return `assets/images/${i}`}
function renderSlide(s, i){
  let inner = `<div class="slide-bg" style="background-image:url('${img(s.img)}')"></div><div class="slide-content"><div class="kicker">${String(i+1).padStart(2,'0')}｜${s.k}</div><h1 class="title">${s.t}</h1>`;
  if(s.sub) inner += `<p class="subtitle">${s.sub}</p>`;
  if(s.quote) inner += `<div class="quote">${s.quote.replace(/\n/g,'<br>')}</div>`;
  if(s.body) inner += `<div class="body">${s.body.replace(/\n/g,'<br>')}</div>`;
  if(s.layout==='cards') inner += `<div class="grid ${s.cards.length>4?'three':'two'}">${s.cards.map(c=>`<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`).join('')}</div>`;
  if(s.layout==='compare') inner += `<div class="split"><div class="example-box old"><h3>傳統命題</h3><ul>${s.left.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="example-box new"><h3>素養導向命題</h3><ul>${s.right.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`;
  if(s.layout==='example') inner += `<div class="split"><div class="example-box old"><h3>傳統題目</h3><p>${s.old}</p></div><div class="example-box new"><h3>素養導向改寫</h3><p>${s.newq}</p></div></div><div class="chips">${s.focus.map(x=>`<span class="chip">${x}</span>`).join('')}</div>`;
  if(s.layout==='question') inner += `<div class="example-box new"><p class="body"><strong>題目：</strong>${s.question}</p><div class="chips">${s.options.map((o,idx)=>`<span class="chip">${'ABCD'[idx]}. ${o}</span>`).join('')}</div><p class="subtitle">${s.answer}</p><p class="small">${s.focus.join('｜')}</p></div>`;
  if(s.layout==='flow') inner += `<div class="flow">${s.steps.map(x=>`<div class="step">${x}</div>`).join('')}</div>`;
  if(s.layout==='prompt') inner += `<div class="prompt">${s.prompt}</div>`;
  if(s.layout==='activity') inner += `<div class="flow">${s.steps.map(x=>`<div class="step">${x}</div>`).join('')}</div>`;
  if(s.chips) inner += `<div class="chips">${s.chips.map(x=>`<span class="chip">${x}</span>`).join('')}</div>`;
  inner += `</div>`;
  return `<article class="slide" data-index="${i}">${inner}</article>`;
}
function init(){
  stage.innerHTML = slides.map(renderSlide).join('');
  thumbs.innerHTML = slides.map((s,i)=>`<button class="thumb" style="background-image:url('${img('thumb'+String(i+1).padStart(2,'0')+'.webp')}')" data-go="${i}"><span><b>${String(i+1).padStart(2,'0')}</b>${s.t}</span></button>`).join('');
  overviewGrid.innerHTML = slides.map((s,i)=>`<div class="overview-card" data-go="${i}"><img src="${img('thumb'+String(i+1).padStart(2,'0')+'.webp')}" alt=""><div><small>${String(i+1).padStart(2,'0')}</small>${s.t}</div></div>`).join('');
  document.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>{go(+el.dataset.go); closeOverview();}));
  go(0);
}
function go(n){
  current = (n + slides.length) % slides.length;
  document.querySelectorAll('.slide').forEach((el,i)=>el.classList.toggle('active',i===current));
  document.querySelectorAll('.thumb').forEach((el,i)=>el.classList.toggle('active',i===current));
  progressBar.style.width = `${((current+1)/slides.length)*100}%`;
  counter.textContent = `${String(current+1).padStart(2,'0')} / ${slides.length}`;
  notesContent.innerHTML = `<h2>${String(current+1).padStart(2,'0')}｜${slides[current].t}</h2><p>${slides[current].notes}</p>`;
  const activeThumb = document.querySelector('.thumb.active'); if(activeThumb) activeThumb.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
}
function openOverview(){overviewModal.classList.add('show');overviewModal.setAttribute('aria-hidden','false')}
function closeOverview(){overviewModal.classList.remove('show');overviewModal.setAttribute('aria-hidden','true')}
document.getElementById('prevBtn').onclick=()=>go(current-1);
document.getElementById('nextBtn').onclick=()=>go(current+1);
document.getElementById('overviewBtn').onclick=openOverview;
document.getElementById('closeOverview').onclick=closeOverview;
document.getElementById('notesBtn').onclick=()=>{notesPanel.classList.toggle('show'); notesPanel.setAttribute('aria-hidden',!notesPanel.classList.contains('show'))};
document.getElementById('closeNotes').onclick=()=>notesPanel.classList.remove('show');
document.getElementById('fullscreenBtn').onclick=()=>{ if(!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); };
document.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' ') go(current+1); if(e.key==='ArrowLeft'||e.key==='PageUp') go(current-1); if(e.key==='Escape') closeOverview(); if(e.key.toLowerCase()==='o') openOverview(); if(e.key.toLowerCase()==='n') notesPanel.classList.toggle('show'); });
let touchStart=0; stage.addEventListener('touchstart',e=>touchStart=e.touches[0].clientX,{passive:true}); stage.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchStart; if(Math.abs(dx)>50) go(current+(dx<0?1:-1));},{passive:true});
init();
