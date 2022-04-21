export const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

export const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}