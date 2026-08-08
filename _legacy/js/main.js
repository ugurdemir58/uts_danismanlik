(function () {
  var header = document.getElementById('header');
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');
  var faqItems = document.querySelectorAll('.faq-item');
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');
  var navLinks = document.querySelectorAll('.nav-link, .mobile-nav a');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setMobileOpen(open) {
    mobileNav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    if (open) {
      mobileNav.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      window.setTimeout(function () {
        if (!mobileNav.classList.contains('open')) {
          mobileNav.setAttribute('hidden', '');
        }
      }, 280);
    }
  }

  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });

  menuToggle.addEventListener('click', function () {
    setMobileOpen(!mobileNav.classList.contains('open'));
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMobileOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      setMobileOpen(false);
      menuToggle.focus();
    }
  });

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      faqItems.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });

    if (item.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      question.setAttribute('aria-expanded', 'true');
    }
  });

  var sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var id = section.id;
      if (!id) return;
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { passive: true });

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
      formStatus.hidden = false;
      formStatus.classList.add('error');
      formStatus.textContent = 'Lütfen zorunlu alanları doldurun.';
      return;
    }

    formStatus.hidden = false;
    formStatus.classList.remove('error');
    formStatus.textContent = 'Teşekkürler, ' + name + '. Talebiniz alındı; en kısa sürede dönüş yapacağız.';
    contactForm.reset();
  });
})();
