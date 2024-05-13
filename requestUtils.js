const urlGateway = 'http://localhost:3100';

const getRequest = async (path) => {
    let url = `${urlGateway}${path}`;

    let options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    }

    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
        }

        return await res.json();
    } catch (err) {
        console.log('GET Request fallida');
    }
}

const postRequest = async (path, item) => {
    let url = `${urlGateway}${path}`;
    console.log(url);
    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept':'application/json' 
        },
        body: JSON.stringify(item)
    }

    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
        }
    } catch (err) {
        console.log('POST Request fallida');
    }

}

module.exports = { getRequest,postRequest };