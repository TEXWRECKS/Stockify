import React, {useState} from "react";
import axios from "axios";

function Search (){
    fetch(requestUrl, {
        headers: {
            "Availability":"IncludeOutOfStock",
            "Brand":"",
            "Condition":"Any",
            "ItemCount": 10,
            "DeliveryFlags":["AmazonGlobal", "FreeShipping", "FulfilledByAmazon", "Prime"],
            "Keywords":"",
            "MaxPrice":"",
            "MinReviewsRating":"",
            "MinSavingPercent":"",
            "Resources":[
                "Images.Primary.Medium",
                "ItemInfo.ContentRating",
                "ItemInfo.Features",
                "ItemInfo.ManufactureInfo",
                "ItemInfo.ProductInfo",
                "ItemInfo.TechnicalInfo",
                "ItemInfo.Title",
                
            ]


        }
    })
}