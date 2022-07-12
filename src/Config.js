var Config = {
    ENVIRONMENT: "LOCAL",
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: "https://########",
            GOOGLE_GEOCODING_API_KEY: ""
        },
        DEVELOPMENT: {
            GOOGLE_GEOCODING_API_KEY: ""
        },
        STAGING: {
            GOOGLE_GEOCODING_API_KEY: ""
        },
        PRODUCTION: {
            GOOGLE_GEOCODING_API_KEY: ""
        }
    }
};
Config.env = () => {
    return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};
export default Config;
