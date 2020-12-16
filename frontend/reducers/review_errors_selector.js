export const checkIfCreate = (errors) => {
    let status = Object.keys(errors)[0];
    
    if (status === 'create') {
        return Object.values(errors)[0];
    } else {
        return [];
    }
}

export const checkIfEdit = (errors) => {
    let status = Object.keys(errors)[0];

    if (status === 'edit') {
        return Object.values(errors)[0];
    } else {
        return [];
    }
}