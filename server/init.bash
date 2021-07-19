
sequelize model:generate --name users --attributes fName:string,lName:string,email:string,username:string,password:string,favoritesID:integer
sequelize model:generate --name favorites --attributes categories:string,topic:string

