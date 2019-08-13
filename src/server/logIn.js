//Dependencies
import users from './users'

function compare ( username, password ) {    
    const filtrados = users.filter(item => item.username === username && item.password === password);    
    if (filtrados.length === 0 ) {
        return {wrong: true}
    } else {
        return {
            userInfo : filtrados[0],
            wrong: false
        }       
    }
}

export default compare;