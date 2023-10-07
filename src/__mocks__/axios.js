const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Harshil",
                    last: "Bodara"
                },
                picture: {
                    large: "https://harshil-bodara.netlify.app/_next/static/media/aboutme.410e6b21.png"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
