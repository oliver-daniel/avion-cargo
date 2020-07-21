export default () => {
    if (typeof window !== "undefined"){
        window.location.href = '/admin/index.html';
    }
    return null;
}