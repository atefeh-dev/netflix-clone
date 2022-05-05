<!-- @format -->

mutation{
reference_list: createTable(
keyspaceName:"netflix"
tableName:"reference_list",
ifNotExists: true,
partitionKeys:[
{name:"lable", type:{basic:TEXT}}
]
clusteringKeys:[
{name:"value", type:{basic:TEXT},order:"ASC"}
]
)
}
