function fetchAndRenderMarkdown(href) {
  if (href.endsWith('.md')) {
    const rawLink = href.replace('/blob/', '/').replace('github.com', 'raw.githubusercontent.com');
    fetch(rawLink)
      .then(response => response.text())
      .then(markdownContent => {
        const md = window.markdownit({ html: true });
        const htmlContent = md.render(markdownContent);
        document.getElementById('markdown-body').innerHTML = htmlContent;
      })
      .catch(error => {
        console.error(`Error fetching ${rawLink}:`, error);
      });
  }
}

fetch('https://raw.githubusercontent.com/QuarTheDev/userscripts/main/README.md')
  .then(response => response.text())
  .then(markdownContent => {
    const md = window.markdownit({ html: true });

    // Modify the links to fetch and render the corresponding Markdown file
    const renderer = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => {
      const aIndex = tokens[idx].attrIndex('href');
      if (aIndex >= 0) {
        const href = tokens[idx].attrs[aIndex][1];
        tokens[idx].attrSet('href', '#'); // Set href to '#' to prevent redirection
        tokens[idx].attrSet('onclick', `fetchAndRenderMarkdown('${href}')`);
      }
      return self.renderToken(tokens, idx, options);
    });

    md.renderer.rules.link_open = renderer;
    const htmlContent = md.render(markdownContent);
    document.getElementById('markdown-body').innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Error fetching README.md:', error);
  });