// adds http to url (and checks for it)
const addhttp = (url) => {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url
    }
    return url
}