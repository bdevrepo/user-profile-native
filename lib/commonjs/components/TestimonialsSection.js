"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _FloatingLabelInput = _interopRequireDefault(require("./FloatingLabelInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var idetReqData = {};
/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const TestimonialsSection = props => {
  const [nameReq, setNameReq] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    const TestimonialsSection = {
      nameReq: ''
    };
    TestimonialsSection["nameReq"] = nameReq;
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "TODO TestimonialsSection "), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: nameReq,
    title: "Nome do requerente",
    onChangeText: text => {
      setNameReq(text);
      props.parentUser(idetReqData);
    }
  }));
};
/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */


var _default = TestimonialsSection;
exports.default = _default;
//# sourceMappingURL=TestimonialsSection.js.map