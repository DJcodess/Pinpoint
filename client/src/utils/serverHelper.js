import { backendUrl } from './config';

export const makePOSTRequest = async (route, body) => {
    const response = await fetch(backendUrl + route, {
        method: 'POST',
        body: body, // Pass FormData directly as body
    });

    // const formattedResponse = await response.json();
    // return formattedResponse;
	return response;
};

export const makeGETRequest = async (route, body) => {
	const response = await fetch(backendUrl + route, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	const formattedResponse = await response.json();
	return formattedResponse;
};
