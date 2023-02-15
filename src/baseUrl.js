import axios from 'axios'


//instance creation

//create() -axios provide

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default instance
