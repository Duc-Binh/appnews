const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-05-12&sortBy=publishedAt&apiKey=1ab7f9e41e6c4f8e9b26cc41c91f3bd7";
$.get({
    url: url,
}).done(function(data) {
    console.log(data);
    handleViewData(data);
});

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

    console.log(articles);
}