module.exports = {
	"database": "mongodb://localhost/sou_db", //database: the URI with username and password to your MongoDB installation
	"port": process.env.PORT || 3000,
	//"secretKey": "YourSecretKey"   //secret: used when we create and verify JSON Web Tokens
}