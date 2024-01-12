//Cria classe e especializa um HRTMLElement
class CardNews extends HTMLElement {
        constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        //inicialização dos elementos
        const blocoNoticia = document.createElement("div");
        const infosNoticia = document.createElement("div");
        const imagemNoticia = document.createElement("div");
        const autor = document.createElement("div");
        const bloco1 = document.createElement("div");
        const infoMetadados = document.createElement("div");

        const span1 = document.createElement("span");
        const fonte = document.createElement("span");
        const span2 = document.createElement("span");

        const autorImage = document.createElement("img");
        const noticiaImg = document.createElement("img");

        const nomeAutor = document.createElement("p");
        const breveTexto = document.createElement("p");

        const titulo = document.createElement("h2");

        //atribuindo conteudo por meio de props
        titulo.textContent = this.getAttribute('titulo');
        autorImage.src = this.getAttribute('fonteImagem');
        noticiaImg.src = this.getAttribute('fonteNoticiaImg');
        nomeAutor.textContent = this.getAttribute('nomeAutor');
        breveTexto.textContent = this.getAttribute('breveTexto');
        span1.textContent = this.getAttribute('span1');
        fonte.textContent = this.getAttribute('fonte');
        span2.textContent = this.getAttribute('span2');

        //atribuição de classes
        blocoNoticia.setAttribute("class", "blocoNoticia");
        infosNoticia.setAttribute("class", "infosNoticia");
        imagemNoticia.setAttribute("class", "imagemNoticia");
        autor.setAttribute("class", "autor");
        bloco1.setAttribute("class", "bloco1");
        infoMetadados.setAttribute("class", "infoMetadados");
        autorImage.setAttribute("class", "autorImage");
        breveTexto.setAttribute("class", "breveTexto");

        //APPEND
        //layout principal
        blocoNoticia.appendChild(infosNoticia);
        blocoNoticia.appendChild(imagemNoticia);

        //autor
        infosNoticia.appendChild(autor);
        autor.appendChild(autorImage);
        autor.appendChild(nomeAutor);

        infosNoticia.appendChild(titulo);
        infosNoticia.appendChild(breveTexto);
        
        infosNoticia.appendChild(infoMetadados);
        infoMetadados.appendChild(bloco1);
        bloco1.appendChild(span1);
        bloco1.appendChild(fonte);
        bloco1.appendChild(span2);
        bloco1.innerHTML += "&copy;";

        imagemNoticia.appendChild(noticiaImg);

        return blocoNoticia;
    }

    styles(){
        const style = document.createElement('style');

        style.textContent = `
        *{
            font-family: Arial, Helvetica, sans-serif;
            padding: 0;
            margin: 0;
        }
        
        .blocoNoticia{
            padding: 20px;
            max-width: 800px;
            margin: 10vh auto;
            box-shadow: 2px 5px 5px 2px #00000081;
        }
        
        .infosNoticia{
            padding: 0px 20px;
        }
        
        .blocoNoticia, .autor, .infoMetadados, .imagemNoticia{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        
        .infoMetadados{
            justify-content: space-between;
        }
        
        .autorImage{
            height: 30px;
            width: 30px;
            border-radius: 50%;
        }
        
        .autor{
            gap: 10px;
        }
        
        .infosNoticia h2, .infosNoticia p{
            margin: 10px 0;
        }
        
        .infoMetadados .bloco1, .breveTexto{
            color: #666;
        }
        
        .fonte{
            background-color: lightgray;
            padding: 5px;
            border-radius: 20px;
        }
        `


        return style;
    }
}

customElements.define('card-news', CardNews);