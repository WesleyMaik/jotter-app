/**
 * 
 * @returns Screen's width number
 */
export function getScreenWidth(){
    const width = innerWidth;


    return width;
};

/**
 * 
 * @returns Screen's height number
 */
export function getScreenHeight(){
    const height = innerHeight;
    
    return height;
};

/**
 * 
 * @returns Screen's X coordinate number
 */
export function getScreenX(){
    const x = screenX;
    
    return x;
};

/**
 * 
 * @returns Screen's Y coordinate number
 */
export function getScreenY(){
    const y = screenY;
    
    return y;
};

/**
 * 
 * @returns Screen's functions
 */
export default function getScreen(){
    return({
        getScreenWidth,
        getScreenHeight,
        getScreenX,
        getScreenY
    });
};