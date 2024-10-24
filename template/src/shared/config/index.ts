const BASE_URL = `${__webpack_public_path__}api/v1/sap`;

export const config = {
    basename: process.env.ROUTER_BASENAME,
    api: {
        removeMe: `${BASE_URL}/pathToSomeApi`,
    },
};
