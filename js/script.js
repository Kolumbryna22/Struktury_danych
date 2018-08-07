(function() {
    'use strict';
    
    var data = [
        {
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        },
    ];

    function addElement(text) {
        return document.createElement("p").appendChild(document.createTextNode(text));
    }
    
    function showData() {
        var i;
        var div = [];
        var title = [];
        var content = [];
        var element = document.getElementById("dataContent");

        for(i = 0; i < data.length; i++) {
            div[i] = document.createElement("div");
            div[i].setAttribute("id", data[i].id);
            div[i].setAttribute("class", "box");

            title[i] = document.createElement("p");
            title[i].appendChild(document.createTextNode(data[i].title));
            title[i].setAttribute("class", "box-title");
            
            content[i] = document.createElement("p");
            content[i].appendChild(document.createTextNode(data[i].content));
            content[i].setAttribute("class", "box-content");

            div[i].appendChild(title[i]);
            div[i].appendChild(content[i]);

            // nie wiem dlaczego w ten sposób nie działa
            // div[i].appendChild(addElement(data[i].title));
            // div[i].appendChild(addElement(data[i].content);
            // jak zrobię przez zmienną, np.:
            // title[i] = addElement(data[i].title);
            // div[i].appendChild(title[i]);
            // to też nie działa tylko wystawia sam tekst bez tagu p

            element.appendChild(div[i]);
        }
    }

    showData();
})();
