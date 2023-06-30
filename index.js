function reload() {
  
  fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
    .then((data) => {
      console.log(data.status);
      return data.json();
    })
    .then((old_data) => {
      let data = Array.from(old_data);
      console.log(old_data);
      data.forEach((e) => {
        let card = document.createElement("div");
        card.innerHTML = `  <div class="card mb-3" style="max-width: 540px;" >
      <div class="row g-0">
        <div class="col-md-4">
        <h5 class="card-title">${e.title}</h5>
          <img src="${e.imageUrl}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">${e.summary}</p>
            <a href="${e.url}"><button type="button" class="btn btn-primary" >Read More</button></a>

            <p class="card-text"><small class="text-body-secondary">${e.publishedAt}</small></p>
          </div>
        </div>
      </div>`;

        document.getElementById("card").appendChild(card);
      });
    })
    .then((data) => {
      footer.style = `display:block`;
    });
}

reload();
