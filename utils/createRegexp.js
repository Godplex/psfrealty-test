
export const createRegexp = (acento) => {

    let regex = '';

    for (let i = 0; i < acento.length; i++) {
        regex += `[${acento[i].toUpperCase()}${acento[i].toLowerCase()}]`
    }

    return regex;
};