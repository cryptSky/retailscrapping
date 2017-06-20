"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filter = (function () {
    function Filter(title, brand, gender, category, country, priceLow, priceHigh, priceChangeLow, priceChangeHigh, discountLow, discountHigh, onlineStoreName, pageNumber, productsOnPage) {
        this.title = title;
        this.brand = brand;
        this.gender = gender;
        this.category = category;
        this.country = country;
        this.priceLow = priceLow;
        this.priceHigh = priceHigh;
        this.priceChangeLow = priceChangeLow;
        this.priceChangeHigh = priceChangeHigh;
        this.discountLow = discountLow;
        this.discountHigh = discountHigh;
        this.onlineStoreName = onlineStoreName;
        this.pageNumber = pageNumber;
        this.productsOnPage = productsOnPage;
    }
    return Filter;
}());
exports.Filter = Filter;
var Product = (function () {
    function Product(title, brand, gender, category, subCategory, country, type, originalPrice, salePrice, discount, url, imageUrl, rating, reviews, specialOffers, badges, onlineStoreName) {
        this.title = title;
        this.brand = brand;
        this.gender = gender;
        this.category = category;
        this.subCategory = subCategory;
        this.country = country;
        this.type = type;
        this.originalPrice = originalPrice;
        this.salePrice = salePrice;
        this.discount = discount;
        this.url = url;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.reviews = reviews;
        this.specialOffers = specialOffers;
        this.badges = badges;
        this.onlineStoreName = onlineStoreName;
    }
    return Product;
}());
exports.Product = Product;
var PageResult = (function () {
    function PageResult(products, count) {
        if (products === void 0) { products = []; }
        this.products = products;
        this.count = count;
    }
    return PageResult;
}());
exports.PageResult = PageResult;
//# sourceMappingURL=product.interface.js.map