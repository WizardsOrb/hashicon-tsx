import React, { useRef, useEffect } from 'react';
import { hashicon } from '@emeraldpay/hashicon';
export { hashicon } from '@emeraldpay/hashicon';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Hashicon = function (props) {
    var ref = useRef();
    var generate = function () {
        var options = {};
        if (typeof options !== "undefined") {
            options = __assign(__assign({}, options), props.options);
        }
        if (typeof props.size === "number") {
            options = __assign(__assign({}, options), { size: props.size });
        }
        if (typeof props.hasher === "string") {
            options = __assign(__assign({}, options), { hasher: props.hasher });
        }
        var attributes = {
            src: hashicon(props.value, options).toDataURL(),
            alt: props.value,
        };
        if (typeof props.size === "number") {
            attributes.width = props.size;
        }
        ref.current = attributes;
    };
    useEffect(function () {
        generate();
    }, [props]);
    if (!ref.current)
        return React.createElement(React.Fragment, null);
    return (React.createElement("img", __assign({}, ref.current, { onClick: props.onClick, className: props.className, style: props.style })));
};

export { Hashicon as default };
//# sourceMappingURL=index.es.js.map
