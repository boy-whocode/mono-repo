export interface FooterMenuItemsProps {
        title:string,
        submenu:{
            title:string,
            href:string
        }[],
}

export default interface FooterMenuProps {
    data:{
        title:string,
        options:{
            title:string,
            as:"submenu" | "link",
            submenu?:{
                title:string,
                href:string
            }[],
            href?:string
        }[]
    }
}
