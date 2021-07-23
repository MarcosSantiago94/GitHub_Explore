



function teste() {

    var nomeRepositorio = $("#nomeRepositorio").val()


    let url = `https://api.github.com/repos/${nomeRepositorio}`;

fetch(url)
.then((response)=>{
    
    return response.json()

})

.then ((data)=>{
    var html=`
    <div class="card">
    <p>
    <img class="imagemUsuario" src="${data.owner.avatar_url}" alt="">

    
    </p>
    <b>
    ${data.full_name}
    </b>
</div>
    `

   

    $("#cards").append(html)

})
    
}

