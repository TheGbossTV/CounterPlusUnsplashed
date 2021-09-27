import axios from "axios";

export default axios.create({//creating a sort of template to use the URL and the Key for the API
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID IoZiAtmqlD98tTI6pLZHThV_VcKFZNOLhCa8QyNBaKg'
    }
})