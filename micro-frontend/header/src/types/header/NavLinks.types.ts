export interface NavLinksProps{
    "title":string,
    "as":"link" | "submenu",
    "href"?:string,
    "submenu"?:{
        "title":string,
        "as":"link",
        "href": string}[]
    }