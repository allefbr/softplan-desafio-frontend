export const isPage = (string, page) => {
    const re = new RegExp(`^/(${page})`, 'i')
    const found = string.match(re)
    if (found != null)
        return !!(found[1] === page);
    return true;
}

export const maxCaracter = (text, limit) => {
    return `${text.substring(0, limit)}...`;
 }

export const isEmpty = (obj) => {
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}