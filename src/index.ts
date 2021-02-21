/**
 * @author Mathias Picker
 * @license MIT
 * @description Collects info about any HTML-element.
 * @param $el - Any html element.
 * @returns Read-only information about the element.
 */
export default function info($el: HTMLElement) : any {
    if(Object.prototype.toString.call($el).indexOf('HTML') === -1)
    {
        console.warn('Beep boop, i can only retrieve info about HTML-elements.');
        return;
    }

    const {
        attributes,
        classList,
        offsetHeight,
        offsetWidth,
        scrollHeight,
        scrollWidth,
        id,
        nextElementSibling,
        previousElementSibling,
        nodeType,
        tagName,
        parentElement,
        parentNode,
        children,
        isConnected,
        innerHTML,
        outerHTML,
        textContent,
    } = $el;

    const {
        top, 
        left, 
        bottom, 
        right
    } = $el.getBoundingClientRect();

    return {
        get attributes() {
            return [...attributes];
        },
        get classes() {
            return [...classList];
        },
        get height() {
            return offsetHeight;
        },
        get width() {
            return offsetWidth;
        },
        get scrollHeight() {
            return scrollHeight;
        },
        get scrollWidth() {
            return scrollWidth;
        },
        get id() {
            return id;
        },
        get nextSibling() {
            return nextElementSibling;
        },
        get previousSibling() {
            return previousElementSibling;
        },
        get parent() {
            return (parentElement || parentNode);
        },
        get nodeType() {
            return nodeType;  
        },
        get tag() {
            return tagName.toLowerCase();
        },
        get top() {
            return top;
        },
        get bottom() {
            return bottom;
        },
        get left() {
            return left;
        },
        get right() {
            return right;
        },
        get hasChildren() {
            return $el.hasChildNodes();
        },
        get children() {
            return [...children];
        },
        get mounted() {
            return isConnected;
        },
        get innerHTML() {
            return innerHTML;
        },
        get outerHTML() {
            return outerHTML;
        },
        get textContent() {
            return textContent;
        }
    }
}