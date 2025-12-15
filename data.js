// data.js - core storage, seed data, utilities, theme handling
(function () {
  'use strict';

  var OL = {};
  window.OL = OL;

  OL.storageKey = 'ol_books_v1';
  OL.rentalsKey = 'ol_rentals_v1';
  OL.userKey = 'ol_user';
  OL.schemaKey = 'ol_schema_version';
  OL.schemaVersion = '2';

  // Master catalogue with synopsis + externalLink
  var SEED_BOOKS = [
    { id: 1, title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas', genre: 'Programming',
      cover: 'https://covers.openlibrary.org/b/isbn/020161622X-L.jpg', available: true,
      synopsis: 'A practical guide to modern software development principles and practices, emphasizing pragmatic thinking, code craftsmanship, and adaptive design.',
      externalLink: 'https://openlibrary.org/search?q=The+Pragmatic+Programmer+Andrew+Hunt'
    },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming',
      cover: 'https://covers.openlibrary.org/b/isbn/0132350882-L.jpg', available: true,
      synopsis: 'Explores principles and best practices for writing readable, maintainable code, supported by case studies that show how to refactor and improve existing codebases.',
      externalLink: 'https://openlibrary.org/search?q=Clean+Code+Robert+C+Martin'
    },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Fiction',
      cover: 'https://covers.openlibrary.org/b/isbn/0451524934-L.jpg', available: false,
      synopsis: 'A dystopian novel about a totalitarian regime that surveils and controls its citizens, examining themes of truth, freedom, and psychological manipulation.',
      externalLink: 'https://openlibrary.org/search?q=1984+George+Orwell'
    },
    { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction',
      cover: 'https://covers.openlibrary.org/b/isbn/0061120081-L.jpg', available: true,
      synopsis: 'Follows young Scout Finch in the American South as she witnesses racial injustice and moral courage through her father Atticusʼs defense of a Black man wrongly accused.',
      externalLink: 'https://openlibrary.org/search?q=To+Kill+a+Mockingbird+Harper+Lee'
    },
    { id: 5, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', genre: 'History',
      cover: 'https://covers.openlibrary.org/b/isbn/0062316095-L.jpg', available: true,
      synopsis: 'Surveys the history of Homo sapiens, from hunter-gatherer societies to modern technological civilizations, highlighting how shared myths and institutions shape societies.',
      externalLink: 'https://openlibrary.org/search?q=Sapiens+Yuval+Noah+Harari'
    },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy',
      cover: 'https://covers.openlibrary.org/b/isbn/054792822X-L.jpg', available: false,
      synopsis: 'Bilbo Baggins is drawn from his quiet life into an adventure with dwarves to reclaim treasure guarded by a dragon, encountering riddles, trolls, and peril along the way.',
      externalLink: 'https://openlibrary.org/search?q=The+Hobbit+J.R.R.+Tolkien'
    },
    { id: 7, title: 'Design Patterns', author: 'Erich Gamma et al.', genre: 'Programming',
      cover: 'https://covers.openlibrary.org/b/isbn/0201633612-L.jpg', available: true,
      synopsis: 'Catalogues common object-oriented design patterns, providing a shared vocabulary and proven solutions for building flexible and reusable software systems.',
      externalLink: 'https://openlibrary.org/search?q=Design+Patterns+Erich+Gamma'
    },
    { id: 8, title: 'The Lean Startup', author: 'Eric Ries', genre: 'Business',
      cover: 'https://covers.openlibrary.org/b/isbn/0307887898-L.jpg', available: true,
      synopsis: 'Introduces a methodology for creating startups using rapid experimentation, validated learning and iterative product releases to reduce waste and increase success.',
      externalLink: 'https://openlibrary.org/search?q=The+Lean+Startup+Eric+Ries'
    },
    { id: 9, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Fiction',
      cover: 'https://covers.openlibrary.org/b/isbn/0060850523-L.jpg', available: true,
      synopsis: 'Depicts a future society engineered for stability and pleasure through conditioning and drugs, raising questions about individuality, freedom and control.',
      externalLink: 'https://openlibrary.org/search?q=Brave+New+World+Aldous+Huxley'
    },
    { id: 10, title: 'Deep Work', author: 'Cal Newport', genre: 'Self-Help',
      cover: 'https://covers.openlibrary.org/b/isbn/1455586692-L.jpg', available: true,
      synopsis: 'Argues that focused, distraction-free work is essential for mastering complicated information and producing high-value output, offering strategies to cultivate such habits.',
      externalLink: 'https://openlibrary.org/search?q=Deep+Work+Cal+Newport'
    },
    { id: 11, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help',
      cover: 'https://covers.openlibrary.org/b/isbn/0735211299-L.jpg', available: true,
      synopsis: 'Explains how small, incremental habit changes compound over time and presents a framework for building good habits and breaking bad ones using cues, cravings, responses and rewards.',
      externalLink: 'https://openlibrary.org/search?q=Atomic+Habits+James+Clear'
    },
    { id: 12, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction',
      cover: 'https://covers.openlibrary.org/b/isbn/0062315005-L.jpg', available: true,
      synopsis: 'A philosophical tale about a shepherd pursuing his personal legend, emphasizing the importance of following oneʼs dreams and recognizing omens along the journey.',
      externalLink: 'https://openlibrary.org/search?q=The+Alchemist+Paulo+Coelho'
    },
    { id: 13, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', genre: 'Psychology',
      cover: 'https://covers.openlibrary.org/b/isbn/0374275637-L.jpg', available: true,
      synopsis: 'Describes two modes of thinking—fast, intuitive System 1 and slow, analytical System 2—and how cognitive biases arise from their interaction.',
      externalLink: 'https://openlibrary.org/search?q=Thinking+Fast+and+Slow+Daniel+Kahneman'
    },
    { id: 14, title: 'The Design of Everyday Things', author: 'Don Norman', genre: 'Design',
      cover: 'https://covers.openlibrary.org/b/isbn/0465050654-L.jpg', available: true,
      synopsis: 'Explores how thoughtful design makes objects understandable and easy to use, combining cognitive psychology with practical design examples.',
      externalLink: 'https://openlibrary.org/search?q=The+Design+of+Everyday+Things+Don+Norman'
    },
    { id: 15, title: 'The Four Agreements', author: 'Don Miguel Ruiz', genre: 'Self-Help',
      cover: 'https://covers.openlibrary.org/b/isbn/1878424319-L.jpg', available: true,
      synopsis: 'Offers four simple but powerful agreements—be impeccable with your word, donʼt take anything personally, donʼt make assumptions, always do your best—as a path to personal freedom.',
      externalLink: 'https://openlibrary.org/search?q=The+Four+Agreements+Don+Miguel+Ruiz'
    }
  ];

  OL.ensureSeed = function () {
    var ver = localStorage.getItem(OL.schemaKey);
    if (ver !== OL.schemaVersion) {
      // Fresh upgrade: reset books and rentals
      localStorage.setItem(OL.storageKey, JSON.stringify(SEED_BOOKS));
      localStorage.setItem(OL.rentalsKey, JSON.stringify([
        { id: 1001, bookId: 3, userEmail: 'alice@example.com', rentedAt: new Date(Date.now() - 5*24*3600*1000).toISOString() },
        { id: 1002, bookId: 6, userEmail: 'bob@example.com', rentedAt: new Date().toISOString() }
      ]));
      localStorage.setItem(OL.schemaKey, OL.schemaVersion);
      return;
    }

    var existing = JSON.parse(localStorage.getItem(OL.storageKey) || 'null');
    if (!existing) {
      localStorage.setItem(OL.storageKey, JSON.stringify(SEED_BOOKS));
    }
    if (!localStorage.getItem(OL.rentalsKey)) {
      localStorage.setItem(OL.rentalsKey, JSON.stringify([]));
    }
  };

  OL.getBooks = function () {
    OL.ensureSeed();
    return JSON.parse(localStorage.getItem(OL.storageKey) || '[]');
  };

  OL.saveBooks = function (b) {
    localStorage.setItem(OL.storageKey, JSON.stringify(b));
  };

  OL.getRentals = function () {
    OL.ensureSeed();
    return JSON.parse(localStorage.getItem(OL.rentalsKey) || '[]');
  };

  OL.saveRentals = function (r) {
    localStorage.setItem(OL.rentalsKey, JSON.stringify(r));
  };

  OL.setUser = function (u) {
    sessionStorage.setItem(OL.userKey, JSON.stringify(u));
  };

  OL.getUser = function () {
    try { return JSON.parse(sessionStorage.getItem(OL.userKey)); }
    catch (e) { return null; }
  };

  OL.logout = function () {
    sessionStorage.removeItem(OL.userKey);
    window.location = 'login.html';
  };

  OL.escape = function (s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  };

  // THEME HELPERS
  OL.applyTheme = function () {
    var theme = localStorage.getItem('ol_theme') || 'dark';
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  OL.toggleTheme = function () {
    var current = localStorage.getItem('ol_theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ol_theme', next);
    OL.applyTheme();
    return next;
  };

  OL.initThemeToggle = function (btnId) {
    OL.applyTheme();
    var btn = document.getElementById(btnId);
    if (!btn) return;
    function updateLabel() {
      var t = localStorage.getItem('ol_theme') || 'dark';
      btn.textContent = t === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
    updateLabel();
    btn.addEventListener('click', function () {
      OL.toggleTheme();
      updateLabel();
    });
  };

})();



