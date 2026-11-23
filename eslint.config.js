module.exports = [
    {
        ignores: ["node_modules/**", "docs/**"]
    },
    {
        files: ["src/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                console: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "no-unreachable": "error"
        }
    }
];