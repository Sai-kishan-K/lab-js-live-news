var apikey = '705cb9587e974de2b110bd4065ef60e2'

function getNewsUS(){
    var input = 'us'
    var url = `https://newsapi.org/v2/top-headlines?country=${input}&category=business&apiKey=${apikey}`;

    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        //Div 1
        for(var i=0; i<data.articles.length; i++){
        document.getElementById('img1').src = data.articles[i].urlToImage;
        document.getElementById('heading1').innerHTML = data.articles[i].title;
        document.getElementById('content1').innerHTML = data.articles[i].description;
        //Div 2
        i++;
        document.getElementById('img2').src = data.articles[i].urlToImage;
        document.getElementById('heading2').innerHTML = data.articles[i].title;
        document.getElementById('content2').innerHTML = data.articles[i].description;
        }
    })
    .catch(err =>{
        document.getElementById('error').innerHTML = err;
    });
}