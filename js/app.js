var Quarter = /** @class */ (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
var SodaCategory = /** @class */ (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return "img/SodaCan.png";
    };
    return SodaCategory;
}());
/// <reference path="productCategory.ts" />
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
/// <reference path="product.ts" />
var productFactory = /** @class */ (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        return new CocaCola();
    };
    return productFactory;
}());
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = /** @class */ (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quarter()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingmachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map