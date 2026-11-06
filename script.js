// আপনার API লিংক এবং API Key এখানে বসাবেন
const apiUrl = 'AQ.Ab8RN6I8mvWnI0GEHOlFeG-9hd0aIBwe2WcVrj8IvOtCOtq_2Q'; 
const apiKey = 'AQ.Ab8RN6I8mvWnI0GEHOlFeG-9hd0aIBwe2WcVrj8IvOtCOtq_2Q';

async function loadAlbum() {
    try {
        // হেডার বা লিংকের সাথে API Key যুক্ত করার নিয়ম (API এর নিয়ম অনুযায়ী পরিবর্তন হতে পারে)
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        const data = await response.json();
        
        const container = document.getElementById('gallery-container');
        container.innerHTML = ''; 

        // ডাটা থেকে ছবি শো করার লুপ (API এর স্ট্রাকচার অনুযায়ী পরিবর্তন করতে হতে পারে)
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <img src="${item.url}" alt="${item.title}">
                <p>${item.title}</p>
            `;
            
            container.appendChild(card);
        });
    } catch (error) {
        console.error('ছবি লোড করতে সমস্যা হচ্ছে:', error);
    }
}

loadAlbum();
