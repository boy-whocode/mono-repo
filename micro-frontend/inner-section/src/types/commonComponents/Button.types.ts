export interface ButtonProps {
    text:string, 
    type: "button" | "submit" | "reset", 
    varient:"primary" | "secondary" | "outlined" | "danger" | "alert" | "bold",
    onClick:()=>void,
    icon?: React.ReactNode;
}