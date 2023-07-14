const secretCode = 'quar';

let inputCode = '';

document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();

  inputCode += key;

  if (inputCode === secretCode) {
    activateEasterEgg();
  }

  setTimeout(function() {
    inputCode = '';
  }, 1000);
});

function activateEasterEgg() {
  function getRandomUnicodeCharacter() {
    const start = 0x0021;
    const end = 0x1F4FF;
    const randomCode = Math.floor(Math.random() * (end - start + 1)) + start;
    return String.fromCodePoint(randomCode);
  }

  function getRandomTextNode(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];

    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    const randomIndex = Math.floor(Math.random() * textNodes.length);
    return textNodes[randomIndex];
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const quarTextElement = document.querySelector('h1');
  quarTextElement.textContent = '/dev/urandom';

  setTimeout(function() {
    function appendRandomCharacter() {
      const randomElement = document.body;
      const textNode = getRandomTextNode(randomElement);

      if (textNode) {
        const currentText = textNode.textContent;
        const randomCharacter = getRandomUnicodeCharacter();
        textNode.textContent = currentText + randomCharacter;
      }
    }

    function changeRandomColor() {
      const elements = document.querySelectorAll('body *:not(script)');
      const randomIndex = Math.floor(Math.random() * elements.length);
      const randomElement = elements[randomIndex];
      const randomColor = getRandomColor();
      randomElement.style.color = randomColor;
    }

    function shakeRandomElement() {
      const elements = document.querySelectorAll('body *:not(script)');
      const randomIndex = Math.floor(Math.random() * elements.length);
      const randomElement = elements[randomIndex];
      randomElement.style.transform = `translate(${getRandomDisplacement()}, ${getRandomDisplacement()})`;
    }

    function getRandomDisplacement() {
      const displacement = Math.floor(Math.random() * 10) - 5;
      return `${displacement}px`;
    }

    function changeRandomCSSProperty() {
      const elements = document.querySelectorAll('body *:not(script)');
      const randomIndex = Math.floor(Math.random() * elements.length);
      const randomElement = elements[randomIndex];
      const randomCSSProperty = getRandomCSSProperty();
      const randomValue = getRandomCSSValue(randomCSSProperty);
      randomElement.style[randomCSSProperty] = randomValue;
    }

    function getRandomCSSProperty() {
      const cssProperties = [
        'width',
        'height',
        'borderRadius',
        'transform',
        'backgroundColor',
        'color',
        'fontFamily',
        'fontSize',
        'fontWeight',
      ];
      const randomIndex = Math.floor(Math.random() * cssProperties.length);
      return cssProperties[randomIndex];
    }

    function getRandomCSSValue(property) {
      if (property === 'borderRadius' || property === 'fontSize') {
        return `${Math.floor(Math.random() * 50)}px`;
      } else if (property === 'transform') {
        return `rotate(${getRandomRotation()}deg)`;
      } else if (property === 'backgroundColor' || property === 'color') {
        return getRandomColor();
      } else if (property === 'fontFamily') {
        return 'Arial, sans-serif';
      } else if (property === 'fontWeight') {
        return Math.floor(Math.random() * 900) + 100;
      } else {
        return `${Math.floor(Math.random() * 300)}px`;
      }
    }

    function getRandomRotation() {
      return Math.floor(Math.random() * 360);
    }

    setInterval(appendRandomCharacter, 0);
    setInterval(changeRandomColor, 0);
    setInterval(shakeRandomElement, 0);
    setInterval(changeRandomCSSProperty, 0);
  }, 1500);
}