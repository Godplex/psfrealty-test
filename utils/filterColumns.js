import _ from "lodash";

export const filterStringColumns = (worksheet, regex, type, query) => {

    let filter = Object.keys(worksheet).
        filter(x => regex.test(x))
        .map(x => {
            return {
                value: (worksheet[x].v).replaceAll(' ', '-'),
                label: worksheet[x].v,
                type: type
            }
        });

    filter.shift();

    return _.filter(filter, (e) => query.test(e.value.replaceAll(' ', '-')));
};

export const filterNumberColumns = (worksheet, regex, type, query) => {

    let filter = Object.keys(worksheet).
        filter(x => regex.test(x))
        .map(x => {
            return {
                value: (worksheet[x].v),
                label: worksheet[x].v,
                type: type
            }
        });

    filter.shift();

    return _.filter(filter, (e) => query.test(e.value));
};