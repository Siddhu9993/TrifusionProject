async function checkCors() {
    try {
        const res = await fetch('http://localhost:3001/api/leads', {
            method: 'OPTIONS',
            headers: {
                'Origin': 'https://trifusion-project-git-main-tri-8b32.vercel.app',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            }
        });
        console.log('Status:', res.status);
        console.log('Headers:', Object.fromEntries(res.headers.entries()));
    } catch (err) {
        console.error('Error:', err);
    }
}
checkCors();
