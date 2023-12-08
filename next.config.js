/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        api: 'http://172.206.219.200:8090/api',
    },
    output: 'export',
    basePath: '',
}

module.exports = nextConfig
