app = document.getElementById('root');

container = document.createElement('div')
container.setAttribute('class', 'container');

app.appendChild(container);


fetch('https://www.reddit.com/r/aww/.json')
    .then(response => {
        return response.json()
    })

    .then(data => {
        children = data.data.children;

        for (i = 0; i < children.length; i++) {

            card = document.createElement('div')
            card.setAttribute('class', 'card')

            h1 = document.createElement('h1');
            h1.textContent = children[i].data.title;

            img = document.createElement('img');
            img.src = children[i].data.thumbnail;

            a = document.createElement('a');
            linkText = document.createTextNode(children[i].data.url)
            a.appendChild(linkText);
            a.title = children[i].data.url;
            a.href = children[i].data.url;

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(img)
            card.appendChild(a)
        }
    })

    .catch(err => {

    });
