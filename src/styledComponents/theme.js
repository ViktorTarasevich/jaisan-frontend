const mixin = {
    white: '#ffffff',
    black: '#000000',
    whisper: '#d6d6d6',
    jagger: '#363537',
    nero: '#272727',
    nightRider: '#2f2f2f',
}

export const lightTheme = {
    body: '#F7F7F7',
    text: mixin.jagger,
    toggleBorder: '#dfffff',
    background: mixin.jagger,
    toCart: '#d6d6d6',

    // header

    headerTheme: mixin.whisper,    
    headerIcons: mixin.whisper,
    activeIcon: '#F7F7F7',
    searchField: mixin.white,
    searchButton: mixin.white,
    searchInput: mixin.white,
    formContainer: mixin.whisper,

    // form
    formField: mixin.white,
    boxShadow: mixin.whisper,

    //product
    options: '#EEEEEE',
    activeOption: '#EEEEEE',

    //toast
    toastContainer: "white"

}
    
export const darkTheme = {
    body: mixin.nero,
    toggleBorder: '#6B8096',
    background: '#999',
    text: mixin.white,
    toCart: mixin.black,

    //header

    headerTheme: mixin.black,
    headerIcons: mixin.black,
    activeIcon: mixin.nero,
    searchField: mixin.nightRider,
    searchButton: mixin.nightRider,
    searchInput: '#1a1a1a',
    formContainer: mixin.nightRider,

    // form
    formField: mixin.nero,
    boxShadow: mixin.black,

    //product
    options: '#1a1a1a',
    activeOption: "#1a1a1a",

    //toast

    toastContainer: "#272727"
}