export default defineEventHandler(async (event) => {
    setResponseStatus(event, 404, 'Not found');
    return;
});