async function checkHeaders() {
    const res = await fetch('https://trifusionproject-1.onrender.com/api/health');
    console.log(Object.fromEntries(res.headers.entries()));
}
checkHeaders();
