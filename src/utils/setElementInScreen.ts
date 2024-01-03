import getScreen from "./getScreen";

export default function setElementInScreen(element: Element | null){
    if(!element){
        return;
    };

    const { getScreenWidth } = getScreen();
    const screenWidth = getScreenWidth();

    if(!screenWidth){
        return;
    };

    const {
        left: elementLeft,
        right: elementRight,
    } = element.getBoundingClientRect();

    const style = getComputedStyle(element);

    if(elementLeft < 0){
        const leftPadding = Number(style.paddingLeft.replace(/\D./, ''));
        const difference = Math.abs(elementLeft) + leftPadding;
        
        (element as HTMLElement).style.transform = `translateX(${difference}px)`;
    };

    if(elementRight > screenWidth){
        const rightPadding = Number(style.paddingRight.replace(/\D./, ''));
        const difference = (elementRight - screenWidth) + rightPadding;
        
        (element as HTMLElement).style.transform = `translateX(-${difference}px)`;
    };
  
    return;
};