
class InterestService{

    _apiBasePost = 'https://localhost:5001/api/Post';
    _apiBaseUser = 'https://localhost:5001/api/User';

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    postResource = async (url, data) => {
        let res = await fetch(url,
            {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    }

    getAllPosts = async () => {
        const res = await this.getResource(this._apiBasePost);
        return res;
    }

    getPost = async (id) => {
        const res = await this.getResource(`${this._apiBasePost}/${id}`);
        return res;
    }

    createPost = async (data) => {
        const res = await this.postResource(this._apiBasePost, data);
        return res;
    }

    getAllUsers = async () => {
        const res = await this.getResource(this._apiBaseUser);
        return res;
    }

    getUserByEmail = async (email) => {
        const res = await this.getResource(`${this._apiBaseUser}/${email}/userbyemail`);
        return res;
    }

    isUserExistUsername = async (username) => {
        const res = await this.getResource(`${this._apiBaseUser}/${username}/exist`);
        return res;
    }

    isUserExistEmail = async (email) => {
        const res = await this.getResource(`${this._apiBaseUser}/${email}/user`);
        return res;
    }

    addUser = async (data) => {
        const res = await this.postResource(this._apiBaseUser, data);
        return res;
    }

}

export default InterestService;