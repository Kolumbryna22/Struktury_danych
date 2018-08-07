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
        var title;
        var content;
        var element = document.getElementById("dataContent");

        for(i = 0; i < data.length; i++) {
            div[i] = document.createElement("div");
            div[i].setAttribute("id", data[i].id);
            
            title = addElement(data[i].title);
            content = addElement(data[i].content);

            div[i].appendChild(title);
            div[i].appendChild(content);

            element.appendChild(div[i]);
        }
    }

    showData();
})();
