/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	env: {
		CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
	},
};
