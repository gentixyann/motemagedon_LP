let url      = location.href
let facebook = document.getElementsByClassName('facebook-share')
let twitter  = document.getElementsByClassName('twitter-share')
let line     = document.getElementsByClassName('line-share')

console.log(facebook, twitter, line)
facebookSetUp(facebook);
twiiterSetUp(twitter)
lineSetUp(line)


function facebookSetUp(htmlCollection){
    [... htmlCollection].forEach(element => {
        href = element.href.replace("u=","u="+url)
        element.setAttribute('href', href)
    })
}

function twiiterSetUp(htmlCollection) {
    costomUrl = url + 
                '&' +
                'related=Greff_Job' +
                '&' +
                'via=Greff_job';

    [... htmlCollection].forEach(element => {
        href = element.href.replace("url=","url="+costomUrl)
        element.setAttribute('href', href)
    })
}

function lineSetUp(htmlCollection) {
    [... htmlCollection].forEach(element => {
        href = element.href.replace("url=","url="+url)
        element.setAttribute('href', href)
    })
}