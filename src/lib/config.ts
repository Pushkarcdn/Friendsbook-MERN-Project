let baseUrl: string;

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://fb-clone-backend.pushkar.live';
} else if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3002';
}

export { baseUrl };