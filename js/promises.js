
const wait = (numbs) => {

    return new Promise ((resolve) => {
        setInterval (() => {
            resolve('Hi')
        }, numbs)
    })
        .then(result => console.log(result))
}

const showPushEvents = (data) => {
    let pushE = data.filter(event => {
        return event.type ==='PushEvent'
    })
    console.log(pushE)
    let commitDates = pushE[0].created_at.split('T').shift()
    let mostRecentCommit = console.log(`Most Recent Commit was : ${commitDates}`)
    console.log(mostRecentCommit)
}

const userRepo = () => {

    return new Promise ((resolve, reject) => {
        return fetch('https://api.github.com/users/LandonHarvey/events/public',
            {headers: {'Authorization':
                        'token'
                }})
            .then(response => response.json())
            .then(events => showPushEvents(events))
            .catch(error => console.error(error));
    })
}

