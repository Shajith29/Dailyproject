const APIURL = 'https://api.github.com/users/'


const main = document.querySelector('.main');
const form = document.getElementById('form');
const search = document.getElementById('search')


async function getUser(username){

    try{ 
        const { data } = await axios(APIURL + username);
        createUserCard(data);
        getRepos(username)
    }

    catch(err){
        if(err.response.status == 404){
            errorCard("Username no found");
        }
        
    }
}


async function getRepos(username){
    try{
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        console.log(data); 
        addReposToCard(data);
    }

    catch(err){
        errorCard(err);
    }

}


function createUserCard(user){

    const userName = user.login;
    const userBio = user.bio ? '<p>${user.bio}</p>' : "";

    const cardHTML = 
    `
    <div class = 'card'>
        <div>
            <img src = '${user.avatar_url}' alt = '${user.login}'>
        </div>

        <div class = 'user-info'>
            <h2>${userName}</h2>
            ${userBio}

            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div class = 'repo'></div>
        </div>
    </div>
    `

    main.innerHTML = cardHTML;

}


function errorCard(msg){
    const cardHTML = 
    `
        <div class = 'card'>
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML;
}


function addReposToCard(repos){
    const reposEl = document.querySelector('.repo');
    repos
    .slice(0,5)
    .forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.href = repo.html_url;
        repoEl.target = "__blank";
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);
    })
}


form.addEventListener('submit',(e) => {
    e.preventDefault();

    const user = search.value;

    if(user){

        getUser(user)
        search.value = '';
    }

})