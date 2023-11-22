export default defineEventHandler(async (event) => {
    setResponseStatus(event, 404);
    return {
        error: 'Bad request url'
    };
});