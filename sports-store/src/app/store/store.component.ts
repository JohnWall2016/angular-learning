import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    public selectedCategory: string = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository) {}

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0).map((x, i) => i + 1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }

    changeCategory(category?: string) {
        this.selectedCategory = category;
    }

    changePage(page: number) {
        this.selectedPage = page;
    }

    changePageSize(pageSize: number) {
        this.productsPerPage = Number(pageSize);
        this.changePage(1);
    }
}