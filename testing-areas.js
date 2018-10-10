const testingAreas = {
    DASH: {
        area: 'Dash',
        points: 2
    },
    LINE: {
        area: 'Line',
        points: 2
    },
    ATLAS: {
        area: 'Atlas',
        points: 2
    },
    TC_EDITOR: {
        area: 'TC Editor',
        points: 2
    },
    TEMI_EDITOR: {
        area: 'Temi Editor',
        points: 2
    },
    CTCE: {
        area: 'CTCE',
        points: 3
    },
    CCPE: {
        area: 'CCPE',
        points: 2
    },
    CCPSUE: {
        area: 'CCPSUE',
        points: 2
    },
    TR_DOWNLOAD: {
        area: 'Customer TR Download',
        points: 0.5
    },
    TEMI_CHECKOUT: {
        area: 'Temi Checkout',
        points: 0.5
    },
    REV_CHECKOUT: {
        area: 'TC, CP, SU, and TR Checkout & Billing',
        points: 2
    },
    SEARCH_FILES: {
        area: 'My Files & Search',
        points: 0.5
    },
    ORDER_HISTORY: {
        area: 'Order History',
        points: 0.5
    },
    TR_APPLICATION: {
        area: 'TR Application',
        points: 0.5
    },
    TC_APPLICATION: {
        area: 'TC Application',
        points: 1
    },
    CP_APPLICATION: {
        area: 'CP Application',
        points: 1
    },
    SU_APPLICATION: {
        area: 'SU Application',
        points: 0.5
    }
}

testingAreas
function getTestingAreas() {
    var areas = new Map([
        [testingAreas.ATLAS.area, testingAreas.ATLAS.points],
        [testingAreas.CCPE.area, testingAreas.CCPE.points],
        [testingAreas.CCPSUE.area, testingAreas.CCPSUE.points],
        [testingAreas.CP_APPLICATION.area, testingAreas.CP_APPLICATION.points],
        [testingAreas.CTCE.area, testingAreas.CTCE.points],
        [testingAreas.DASH.area, testingAreas.DASH.points],
        [testingAreas.LINE.area, testingAreas.LINE.points],
        [testingAreas.ORDER_HISTORY.area, testingAreas.ORDER_HISTORY.points],
        [testingAreas.REV_CHECKOUT.area, testingAreas.REV_CHECKOUT.points],
        [testingAreas.SEARCH_FILES.area, testingAreas.SEARCH_FILES.points],
        [testingAreas.SU_APPLICATION.area, testingAreas.SU_APPLICATION.points],
        [testingAreas.TC_APPLICATION.area, testingAreas.TC_APPLICATION.points],
        [testingAreas.TC_EDITOR.area, testingAreas.TC_EDITOR.points],
        [testingAreas.TEMI_CHECKOUT.area, testingAreas.TEMI_CHECKOUT.points],
        [testingAreas.TEMI_EDITOR.area, testingAreas.TEMI_EDITOR.points],
        [testingAreas.TR_APPLICATION.area, testingAreas.TR_APPLICATION.points],
        [testingAreas.TR_DOWNLOAD.area, testingAreas.TR_DOWNLOAD.points]
    ]);
    areas.forEach( (k,v) => {console.log(v,k);} );
    console.log();
}

getTestingAreas();
