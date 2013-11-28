dblayer = {};

dblayer.loginUser = function(config, userInfo) 
{
	try
	{
		var sSql = 'Insert into user(FirstName, LastName, UserName, loggedin) values("'+userInfo.first_name
		+'","'+userInfo.last_name+'","'+userInfo.username+'","1")';
		config.db.execute(sSql);
		return true;
	}
	catch(e)
	{
		return false;
	}
};

dblayer.getUser = function(config)
{
	try
	{
		var sSql = 'select * from user where loggedin=1';
		return config.db.execute(sSql);
	}
	catch(e)
	{
		return -1;
	}
};

dblayer.logoutUser = function(config)
{
	var sSql = 'Delete from user';
	config.db.execute(sSql);
};

dblayer.newTrackSession = function(config)
{
	var sSql = 'Insert into track_sessions';
};
