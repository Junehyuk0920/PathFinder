export default async function handler(req, res)
{
    if (req.method !== 'POST')
    {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { userContent, prompt } = req.body;
    const API_KEY = process.env.OPENROUTER_API_KEY;
    
    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
            headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            model: "arcee-ai/trinity-large-preview:free",
            messages: [
                { "role": "system", "content": prompt },
                { "role": "user", "content": userContent }
            ],
        }),
    });

    const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'AI 호출 중 오류 발생' });
    }
}