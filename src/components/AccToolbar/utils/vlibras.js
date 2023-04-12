/* eslint-disable */
const __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get() {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
const __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o.default = v;
      });
const __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};

    if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);

    return result;
  };

Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importStar(require('react'));

class VLibras extends react_1.Component {
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
      new window.VLibras.Widget(this.widgetSrc);
      if (this.props.forceOnload) {
        window.onload();
      }
    };
    document.head.appendChild(this.script);
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return react_1.default.createElement(
      'div',
      { vw: 'true', className: 'enabled' },
      react_1.default.createElement('div', { 'vw-access-button': 'true', className: 'active' }),
      react_1.default.createElement(
        'div',
        { 'vw-plugin-wrapper': 'true' },
        react_1.default.createElement('div', { className: 'vw-plugin-top-wrapper' }),
      ),
    );
  }
}
exports.default = VLibras;
