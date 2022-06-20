var setting = getToLocalStorage("setting") || {
    pageSize: 5,
    category: "tesla",
}
var inputSearch = $("#input-search");
var btnSearch = $("#btn-search");
var search = inputSearch.val();


$("#pagination").twbsPagination({
    totalPages: 5,
    visiblePages: 5,
    onPageClick: function(event, page) {
        newsApi(page, search);
    },
});

btnSearch.click(function() {
    newsApi(1, search);
});



<<<<<<< HEAD
function newsApi(page, search) {
    if (!search ) {
        var url = `https://newsapi.org/v2/everything?q=${setting.category}&from=2022-05-20&sortBy=publishedAt&pagesize=${setting.pageSize}&page=${page}&apiKey=21b6139095fd4668aefcd62802b673e1
    `;
    } else {
        var url = `https://newsapi.org/v2/everything?q=${search}&from=2022-05-20&sortBy=publishedAt&pagesize=${setting.pageSize}&page=${page}&apiKey=21b6139095fd4668aefcd62802b673e1
        `;
    }
=======
function newsApi(page) {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-05-19&sortBy=publishedAt&pagesize=5&page=${page}&apiKey=21b6139095fd4668aefcd62802b673e1
    `;
>>>>>>> b2db1c6dbb2e79eec33f5c24a2556805aad3a07d
    $.get({
        url: url,
    }).done(function(data) {
        console.log(data);
        handleViewData(data);
    });
}



function handleViewData(data) {
    const { articles } = data;
    $("#news-item").empty();
    articles.map(function(item) {
        $("#news-item").append(`
          <div class="wapper">
            <div class="row">
                <div class="col-4">
                    <div class="img">
                        <img src=${item.urlToImage} alt="">
                    </div>
                </div>
                <div class="col-8">
                    <div class="content">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <button class="btn btn-success">View</button>
                    </div>
                </div>
            </div>
          </div>
    `);
    })

    // console.log(articles);
}

function getToLocalStorage(arrUser) {
    let arr = localStorage.getItem(arrUser);
    console.log(arr);
    if (arr) {
        return JSON.parse(arr);
    }
    return null;
}
