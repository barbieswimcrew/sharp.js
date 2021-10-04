export default class TemplateLoader {

    /**
     * Method tries to find a <template> or <script type="text/template">
     * file with the related selector, further removes the found template
     * from the DOM and returns the template's inner HTML
     * @param {String} selector
     * @param {Element|Node} baseElement
     * @param {Boolean} strict
     * @return {*}
     */
    static load(selector, baseElement = document, strict = true) {

        const templateTag = `template${selector}`;
        const scriptTag = `script[type="text/template"]${selector}`;
        const template = baseElement.querySelector(templateTag) || baseElement.querySelector(scriptTag) || false;

        if (template === false) {
            throw new Error(`Template "${selector}" not found`);
        }

        TemplateLoader.remove(template);

        return template.innerHTML;
    }

    /**
     * Remove the given element from DOM
     * @param {Element|String} selector
     */
    static remove(selector) {
        selector.parentNode.removeChild(selector);
    }
}