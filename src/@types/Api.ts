/**
 * API types
 * @namespace  API

 * */

namespace API {

    export type CategoriesResponse = Categories;

    export type Categories = {
        [k: string]: {
            title: string;
            banner: Banner;
            list: Array<CategoryList>
        }
    }

    export type Banner = {
        description: string;
        id: string;
        bg: BannerBG
    }

    export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";

    export type BannerBG = {
        [ p in DeviceType ]: string
    }

    export type CategoryList = {
        title: string;
        slug: string;
    }

    export interface CategoriesRequest {
    }

    export type GoodsResponse = Goods;

    export type Goods = {
        goods: Array<Good>;
        page: number;
        pages: number;
        totalCount: number;
    }

    export type Good = {
        id: string;
        title: string;
        description: string;
        category: string;
        price: number;
        colors: Array<number>;
        pic: string;
        materials: string;
        gender: string;
        top: boolean;
        size: SizeList;
    }

    export type SizeList = Array<string>;

    export type ColorsResponse = Colors;

    export type Colors = Array<Color>;

    export type Color = {
        id: number;
        title: string;
        code: string;
    }


}

/*
Доступные методы:
GET /api/goods - получить список всех товаров с пагинацией
GET /api/goods/{id} - получить товар по его ID
--GET /api/categories - получить список категорий
GET /api/colors - получить список цветов
GET /api/goods?[param]
Параметры:
        gender
        category&gender
        search = поиск
        count = количество товаров (12)
        page = страница (1)
        list={id},{id} - получить список товаров по id
        exclude=id - исключить id
        top=true - топ товары

POST /api/order - оформить заказ (
          {
            fio: str,
            address?: str,
            phone: str,
            email: str,
            delivery: bool,
            goods: [{id, count}]
          })
          no validate


 */