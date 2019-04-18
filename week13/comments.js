(function (window) {
  'use strict';

  const body = document.querySelector('body');

  // Load posts
  $.getJSON("https://jsonplaceholder.typicode.com/posts", (posts) => {
    posts.forEach((post) => {
      $(body).append(`<article>
          <h2 data-posts="title">${post.title}</h2>
          <p data-posts="body">
              ${post.body}
          </p>
  
          <button data-posts="id" value="${post.id}" type="button">Show comments</button>
  
          <section class="comments" id="comments-${post.id}" hidden>
              <h3>Comments</h3>
              TODO: Generate these dynamically.
              <!--<p data-comments="body">
                  laudantium enim quasi est quidem magnam voluptate ipsam eos<br>
                  tempora quo necessitatibus<br>
                  dolor quam autem quasi<br>
                  reiciendis et nam sapiente accusantium
              </p>
              <address data-comments="name">
                  <a data-comments="email" href="mailto:Eliseo@gardner.biz">id labore ex et quam laborum</a>
              </address>-->
          </section>
      </article>`);
    });

    const BUTTON_SELECTOR = '[data-posts="id"]';

    let buttons = document.querySelectorAll(BUTTON_SELECTOR);
  
    buttons.forEach(function (button) {
      'use strict';
  
      let sectionSelector = `#comments-${button.value}`;
      let commentSection = document.querySelector(sectionSelector);
  
      button.addEventListener('click', function (event) {
        if (commentSection.hidden) {
          commentSection.hidden = false;
          button.textContent = 'Hide comments';
        } else {
          commentSection.hidden = true;
          button.textContent = 'Show comments';
        }
  
        event.preventDefault();
      });
    });
  });
})(window);
