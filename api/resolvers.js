const defaultData = [
    {
    "address": "183nLVZFt3W6G79o5Yx8bTiEBsjER9eMVZ",
    "currency": "BTC",
    "value": 504114,
    "txid": "f6b48e20e78ed5800ca07ea2a782a14227fee043de86f88eaaebcd88d34c9650" 
    },
    {
    "address": "321nLVZFt3W6G74o3Yx8bTiEBsjER9eAIO",
    "currency": "ETH",
    "value": 5041146859,
    "txid": "t9z48e20e78ed5800ca07ea2a782a14227fee043de86f88eaaebcd88d34c9403"
    }
]

const resolvers = {
    Query: {
        allIcos: () => {
            return defaultData
        }
    }
}

export default resolvers



