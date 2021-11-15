export default ({$axios}) => {
    let endpoint;

    if (process.client) {
        endpoint = `${location.origin}/`;
    }
    $axios.setBaseURL(endpoint);
};
