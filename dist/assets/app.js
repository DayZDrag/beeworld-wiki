(() => {
  const articles = {
    start: {
      title: 'Начало',
      section: 'Справочник',
      lede: 'Краткая карта текущего прототипа BeeWorld: живые колонии, гекс-миры, строительство ульев и наследуемые мутации.',
      search: 'начало обзор игра стратегия 2d топдаун гексы планета пчелы улей мир',
      html: `
        <div class="wiki-hero" role="img" aria-label="Игровой кадр внешней карты BeeWorld с ульем, цветами и кнопками действий">
          <div><p class="article-eyebrow"><span></span> Текущий прототип</p><h2>Рой, который меняет мир</h2><p>BeeWorld — 2D-стратегия с видом сверху под небольшим углом. Игрок ведёт пчёл, развивает живые ульи, собирает мёд и открывает мутации.</p></div>
        </div>
        <section class="article-section" id="about"><h2>Что это за игра</h2><p>В основе BeeWorld — природа и автономная жизнь колонии, а не фабричная автоматизация. Внешний мир состоит из гекс-регионов: здесь пчёлы собирают пыльцу, встречают чужие ульи и осваивают редкие ресурсы. Внутри улья они строят связанные восковые блоки, соты, выходы и стены.</p><div class="info-callout"><span>i</span><p><b>Важно:</b> это справочник текущего прототипа. Запланированные системы не выдаются здесь за уже готовые механики.</p></div></section>
        <section class="article-section" id="browse"><h2>Открыть раздел</h2><div class="quick-grid">
          <a class="quick-card" href="#worlds" data-article-link="worlds"><span>◌</span><b>Миры и карта</b><small>Гексы, внешняя карта, чужие колонии и королевы.</small></a>
          <a class="quick-card" href="#hive" data-article-link="hive"><span>⬡</span><b>Улей</b><small>Внутренность, блоки, соты, стены и выходы.</small></a>
          <a class="quick-card" href="#creatures" data-article-link="creatures"><span>✦</span><b>Существа</b><small>Пчёлы, осы, шмели, шершни и ресурсные линии.</small></a>
          <a class="quick-card" href="#mutations" data-article-link="mutations"><span>✣</span><b>Мутации</b><small>Заряды, уровни и применение через клавишу G.</small></a>
        </div></section>
        <section class="article-section" id="first-flight"><h2>Первые действия</h2><ol class="step-list"><li>Создайте мир, указав название и seed — он определяет воспроизводимую раскладку мира.</li><li>Выберите пчёл и отправьте их к цветочному кусту, чтобы собирать пыльцу.</li><li>Откройте улей кликом по его оболочке; во внутренней карте размещаются строительные блоки и соты.</li><li>Следите за сытостью, здоровьем и запасом мёда, затем расширяйте колонию.</li></ol></section>
      `
    },
    worlds: {
      title: 'Миры и карта',
      section: 'Справочник',
      lede: 'Внешняя карта — место для полётов, добычи пыльцы и контакта с другими колониями.',
      search: 'мир карта гекс планета seed колония чужой улей королева враг нейтральный вход выход',
      html: `
        <section class="article-section" id="world-map"><h2>Внешний мир</h2><p>Прототип начинается на крупном гексагональном сегменте планеты. На внешней карте видны дерево с главным ульем, цветочные кусты, ресурсные источники и автономные чужие колонии. Пчёлы пересекают вход и выход улья физически — они не появляются на другой карте мгновенно.</p><figure class="article-figure"><img src="assets/gameplay/world-overview.png" alt="Игровой кадр большой внешней карты BeeWorld с деревьями, цветами, камнями, ульями и роем" loading="lazy" /><figcaption><b>Внешняя карта в игре.</b> Кадр показывает масштаб мира, природные объекты и расположение колоний.</figcaption></figure><div class="tag-line"><span>Гекс-сегмент</span><span>Вид сверху под углом</span><span>Пыльца и ресурсы</span><span>Чужие ульи</span></div></section>
        <section class="article-section" id="foreign-hives"><h2>Чужие ульи</h2><p>Каждая иностранная колония хранит отдельно своих рабочих, королеву, здоровье, строительство, яйца и отношение к игроку. Пока улей нейтрален, рабочие патрулируют территорию. После атаки игрока конкретная колония становится враждебной.</p><table class="data-table"><thead><tr><th>Состояние</th><th>Как работает</th></tr></thead><tbody><tr><td>Нейтральный</td><td>Рабочие защищаются от слишком близкого роя, но не начинают войну без причины.</td></tr><tr><td>Враждебный</td><td>Рабочие выбирают цели среди пчёл игрока и могут атаковать внешний улей.</td></tr><tr><td>Захваченный</td><td>Появляется после победы над королевой: рабочие становятся управляемыми, а улей получает отдельную внутреннюю карту.</td></tr></tbody></table></section>
        <section class="article-section" id="queen"><h2>Королева и захват</h2><p>Победа над чужой королевой захватывает её колонию, а не уничтожает её. Королева становится дружественной и живёт во внутренности захваченного улья. Если погибает королева игрока, колония терпит поражение.</p><div class="info-callout"><span>!</span><p><b>Риск:</b> сначала разберитесь с рабочими, затем атакуйте королеву. У каждого захваченного улья свои блоки, соты, выходы и сохранённое состояние.</p></div></section>
      `
    },
    hive: {
      title: 'Улей и постройка',
      section: 'Справочник',
      lede: 'Улей — это внешняя восковая оболочка и отдельная внутренняя карта, которую развивает рой.',
      search: 'улей соты блок стена выход постройка воск внутренний карта строительный призрак honeycomb',
      html: `
        <section class="article-section" id="hive-overview"><h2>Два слоя улья</h2><p>Снаружи улей выглядит как закрытая восковая оболочка из гекс-пластин. Её форма отражает раскладку внутренних строительных блоков. Клик по оболочке открывает отдельную жёлтую внутреннюю карту; выход возвращает рой наружу.</p><figure class="article-figure"><img src="assets/gameplay/hive-interior.png" alt="Игровой кадр внутренней карты улья с восковыми ячейками и рабочими пчёлами" loading="lazy" /><figcaption><b>Внутренность улья в игре.</b> Связанные восковые ячейки образуют отдельную строительную карту.</figcaption></figure></section>
        <section class="article-section" id="building"><h2>Строительные блоки и планы</h2><p>В центре внутренности есть фундамент из связанных блоков. Новый блок выбирает одну из шести соседних позиций уже существующего блока. По этим поверхностям могут перемещаться пчёлы; соты и выходы ставятся только на занятую ячейку и точно к ней привязываются.</p><ol class="step-list"><li>Откройте меню <kbd>E</kbd> и вкладку <b>БЛОКИ</b>.</li><li>Выберите строительный блок, соту или выход.</li><li>Кликните по допустимой ячейке; выбранная пчела доставит мёд и завершит работу.</li><li>Удерживайте <kbd>Shift</kbd>, чтобы поставить прозрачный план — свободные внутренние пчёлы достроят его автоматически за мёд.</li></ol><figure class="article-figure"><img src="assets/gameplay/build-menu.png" alt="Игровое меню строительства BeeWorld с кнопками блоков, сот, выходов, кустов и деревьев" loading="lazy" /><figcaption><b>Меню строительства в игре.</b> Отсюда выбираются блоки улья, соты, выходы и объекты внешнего мира.</figcaption></figure></section>
        <section class="article-section" id="honeycomb"><h2>Соты, стены и выходы</h2><table class="data-table"><thead><tr><th>Объект</th><th>Назначение</th></tr></thead><tbody><tr><td>Сота</td><td>Хранит мёд. Пчела физически подлетает к соте и ждёт короткую обработку, чтобы отдать мёд или поесть.</td></tr><tr><td>Стена улья</td><td>Ставится на строительном блоке и закрывает ячейку для движения. Может быть готовой или запланированной.</td></tr><tr><td>Выход</td><td>Связывает внутреннюю карту с входом на внешней оболочке. Несколько выходов создают несколько соответствующих входов.</td></tr></tbody></table><p>Обычная сота принимает только цветочный мёд. У специализированных колоний есть свои соты, которые принимают только соответствующий тип мёда.</p></section>
      `
    },
    resources: {
      title: 'Ресурсы и мёд',
      section: 'Справочник',
      lede: 'Пыльца кормит и строит обычную колонию, а редкие источники дают особые виды мёда.',
      search: 'ресурсы пыльца цветы мёд дерево камень железо wood stone iron реактор куст honeycomb',
      html: `
        <section class="article-section" id="pollen"><h2>Пыльца и цветы</h2><p>Цветочный куст — основной источник для обычных пчёл. Пчела получает пыльцу у цветка, затем доставляет её в улей. Цветы расходуются и постепенно восстанавливаются; если один куст истощён, рабочие переключаются на ближайший доступный.</p><div class="info-callout"><span>✳</span><p><b>Маршрут важен:</b> пчела выходит через внутренний выход и внешний вход, а затем облетает восковую оболочку по безопасной стороне, если прямой путь перекрыт ульем.</p></div></section>
        <section class="article-section" id="special-honey"><h2>Особые линии мёда</h2><p>В каждом новом мире существуют нейтральные специализированные колонии. После захвата их рабочие становятся частью роя, но продолжают работать только со своим типом ресурса и соты.</p><table class="data-table"><thead><tr><th>Линия</th><th>Источник</th><th>Результат</th></tr></thead><tbody><tr><td>Деревянные пчёлы</td><td>Живые деревья</td><td>Деревянный мёд</td></tr><tr><td>Каменные пчёлы</td><td>Серые каменные выходы</td><td>Каменный мёд</td></tr><tr><td>Железные пчёлы</td><td>Сломанные реакторы</td><td>Железный мёд</td></tr></tbody></table></section>
        <section class="article-section" id="sources"><h2>Восстановление источников</h2><p>Источники темнеют и уменьшаются по мере добычи, а затем появляются снова в новой допустимой точке внешней карты. Их положение, оставшиеся запасы, таймеры восстановления и итоговые особые запасы сохраняются в мире.</p></section>
      `
    },
    creatures: {
      title: 'Существа роя',
      section: 'Справочник',
      lede: 'У существ есть здоровье, голод, возраст и переносимый ресурс. Виды отличаются ролями и возможностями.',
      search: 'пчела оса шмель шершень деревянная каменная железная здоровье голод пыльца существо рой',
      html: `
        <section class="article-section" id="core-creatures"><h2>Основные виды</h2><div class="creature-grid"><div class="wiki-card"><span class="tag">Основа</span><h3>Пчела</h3><p>Универсальная работница: собирает и доставляет пыльцу, строит объекты, летит по приказу и сражается.</p></div><div class="wiki-card warrior"><span class="tag">Защита</span><h3>Оса</h3><p>Собирает пыльцу, но не получает задания на строительство. Автоматически защищает от враждебного улья и наносит тройной обычный урон.</p></div><div class="wiki-card"><span class="tag">Сборщик</span><h3>Шмель</h3><p>Мирный тяжёлый сборщик: не строит и не атакует, зато переносит в 2,7 раза больше пыльцы, имеет 1,5× здоровья и двойной запас голода.</p></div><div class="wiki-card warrior"><span class="tag">Строитель</span><h3>Шершень</h3><p>Прочный боец и строитель: имеет 2× здоровья, 2,5× запас голода, собирает пыльцу и не погибает после укуса.</p></div></div><figure class="article-figure"><img src="assets/gameplay/swarm-filter.png" alt="Игровой экран отделения роя с фильтрами видов существ и мутаций" loading="lazy" /><figcaption><b>Отбор роя в игре.</b> В меню можно оставить в выделении нужный вид существа или носителей конкретной мутации.</figcaption></figure></section>
        <section class="article-section" id="resource-workers"><h2>Специалисты</h2><p>Деревянные, каменные и железные пчёлы принадлежат захваченным ресурсным колониям. Их можно выделять и посылать к подходящим источникам, но они не смешивают типы мёда: специализированная сота не примет цветочный мёд, а обычная — особый.</p><div class="creature-grid"><div class="wiki-card resource"><span class="tag">Дерево</span><h3>Деревянная пчела</h3><p>Летит только к живому дереву и переносит деревянный мёд.</p></div><div class="wiki-card resource"><span class="tag">Камень</span><h3>Каменная пчела</h3><p>Работает с каменными выходами и каменным мёдом.</p></div><div class="wiki-card resource"><span class="tag">Железо</span><h3>Железная пчела</h3><p>Разбирает сломанные реакторы ради железного мёда.</p></div></div></section>
        <section class="article-section" id="needs"><h2>Потребности и рост</h2><p>У каждой пчелы видны здоровье, голод, возраст и переносимый ресурс. Когда голод опускается до нуля, здоровье начинает снижаться. Опыт накапливается за сбор, доставку, стройку и успешные атаки; уровни усиливают базовые характеристики существа.</p></section>
      `
    },
    mutations: {
      title: 'Мутации',
      section: 'Справочник',
      lede: 'Мутации — независимые сохранённые признаки. Они могут усиливать существо постоянно или открывать активную способность.',
      search: 'мутация активная пассивная g заряд 25 секунд рывок невидимость лазер волна молния щит лечение коллективный разум',
      html: `
        <section class="article-section" id="how-mutations-work"><h2>Как работают мутации</h2><p>Новые существа получают шанс на первую уникальную мутацию при рождении. Число разных признаков — это уровень мутации: дополнительные уровни усиливают подходящие бонусы и параметры активных способностей. Состояние мутаций сохраняется в мире.</p><figure class="article-figure"><img src="assets/gameplay/admin-mutations.png" alt="Игровой экран создания существа с параметрами и сеткой выбора мутаций" loading="lazy" /><figcaption><b>Экран параметров и мутаций в игре.</b> Сетка показывает доступные признаки, которые можно назначить существу.</figcaption></figure><div class="info-callout"><span>G</span><p><b>Активные эффекты:</b> их шкала заряжается 25 секунд и получает ещё 25% заряда от каждого удара врага. Нажмите <kbd>G</kbd>, чтобы применить все готовые активные мутации у выделенных пчёл.</p></div></section>
        <section class="article-section" id="examples"><h2>Примеры</h2><table class="data-table"><thead><tr><th>Мутация</th><th>Тип</th><th>Эффект</th></tr></thead><tbody><tr><td>Рывок</td><td>Активная</td><td>Ускоряет движение к текущей цели; может сработать сам и принудительно запускается через G.</td></tr><tr><td>Невидимость</td><td>Активная</td><td>На короткое время делает пчелу прозрачной и исключает её из выбора вражеских целей.</td></tr><tr><td>Волна / вода / молния</td><td>Активные</td><td>Боевые эффекты с видимым распространением, уроном и дополнительными состояниями.</td></tr><tr><td>Щиты и лечение</td><td>Активные</td><td>Личные и массовые защитные или лечебные импульсы для союзников.</td></tr><tr><td>Уменьшение</td><td>Пассивная</td><td>Постоянно удерживает уменьшенный масштаб; не требует заряда.</td></tr></tbody></table></section>
        <section class="article-section" id="filters"><h2>Отбор роя</h2><p>Кнопка <b>Отделить</b> помогает оставить в выделении пчёл определённого вида, с мутациями или без них, а также носителей конкретного признака. Пункт <b>Все мутации…</b> открывает полную сетку доступных базовых и активных мутаций.</p></section>
      `
    },
    controls: {
      title: 'Управление',
      section: 'Помощь',
      lede: 'Главные клавиши и действия мышью из текущей версии BeeWorld.',
      search: 'управление клавиши wasd стрелки z x q e g escape лкм пкм shift колесо мыши камера пипетка',
      html: `
        <section class="article-section" id="keyboard"><h2>Клавиатура</h2><div class="key-list"><div><kbd>W A S D</kbd><span>Перемещать камеру.</span></div><div><kbd>← ↑ ↓ →</kbd><span>Перемещать камеру.</span></div><div><kbd>Z</kbd><span>Приблизить камеру до минимального масштаба.</span></div><div><kbd>X</kbd><span>Отдалить камеру до максимального масштаба.</span></div><div><kbd>E</kbd><span>Открыть или закрыть Creative-меню.</span></div><div><kbd>Q</kbd><span>Включить пипетку для объектов и существ.</span></div><div><kbd>G</kbd><span>Применить готовые активные мутации выделения.</span></div><div><kbd>Esc</kbd><span>Отменить приказ или открыть меню мира без выделения.</span></div></div></section>
        <section class="article-section" id="mouse"><h2>Мышь</h2><table class="data-table"><thead><tr><th>Действие</th><th>Результат</th></tr></thead><tbody><tr><td>ЛКМ по улью</td><td>Открыть внутреннюю карту улья.</td></tr><tr><td>ЛКМ по цветку с выделенными пчёлами</td><td>Назначить сбор пыльцы.</td></tr><tr><td>ЛКМ по свободной карте</td><td>Приказать выделенным пчёлам переместиться.</td></tr><tr><td>ЛКМ с рамкой</td><td>Выбрать несколько пчёл.</td></tr><tr><td>Колесо мыши</td><td>Менять масштаб камеры.</td></tr><tr><td>ПКМ с движением</td><td>Перемещать камеру.</td></tr><tr><td>ПКМ в режиме размещения</td><td>Отменить размещение.</td></tr></tbody></table></section>
        <section class="article-section" id="building-controls"><h2>Стройка и выделение</h2><p>Удерживайте <kbd>Shift</kbd> при клике или установке объекта, чтобы добавить пчелу к выделению либо создать призрачный план для автоматической стройки. Пипетка <kbd>Q</kbd> выбирает пчёл, соты, выходы, цветочные кусты, деревья, строительные блоки и стены улья; повторное нажатие или ПКМ отменяет её.</p></section>
      `
    },
    save: {
      title: 'Миры и сохранения',
      section: 'Помощь',
      lede: 'Мир получает имя и seed, а игра сохраняет состояние колонии и объектов между запусками.',
      search: 'сохранение мир seed название автосохранение 360 секунд шесть минут playerprefs призрак план захват',
      html: `
        <section class="article-section" id="create-world"><h2>Создание мира</h2><p>В меню <b>Играть</b> можно создать мир с названием и seed. Seed задаёт воспроизводимую раскладку деревьев и цветочных кустов. Мир можно сохранить, вернуться к его выбору или удалить через его собственную кнопку в меню.</p></section>
        <section class="article-section" id="autosave"><h2>Автосохранение</h2><p>По умолчанию автосохранение срабатывает раз в 360 секунд — шесть минут. Текущий мир также можно сохранить из меню мира; при открытом меню игровая симуляция остановлена.</p><div class="info-callout"><span>◈</span><p><b>Что хранится:</b> внутренние блоки, стены, выходы, соты, запас мёда, игроковые существа, размещённые объекты природы, состояния чужих ульев и незавершённые планы.</p></div></section>
        <section class="article-section" id="planned-builds"><h2>Незавершённые планы</h2><p>Призрачные блоки, стены, соты и выходы сохраняются как незаконченные планы, а не как уже готовые постройки. После загрузки они остаются видимыми и ожидают нового строительного действия, поэтому не превращаются в завершённые объекты сами по себе.</p></section>
      `
    }
  };

  const root = document.querySelector('[data-article-root]');
  const breadcrumb = document.querySelector('[data-breadcrumb]');
  const toc = document.querySelector('[data-article-toc]');
  const searchInput = document.querySelector('[data-search-input]');
  const searchForm = document.querySelector('[data-search-form]');
  const searchPanel = document.querySelector('[data-search-results]');
  const searchList = document.querySelector('[data-search-list]');
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarToggle = document.querySelector('[data-sidebar-toggle]');
  let activeId = 'start';

  const setActiveNavigation = (id) => {
    document.querySelectorAll('[data-article]').forEach((button) => {
      if (button.dataset.article === id) {
        button.setAttribute('aria-current', 'page');
      } else {
        button.removeAttribute('aria-current');
      }
    });
  };

  const setArticle = (id, updateHash = true) => {
    const article = articles[id] || articles.start;
    activeId = articles[id] ? id : 'start';
    root.innerHTML = `<header class="article-head"><p class="article-eyebrow"><span></span>${article.section}</p><h1>${article.title}</h1><p class="article-lede">${article.lede}</p></header><div class="article-body">${article.html}</div>`;
    breadcrumb.textContent = article.title;
    document.title = `${article.title} — BeeWorld Wiki`;
    setActiveNavigation(activeId);
    toc.replaceChildren();
    root.querySelectorAll('.article-section[id]').forEach((section) => {
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      link.textContent = section.querySelector('h2').textContent;
      toc.append(link);
    });
    if (updateHash) history.replaceState(null, '', `#${activeId}`);
    sidebar.classList.remove('is-open');
    sidebarToggle.setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showSearch = (query) => {
    const normalized = query.trim().toLocaleLowerCase('ru');
    if (!normalized) {
      searchPanel.hidden = true;
      searchList.replaceChildren();
      return;
    }
    const results = Object.entries(articles).filter(([, article]) => `${article.title} ${article.lede} ${article.search}`.toLocaleLowerCase('ru').includes(normalized));
    searchPanel.hidden = false;
    searchList.replaceChildren();
    if (!results.length) {
      const message = document.createElement('p');
      message.className = 'empty-search';
      message.textContent = `Ничего не найдено по запросу «${query.trim()}».`;
      searchList.append(message);
      return;
    }
    results.forEach(([id, article]) => {
      const result = document.createElement('button');
      result.type = 'button';
      result.className = 'search-result';
      result.dataset.searchArticle = id;
      result.innerHTML = `<span aria-hidden="true">⌕</span><span><b>${article.title}</b><small>${article.lede}</small></span>`;
      searchList.append(result);
    });
  };

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-article], [data-article-link], [data-search-article]');
    if (target) {
      event.preventDefault();
      const id = target.dataset.article || target.dataset.articleLink || target.dataset.searchArticle;
      searchInput.value = '';
      showSearch('');
      setArticle(id);
    }
  });

  searchForm.addEventListener('submit', (event) => event.preventDefault());
  searchInput.addEventListener('input', () => showSearch(searchInput.value));
  document.querySelector('[data-clear-search]').addEventListener('click', () => {
    searchInput.value = '';
    showSearch('');
    searchInput.focus();
  });

  sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('is-open');
    sidebarToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  window.addEventListener('hashchange', () => {
    const requested = location.hash.slice(1);
    if (requested && requested !== activeId && articles[requested]) setArticle(requested, false);
  });

  const initialId = location.hash.slice(1);
  setArticle(articles[initialId] ? initialId : 'start', false);
})();
