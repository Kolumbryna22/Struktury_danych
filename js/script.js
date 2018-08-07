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
    
    function showData() {
        var n = data.length;
        var i;
        var div = [];
        var title = [];
        var content = [];
        var element = document.getElementById("dataContent");

        for(i = 0; i < n; i++) {
            div[i] = document.createElement("div");
            div[i].setAttribute("id", data[i].id);

            title[i] = document.createElement("p");
            title[i].appendChild(document.createTextNode(data[i].title));

            content[i] = document.createElement("p");
            content[i].appendChild(document.createTextNode(data[i].content));

            div[i].appendChild(title[i]);
            div[i].appendChild(content[i]);

            element.appendChild(div[i]);
        }
    }

    showData();
})();
