export default [
    {
        name: "一级目录",
        type: "dir",
        size: 1020,
        span: 0,
        childrn: [
            {
                name: "二级目录1xxxxx",
                type: "dir",
                size: 22001,
                span: 1,
                childrn: [
                    {
                        name: "一级目录x",
                        type: "dir",
                        size: 1020,
                        span: 2,
                        childrn: [
                            {
                                name: "一级目录x22",
                                type: "dir",
                                size: 1020,
                                span: 3,
                            },
                        ],
                    },
                ],
            },
            {
                span: 1,
                name: "二级目录2",
                type: "dir",
                size: 22001,
            },
            {
                span: 1,
                name: "二级文件1",
                type: "file",
                size: 22003,
            },
        ],
    },
    {
        name: "一级目录x",
        type: "dir",
        size: 1020,
        childrn: [
            {
                name: "二级目录1",
                type: "dir",
                size: 22001,
            },
            {
                name: "二级目录2",
                type: "dir",
                size: 22001,
            },
            {
                name: "二级文件1",
                type: "file",
                size: 22003,
            },
        ],
    },
];
