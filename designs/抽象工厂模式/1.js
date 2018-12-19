
/**
 * 工厂模式
*/

// 抽象工厂模式 一个工厂生产多种产品
class Factory {
    creactButton(){

    }
    creactIcon(){

    }
}
class Icon{

}
class Button{

}

class AppleIcon extends Icon{
    render() {
        console.log('render AppleIcon')
    }
}
class WindowsIcon extends Icon{
    render() {
        console.log('render WindowsIcon')
    }
}
class AppleButton extends Button{
    render(){
        console.log('render AppleButton')
    }
}
class WindowsButton extends Button{
    render(){
        console.log('render WindowsButton')
    }
}

class AppleFactory extends Factory{
    creactButton() {
        return new AppleButton()
    }
    creactIcon() {
        return new AppleIcon()
    }
}
class WindowsFactory extends Factory{
    creactButton() {
        return new WindowsButton()
    }
    creactIcon() {
        return new WindowsIcon()
    }
}

let windowsFactory = new WindowsFactory();
let appleFactory = new AppleFactory();
windowsFactory.creactButton().render()
windowsFactory.creactIcon().render()
appleFactory.creactButton().render()
appleFactory.creactIcon().render()