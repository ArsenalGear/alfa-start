/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.module.css' {
    const styles: { [key: string]: string };
    export default styles;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare let __webpack_public_path__: string;

interface Window {
    sp: any;
}
