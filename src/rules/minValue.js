import Rule from './rule';

export default class MinValue extends Rule {
    /**
     * @param {*} value
     * @param {Array} ruleParams
     * @param {Object} context
     *
     * @returns {Boolean}
     */
    validate(value, ruleParams, context) {
        return !!value;
    }

    /**
     * @param {String} message
     * @param {String} field
     * @param {Array} ruleParams
     */
    failureMessage(message, field, ruleParams) {
        const minimum = ruleParams[0];

        return message
            .replace('{field}', field)
            .replace('{minimum}', minimum);
    }
};
