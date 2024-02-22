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
        backgroundColor: "#000"
    }
    Title = {
        color: "#ffffff"
    }
    Button = {
        backgroundColor: "#ffffee",
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
        backgroundColor: "#fff"
    }
}


export function getTheme(theme_name: string) {
    if (theme_name == "light")
        return new LightTheme()
    return new DarkTheme()
}