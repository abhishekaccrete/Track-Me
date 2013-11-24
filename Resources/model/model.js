model = {};

model.createUser = function(config, userInfo)
{
	var user = config.cloud.Users.create(userInfo, function(e)
	{
		if (e.success) 
		{
			var user = e.users[0];
			alert('Success:\n' +'id: ' + user.id + '\n' +'sessionId: ' + config.cloud.sessionId + '\n' +
			'first name: ' + user.first_name + '\n' +'last name: ' + user.last_name);
		} 
		else 
			alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
	});
};


model.showMessage = function(config,user)
{
	
};
