import React from 'react'


const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }

        return res.json();
    } catch (error) {
        console.log('Error loading topics: ', error);
    }
};

export default async function schools() {
    const { topics } = await getTopics();
    return (
        <div>
            <h1>Barcha jarima qo`llanishi mumkin bo`lgan o`quvchilar soni: "{topics.length}"</h1>
        </div>
    )
}
