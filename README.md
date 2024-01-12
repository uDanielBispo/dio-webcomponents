# Trabalhando com Web Components no Front-end

## Shadow DOM

Que a DOM significa **Document Object Model** voce ja sabe, mas sabia que existe uma forma de criar e modificar sua propria DOM? Eu não sabia.

```jsx
//Cria classe e especializa um HRTMLElement
class CardNews extends HTMLElement {
     constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello World</h1>";
     }
}

customElements.define('card-news', CardNews);
```

Utilizando no HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News Component</title>
</head>
<body>
    
    <card-news></card-news>
    <script src="./src/components/cardNews.js" defer></script>
</body>
</html>
```