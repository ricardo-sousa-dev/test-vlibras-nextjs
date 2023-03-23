import React, { Component } from 'react';
export default class VLibras extends Component {
    constructor(props) {
        super(props);
        this.widgetSrc = 'https://vlibras.gov.br/app';
        this.scriptSrc = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    }
    init() {
        this.script = document.createElement('script');
        this.script.src = this.scriptSrc;
        this.script.async = true;
        this.script.onload = (load) => {
            // @ts-ignore
            new window.VLibras.Widget(this.widgetSrc);
            if (this.props.forceOnload) {
                // @ts-ignore
                window.onload();
            }
        };
        document.head.appendChild(this.script);
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return (
        // @ts-ignore
        React.createElement("div", { vw: "true", className: "enabled" },
            React.createElement("div", { "vw-access-button": "true", className: "active" }),
            React.createElement("div", { "vw-plugin-wrapper": "true" },
                React.createElement("div", { className: "vw-plugin-top-wrapper" }))));
    }
}
