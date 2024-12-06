
const cloudUrl = "http://localhost:3003"

interface ImagePaths {
    [key: string]: string
}

export const ImagePath: ImagePaths ={
    logo:`${cloudUrl}/assests/images/LogoDark.svg`,
    bg:`${cloudUrl}/assests/images/BG.svg`,
    appStore:`${cloudUrl}/assests/images/app_store.svg`,
    playStore:`${cloudUrl}/assests/images/play_store.svg`,
}