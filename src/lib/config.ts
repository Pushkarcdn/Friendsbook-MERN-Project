export default function getBaseUrl() {

    let baseUrl = '';

    if (process.env.NODE_ENV === 'production') {

        baseUrl = 'https://fb-clone-backend.pushkar.live';

    } else if (process.env.NODE_ENV === 'development') {

        baseUrl = 'http://localhost:3002';
        // baseUrl = 'https://fb-clone-backend.pushkar.live';

        // console.log(baseUrl);

    }

    return baseUrl;

};

export const baseUrl = getBaseUrl();