document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.gatsby-highlight').forEach(function (block) {
    var btn = document.createElement('button');
    btn.className = 'copy-button';
    btn.type = 'button';
    btn.innerText = 'Copy';

    // detect language from class like language-xxx
    var lang = '';
    var pre = block.querySelector('pre');
    if (pre) {
      var cls = pre.className || '';
      var m = cls.match(/language-([a-z0-9_+-]+)/i);
      if (m) lang = m[1];
      else {
        // sometimes code is wrapped with <code class="language-...">
        var code = pre.querySelector('code');
        if (code) {
          var ccls = code.className || '';
          var cm = ccls.match(/language-([a-z0-9_+-]+)/i);
          if (cm) lang = cm[1];
        }
      }
    }

    if (lang) {
      var t = document.createElement('div');
      t.className = 'code-language';
      t.innerText = lang.toUpperCase();
      block.style.position = 'relative';
      block.appendChild(t);
    }
    btn.addEventListener('click', function () {
      var code = block.querySelector('pre') ? block.querySelector('pre').innerText : '';
      navigator.clipboard.writeText(code).then(function () {
        btn.innerText = 'Copied';
        setTimeout(function () { btn.innerText = 'Copy'; }, 1200);
      });
    });
    block.appendChild(btn);
  });
});
