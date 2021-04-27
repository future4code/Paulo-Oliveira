export const goToLogin = (history) => {
    history.push('/')
}

export const goToSignUp = (history) => {
    history.push('/signup')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToPostDetail = (history, id) => {
    history.push(`/feed/detail/${id}`)
}

export const goToLogout = (history) => {
    window.localStorage.removeItem('token')
    history.replace('/')
}