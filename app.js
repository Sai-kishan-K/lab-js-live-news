var apikey = '705cb9587e974de2b110bd4065ef60e2'

function getNewsUS(){
    var input = 'us'
    var url = `https://newsapi.org/v2/top-headlines?country=${input}&category=business&apiKey=${apikey}`;

    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        //Div 1
        document.getElementById('img1').src = data.articles[0].urlToImage;
        document.getElementById('heading1').innerHTML = data.articles[0].title;
        document.getElementById('content1').innerHTML = data.articles[0].description;
        //Div 2
        document.getElementById('img2').src = data.articles[1].urlToImage;
        document.getElementById('heading2').innerHTML = data.articles[1].title;
        document.getElementById('content2').innerHTML = data.articles[1].description;
    })
    .catch(err =>{
        document.getElementById('error').innerHTML = err;
    });
}