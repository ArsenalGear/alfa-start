import getIsMobile from 'ismobilejs';

const isCypressMobile = window.Cypress && window.innerWidth < 650;
const isMobile = getIsMobile(window.navigator).any || isCypressMobile;



if (isMobile) {
    import('./mobile/bootstrap');
} else {
    import('./desktop/bootstrap');
}
