async function testRenderApi() {
    try {
        const res = await fetch('https://trifusionproject-1.onrender.com/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Render API Test',
                email: 'test@example.com',
                phone: '1234567890',
                message: 'Testing API through fetch to Render'
            })
        });
        const text = await res.text();
        console.log('Status:', res.status);
        console.log('Response:', text);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}
testRenderApi();
