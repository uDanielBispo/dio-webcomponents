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


[curso](https://web.dio.me/track/coding-future-banco-pan-desenvolvimento-frontend-com-angular?order=undefined&page=1&search=&tab=path&track_id=7a55c727-bb2a-42a7-831b-6c38b4e83868)
