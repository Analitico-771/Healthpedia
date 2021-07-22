
# sequelize model:generate --name users --attributes fName:string,lName:string,email:string,username:string,password:string,favoritesID:integer
# sequelize model:generate --name favorites --attributes type:string,title:string,apiId:string

# sequelize migration:create --name apiIdToFavorites
# sequelize migration:create --name categoriesToTypes
# sequelize migration:create --name topicsToTitle
