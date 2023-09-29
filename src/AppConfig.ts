type AppConfigItem = {
    [key: string]: string;
}

function checkMissingEnvs(requiredEnv: AppConfigItem) {
    let missingEnvs: string[] = []
    for (const key in requiredEnv) {
        const value = requiredEnv[key]
        if (value === '') {
            missingEnvs.push(key)
        }
    }
    if (missingEnvs.length > 0) {
        throw new Error(`Missing required envs: ${missingEnvs}`)
    }
}

function AppConfig() {
    const requiredEnv: AppConfigItem = {
        ITEM_NAME: import.meta.env.VITE_ITEM_NAME || 'Item',
    }
    const optionalEnv: AppConfigItem = {}

    checkMissingEnvs(requiredEnv)

    return {
        ...requiredEnv,
        ...optionalEnv,
    };
}

export default AppConfig
