console.log(window.location.hash);
console.log(window.location.port);
console.log(window.location.host);


const routeLinks = document.querySelectorAll('#hashRouteLink');
const app = document.querySelector('#app');

const routes =
    {
        '': {
            title: 'Anasayfa',
            data : 'home.html'
        },
        '#about': {
            title: 'Hakkımda',
            data: 'hakkimda.html'
        },
        '#todos': {
            title: 'Todos',
            data: 'todos.html'
        },
        '#contact': {
            title: 'İletişim',
            data: 'iletisim.html'
        }
    }
//console.log(routes["#contact"])

function checkRoute(hash = window.location.hash){
    document.title = routes[hash].title
    const dataUrl = routes[hash].data
    console.log(dataUrl)

    fetch(dataUrl).then(res => res.text()).then(res => app.innerHTML = res)
}


routeLinks.forEach((value) => {
    value.addEventListener('click', event => {

        checkRoute(value.hash);

    })
})


