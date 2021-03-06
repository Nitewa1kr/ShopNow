"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_service_1 = require("../../services/items.service");
var ItemComponent = (function () {
    function ItemComponent(ItemService) {
        var _this = this;
        this.ItemService = ItemService;
        this.ItemService.getItems().subscribe(function (items) { _this.items = items; });
    }
    ItemComponent.prototype.addItem = function (event) {
        var _this = this;
        event.preventDefault();
        var newItem = {
            AisleNum: this.AisleNum,
            ItemName: this.ItemName,
            ShopNow: false,
            isShopped: false
        };
        this.ItemService.addItem(newItem).subscribe(function (item) {
            _this.items.push(item);
            _this.ItemName = '';
        });
    };
    ItemComponent.prototype.deleteItem = function (id) {
        var items = this.items;
        this.ItemService.deleteItem(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i]._id == id) {
                        items.splice(i, 1);
                    }
                }
            }
        });
    };
    ItemComponent.prototype.updateStatusSN = function (item) {
        var _item = {
            _id: item._id,
            AisleNum: item.AisleNum,
            ItemName: item.ItemName,
            ShopNow: !item.ShopNow,
        };
        this.ItemService.updateStatusSN(_item).subscribe(function (data) {
            item.ShopNow = !item.ShopNow;
        });
    };
    ItemComponent.prototype.updateStatusShopped = function (item) {
        var _item = {
            _id: item._id,
            AisleNum: item.AisleNum,
            ItemName: item.ItemName,
            isShopped: !item.isShopped
        };
        this.ItemService.updateStatusShopped(_item).subscribe(function (data) {
            item.isShopped = !item.isShopped;
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'items',
        templateUrl: "items.components.html"
    }),
    __metadata("design:paramtypes", [items_service_1.ItemService])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=items.components.js.map