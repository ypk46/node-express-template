export class ConfigHelper {
    /**
     * Cast environment variable as numeric value.
     * @param key
     * @param defaultValue
     * @returns
     */
    static castNumericValue(key: string, defaultValue = 0) {
        const value = process.env[key];
        if (value && !Number.isNaN(Number(value))) return Number(value);
        return defaultValue;
    }

    /**
     * Cast environment variable as string value.
     * @param key
     * @param defaultValue
     * @returns
     */
    static castStringValue(key: string, defaultValue = "") {
        const value = process.env[key];
        if (value) return value;
        return defaultValue;
    }

    /**
     * Cast environment variable as array of string.
     * The environment variable must be a comma separated text.
     * @param key
     * @param defaultValue
     * @returns
     */
    static castArrayValue(key: string, defaultValue: string[] = []) {
        const value = process.env[key];
        if (value) {
            const splitValues = value.split(",");
            if (splitValues.length > 0) return splitValues;
        }
        return defaultValue;
    }
}
