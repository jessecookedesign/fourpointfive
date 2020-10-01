var app = new Vue({
            el: '#app',
            data: {
                detailsActive1: false,
                detailsActive2: false,
                cardData: [
                    {
                    id: 9994,
                    imgsrc: "https://i.ibb.co/GMxJvBR/fpf-asset-0006-jcd.jpg",
                    imgalt: "Screenshot of jessecookedesign.com",
                    postedby: "Jesse Cooke",
                    posteddate: "Oct. 01, 2020",
                    source: "jessecookedesign.com",
                    sourceurl: "https://www.jessecookedesign.com/",
                    color1: "#2a2c31",
                    color2: "#868d9b",
                    color3: "#ff6c40",
                    colormatcha1: "#2a2c31",
                    colormatcha2: "#868d9b",
                    colormatchb1: "#2a2c31",
                    colormatchb2: "#ff6c40",
                    colorrating1: "4.18:1",
                    colorrating2: "4.97:1"
                    },
                    {
                    id: 9995,
                    imgsrc: "https://i.ibb.co/k5m8PkY/fpf-asset-0005-wisk.jpg",
                    imgalt: "Screenshot of wisk.ai",
                    postedby: "Cam Garcia Riedel",
                    posteddate: "Sept. 24, 2020",
                    source: "wisk.ai",
                    sourceurl: "https://www.wisk.ai/",
                    color1: "#1882ef",
                    color2: "#f7f9fe",
                    color3: "#09171d",
                    colormatcha1: "#1882ef",
                    colormatcha2: "#f7f9fe",
                    colormatchb1: "#09171d",
                    colormatchb2: "#f7f9fe",
                    colorrating1: "3.63:1",
                    colorrating2: "17.3:1"
                    },
                    {
                    id: 9996,
                    imgsrc: "https://i.ibb.co/VDv88fr/fpf-asset-0004-withso.jpg",
                    imgalt: "Screenshot of with.so",
                    postedby: "Laurent Baumann",
                    posteddate: "Sept. 23, 2020",
                    source: "with.so",
                    sourceurl: "https://www.with.so/",
                    color1: "#636c8b",
                    color2: "#464646",
                    color3: "#fdf6ee",
                    colormatcha1: "#636c8b",
                    colormatcha2: "#fdf6ee",
                    colormatchb1: "#464646  ",
                    colormatchb2: "#fdf6ee",
                    colorrating1: "4.83:1",
                    colorrating2: "8.8:1"
                    },
                    {
                    id: 9997,
                    imgsrc: "https://i.ibb.co/M6PxVMp/fpf-asset-0001-folkstore.jpg",
                    imgalt: "Screenshot of folkstore.app",
                    postedby: "Jesse Cooke",
                    posteddate: "Sept. 22, 2020",
                    source: "folkstore.app",
                    sourceurl: "https://www.folkstore.app/",
                    color1: "#34504a",
                    color2: "#d2e7d8",
                    color3: "#ffffff",
                    colormatcha1: "#34504a",
                    colormatcha2: "#d2e7d8",
                    colormatchb1: "#34504a  ",
                    colormatchb2: "#ffffff",
                    colorrating1: "6.75:1",
                    colorrating2: "8.77:1"
                    },
                    {
                    id: 9998,
                    imgsrc: "https://i.ibb.co/vH513X5/fpf-asset-0003-bridproperty.jpg",
                    imgalt: "Screenshot of bridportproperty.com",
                    postedby: "Lochie Axon",
                    posteddate: "Sept. 22, 2020",
                    source: "bridportproperty.com",
                    sourceurl: "https://bridportproperty.com/",
                    color1: "#ece8e5",
                    color2: "#221f20",
                    colormatcha1: "#221f20",
                    colormatcha2: "#ece8e5",
                    colorrating1: "13.41:1"
                    },
                    {
                    id: 9999,
                    imgsrc: "https://i.ibb.co/MBv5xTb/fpf-asset-0002-liquifylochie.jpg",
                    imgalt: "Screenshot of liquify.lochieaxon.com",
                    postedby: "Lochie Axon",
                    posteddate: "Sept. 22, 2020",
                    source: "liquify.lochieaxon.com",
                    sourceurl: "https://liquify.lochieaxon.com/",
                    color1: "#19191F",
                    color2: "#7A8299",
                    color3: "#ffffff",
                    colormatcha1: "#19191F",
                    colormatcha2: "#7A8299",
                    colormatchb1: "#19191F  ",
                    colormatchb2: "#ffffff",
                    colorrating1: "4.56:1",
                    colorrating2: "17.49:1"
                    }
                ]
            },
            methods: {
                detailsOpen1: function(){
                    this.detailsActive1 = !this.detailsActive1
                },
                detailsOpen2: function(){
                    this.detailsActive2 = !this.detailsActive2
                }
            }
        
        })