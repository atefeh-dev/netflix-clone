<!-- @format -->

mutation {
movie_by_genre:createTable(
keyspaceName:"netflix"
tableName:"movie_by_genre"
ifNotExists: true
partitionKeys:[
{name:"genre", type:{basic:TEXT}}
]
clusteringKeys:[
{name:"year", type:{basic:INT}},
{name:"title", type:{basic:TEXT}}
]
values:[
{name:"synopsis", type:{basic:TEXT}},
{name:"duration", type:{basic:INT}},
{name:"thumbnail", type:{basic:TEXT}}

    ]

)
}
