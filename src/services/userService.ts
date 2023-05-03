interface User {
    fullName: string,
    job: string,
    city: string,
    country: string,
    email: string,
    phoneNumber: string,
}

export function getUsers(){
    let users: Array<User> = []
    for (let i = 0; i < 8; i++){
        const userTemp: User = {
            fullName: `Nombre Random ${i+1}`,
            job: `Trabajo Random ${i+1}`,
            city: `Ciudad Random ${i+1}`,
            country: `Pais Random ${i+1}`,
            email: `correo_random${i+1}@ejemplo.com`,
            phoneNumber: `999${i}${i+1}436${i+1}${i+2}${i+3}`,
        }
        users.push(userTemp)
    }

    return users
    
}