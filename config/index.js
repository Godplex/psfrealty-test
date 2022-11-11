const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://lovely-taiyaki-c13ed5.netlify.app';