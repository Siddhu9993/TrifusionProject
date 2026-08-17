async function testApi() {
    try {
        const res = await fetch('http://localhost:3001/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'API Test',
                email: 'test@example.com',
                phone: '1234567890',
                message: 'Testing API through fetch'
            })
        });
        const text = await res.text();
        console.log('Status:', res.status);
        console.log('Response:', text);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}
testApi();
