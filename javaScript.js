
document.addEventListener('DOMContentLoaded', () => {
  // === Заголовок ===
  const h1 = document.createElement('h1');
  h1.textContent = "FC BARCELONA";
  document.body.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = "Mes Que Un Club";
  document.body.appendChild(h2);

  // === Основная структура ===
  const layout = document.createElement('div');
  layout.id = 'layout';
  document.body.appendChild(layout);

  const nav = document.createElement('div');
  nav.id = 'nav';
  layout.appendChild(nav);

  const content = document.createElement('div');
  content.id = 'content';
  layout.appendChild(content);

  // Создаем кнопки навигации
  for (const key in pages) {
    const btn = document.createElement('button');
    btn.textContent = key;
    btn.className = 'nav-btn';
    btn.addEventListener('click', () => showPage(key));
    nav.appendChild(btn);
  }

  // Показываем главную страницу
  showPage('Home');
});


// Страницы сайта
const pages = {
  Home: {
    title: 'Welcome at the FC Barcelona site',
    text: ` <div style="text-align:center;">
      <h3 style="color:#e65100;">🔥Barcelona - it is more than football!</h3>
      <p style="font-size:18px;">It is passion, struggle, victory's and emotions. We are Barcelona, We are power!</p>
      <p><strong>Join us, follow the matches, buy tickets and support Barcelona!</strong></p>
      <p><strong>⚠️ This site is not oficial site of FC Barcelona!</strong></p>
      <button onclick="showPage('Tickets')" class="shop-btn">🎟️ Buy tickets for matches!</button>
      <button onclick="showPage('News')" class="shop-btn">📰 Read news</button>
      <button onclick="showPage('Team')" class="shop-btn">👥 Team</button>
      <img style="max-width:500px; border-radius:10px;" src="https://img.fcbayern.com/image/upload/f_auto/q_auto/ar_2:1,c_fill,g_custom,w_1280/v1631374362/cms/public/images/fcbayern-com/homepage/saison-21-22/Sonstiges/210911_Barcelona_GET.jpg" style="max-width:100%; border-radius:10px; margin:20px 0;">
    </div>`
  },
  News: { title: `News of FC Barcelona` },
  Club: { 
  title: `Club - FC Barcelona`,
  text: `
    <h3>Barcelona is more than a club. It's a symbol of Catalonia, history, tradition, and triumphs.</h3>
    <p>Founded in 1899, FC Barcelona is one of the most successful and popular football clubs in the world, known for its attacking style and football philosophy "Més que un club" — "More than a club".</p>
    
    <h4>🏆 Achievements:</h4>
    <ul>
      <li>26x La Liga Champions</li>
      <li>31x Copa del Rey Winners</li>
      <li>5x UEFA Champions League Winners</li>
      <li>3x FIFA Club World Cup Winners</li>
    </ul>

    <h4>🏟️ Home Stadium:</h4>
    <p>Camp Nou, located in Barcelona, Spain, is the largest stadium in Europe with a capacity of over 99,000 spectators. It has been the club's home since 1957 and is a true temple of football.</p>
    <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/06/07/fde8dc92-66b3-48f3-9996-22008151b267/DanHlskWsAADKM0.jpg" 
         alt="FC Barcelona Home Stadium: Camp Nou" 
         style="max-width:300px; border-radius:10px;"
         title="Camp Nou Stadium">

    <h4>Records:</h4>
    <ul>
      <li>All-time top scorer: Lionel Messi — 672 goals</li>
      <li>Most appearances: Xavi Hernández — 767 matches</li>
      <li>Legendary coach: Johan Cruyff (introduced the famous "tiki-taka" philosophy)</li>
      <li>Most expensive transfer: Philippe Coutinho → €160 million from Liverpool</li>
    </ul>

    <h3>Club Logo:</h3>
    <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" 
         title="FC Barcelona Logo" 
         style="max-width:300px; border-radius:10px;">
  `
},

  History: {
  title: `History of FC Barcelona`,
  text: `<br><img style="max-width:500px; border-radius:10px;" src="https://www.visitcampnou.com/wp-content/uploads/camp-nou-stadium-barcelona-1743999096.jpg" alt="FC Barcelona Logo"><br>
     <p>FC Barcelona, founded in 1899, is one of the most famous and successful football clubs in the world. Known for its motto "Més que un club" ("More than a club"), Barcelona has a rich history of victories, talent development, and cultural impact.</p>
     
     <h4>Foundation of the Club</h4>
     <p>The club was founded by Swiss football enthusiast Joan Gamper. From the very beginning, Barcelona became a symbol of Catalan identity and pride, uniting fans not only around football but also around local culture and values.</p>
     
     <h4>Early Achievements</h4>
     <p>Barcelona quickly became competitive in regional championships. The club won its first Catalan Championship in 1902 and steadily grew in prominence in Spanish football.</p>
     <img style="max-width:500px; border-radius:10px;" src="https://upload.wikimedia.org/wikipedia/commons/6/68/FC_Barcelona_B_1902.jpg" alt="Early FC Barcelona match" title="Early FC Barcelona match">
     
     <h4>La Liga and International Success</h4>
     <p>FC Barcelona has won numerous La Liga titles and Copa del Rey trophies. The club also triumphed in international competitions, including the UEFA Champions League, UEFA Cup Winners' Cup, and FIFA Club World Cup.</p>
     
     <h4>The Pep Guardiola Era</h4>
     <p>Under the management of Pep Guardiola (2008–2012), Barcelona became a global icon of football excellence. The team achieved historic victories with a unique style of play called "tiki-taka", winning multiple domestic and international titles.</p>
     <img style="max-width:500px; border-radius:10px;" src="https://www.fcbarcelona.com/photo-resources/2022/12/14/266519e9-c70a-44f9-bc30-7df5c64c3e75/ATHLETIC-FCB-67-.JPG?width=1200&height=750" alt="FC Barcelona during Guardiola Era" title="FC Barcelona during Guardiola Era">
     
     <h4>Camp Nou and Supporters</h4>
     <p>Camp Nou, the club's home stadium, is one of the largest and most iconic football venues in the world. Barcelona fans, known as "Culés", are renowned for their passionate support both locally and internationally.</p>
     <img style="max-width:500px; border-radius:10px;" src="https://cdn-acn.watchity.net/acn/catn_oldmedia/images/2022/05/image00001res.jpeg" alt="Camp Nou Stadium" title="Camp Nou Stadium">

     <h4>Modern Era</h4>
     <p>Barcelona continues to develop young talents through its famous La Masia academy, producing legendary players like Lionel Messi, Xavi, Andrés Iniesta, and many others. The club remains a global symbol of football excellence, culture, and Catalan identity.</p>
     <img style="max-width:500px; border-radius:10px;" src="https://st1.latestly.com/wp-content/uploads/2025/08/4-124590940.jpg" alt="Modern FC Barcelona Team" title="Modern FC Barcelona Team">
     
     <h4>Symbol and Traditions</h4>
     <p>FC Barcelona is more than just a football club; it represents the values of dedication, teamwork, and pride in Catalonia. The club’s colors, blue and red, are instantly recognizable and carry a rich history and tradition.</p>
     
     <h4>Legacy and Future</h4>
     <p>With dozens of trophies and a legacy of legendary players, FC Barcelona continues to inspire millions of fans worldwide. The club aims to remain competitive at the highest level while promoting youth development and Catalan culture.</p>
  `,
},


  Team: { title: `Команда` },
  Matches: { 
    title: `Матчі`, 
    text:  `<p>Place in La Liga: 2 place</p><p>Place in UCL: 11 place</p><p>Place in  Copa Del Rey: 1/32</p>`

  },
  Tickets: {
    title: `Buying tickets`,
    text: `<p>Tickets for Barcelona match you can buy <a title="Click on me!" href="https://www.fcbarcelona.com/en/tickets/football">here</a>.</p><img style="max-width:500px; border-radius:10px;" src="https://cdn-imgix.headout.com/media/images/fa6b8022ccb8041d0d14c5cc54815f12-FC%20Barcelona%204.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop" alt="Olympic Stadium in Barcelona">`
  },
  Shop: {
    title: `Shop`,
    text: `<p>Barcelona t-shirts, scarfs and souvenirs you can buy <a href="https://store.fcbarcelona.com/?_gl=1%2Aoa7sug%2A_gcl_au%2AMTY1NTgwNzEwMi4xNzYyMDIzODA1&ext=OCM_420&utm_campaign=MenuWebBarca_ORG_BLM_HOME_OCM_webBarca_TXT_WW_EN&utm_medium=Menu&utm_source=WebBarca" title="Click on me!">here</a>.</p><img style="max-width:500px; border-radius:10px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt53AYv_Lkm4oWheRHEga4hXTSjerAiD5KbQ&s" alt="Barcelona fans before semi-final of UCL 2024/25"> `
  },
  Telegram: {
    title: `Telegram channel`,
    text: `<p>Follow our <a href="https://t.me/FCBarcaClubNews" target="_blank">telegram channel</a> for more news.</p>
    <img style="max-width:500px; border-radius:10px;" src="https://images.nu.nl/m/elix88fahql3_wd1280/1/422/5110/2875/fc-barcelona-klopt-real-madrid-in-spektakelstuk-en-wint-spaanse-supercup.jpg" >`
  }
};

// Создаем кнопки навигации
for (const key in pages) {
  const btn = document.createElement('button');
  btn.textContent = key;
  btn.className = 'nav-btn';
  btn.onclick = () => showPage(key);
  nav.appendChild(btn);
}


// Показ страницы
function showPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  content.innerHTML = '';

  if (pageKey === 'Team') {
    showTeam();
    return;
  }
  if (pageKey === 'News') {
    showNews();
    return;
  }
  if (pageKey === 'Matches') {
    showMatches();
    return;
  }

  const titleElem = document.createElement('h2');
  titleElem.textContent = page.title;
  content.appendChild(titleElem);

  if (page.text) {
    const textElem = document.createElement('div');
    textElem.innerHTML = page.text;
    content.appendChild(textElem);
  }
}
// Функція інформації гравців 

function showPlayerDetails(player) {
  content.innerHTML = ''; // очищаем контент

  
  const backBtn = document.createElement('button');
  backBtn.textContent = '← Back';
  backBtn.className = 'back-btn';
  backBtn.onclick = showTeam;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = player.name;
  content.appendChild(title);

  const img = document.createElement('img');
  img.src = player.image;  // <-- исправлено: image, а не photo
  img.alt = player.name;
  img.className = 'player-photo-large';
  img.style.maxWidth = '250px';
  img.style.borderRadius = '15px';
  img.style.display = 'block';
  img.style.margin = '20px auto';
  content.appendChild(img);

  const info = document.createElement('div');
  info.className = 'player-info';
  info.innerHTML = `
    <p><strong>Number:</strong> ${player.number}</p>
    <p><strong>Position:</strong> ${player.position}</p>
    <p><strong>Age:</strong> ${player.age}</p>
    <p><strong>Nationality:</strong> ${player.nationality}</p>
    <h3>Career</h3>
    <p>${player.bio}</p>  <!-- исправлено: bio, а не description -->
  `;
  content.appendChild(info);
}

// Показ команды с разделами по позициям + тренеры
function showTeam() {
  content.innerHTML = ''; // очищаем перед выводом

  const title = document.createElement('h2');
  title.textContent = 'Team';
  content.appendChild(title);

  // Категории игроков
  const groups = {
    'Goalkeepers': ['GK', 'Goalkeeper'],
    'Defenders': ['DF', 'Defender'],
    'Midfielders': ['MF', 'Midfielder'],
    'Forwards': ['FW', 'Forward']
  };

  // Перебор категорий
  for (const groupName in groups) {
    const groupTitle = document.createElement('h3');
    groupTitle.textContent = groupName;
    content.appendChild(groupTitle);

    const groupList = document.createElement('div');
    groupList.className = 'players-list';

    window.team
  .filter(player => groups[groupName].some(pos => 
    player.position.toLowerCase().split('/').map(s => s.trim()).includes(pos.toLowerCase())
  ))
      .forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';

        card.innerHTML = `
          <img src="${player.image}" alt="${player.name}" class="player-photo" />
          <p><strong>#${player.number} ${player.name}</strong></p>
          <p>${player.position}</p>
          <p>Age: ${player.age}</p>
          <p>Nationality: ${player.nationality}</p>
        `;

        card.onclick = () => showPlayerDetails(player);
groupList.appendChild(card);

      });

    if (groupList.children.length > 0) {
      content.appendChild(groupList);
    }
  }

  // ---- Тренеры ----
  if (window.coaches && window.coaches.length > 0) {
    const coachesTitle = document.createElement('h3');
    coachesTitle.textContent = 'Coaches';
    content.appendChild(coachesTitle);

    const coachesList = document.createElement('div');
    coachesList.className = 'coaches-list';

    window.coaches.forEach(coach => {
      const card = document.createElement('div');
      card.className = 'coach-card';

      card.innerHTML = `
        <img src="${coach.photo}" alt="${coach.name}" class="coach-photo" />
        <p><strong>${coach.coach}</strong></p>
        <p>${coach.name}</p>
        <p>Age: ${coach.age}</p>
        <p>Nationality: ${coach.nationality}</p>
      `;

      coachesList.appendChild(card);
    });

    content.appendChild(coachesList);
  }
}

 
function showMatches() {
  content.innerHTML = '<h2>Matches</h2>';

  // берем текст из pages
  const info = document.createElement('div');
  info.innerHTML = pages['Matches'].text;
  content.appendChild(info);

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.matches || window.matches.length === 0) {
    grid.innerHTML = '<p>There are no matches</p>';
    content.appendChild(grid);
    return;
  }

  window.matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Date:</strong> ${match.date}</p>
      <p><strong>⚔️ Opponent:</strong> ${match.opponent}</p>
      <p><strong>🕒 Time:</strong> ${match.time}</p>
      <p><strong>🎯 Score:</strong> ${match.score || "Match is not played"}</p>
      <p><strong>📍 Place</strong> ${match.place}</p>
      <p><strong>🏆 Competition:</strong> ${match.competition}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}

// Новости
function showNews() {
  content.innerHTML = '<h2>News </h2>';

  const grid = document.createElement('div');
  grid.className = 'news-grid';

  // Сортируем новости по дате (от новых к старым)
  const sortedNews = [...window.news].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedNews.forEach(item => {
    const preview = document.createElement('div');
    preview.className = 'news-card';
    preview.onclick = () => showFullNews(item.id);

    const firstSentence = item.text.split('.')[0] + '.';

    preview.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.datum}</p>
    `;

    grid.appendChild(preview);
  });

  content.appendChild(grid);
}

function showFullNews(id) {
  const item = window.news.find(n => n.id === id);
  content.innerHTML = '';

  if (!item) {
    content.innerHTML = '<p>There are no news</p>';
    return;
  }
// 🔙 Кнопка назад
  const backBtn = document.createElement('button');
  backBtn.textContent = '← Back to News';
  backBtn.className = 'back-btn';
  backBtn.onclick = showNews;
  backBtn.style.margin = '10px 0 20px 0';
  backBtn.style.padding = '8px 16px';
  backBtn.style.backgroundColor = '#a50044';
  backBtn.style.color = 'white';
  backBtn.style.border = 'none';
  backBtn.style.borderRadius = '8px';
  backBtn.style.cursor = 'pointer';
  backBtn.style.fontWeight = 'bold';
  content.appendChild(backBtn);

  // 📰 Заголовок новости
  const title = document.createElement('h1');
  title.textContent = item.title;
  title.style.textAlign = 'center';
  title.style.color = 'white';
  title.style.marginBottom = '20px';
  title.style.fontSize = '2em';
  content.appendChild(title);

  // 📅 Дата под заголовком
  const dateElem = document.createElement('p');
  dateElem.textContent = `📅 ${item.datum}`;
  dateElem.style.textAlign = 'center';
  dateElem.style.color = 'white';
  dateElem.style.fontStyle = 'italic';
  dateElem.style.marginTop = '-10px';
  dateElem.style.marginBottom = '20px';
  content.appendChild(dateElem);

  // 🖼 Фото
  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.style.maxWidth = '90%';
    img.style.height = 'auto';
    img.style.borderRadius = '15px';
    img.style.display = 'block';
    img.style.margin = '0 auto 25px auto';
    img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    content.appendChild(img);
  }

  // ✍️ Основной текст
  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  fullText.style.fontSize = '18px';
  fullText.style.lineHeight = '1.6';
  fullText.style.color = '#222';
  fullText.style.background = 'rgba(250, 250, 250, 0.9)';
  fullText.style.padding = '20px';
  fullText.style.borderRadius = '12px';
  fullText.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  fullText.style.margin = '0 auto';
  fullText.style.maxWidth = '800px';
  fullText.style.textAlign = 'justify';
  content.appendChild(fullText);
}
  const backBtn = document.createElement('button');
  backBtn.textContent = '← Back';
  backBtn.className = 'back-btn';
  backBtn.onclick = showNews;
  content.appendChild(backBtn);

  const title = document.createElement('h1');
  title.textContent = item.title;
  content.appendChild(title);

  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.style.maxWidth = '600px';
    img.style.height = 'auto';
    img.style.borderRadius = '10px';
    img.style.margin = '20px auto'; // <-- тут auto по бокам
  img.style.display = 'block';
    content.appendChild(img);
  }

  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  content.appendChild(fullText);




// Запуск - показываем главную страницу
showPage('Home');
