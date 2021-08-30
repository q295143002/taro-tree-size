export enum ECompare {
    submit = "submit",
    release = "release",
}

export interface IData {
    [props: string]: IFileGroup;
}
export interface IFileGroup {
    params?: IParams;
    [props: string]: any;
}

export interface IParams {
    fileType: EFileTyps;
    size: number;
    space: number;
    pageName: string;
    filePath: string;
}
export enum EFileTyps {
    dir = "dir",
    file = "file",
}

export const data: IData = {
    //提交组
    submit: {
        pages: {
            params: {
                fileType: "dir",
                size: 0,
                space: 1,
                pageName: "pages",
                filePath: "submit/pages",
            },
            tnt: {
                params: {
                    fileType: "dir",
                    size: 0,
                    space: 2,
                    pageName: "tnt",
                    filePath: "submit/pages/tnt",
                },
                booking: {
                    params: {
                        fileType: "dir",
                        size: 0,
                        space: 3,
                        pageName: "booking",
                        filePath: "submit/pages/tnt/booking",
                    },
                    "index.js": {
                        params: { fileType: "file", size: 30, space: 4, pageName: "index.js" },
                    },
                },
                detail: {
                    params: {
                        fileType: "dir",
                        size: 0,
                        space: 3,
                        pageName: "booking",
                        filePath: "submit/pages/tnt/detail",
                    },
                    "index.js": {
                        params: { fileType: "file", size: 30, space: 4, pageName: "index.js" },
                    },
                },
                detail2: {
                    params: {
                        fileType: "dir",
                        size: 0,
                        space: 3,
                        pageName: "detail2",
                        filePath: "submit/pages/tnt/detail2",
                    },
                    "index2.js": {
                        params: { fileType: "file", size: 30, space: 4, pageName: "index.js" },
                    },
                },
            },
        },
    },
    //对照组
    release: {
        pages: {
            params: {
                fileType: "dir",
                size: 0,
                space: 1,
                pageName: "pages",
                filePath: "release/pages",
            },
            tnt: {
                params: {
                    fileType: "dir",
                    size: 0,
                    space: 2,
                    pageName: "tnt",
                    filePath: "release/pages/tnt",
                },
                booking: {
                    params: {
                        fileType: "dir",
                        size: 0,
                        space: 3,
                        pageName: "booking",
                        filePath: "release/pages/tnt/booking",
                    },
                    "index.js": {
                        params: { fileType: "file", size: 30, space: 4, pageName: "index.js" },
                    },
                },
            },
        },
    },
};
