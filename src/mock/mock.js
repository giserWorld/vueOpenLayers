const Mock = require('mockjs');

//定义接口数据
module.exports = function() {
    const data = Mock.mock({
        'news|25-30': ['@cword(5, 15)']
    })
    // 累计安全天数
    data.numberBoardData = {
        ljaqts: 2233,
        jrzc: 123,
        jrxc: 987
    }
    // 合作企业
    data.wordCloudData = [
        {
            'name': '利达讯运',
            'weight': 0
        },
        {
            'name': '天洋化工',
            'weight': 7
        },
        {
            'name': '宝金化工',
            'weight': 8
        },
        {
            'name': '雪力化工',
            'weight': 7
        },
        {
            'name': '万利达叉车运输',
            'weight': 6
        },
        {
            'name': '任虹货物运输',
            'weight': 5
        },
        {
            'name': '信禾运输',
            'weight': 4
        },
        {
            'name': '天中塑胶化工',
            'weight': 7
        },
        {
            'name': '石油化工装备',
            'weight': 4
        },
        {
            'name': '成都乐创',
            'weight': 9
        },
        {
            'name': '利达讯运',
            'weight': 10
        },
        {
            'name': '天洋化工',
            'weight': 7
        },
        {
            'name': '宝金化工',
            'weight': 8
        },
        {
            'name': '雪力化工',
            'weight': 7
        },
        {
            'name': '万利达叉车运输',
            'weight': 6
        },
        {
            'name': '任虹货物运输',
            'weight': 5
        },
        {
            'name': '信禾运输',
            'weight': 4
        },
        {
            'name': '天中塑胶化工',
            'weight': 7
        },
        {
            'name': '石油化工装备',
            'weight': 4
        },
        {
            'name': '成都乐创',
            'weight': 9
        },
        {
            'name': '任虹货物运输',
            'weight': 5
        },
        {
            'name': '信禾运输',
            'weight': 4
        },
        {
            'name': '天中塑胶化工',
            'weight': 7
        },
        {
            'name': '石油化工装备',
            'weight': 4
        },
        {
            'name': '成都乐创',
            'weight': 9
        }
    ]
    return data
}