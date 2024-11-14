"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "C:\\Users\\326\\countries-api\\node_modules\\react\\index.js"
var external_C_Users_326_countries_api_node_modules_react_index_js_ = __webpack_require__(9953);
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 2 modules
var layout = __webpack_require__(3357);
// EXTERNAL MODULE: ./src/data/data.json
var data = __webpack_require__(801);
;// CONCATENATED MODULE: ./src/utils/countryFilter.tsx
const useCountryFilter=()=>{const{0:countries,1:setCountries}=(0,external_C_Users_326_countries_api_node_modules_react_index_js_.useState)([]);const{0:filteredCountries,1:setFilteredCountries}=(0,external_C_Users_326_countries_api_node_modules_react_index_js_.useState)([]);(0,external_C_Users_326_countries_api_node_modules_react_index_js_.useEffect)(()=>{const initialCountries=data.map(country=>({name:country.name,flag:country.flags.png,region:country.region,population:country.population,capital:country.capital||"N/A"}));setCountries(initialCountries);setFilteredCountries(initialCountries);},[]);const filterCountries=(searchValue,region)=>{const filtered=countries.filter(country=>{return country.name.toLowerCase().includes(searchValue.toLowerCase())&&(region==="Filter by Region"||country.region===region);});setFilteredCountries(filtered);};return{filteredCountries,filterCountries};};/* harmony default export */ const countryFilter = (useCountryFilter);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(982);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(9417);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/utils/countryDisplay.tsx
const CountryDisplay=()=>{const{filteredCountries,filterCountries}=countryFilter();const{0:searchValue,1:setSearchValue}=(0,external_C_Users_326_countries_api_node_modules_react_index_js_.useState)("");const{0:region,1:setRegion}=(0,external_C_Users_326_countries_api_node_modules_react_index_js_.useState)("Filter by Region");const handleSearchChange=event=>{const value=event.target.value;setSearchValue(value);filterCountries(value,region);};const handleRegionChange=event=>{const value=event.target.value;setRegion(value);filterCountries(searchValue,value);};return/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("div",null,/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("div",{className:"filter-container"},/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("div",{className:"search-container"},/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faMagnifyingGlass */.Y$T}),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("input",{type:"text",placeholder:"Search for a country...",value:searchValue,onChange:handleSearchChange})),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("select",{value:region,onChange:handleRegionChange},/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("option",null,"Filter by Region"),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("option",null,"Africa"),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("option",null,"Americas"),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("option",null,"Asia"),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("option",null,"Europe"),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("option",null,"Oceania"))),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("div",{className:"country-list"},filteredCountries.map(country=>/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("div",{key:country.name,className:"country-container"},/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement(gatsby_browser_entry.Link,{to:`/about/${country.name.toLowerCase()}`},/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("img",{src:country.flag,alt:`${country.name} flag`})),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("div",{className:"country-info"},/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("h3",null,country.name),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("span",null,"Population: ",/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("p",null,country.population.toLocaleString())),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("span",null,"Region: ",/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("p",null,country.region)),/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("span",null,"Capital: ",/*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("p",null,country.capital)))))));};/* harmony default export */ const countryDisplay = (CountryDisplay);
;// CONCATENATED MODULE: ./src/pages/index.tsx



const IndexPage = () => {
  return /*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement(layout/* default */.Z, null, /*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement("main", null, /*#__PURE__*/external_C_Users_326_countries_api_node_modules_react_index_js_.createElement(countryDisplay, null)));
};
/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map