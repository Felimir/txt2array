class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Text2Array: ValidationError";
    };

    test() {
        try {
            throw new ValidationError("Algo salió mal");
        } catch (e) {
            console.error(e);
        };
    };
};

module.exports = ValidationError, a;