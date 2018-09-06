export const doStuff = query => dispatch => {
    // do stuff ???
    const response = [
        { id: `${query}-1` }, 
        { id: `${query}-2 `}, 
        { id: `${query}-3` }
    ];

    dispatch({
        type: 'DO_STUFF',
        payload: response,
    });
}