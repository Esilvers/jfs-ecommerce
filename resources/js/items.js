const itemsController = new ItemsController(0);

function addItemCard(item) {
    const itemHTML = '<div class="card col-lg-4 col-md-6 col-12" style="width: 18rem;">\n' +
        '    <img src="' + item.img + '"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.description + '</p>\n' +
        '        <a href="#" class="btn btn-primary"><i class="fas fa-shopping-cart"></i></a>\n' +
        '    </div>\n' +
        '</div>';
    const itemsContainer = document.getElementById("list-items-row");
    itemsContainer.innerHTML += itemHTML;
}

function loadStorageSampleData() {
    if (!localStorage.getItem("items")) {
        const sampleItems = [{
                'name': 'Dress',
                'img': 'https://www.collinsdictionary.com/images/full/dress_31690953_1000.jpg',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat dui nec enim accumsan, at sodales tortor vestibulum. Etiam blandit vestibulum dolor, eu pharetra nibh interdum eget'
            },
            {
                'name': 'Jeans',
                'img': "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1616602341-re-done-1616602335.jpg?crop=1xw:1xh;center,top&resize=480:*",
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat dui nec enim accumsan, at sodales tortor vestibulum. Etiam blandit vestibulum dolor, eu pharetra nibh interdum eget'
            }
        ];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController() {
    for (var i = 0, size = itemsController.items.length; i < size; i++) {
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();