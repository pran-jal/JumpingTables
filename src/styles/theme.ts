abstract class Theme {
    
    abstract Container: {
        backgroundColor: string
    }
    
    abstract Title: {
        color: string
    }
    
    abstract Button: {
        backgroundColor: string
        borderBlockColor: string
    }
    
    abstract ButtonText: {
        color: string
    }
    
    abstract InputBox: {
        backgroundColor: string
        color: string
    }
}


class DarkTheme extends Theme {
    Container = {
        backgroundColor: "#1f1f1f"
    }
    Title = {
        color: "#ffffff"
    }
    Button = {
        backgroundColor: "#fffeee",
        borderBlockColor: "#000000" 
    }
    ButtonText = {
        color: "#000000" 
    }
    InputBox = { 
        backgroundColor: "#000000",
        color: "#ffffff" 
    }
}

class LightTheme extends Theme {
    Container = {
        backgroundColor: "#f1f1f1"
    }
    Title = {
        color: "#000000"
    }
    Button = {
        backgroundColor: "#1f1f1f",
        borderBlockColor: "#ffffff" 
    }
    ButtonText = {
        color: "#ffffff" 
    }
    InputBox = { 
        backgroundColor: "#ffffff",
        color: "#000000" 
    }
}


export function getTheme(theme_name: string = "light") {
    return {
        "light": new LightTheme(),
        "dark": new DarkTheme()
    
    }[theme_name.toLowerCase()]
}
