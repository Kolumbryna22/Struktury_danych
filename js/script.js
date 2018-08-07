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

    function addElement(text, className) {
        // create element with given class

        var output = document.createElement("p");
        output.innerHTML = text;
        output.setAttribute("class", className);

        return output;
    }

    function addCategories(classList, element) {
        // add classes to box

        var i = 0;

        while(classList[i]) {
            element.classList.add(classList[i]);
            i++;
        }

        return element;
    }
    
    function showData() {
        var i;
        var box;
        var title;
        var content;
        var element = document.getElementById("dataContent");

        for(i = 0; i < data.length; i++) {
            // create box
            box = document.createElement("div");
            box.setAttribute("id", data[i].id);
            box.setAttribute("class", "box");

            // add classes to box
            addCategories(data[i].categories, box);

            // create title and content of box
            title = addElement(data[i].title, "box-title");
            content = addElement(data[i].content, "box-content");

            // add title and content to box
            box.appendChild(title);
            box.appendChild(content);

            // add box to DOM
            element.appendChild(box);
        }
    }

    showData();
})();
