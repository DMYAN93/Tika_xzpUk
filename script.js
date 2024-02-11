function hideContents() {
    let contents_list = document.getElementById("contents");
    let contents_button = document.getElementById("hideContentsButton");
    
    if( contents_button.innerHTML == "hide") {
        contents_list.style.display = "none";
        contents_button.innerHTML = "show";
    } else {
        contents_list.style.display = "block";
        contents_button.innerHTML = "hide";
    }
}

function generateContents () {
    
    let contents_list = Array.from(document.querySelectorAll('h2,h3'));

    console.log(contents_list);

    for (let i=0; i < contents_list.length; i++) {
        if (contents_list[i].tagName == 'H2') {
            
            let link = document.createElement('a');
            link.innerHTML = contents_list[i].innerHTML;
            link.href = "#" + contents_list[i].id;

            let listItem = document.createElement('li');
            listItem.append(link);

            test.append(listItem);

            if (contents_list[i+1].tagName == 'H3') {
                let second_lvl_list = document.createElement('ul');

                while (contents_list[i+1].tagName == "H3") {
                    let listItem2 = document.createElement('li');
                    let link2 = document.createElement('a');

                    link2.innerHTML = contents_list[i+1].innerHTML;
                    link2.href = "#" + contents_list[i+1].id;

                    listItem2.append(link2);
                    second_lvl_list.append(listItem2);

                    i++;
                }

                test.append(second_lvl_list);
            }
        } 
    }
}

function addListItems (list, header_text, header_id) {
    let listItem = document.createElement('li');
    let link = document.createElement('a');

    link.innerHTML = header_text;
    link.href = "#" + header_id;

    listItem.append(link);
    list.append(listItem);
}

function generateContents2 () {
    
    let contents_list = Array.from(document.querySelectorAll('h2, h3'));
    let test = document.getElementById("test");
    let i=0;

    while (i < contents_list.length) {
        if (contents_list[i].tagName == 'H2') {
            addListItems(test, contents_list[i].innerHTML, contents_list[i].id);
            i++;
        } else {
            let second_lvl_list = document.createElement('ul');
            while (contents_list[i].tagName == "H3") {
                addListItems(second_lvl_list, contents_list[i].innerHTML, contents_list[i].id);
                i++;
            }
            test.append(second_lvl_list);
        }
    }
}

function generateContents3() {
    let contents_list = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    
    addListItems3(contents_list, 0, document.getElementById('test-contents'));
}

function addListItem (list, header_text, header_id) {
    let listItem = document.createElement('li');
    let link = document.createElement('a');

    link.innerHTML = header_text;
    link.href = "#" + header_id;

    listItem.append(link);
    list.append(listItem);
}

function addListItems3(data, i, parent) {
    let list = document.createElement('ul');
    parent.append(list);

    let link = document.createElement('a');
    link.innerHTML = data[i].innerHTML;
    link.href = "#" + data[i].id;
    
    //create and set up list item
    let listItem = document.createElement('li');
    listItem.append(link);
    
    //add li to current list
    list.append(listItem);

    i++;

    while (i < data.length) {
        //create and set up link
        let link = document.createElement('a');
        link.innerHTML = data[i].innerHTML;
        link.href = "#" + data[i].id;
        
        //create and set up list item
        let listItem = document.createElement('li');
        listItem.append(link);
        
        //add li to current list
        list.append(listItem);

        i++;

        if (data[i].tagName > data[i-1].tagName) {
            i = addListItems3(data, i, list);
        }
    }
}



/* function addListItems3 (data, i, parent) {

    console.log("new cycle for " + i + ", " + data[i].innerHTML);

    //create list
    let list = document.createElement('ul');

    //add list to parent
    parent.append(list);
    
    //adding items while there are any
    while (data[i].tagName <= data[i+1].tagName) {
        console.log(i + " " + data[i].innerHTML);
        
        //create and set up link
        let link = document.createElement('a');
        link.innerHTML = data[i].innerHTML;
        link.href = "#" + data[i].id;
        
        //create and set up list item
        let listItem = document.createElement('li');
        listItem.append(link);
        
        //add li to current list
        list.append(listItem);

        //if next item exists and is of lower level - run function again to create sublist
        if(data[i+1] && (data[i].tagName < data[i+1].tagName)) {
            console.log(data[i].tagName + "<" + data[i+1].tagName + " with i=" + i)
            
            //start with next element and add curent list as parent
            i++;
            i = addListItems3(data, i, list);
            
        }

        i++;   
    }
    return i;
} */