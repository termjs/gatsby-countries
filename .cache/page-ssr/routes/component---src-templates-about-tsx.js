"use strict";
exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 7746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3357);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(982);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9417);
/* harmony import */ var _src_data_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(801);






// Helper function to map country code to full name
const getFullCountryName = code => {
  const country = _src_data_data_json__WEBPACK_IMPORTED_MODULE_4__.find(item => item.alpha3Code === code);
  return country ? country.name : code; // Default to country code if not found
};

const AboutPage = ({
  data
}) => {
  var _country$currencies, _country$languages;
  if (!data || !data.dataJson) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Data not found");
  }
  const country = data.dataJson;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layouts_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)(-1),
    className: "backButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__/* .FontAwesomeIcon */ .G, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__/* .faArrowLeft */ .acZ
  }), "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: country.flags.png,
    alt: `${country.name} flag`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-align"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, country.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-data-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Native Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, country.nativeName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Population: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, country.population.toLocaleString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Region: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, country.region)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Sub Region: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, country.subregion)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Capital: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, country.capital))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Top Level Domain: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, country.topLevelDomain)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Currencies: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, ((_country$currencies = country.currencies) === null || _country$currencies === void 0 ? void 0 : _country$currencies.map(currency => currency.name).join(', ')) || "N/A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Languages: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, ((_country$languages = country.languages) === null || _country$languages === void 0 ? void 0 : _country$languages.map(language => language.name).join(', ')) || "N/A")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "borderTags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Border Countries: "), country.borders && country.borders.length > 0 ? country.borders.map(border => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    key: border,
    to: `/about/${getFullCountryName(border).toLowerCase()}`
  }, getFullCountryName(border))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No border countries found"))))));
};
const query = "2863462947";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-about-tsx.js.map