model = {};

model.createUser = function(config, userInfo, callBack)
{
	var user = config.cloud.Users.create(userInfo, function(e)
	{
		callBack(e);
	});
};

model.loginUser = function(config, userInfo, callBack)
{
	var user = config.cloud.Users.login(userInfo, function(e)
	{
		callBack(e);
	});
};